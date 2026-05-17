import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface AboutEditorProps {
  data: {
    content: string;
  };
  onChange: (data: any) => void;
}

export function AboutEditor({ data, onChange }: AboutEditorProps) {
  return (
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
  );
}