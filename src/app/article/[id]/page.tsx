'use client';

import { Header } from '@/components/newsroom/Header';
import { mockArticles } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { use } from 'react';

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = use(params);
  const article = mockArticles.find((a) => a.id === resolvedParams.id);

  if (!article) {
    notFound();
  }

  const relatedArticles = mockArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-secondary">
      <Header />

      <main className="container-newsroom py-6">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <article className="card-newsroom p-6 md:p-8">
              {/* Category Badge */}
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4">
                {article.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {article.title}
              </h1>

              {/* Meta Information */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                <span className="text-primary font-semibold">{article.source}</span>
                <span>•</span>
                {article.author && (
                  <>
                    <span>By {article.author}</span>
                    <span>•</span>
                  </>
                )}
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.timestamp}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mb-6">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Bookmark className="w-4 h-4" />
                  Save
                </Button>
              </div>

              {/* Article Image */}
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {article.fullContent ? (
                  article.fullContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-foreground leading-relaxed">{article.excerpt}</p>
                )}
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <a
                        key={tag}
                        href="#"
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>

          {/* Sidebar - Related Articles */}
          <div className="lg:col-span-1">
            <div className="card-newsroom p-6">
              <h3 className="font-bold text-foreground mb-4">Related Stories</h3>
              <div className="space-y-4">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/article/${relatedArticle.id}`}
                    className="block group"
                  >
                    <div className="flex gap-3">
                      <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedArticle.imageUrl}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{relatedArticle.timestamp}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
