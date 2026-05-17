import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface HeaderEditorProps {
  data: {
    name: string;
    tagline: string;
    bannerUrl: string;
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
    </div>
  );
}