import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

interface AboutEditorProps {
  data: {
    content: string;
    githubUsername: string;
    showGithubProfile: boolean;
  };
  onChange: (data: any) => void;
}

export function AboutEditor({ data, onChange }: AboutEditorProps) {
  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor="about-content" className="text-xs uppercase tracking-wide font-medium">About</Label>
        <Textarea
          id="about-content"
          value={data.content}
          onChange={(e) => onChange({ ...data, content: e.target.value })}
          placeholder="Tell people about yourself..."
          rows={5}
          className="mt-1.5"
        />
      </div>
      <div className="pt-3 border-t border-border">
        <div className="flex items-center justify-between mb-3">
          <Label htmlFor="about-github-profile" className="text-xs uppercase tracking-wide font-medium">
            Show GitHub Profile
          </Label>
          <Switch
            id="about-github-profile"
            checked={data.showGithubProfile}
            onCheckedChange={(checked) => onChange({ ...data, showGithubProfile: checked })}
          />
        </div>
        {data.showGithubProfile && (
          <div>
            <Label htmlFor="about-github-username" className="text-xs uppercase tracking-wide font-medium">GitHub Username</Label>
            <Input
              id="about-github-username"
              value={data.githubUsername}
              onChange={(e) => onChange({ ...data, githubUsername: e.target.value })}
              placeholder="octocat"
              className="mt-1.5"
            />
            <p className="text-xs text-muted-foreground mt-1.5">
              Displays your GitHub avatar and profile link in the About section
            </p>
          </div>
        )}
      </div>
    </div>
  );
}