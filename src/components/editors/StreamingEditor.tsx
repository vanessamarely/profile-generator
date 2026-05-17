import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash } from '@phosphor-icons/react';

interface StreamingEditorProps {
  data: {
    channels: { platform: string; url: string; username: string }[];
  };
  onChange: (data: any) => void;
}

export function StreamingEditor({ data, onChange }: StreamingEditorProps) {
  const [newChannel, setNewChannel] = useState({ platform: 'YouTube', url: '', username: '' });

  const platforms = ['YouTube', 'Twitch', 'Vimeo'];

  const addChannel = () => {
    if (newChannel.url.trim() && newChannel.username.trim()) {
      onChange({ ...data, channels: [...data.channels, newChannel] });
      setNewChannel({ platform: 'YouTube', url: '', username: '' });
    }
  };

  const removeChannel = (index: number) => {
    onChange({ ...data, channels: data.channels.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs uppercase tracking-wide font-medium">Add Channel</Label>
        <div className="space-y-2 mt-1.5">
          <Select
            value={newChannel.platform}
            onValueChange={(value) => setNewChannel({ ...newChannel, platform: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              {platforms.map((platform) => (
                <SelectItem key={platform} value={platform}>
                  {platform}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            value={newChannel.username}
            onChange={(e) => setNewChannel({ ...newChannel, username: e.target.value })}
            placeholder="Username/Channel ID"
          />
          <div className="flex gap-2">
            <Input
              value={newChannel.url}
              onChange={(e) => setNewChannel({ ...newChannel, url: e.target.value })}
              placeholder="https://youtube.com/..."
            />
            <Button onClick={addChannel} size="icon" className="shrink-0">
              <Plus weight="bold" />
            </Button>
          </div>
        </div>
      </div>
      {data.channels.length > 0 && (
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-wide font-medium">Channels</Label>
          {data.channels.map((channel, index) => (
            <div key={index} className="flex items-center gap-2 p-3 rounded-md bg-secondary/50">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{channel.platform}</span>
                  <span className="text-xs text-muted-foreground">@{channel.username}</span>
                </div>
                <div className="text-xs text-muted-foreground truncate">{channel.url}</div>
              </div>
              <Button
                onClick={() => removeChannel(index)}
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
