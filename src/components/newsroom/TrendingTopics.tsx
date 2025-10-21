'use client';

import { trendingTopics } from '@/lib/mock-data';
import { TrendingUp } from 'lucide-react';

export function TrendingTopics() {
  return (
    <div className="card-newsroom p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-foreground">TRENDING TOPICS</h3>
      </div>

      <div className="space-y-3">
        {trendingTopics.map((topic) => (
          <div key={topic.hashtag} className="flex items-center justify-between">
            <a
              href="#"
              className="text-primary hover:underline font-medium text-sm flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {topic.hashtag}
            </a>
            <span className="text-small text-muted-foreground">{topic.count}</span>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-3 gap-6 text-xs">
          <div>
            <h6 className="font-semibold text-foreground mb-2">About Us</h6>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Our Mission</a></li>
              <li><a href="#" className="hover:text-primary">Team</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-foreground mb-2">Legal</h6>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-foreground mb-2">Connect</h6>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Email Subscription</a></li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          © 2024 NEWSROOM. All rights reserved.
        </p>
      </div>
    </div>
  );
}
