'use client';

import { Header } from '@/components/newsroom/Header';
import { NewsSourcesBar } from '@/components/newsroom/NewsSourcesBar';
import { SearchBar } from '@/components/newsroom/SearchBar';
import { CategoryFilter } from '@/components/newsroom/CategoryFilter';
import { ArticleCard } from '@/components/newsroom/ArticleCard';
import { TrendingTopics } from '@/components/newsroom/TrendingTopics';
import { mockArticles, NewsCategory } from '@/lib/mock-data';
import { useState } from 'react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'All'>('Politics');

  const filteredArticles = selectedCategory === 'All'
    ? mockArticles
    : mockArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <NewsSourcesBar />
      <SearchBar />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Main Content */}
      <main className="container-newsroom py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TrendingTopics />
          </div>
        </div>
      </main>
    </div>
  );
}