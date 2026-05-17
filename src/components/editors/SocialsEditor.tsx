import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, Trash } from '@phosphor-icons/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SOCIAL_PLATFORMS = [
  { value: 'Twitter', label: 'Twitter / X', requiresUsername: true },
  { value: 'LinkedIn', label: 'LinkedIn', requiresUsername: false },
  { value: 'GitHub', label: 'GitHub', requiresUsername: true },
  { value: 'Medium', label: 'Medium', requiresUsername: true },
  { value: 'Dev.to', label: 'Dev.to', requiresUsername: true },
  { value: 'YouTube', label: 'YouTube', requiresUsername: false },
  { value: 'Twitch', label: 'Twitch', requiresUsername: true },
  { value: 'Instagram', label: 'Instagram', requiresUsername: true },
  { value: 'Facebook', label: 'Facebook', requiresUsername: false },
  { value: 'Discord', label: 'Discord', requiresUsername: false },
  { value: 'Website', label: 'Personal Website', requiresUsername: false },
  { value: 'Blog', label: 'Blog', requiresUsername: false },
  { value: 'Portfolio', label: 'Portfolio', requiresUsername: false },
  { value: 'Email', label: 'Email', requiresUsername: false },
] as const;

interface SocialsEditorProps {
  data: {
    links: { platform: string; url: string; username?: string }[];
  };
  onChange: (data: any) => void;
}

export function SocialsEditor({ data, onChange }: SocialsEditorProps) {
  const [newLink, setNewLink] = useState({ platform: '', url: '', username: '' });

  const selectedPlatform = SOCIAL_PLATFORMS.find(p => p.value === newLink.platform);

  const addLink = () => {
    if (newLink.platform.trim() && newLink.url.trim()) {
      const linkToAdd = {
        platform: newLink.platform,
        url: newLink.url,
        ...(newLink.username ? { username: newLink.username } : {})
      };
      onChange({ ...data, links: [...data.links, linkToAdd] });
      setNewLink({ platform: '', url: '', username: '' });
    }
  };

  const removeLink = (index: number) => {
    onChange({ ...data, links: data.links.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs uppercase tracking-wide font-medium">Add Social Link</Label>
        <div className="space-y-2 mt-1.5">
          <Select value={newLink.platform} onValueChange={(value) => setNewLink({ ...newLink, platform: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select platform..." />
            </SelectTrigger>
            <SelectContent>
              {SOCIAL_PLATFORMS.map((platform) => (
                <SelectItem key={platform.value} value={platform.value}>
                  {platform.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {selectedPlatform?.requiresUsername && (
            <Input
              value={newLink.username}
              onChange={(e) => setNewLink({ ...newLink, username: e.target.value })}
              placeholder="Username (e.g., johndoe)"
            />
          )}
          
          <div className="flex gap-2">
            <Input
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              placeholder="https://..."
            />
            <Button onClick={addLink} size="icon" className="shrink-0" disabled={!newLink.platform || !newLink.url}>
              <Plus weight="bold" />
            </Button>
          </div>
        </div>
      </div>
      {data.links.length > 0 && (
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-wide font-medium">Links</Label>
          {data.links.map((link, index) => (
            <div key={index} className="flex items-center gap-2 p-2 rounded-md bg-secondary/50">
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{link.platform}</div>
                {link.username && (
                  <div className="text-xs text-accent">@{link.username}</div>
                )}
                <div className="text-xs text-muted-foreground truncate">{link.url}</div>
              </div>
              <Button
                onClick={() => removeLink(index)}
                variant="ghost"
                size="icon"
                className="shrink-0 hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash weight="bold" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}