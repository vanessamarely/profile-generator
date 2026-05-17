import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, X, Palette, Sparkle } from '@phosphor-icons/react';

interface BadgeData {
  type: 'simple' | 'custom';
  label: string;
  message?: string;
  color?: string;
  logo?: string;
  logoColor?: string;
  style?: 'flat' | 'flat-square' | 'for-the-badge' | 'plastic' | 'social';
  labelColor?: string;
  link?: string;
}

interface BadgesEditorProps {
  data: {
    badges: BadgeData[];
  };
  onChange: (data: any) => void;
}

const popularBadges = [
  { label: 'JavaScript', logo: 'javascript', color: 'F7DF1E', logoColor: '000' },
  { label: 'TypeScript', logo: 'typescript', color: '3178C6' },
  { label: 'React', logo: 'react', color: '61DAFB', logoColor: '000' },
  { label: 'Node.js', logo: 'nodedotjs', color: '339933' },
  { label: 'Python', logo: 'python', color: '3776AB' },
  { label: 'Docker', logo: 'docker', color: '2496ED' },
  { label: 'Kubernetes', logo: 'kubernetes', color: '326CE5' },
  { label: 'AWS', logo: 'amazonaws', color: 'FF9900', logoColor: '000' },
  { label: 'Git', logo: 'git', color: 'F05032' },
  { label: 'PostgreSQL', logo: 'postgresql', color: '4169E1' },
  { label: 'MongoDB', logo: 'mongodb', color: '47A248' },
  { label: 'Vue.js', logo: 'vuedotjs', color: '4FC08D' },
  { label: 'Angular', logo: 'angular', color: 'DD0031' },
  { label: 'Next.js', logo: 'nextdotjs', color: '000000' },
  { label: 'Tailwind CSS', logo: 'tailwindcss', color: '06B6D4' },
  { label: 'GraphQL', logo: 'graphql', color: 'E10098' },
];

const badgeColors = [
  { name: 'Blue', value: '007bff' },
  { name: 'Green', value: '28a745' },
  { name: 'Red', value: 'dc3545' },
  { name: 'Yellow', value: 'ffc107' },
  { name: 'Purple', value: '6f42c1' },
  { name: 'Orange', value: 'fd7e14' },
  { name: 'Pink', value: 'e83e8c' },
  { name: 'Teal', value: '20c997' },
  { name: 'Black', value: '000000' },
  { name: 'Gray', value: '6c757d' },
];

