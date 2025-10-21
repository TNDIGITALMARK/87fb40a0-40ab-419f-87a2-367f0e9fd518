'use client';

import Image from 'next/image';
import { newsSources } from '@/lib/mock-data';

export function NewsSourcesBar() {
  return (
    <div className="border-b border-border bg-background">
      <div className="container-newsroom py-4">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {newsSources.map((source) => (
            <div key={source.name} className="relative flex flex-col items-center">
              {/* Source Logo */}
              <div className="relative w-20 h-12 grayscale hover:grayscale-0 transition-all duration-200 opacity-70 hover:opacity-100">
                <Image
                  src={source.logo}
                  alt={source.name}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Live Indicator */}
              {source.isLive && (
                <div className="live-indicator mt-1"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
