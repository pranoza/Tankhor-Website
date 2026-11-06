'use client';

// Re-export from context/DownloadLinksContext for full backward compatibility
// This ensures that any component calling useDownloadLinks gets the shared singleton value
// without initiating any additional HTTP fetch requests.
export { useDownloadLinks, DEFAULT_DOWNLOAD_LINKS } from '@/context/DownloadLinksContext';
export type { DownloadLinks } from '@/context/DownloadLinksContext';
