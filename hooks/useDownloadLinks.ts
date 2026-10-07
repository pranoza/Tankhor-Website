'use client';

import { useState, useEffect } from 'react';

export interface DownloadLinks {
  windows_setup: string;
  macos_setup: string;
  android_setup: string;
  enamad: string;
  isLoading: boolean;
  error: string | null;
}

const DEFAULT_FALLBACK_URL = 'https://github.com/brandyar/Tankhor/releases/latest';
const DEFAULT_FALLBACK_ENAMAD = `<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=7618361&Code=Du0u9t2RRgPhMlNlfwwq6iAyMre0NRpU'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=7618361&Code=Du0u9t2RRgPhMlNlfwwq6iAyMre0NRpU' alt='نماد اعتماد الکترونیکی تنخور' style='cursor:pointer' code='Du0u9t2RRgPhMlNlfwwq6iAyMre0NRpU'></a>`;

function formatDirectusUrl(value: any): string {
  if (!value) return DEFAULT_FALLBACK_URL;
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
  return DEFAULT_FALLBACK_URL;
}

export function useDownloadLinks(): DownloadLinks {
  const [links, setLinks] = useState<DownloadLinks>({
    windows_setup: DEFAULT_FALLBACK_URL,
    macos_setup: DEFAULT_FALLBACK_URL,
    android_setup: DEFAULT_FALLBACK_URL,
    enamad: DEFAULT_FALLBACK_ENAMAD,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchSettings() {
      try {
        const res = await fetch('https://api.tankhor.com/items/project_settings', {
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`Directus API HTTP error: ${res.status}`);
        }

        const json = await res.json();
        const data = json.data;

        // Support both single object and array responses from Directus
        const settings = Array.isArray(data) ? data[0] : data;

        if (settings && isMounted) {
          setLinks({
            windows_setup: formatDirectusUrl(settings.windows_setup),
            macos_setup: formatDirectusUrl(settings.macos_setup),
            android_setup: formatDirectusUrl(settings.android_setup),
            enamad: settings.enamad || DEFAULT_FALLBACK_ENAMAD,
            isLoading: false,
            error: null,
          });
        }
      } catch (err: any) {
        if (isMounted) {
          setLinks((prev) => ({
            ...prev,
            isLoading: false,
            error: err?.message || 'Failed to load download links',
          }));
        }
      }
    }

    fetchSettings();

    return () => {
      isMounted = false;
    };
  }, []);

  return links;
}
