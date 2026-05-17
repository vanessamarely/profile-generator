import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Plus, X } from '@phosphor-icons/react';

interface SkillsEditorProps {
  data: {
    skills: string[];
  };
  onChange: (data: any) => void;
}

export function SkillsEditor({ data, onChange }: SkillsEditorProps) {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !data.skills.includes(newSkill.trim())) {
      onChange({ ...data, skills: [...data.skills, newSkill.trim()] });
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    onChange({ ...data, skills: data.skills.filter(s => s !== skill) });
  };

  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor="skill-input" className="text-xs uppercase tracking-wide font-medium">Add Skills</Label>
        <div className="flex gap-2 mt-1.5">
          <Input
            id="skill-input"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
            placeholder="TypeScript"
          />
          <Button onClick={addSkill} size="icon" className="shrink-0">
            <Plus weight="bold" />
          </Button>
        </div>
      </div>
      {data.skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="gap-1 pr-1.5">
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="hover:text-destructive transition-colors"
              >
                <X size={14} weight="bold" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}