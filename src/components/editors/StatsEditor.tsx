import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface StatsEditorProps {
  data: {
    username: string;
    showStats: boolean;
    showStreak: boolean;
    showLanguages: boolean;
  };
  onChange: (data: any) => void;
}

export function StatsEditor({ data, onChange }: StatsEditorProps) {
  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor="github-username" className="text-xs uppercase tracking-wide font-medium">GitHub Username</Label>
        <Input
          id="github-username"
          value={data.username}
          onChange={(e) => onChange({ ...data, username: e.target.value })}
          placeholder="octocat"
          className="mt-1.5"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-wide font-medium">Display Options</Label>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="show-stats"
            checked={data.showStats}
            onCheckedChange={(checked) => onChange({ ...data, showStats: checked })}
          />
          <label htmlFor="show-stats" className="text-sm cursor-pointer">
            Show Stats Card
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="show-streak"
            checked={data.showStreak}
            onCheckedChange={(checked) => onChange({ ...data, showStreak: checked })}
          />
          <label htmlFor="show-streak" className="text-sm cursor-pointer">
            Show Streak Stats
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="show-languages"
            checked={data.showLanguages}
            onCheckedChange={(checked) => onChange({ ...data, showLanguages: checked })}
          />
          <label htmlFor="show-languages" className="text-sm cursor-pointer">
            Show Top Languages
          </label>
        </div>
      </div>
    </div>
  );
}