'use client';

import { Header } from '@/components/newsroom/Header';
import { categories, newsSources } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Bell, Eye, Filter } from 'lucide-react';

export default function SettingsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Technology',
    'Business',
    'Health',
  ]);
  const [blockedSources, setBlockedSources] = useState<string[]>([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [breakingNewsAlerts, setBreakingNewsAlerts] = useState(true);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleSource = (source: string) => {
    setBlockedSources((prev) =>
      prev.includes(source)
        ? prev.filter((s) => s !== source)
        : [...prev, source]
    );
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />

      <main className="container-newsroom py-6">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">Personalization Settings</h1>
          <p className="text-muted-foreground mb-8">
            Customize your news feed to see the stories that matter most to you.
          </p>

          <div className="space-y-6">
            {/* Category Preferences */}
            <div className="card-newsroom p-6">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Category Preferences</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Select the news categories you want to see in your feed.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedCategories.includes(category)
                        ? 'border-primary bg-primary/10 text-primary font-semibold'
                        : 'border-border bg-background text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Source Management */}
            <div className="card-newsroom p-6">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Source Management</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Choose which news sources you want to include or exclude from your feed.
              </p>

              <div className="space-y-3">
                {newsSources.map((source) => (
                  <div
                    key={source.name}
                    className="flex items-center justify-between p-3 rounded-lg border border-border bg-background"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          blockedSources.includes(source.name) ? 'bg-muted-foreground' : 'bg-primary'
                        }`}
                      />
                      <span className="font-medium text-foreground">{source.name}</span>
                    </div>
                    <button
                      onClick={() => toggleSource(source.name)}
                      className={`text-sm font-medium ${
                        blockedSources.includes(source.name)
                          ? 'text-primary hover:underline'
                          : 'text-muted-foreground hover:text-destructive'
                      }`}
                    >
                      {blockedSources.includes(source.name) ? 'Unblock' : 'Block'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Settings */}
            <div className="card-newsroom p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Notification Settings</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Control when and how you receive news notifications.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background">
                  <div>
                    <Label htmlFor="notifications" className="font-medium text-foreground">
                      Enable Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about new articles
                    </p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={notificationsEnabled}
                    onCheckedChange={setNotificationsEnabled}
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background">
                  <div>
                    <Label htmlFor="breaking-news" className="font-medium text-foreground">
                      Breaking News Alerts
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get immediate alerts for breaking stories
                    </p>
                  </div>
                  <Switch
                    id="breaking-news"
                    checked={breakingNewsAlerts}
                    onCheckedChange={setBreakingNewsAlerts}
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end gap-3">
              <Button variant="outline">Reset to Defaults</Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
