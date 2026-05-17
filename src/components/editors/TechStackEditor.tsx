import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Plus, X, Trash } from '@phosphor-icons/react';

interface TechStackEditorProps {
  data: {
    variableName: string;
    code: string[];
    tools: string[];
    architecture: string[];
    customFields: { key: string; value: string }[];
  };
  onChange: (data: any) => void;
}

export function TechStackEditor({ data, onChange }: TechStackEditorProps) {
  const [newCode, setNewCode] = useState('');
  const [newTool, setNewTool] = useState('');
  const [newArch, setNewArch] = useState('');
  const [newField, setNewField] = useState({ key: '', value: '' });

  const addCode = () => {
    if (newCode.trim() && !data.code.includes(newCode.trim())) {
      onChange({ ...data, code: [...data.code, newCode.trim()] });
      setNewCode('');
    }
  };

  const addTool = () => {
    if (newTool.trim() && !data.tools.includes(newTool.trim())) {
      onChange({ ...data, tools: [...data.tools, newTool.trim()] });
      setNewTool('');
    }
  };

  const addArch = () => {
    if (newArch.trim() && !data.architecture.includes(newArch.trim())) {
      onChange({ ...data, architecture: [...data.architecture, newArch.trim()] });
      setNewArch('');
    }
  };

  const addCustomField = () => {
    if (newField.key.trim() && newField.value.trim()) {
      onChange({ ...data, customFields: [...data.customFields, newField] });
      setNewField({ key: '', value: '' });
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="var-name" className="text-xs uppercase tracking-wide font-medium">Variable Name</Label>
        <Input
          id="var-name"
          value={data.variableName}
          onChange={(e) => onChange({ ...data, variableName: e.target.value })}
          placeholder="yourname"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="code-input" className="text-xs uppercase tracking-wide font-medium">Languages/Code</Label>
        <div className="flex gap-2 mt-1.5">
          <Input
            id="code-input"
            value={newCode}
            onChange={(e) => setNewCode(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addCode())}
            placeholder="JavaScript"
          />
          <Button onClick={addCode} size="icon" className="shrink-0">
            <Plus weight="bold" />
          </Button>
        </div>
        {data.code.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {data.code.map((item) => (
              <Badge key={item} variant="secondary" className="gap-1 pr-1.5">
                {item}
                <button
                  onClick={() => onChange({ ...data, code: data.code.filter(c => c !== item) })}
                  className="hover:text-destructive transition-colors"
                >
                  <X size={14} weight="bold" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="tool-input" className="text-xs uppercase tracking-wide font-medium">Tools/Frameworks</Label>
        <div className="flex gap-2 mt-1.5">
          <Input
            id="tool-input"
            value={newTool}
            onChange={(e) => setNewTool(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTool())}
            placeholder="React"
          />
          <Button onClick={addTool} size="icon" className="shrink-0">
            <Plus weight="bold" />
          </Button>
        </div>
        {data.tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {data.tools.map((item) => (
              <Badge key={item} variant="secondary" className="gap-1 pr-1.5">
                {item}
                <button
                  onClick={() => onChange({ ...data, tools: data.tools.filter(t => t !== item) })}
                  className="hover:text-destructive transition-colors"
                >
                  <X size={14} weight="bold" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="arch-input" className="text-xs uppercase tracking-wide font-medium">Architecture/Patterns</Label>
        <div className="flex gap-2 mt-1.5">
          <Input
            id="arch-input"
            value={newArch}
            onChange={(e) => setNewArch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addArch())}
            placeholder="Design System Pattern"
          />
          <Button onClick={addArch} size="icon" className="shrink-0">
            <Plus weight="bold" />
          </Button>
        </div>
        {data.architecture.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {data.architecture.map((item) => (
              <Badge key={item} variant="secondary" className="gap-1 pr-1.5">
                {item}
                <button
                  onClick={() => onChange({ ...data, architecture: data.architecture.filter(a => a !== item) })}
                  className="hover:text-destructive transition-colors"
                >
                  <X size={14} weight="bold" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div>
        <Label className="text-xs uppercase tracking-wide font-medium">Custom Fields</Label>
        <div className="space-y-2 mt-1.5">
          <div className="flex gap-2">
            <Input
              value={newField.key}
              onChange={(e) => setNewField({ ...newField, key: e.target.value })}
              placeholder="Field name (e.g., challenge)"
              className="flex-1"
            />
            <Input
              value={newField.value}
              onChange={(e) => setNewField({ ...newField, value: e.target.value })}
              placeholder="Value"
              className="flex-1"
            />
            <Button onClick={addCustomField} size="icon" className="shrink-0">
              <Plus weight="bold" />
            </Button>
          </div>
        </div>
        {data.customFields.length > 0 && (
          <div className="space-y-2 mt-2">
            {data.customFields.map((field, index) => (
              <div key={index} className="flex items-center gap-2 p-2 rounded-md bg-secondary/50">
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm font-mono">{field.key}:</div>
                  <div className="text-xs text-muted-foreground">{field.value}</div>
                </div>
                <Button
                  onClick={() => onChange({ ...data, customFields: data.customFields.filter((_, i) => i !== index) })}
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
    </div>
  );
}
