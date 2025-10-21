'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/mock-data';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.id}`} className="block group">
      <div className="card-newsroom p-0 overflow-hidden">
        {/* Article Image */}
        <div className="relative w-full h-32 bg-muted overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Article Content */}
        <div className="p-4">
          {/* Title */}
          <h4 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h4>

          {/* Source and Timestamp */}
          <div className="flex items-center gap-3 text-small text-muted-foreground">
            <span className="text-primary font-medium">{article.source}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{article.timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
