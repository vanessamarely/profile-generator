import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash, VideoCamera } from '@phosphor-icons/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { extractYouTubeVideoId } from '@/lib/utils';

interface StreamingEditorProps {
  data: {
    channels: { platform: string; url: string; username: string }[];
    videos: { title: string; url: string; videoId: string }[];
  };
  onChange: (data: any) => void;
}

export function StreamingEditor({ data, onChange }: StreamingEditorProps) {
  const [newChannel, setNewChannel] = useState({ platform: 'YouTube', url: '', username: '' });
  const [newVideo, setNewVideo] = useState({ title: '', url: '' });

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

  const addVideo = () => {
    if (newVideo.url.trim() && newVideo.title.trim()) {
      const videoId = extractYouTubeVideoId(newVideo.url);
      if (videoId) {
        onChange({ 
          ...data, 
          videos: [...(data.videos || []), { ...newVideo, videoId }] 
        });
        setNewVideo({ title: '', url: '' });
      }
    }
  };

  const removeVideo = (index: number) => {
    onChange({ ...data, videos: (data.videos || []).filter((_, i) => i !== index) });
  };

  return (
    <Tabs defaultValue="channels" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="channels">Channels</TabsTrigger>
        <TabsTrigger value="videos">Videos</TabsTrigger>
      </TabsList>

      <TabsContent value="channels" className="space-y-3 mt-3">
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
      </TabsContent>

      <TabsContent value="videos" className="space-y-3 mt-3">
        <div>
          <Label className="text-xs uppercase tracking-wide font-medium">Add YouTube Video</Label>
          <div className="space-y-2 mt-1.5">
            <Input
              value={newVideo.title}
              onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
              placeholder="Video title"
            />
            <div className="flex gap-2">
              <Input
                value={newVideo.url}
                onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
                placeholder="https://youtube.com/watch?v=..."
              />
              <Button onClick={addVideo} size="icon" className="shrink-0">
                <Plus weight="bold" />
              </Button>
            </div>
          </div>
        </div>
        {(data.videos || []).length > 0 && (
          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-wide font-medium">Videos</Label>
            {(data.videos || []).map((video, index) => (
              <div key={index} className="flex items-center gap-2 p-3 rounded-md bg-secondary/50">
                <VideoCamera className="text-accent shrink-0" weight="duotone" size={24} />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm mb-0.5">{video.title}</div>
                  <div className="text-xs text-muted-foreground truncate">{video.url}</div>
                </div>
                <Button
                  onClick={() => removeVideo(index)}
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
      </TabsContent>
    </Tabs>
  );
}
