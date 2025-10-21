'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="border-b border-border bg-background">
      <div className="container-newsroom py-4">
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Search for news and topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-6 rounded-full border-2 border-primary/30 focus:border-primary transition-colors text-sm"
          />
        </div>
      </div>
    </div>
  );
}
