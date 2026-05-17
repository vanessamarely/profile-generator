import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface HeaderEditorProps {
  data: {
    name: string;
    tagline: string;
    bannerUrl: string;
    githubUsername: string;
    showGithubProfile: boolean;
  };
  onChange: (data: any) => void;
}

export function HeaderEditor({ data, onChange }: HeaderEditorProps) {
  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor="name" className="text-xs uppercase tracking-wide font-medium">Name</Label>
        <Input
          id="name"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          placeholder="Your name"
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="tagline" className="text-xs uppercase tracking-wide font-medium">Tagline</Label>
        <Input
          id="tagline"
          value={data.tagline}
          onChange={(e) => onChange({ ...data, tagline: e.target.value })}
          placeholder="Your professional tagline"
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="banner" className="text-xs uppercase tracking-wide font-medium">Banner URL (optional)</Label>
        <Input
          id="banner"
          value={data.bannerUrl}
          onChange={(e) => onChange({ ...data, bannerUrl: e.target.value })}
          placeholder="https://example.com/banner.png"
          className="mt-1.5"
        />
      </div>
      <div className="pt-3 border-t border-border">
        <div className="flex items-center justify-between mb-3">
          <Label htmlFor="show-github-profile" className="text-xs uppercase tracking-wide font-medium">
            Show GitHub Profile
          </Label>
          <Switch
            id="show-github-profile"
            checked={data.showGithubProfile}
            onCheckedChange={(checked) => onChange({ ...data, showGithubProfile: checked })}
          />
        </div>
        {data.showGithubProfile && (
          <div>
            <Label htmlFor="github-username" className="text-xs uppercase tracking-wide font-medium">GitHub Username</Label>
            <Input
              id="github-username"
              value={data.githubUsername}
              onChange={(e) => onChange({ ...data, githubUsername: e.target.value })}
              placeholder="octocat"
              className="mt-1.5"
            />
            <p className="text-xs text-muted-foreground mt-1.5">
              Displays your GitHub avatar and profile link next to the header
            </p>
          </div>
        )}
      </div>
    </div>
  );
}