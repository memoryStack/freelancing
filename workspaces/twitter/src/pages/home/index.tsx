import { Button, Divider, Text, TextArea } from '@freelancing/ui';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';

const SAMPLE_TWEETS = [
  {
    id: '1',
    name: 'Jane Doe',
    handle: '@janedoe',
    time: '2h',
    content: 'Just shipped a new feature! Excited to hear what everyone thinks. 🚀',
    likes: 42,
    retweets: 12,
    replies: 8,
  },
  {
    id: '2',
    name: 'Dev Community',
    handle: '@devcommunity',
    time: '4h',
    content: 'What\'s your favorite React pattern in 2026? Drop your thoughts below.',
    likes: 128,
    retweets: 34,
    replies: 56,
  },
  {
    id: '3',
    name: 'Design Tips',
    handle: '@designtips',
    time: '6h',
    content: 'Consistency in spacing and typography is the secret to polished UIs. Start with a token system.',
    likes: 89,
    retweets: 21,
    replies: 15,
  },
];

function TweetCard({ tweet }: { tweet: (typeof SAMPLE_TWEETS)[number] }) {
  return (
    <article className="px-4 py-3 hover:bg-[var(--md-sys-color-surface-container-low)] transition-colors">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-[var(--md-sys-color-primary-container)] flex-shrink-0 flex items-center justify-center">
          <Text variant="label-large" className="text-[var(--md-sys-color-primary)]">
            {tweet.name[0]}
          </Text>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <Text variant="title-small" className="font-bold">
              {tweet.name}
            </Text>
            <Text variant="body-small" className="text-[var(--md-sys-color-on-surface-variant)]">
              {tweet.handle} · {tweet.time}
            </Text>
          </div>

          <Text variant="body-large" className="mt-1 whitespace-pre-wrap">
            {tweet.content}
          </Text>

          <div className="flex items-center justify-between mt-3 max-w-xs">
            <button className="flex items-center gap-1 text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">
              <MessageCircle size={18} />
              <Text variant="label-small">{tweet.replies}</Text>
            </button>
            <button className="flex items-center gap-1 text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-success)] transition-colors">
              <Repeat2 size={18} />
              <Text variant="label-small">{tweet.retweets}</Text>
            </button>
            <button className="flex items-center gap-1 text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-error)] transition-colors">
              <Heart size={18} />
              <Text variant="label-small">{tweet.likes}</Text>
            </button>
            <button className="text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">
              <Share size={18} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto border-x border-[var(--md-sys-color-outline-variant)] min-h-full">
      <div className="sticky top-[57px] z-[9] bg-white/80 backdrop-blur-md border-b border-[var(--md-sys-color-outline-variant)] px-4 py-3">
        <Text variant="title-large">Home</Text>
      </div>

      <div className="px-4 py-3 border-b border-[var(--md-sys-color-outline-variant)]">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--md-sys-color-primary-container)] flex-shrink-0 flex items-center justify-center">
            <Text variant="label-large" className="text-[var(--md-sys-color-primary)]">Y</Text>
          </div>
          <div className="flex-1">
            <TextArea placeholder="What is happening?!" rows={3} />
            <div className="flex justify-end mt-2">
              <Button variant="filled" size="small" className="rounded-full">
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {SAMPLE_TWEETS.map((tweet, index) => (
          <div key={tweet.id}>
            <TweetCard tweet={tweet} />
            {index < SAMPLE_TWEETS.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </div>
  );
}
