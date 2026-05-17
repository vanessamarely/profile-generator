import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { User } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

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
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  useEffect(() => {
    if (!data.username) {
      loadCurrentUser();
    }
  }, []);

  const loadCurrentUser = async () => {
    setIsLoadingUser(true);
    try {
      const user = await window.spark.user();
      if (user && user.login) {
        onChange({ ...data, username: user.login });
      }
    } catch (error) {
      console.error('Failed to load user:', error);
    } finally {
      setIsLoadingUser(false);
    }
  };

  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor="github-username" className="text-xs uppercase tracking-wide font-medium">GitHub Username</Label>
        <div className="flex gap-2 mt-1.5">
          <Input
            id="github-username"
            value={data.username}
            onChange={(e) => onChange({ ...data, username: e.target.value })}
            placeholder="octocat"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={loadCurrentUser}
            disabled={isLoadingUser}
            title="Use my username"
          >
            <User weight="bold" />
          </Button>
        </div>
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