# Ultra-fast production Dockerfile for Next.js App Router on Coolify / Docker
FROM node:20-alpine AS base

# Install libc6-compat for native alpine compatibility
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package manifests
COPY package.json package-lock.json* ./

# Use Docker BuildKit cache mount for npm downloads
RUN --mount=type=cache,id=npm,target=/root/.npm \
    if [ -f package-lock.json ]; then \
      npm ci --prefer-offline --no-audit --no-fund; \
    else \
      npm install --prefer-offline --no-audit --no-fund; \
    fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Environment variables for build speed and optimization
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Use Docker BuildKit cache mount for Next.js build cache (.next/cache)
RUN --mount=type=cache,id=nextcache,target=/app/.next/cache \
    npm run build

# Production runner image - minimalist footprint
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set permissions for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Leverage Next.js standalone output tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