export function BadgesEditor({ data, onChange }: BadgesEditorProps) {
  const [quickBadge, setQuickBadge] = useState('');
  const [customLabel, setCustomLabel] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [customColor, setCustomColor] = useState('007bff');
  const [customLogo, setCustomLogo] = useState('');
  const [customLogoColor, setCustomLogoColor] = useState('white');
  const [customLabelColor, setCustomLabelColor] = useState('');
  const [customStyle, setCustomStyle] = useState<'flat' | 'flat-square' | 'for-the-badge' | 'plastic' | 'social'>('for-the-badge');
  const [customLink, setCustomLink] = useState('');

  const addSimpleBadge = (label: string, logo?: string, color?: string, logoColor?: string) => {
    if (label.trim()) {
      const newBadge: BadgeData = {
        type: 'simple',
        label: label.trim(),
        logo,
        color,
        logoColor,
        style: 'for-the-badge',
      };
      onChange({ ...data, badges: [...data.badges, newBadge] });
      setQuickBadge('');
    }
  };

  const addCustomBadge = () => {
    if (customLabel.trim()) {
      const newBadge: BadgeData = {
        type: 'custom',
        label: customLabel.trim(),
        message: customMessage.trim() || undefined,
        color: customColor,
        logo: customLogo.trim() || undefined,
        logoColor: customLogoColor.trim() || undefined,
        labelColor: customLabelColor.trim() || undefined,
        style: customStyle,
        link: customLink.trim() || undefined,
      };
      onChange({ ...data, badges: [...data.badges, newBadge] });
      
      setCustomLabel('');
      setCustomMessage('');
      setCustomColor('007bff');
      setCustomLogo('');
      setCustomLogoColor('white');
      setCustomLabelColor('');
      setCustomLink('');
    }
  };

  const removeBadge = (index: number) => {
    onChange({ ...data, badges: data.badges.filter((_, i) => i !== index) });
  };

  const previewUrl = (badge: BadgeData): string => {
    if (badge.type === 'simple') {
      const normalized = badge.label.toLowerCase().replace(/\s+/g, '-');
      return `https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${badge.color || '000000'}?style=for-the-badge&logo=${badge.logo || normalized}&logoColor=${badge.logoColor || 'white'}`;
    }
    
    let url = '';
    if (badge.message) {
      url = `https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${encodeURIComponent(badge.message)}-${badge.color || '000000'}`;
    } else {
      url = `https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${badge.color || '000000'}`;
    }
    
    url += `?style=${badge.style || 'for-the-badge'}`;
    if (badge.logo) url += `&logo=${encodeURIComponent(badge.logo)}`;
    if (badge.logoColor) url += `&logoColor=${encodeURIComponent(badge.logoColor)}`;
    if (badge.labelColor) url += `&labelColor=${encodeURIComponent(badge.labelColor)}`;
    
    return url;
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="quick" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="quick" className="gap-2">
            <Sparkle weight="fill" />
            Quick Add
          </TabsTrigger>
          <TabsTrigger value="custom" className="gap-2">
            <Palette weight="fill" />
            Custom Badge
          </TabsTrigger>
        </TabsList>

        <TabsContent value="quick" className="space-y-3 mt-3">
          <div>
            <Label htmlFor="quick-badge" className="text-xs uppercase tracking-wide font-medium">Add Technology</Label>
            <div className="flex gap-2 mt-1.5">
              <Input
                id="quick-badge"
                value={quickBadge}
                onChange={(e) => setQuickBadge(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSimpleBadge(quickBadge))}
                placeholder="e.g., JavaScript, Python, React"
              />
              <Button onClick={() => addSimpleBadge(quickBadge)} size="icon" className="shrink-0">
                <Plus weight="bold" />
              </Button>
            </div>
          </div>

          <div>
            <Label className="text-xs uppercase tracking-wide font-medium">Popular Technologies</Label>
            <div className="flex flex-wrap gap-2 mt-1.5">
              {popularBadges.map((badge) => (
                <Button
                  key={badge.label}
                  onClick={() => addSimpleBadge(badge.label, badge.logo, badge.color, badge.logoColor)}
                  variant="outline"
                  size="sm"
                  className="h-auto py-1.5"
                >
                  {badge.label}
                </Button>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-3 mt-3">
          <Card className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="custom-label" className="text-xs">Label</Label>
                <Input
                  id="custom-label"
                  value={customLabel}
                  onChange={(e) => setCustomLabel(e.target.value)}
                  placeholder="Badge label"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="custom-message" className="text-xs">Message (Optional)</Label>
                <Input
                  id="custom-message"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Badge message"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="custom-color" className="text-xs">Color</Label>
                <Select value={customColor} onValueChange={setCustomColor}>
                  <SelectTrigger id="custom-color" className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {badgeColors.map((color) => (
                      <SelectItem key={color.value} value={color.value}>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded" style={{ backgroundColor: `#${color.value}` }} />
                          {color.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="custom-style" className="text-xs">Style</Label>
                <Select value={customStyle} onValueChange={(val: any) => setCustomStyle(val)}>
                  <SelectTrigger id="custom-style" className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="for-the-badge">For The Badge</SelectItem>
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="flat-square">Flat Square</SelectItem>
                    <SelectItem value="plastic">Plastic</SelectItem>
                    <SelectItem value="social">Social</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="custom-logo" className="text-xs">Logo (Simple Icons)</Label>
                <Input
                  id="custom-logo"
                  value={customLogo}
                  onChange={(e) => setCustomLogo(e.target.value)}
                  placeholder="e.g., react, python"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="custom-logo-color" className="text-xs">Logo Color</Label>
                <Input
                  id="custom-logo-color"
                  value={customLogoColor}
                  onChange={(e) => setCustomLogoColor(e.target.value)}
                  placeholder="e.g., white, 000"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="custom-link" className="text-xs">Link (Optional)</Label>
              <Input
                id="custom-link"
                value={customLink}
                onChange={(e) => setCustomLink(e.target.value)}
                placeholder="https://example.com"
                className="mt-1"
              />
            </div>

            {customLabel && (
              <div className="pt-2 border-t">
                <Label className="text-xs">Preview</Label>
                <div className="mt-2 flex items-center justify-center p-4 bg-muted/30 rounded-md">
                  <img
                    src={previewUrl({
                      type: 'custom',
                      label: customLabel,
                      message: customMessage || undefined,
                      color: customColor,
                      logo: customLogo || undefined,
                      logoColor: customLogoColor || undefined,
                      style: customStyle,
                    })}
                    alt="Badge preview"
                  />
                </div>
              </div>
            )}

            <Button onClick={addCustomBadge} disabled={!customLabel.trim()} className="w-full gap-2">
              <Plus weight="bold" />
              Add Custom Badge
            </Button>
          </Card>
        </TabsContent>
      </Tabs>

      {data.badges.length > 0 && (
        <div>
          <Label className="text-xs uppercase tracking-wide font-medium">Selected Badges ({data.badges.length})</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="gap-2 pr-1.5 pl-2 py-1">
                <img src={previewUrl(badge)} alt={badge.label} className="h-5" />
                <button
                  onClick={() => removeBadge(index)}
                  className="hover:text-destructive transition-colors p-0.5"
                >
                  <X size={14} weight="bold" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}