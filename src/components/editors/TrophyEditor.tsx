import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { User, Moon, Gradient, Lightning } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

interface TrophyEditorProps {
  data: {
    username: string;
    theme: string;
    columns: number;
    noFrame: boolean;
    noBackground: boolean;
    marginWidth: number;
    marginHeight: number;
  };
  onChange: (data: any) => void;
}

const themeOptions = [
  { 
    value: 'radical', 
    label: 'Gradient', 
    icon: Gradient,
    preview: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500'
  },
  { 
    value: 'onedark', 
    label: 'Dark Mode', 
    icon: Moon,
    preview: 'bg-gradient-to-br from-gray-900 to-gray-800'
  },
  { 
    value: 'tokyonight', 
    label: 'Neon', 
    icon: Lightning,
    preview: 'bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400'
  },
];

export function TrophyEditor({ data, onChange }: TrophyEditorProps) {
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
    <div className="space-y-4">
      <div>
        <Label htmlFor="trophy-username" className="text-xs uppercase tracking-wide font-medium">GitHub Username</Label>
        <div className="flex gap-2 mt-1.5">
          <Input
            id="trophy-username"
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
        <Label className="text-xs uppercase tracking-wide font-medium">Theme Style</Label>
        <div className="grid grid-cols-3 gap-2">
          {themeOptions.map((theme) => {
            const Icon = theme.icon;
            const isSelected = data.theme === theme.value;
            return (
              <button
                key={theme.value}
                type="button"
                onClick={() => onChange({ ...data, theme: theme.value })}
                className={cn(
                  "relative flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200",
                  isSelected 
                    ? "border-accent bg-accent/10 shadow-sm" 
                    : "border-border hover:border-accent/50 hover:bg-accent/5"
                )}
              >
                <div className={cn("w-full h-12 rounded-md", theme.preview)} />
                <div className="flex items-center gap-1.5">
                  <Icon size={14} weight={isSelected ? "fill" : "regular"} className="text-accent" />
                  <span className="text-xs font-medium">{theme.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <Label htmlFor="columns" className="text-xs uppercase tracking-wide font-medium mb-2 block">
            Columns: {data.columns}
          </Label>
          <Slider
            id="columns"
            value={[data.columns]}
            onValueChange={(value) => onChange({ ...data, columns: value[0] })}
            min={3}
            max={12}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-wide font-medium">Display Options</Label>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="no-frame"
            checked={data.noFrame}
            onCheckedChange={(checked) => onChange({ ...data, noFrame: checked })}
          />
          <label htmlFor="no-frame" className="text-sm cursor-pointer">
            Hide Frame
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="no-bg"
            checked={data.noBackground}
            onCheckedChange={(checked) => onChange({ ...data, noBackground: checked })}
          />
          <label htmlFor="no-bg" className="text-sm cursor-pointer">
            Transparent Background
          </label>
        </div>
      </div>
    </div>
  );
}
