import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, Trash } from '@phosphor-icons/react';

interface SocialsEditorProps {
  data: {
    links: { platform: string; url: string }[];
  };
  onChange: (data: any) => void;
}

export function SocialsEditor({ data, onChange }: SocialsEditorProps) {
  const [newLink, setNewLink] = useState({ platform: '', url: '' });

  const addLink = () => {
    if (newLink.platform.trim() && newLink.url.trim()) {
      onChange({ ...data, links: [...data.links, newLink] });
      setNewLink({ platform: '', url: '' });
    }
  };

  const removeLink = (index: number) => {
    onChange({ ...data, links: data.links.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs uppercase tracking-wide font-medium">Add Link</Label>
        <div className="space-y-2 mt-1.5">
          <Input
            value={newLink.platform}
            onChange={(e) => setNewLink({ ...newLink, platform: e.target.value })}
            placeholder="Platform (e.g., LinkedIn)"
          />
          <div className="flex gap-2">
            <Input
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              placeholder="https://..."
            />
            <Button onClick={addLink} size="icon" className="shrink-0">
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