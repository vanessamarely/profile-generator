import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Plus, X } from '@phosphor-icons/react';

interface BadgesEditorProps {
  data: {
    badges: string[];
  };
  onChange: (data: any) => void;
}

const popularBadges = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 
  'Docker', 'Kubernetes', 'AWS', 'Git', 'PostgreSQL'
];

export function BadgesEditor({ data, onChange }: BadgesEditorProps) {
  const [newBadge, setNewBadge] = useState('');

  const addBadge = (badge: string) => {
    if (badge.trim() && !data.badges.includes(badge.trim())) {
      onChange({ ...data, badges: [...data.badges, badge.trim()] });
      setNewBadge('');
    }
  };

  const removeBadge = (badge: string) => {
    onChange({ ...data, badges: data.badges.filter(b => b !== badge) });
  };

  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor="badge-input" className="text-xs uppercase tracking-wide font-medium">Add Badge</Label>
        <div className="flex gap-2 mt-1.5">
          <Input
            id="badge-input"
            value={newBadge}
            onChange={(e) => setNewBadge(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addBadge(newBadge))}
            placeholder="Technology name"
          />
          <Button onClick={() => addBadge(newBadge)} size="icon" className="shrink-0">
            <Plus weight="bold" />
          </Button>
        </div>
      </div>
      <div>
        <Label className="text-xs uppercase tracking-wide font-medium">Popular</Label>
        <div className="flex flex-wrap gap-2 mt-1.5">
          {popularBadges.map((badge) => (
            <Button
              key={badge}
              onClick={() => addBadge(badge)}
              variant="outline"
              size="sm"
              disabled={data.badges.includes(badge)}
            >
              {badge}
            </Button>
          ))}
        </div>
      </div>
      {data.badges.length > 0 && (
        <div>
          <Label className="text-xs uppercase tracking-wide font-medium">Selected</Label>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {data.badges.map((badge) => (
              <Badge key={badge} className="gap-1 pr-1.5">
                {badge}
                <button
                  onClick={() => removeBadge(badge)}
                  className="hover:text-destructive transition-colors"
                >
                  <X size={14} weight="bold" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}