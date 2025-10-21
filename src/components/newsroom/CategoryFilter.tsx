'use client';

import { categories, NewsCategory } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory: NewsCategory | 'All';
  onCategoryChange: (category: NewsCategory | 'All') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const allCategories: (NewsCategory | 'All')[] = ['Politics', 'Technology', 'Sports', 'World'];

  return (
    <div className="border-b border-border bg-background">
      <div className="container-newsroom">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide py-3">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                'text-sm font-medium whitespace-nowrap pb-2 border-b-2 transition-all duration-200',
                selectedCategory === category
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
