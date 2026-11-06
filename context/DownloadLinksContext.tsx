'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

export interface DownloadLinks {
  windows_setup: string;
  macos_setup: string;
  android_setup: string;
  enamad: string;
  isLoading: boolean;
  error: string | null;
}

export const DEFAULT_DOWNLOAD_LINKS: DownloadLinks = {
  windows_setup: 'https://dl.tankhor.com/v1.1.10/Tankhor_1.1.10_x64-setup.exe',
  macos_setup: 'https://dl.tankhor.com/v1.1.10/Tankhor_1.1.10_universal.dmg',
  android_setup: 'https://dl.tankhor.com/v1.1.10/TANKHOR-universal.apk',
  enamad: `<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=7618361&Code=Du0u9t2RRgPhMlNlfwwq6iAyMre0NRpU'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=7618361&Code=Du0u9t2RRgPhMlNlfwwq6iAyMre0NRpU' alt='نماد اعتماد الکترونیکی تنخور' style='cursor:pointer' code='Du0u9t2RRgPhMlNlfwwq6iAyMre0NRpU'></a>`,
  isLoading: false,
  error: null,
};

// Module-level singleton cache so even if pages re-mount, we never re-request
let cachedLinks: DownloadLinks | null = null;
let activeFetchPromise: Promise<DownloadLinks> | null = null;

async function fetchLinksSingleton(): Promise<DownloadLinks> {
  if (cachedLinks) {
    return cachedLinks;
  }
  if (activeFetchPromise) {
    return activeFetchPromise;
  }

  activeFetchPromise = (async () => {
    try {
      // First attempt internal cached Next.js route, fallback to Directus directly
      let res = await fetch('/api/settings', { cache: 'default' }).catch(() => null);
      if (!res || !res.ok) {
        res = await fetch('https://api.tankhor.com/items/project_settings', {
          headers: { Accept: 'application/json' },
        }).catch(() => null);
      }

      if (res && res.ok) {
        const json = await res.json();
        const data = json.data || json;
        const settings = Array.isArray(data) ? data[0] : data;

        if (settings) {
          const links: DownloadLinks = {
            windows_setup: settings.windows_setup || DEFAULT_DOWNLOAD_LINKS.windows_setup,
            macos_setup: settings.macos_setup || DEFAULT_DOWNLOAD_LINKS.macos_setup,
            android_setup: settings.android_setup || DEFAULT_DOWNLOAD_LINKS.android_setup,
            enamad: settings.enamad || DEFAULT_DOWNLOAD_LINKS.enamad,
            isLoading: false,
            error: null,
          };
          cachedLinks = links;
          return links;
        }
      }
    } catch (e: any) {
      console.warn('Could not fetch project settings, using default URLs', e);
    }

    cachedLinks = DEFAULT_DOWNLOAD_LINKS;
    return DEFAULT_DOWNLOAD_LINKS;
  })();

  return activeFetchPromise;
}

const DownloadLinksContext = createContext<DownloadLinks>(DEFAULT_DOWNLOAD_LINKS);

export function DownloadLinksProvider({ children }: { children: React.ReactNode }) {
  const [links, setLinks] = useState<DownloadLinks>(cachedLinks || DEFAULT_DOWNLOAD_LINKS);

  useEffect(() => {
    let isMounted = true;
    fetchLinksSingleton().then((loadedLinks) => {
      if (isMounted) {
        setLinks(loadedLinks);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const memoizedValue = useMemo(() => links, [links]);

  return (
    <DownloadLinksContext.Provider value={memoizedValue}>
      {children}
    </DownloadLinksContext.Provider>
  );
}

export function useDownloadLinks(): DownloadLinks {
  const context = useContext(DownloadLinksContext);
  return context || DEFAULT_DOWNLOAD_LINKS;
}
