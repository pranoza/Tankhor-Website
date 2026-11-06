import { NextResponse } from 'next/server';

export const revalidate = 300; // Cache on server/CDN for 5 minutes (300 seconds)

const DEFAULT_SETTINGS = {
  windows_setup: 'https://dl.tankhor.com/v1.1.10/Tankhor_1.1.10_x64-setup.exe',
  macos_setup: 'https://dl.tankhor.com/v1.1.10/Tankhor_1.1.10_universal.dmg',
  android_setup: 'https://dl.tankhor.com/v1.1.10/TANKHOR-universal.apk',
  enamad: `<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=7618361&Code=Du0u9t2RRgPhMlNlfwwq6iAyMre0NRpU'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=7618361&Code=Du0u9t2RRgPhMlNlfwwq6iAyMre0NRpU' alt='نماد اعتماد الکترونیکی تنخور' style='cursor:pointer' code='Du0u9t2RRgPhMlNlfwwq6iAyMre0NRpU'></a>`,
};

function formatDirectusUrl(value: any, fallback: string): string {
  if (!value) return fallback;
  if (typeof value === 'string') {
    if (value.startsWith('http://') || value.startsWith('https://')) {
      return value;
    }
    if (value.startsWith('/')) {
      return `https://api.tankhor.com${value}`;
    }
    return `https://api.tankhor.com/assets/${value}?download=true`;
  }
  if (typeof value === 'object' && value?.id) {
    return `https://api.tankhor.com/assets/${value.id}?download=true`;
  }
  return fallback;
}

export async function GET() {
  try {
    const res = await fetch('https://api.tankhor.com/items/project_settings', {
      headers: {
        Accept: 'application/json',
      },
      next: {
        revalidate: 300, // Next.js Data Cache for 5 minutes
      },
    });

    if (!res.ok) {
      throw new Error(`Directus returned status ${res.status}`);
    }

    const json = await res.json();
    const data = json.data;
    const settings = Array.isArray(data) ? data[0] : data;

    if (settings) {
      return NextResponse.json(
        {
          windows_setup: formatDirectusUrl(settings.windows_setup, DEFAULT_SETTINGS.windows_setup),
          macos_setup: formatDirectusUrl(settings.macos_setup, DEFAULT_SETTINGS.macos_setup),
          android_setup: formatDirectusUrl(settings.android_setup, DEFAULT_SETTINGS.android_setup),
          enamad: settings.enamad || DEFAULT_SETTINGS.enamad,
          source: 'upstream',
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=86400',
          },
        }
      );
    }
  } catch (error) {
    console.warn('Failed to fetch from upstream Directus, using fallback:', error);
  }

  return NextResponse.json(
    {
      ...DEFAULT_SETTINGS,
      source: 'fallback',
    },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=86400',
      },
    }
  );
}
