import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Plus, X, Trophy, Certificate, Medal, Sparkle, GraduationCap, Star } from '@phosphor-icons/react';

interface CertificationData {
  template: string;
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
  icon?: string;
  color?: string;
  description?: string;
}

interface CertificationsEditorProps {
  data: {
    certifications: CertificationData[];
  };
  onChange: (data: any) => void;
}

const certificationTemplates = [
  { 
    id: 'professional', 
    name: 'Professional Certification', 
    icon: Certificate,
    defaultColor: '0066CC',
    iconName: 'certificate'
  },
  { 
    id: 'achievement', 
    name: 'Achievement Badge', 
    icon: Trophy,
    defaultColor: 'FFD700',
    iconName: 'trophy'
  },
  { 
    id: 'course', 
    name: 'Course Completion', 
    icon: GraduationCap,
    defaultColor: '28a745',
    iconName: 'graduationcap'
  },
  { 
    id: 'award', 
    name: 'Award/Recognition', 
    icon: Medal,
    defaultColor: 'FF6B6B',
    iconName: 'medal'
  },
  { 
    id: 'skill', 
    name: 'Skill Verification', 
    icon: Star,
    defaultColor: 'FFA500',
    iconName: 'star'
  },
  { 
    id: 'community', 
    name: 'Community Recognition', 
    icon: Sparkle,
    defaultColor: 'A020F0',
    iconName: 'sparkle'
  },
];

const popularCertifications = [
  { template: 'professional', name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', icon: 'amazonaws', color: 'FF9900' },
  { template: 'professional', name: 'Google Cloud Professional', issuer: 'Google Cloud', icon: 'googlecloud', color: '4285F4' },
  { template: 'professional', name: 'Azure Administrator', issuer: 'Microsoft', icon: 'microsoftazure', color: '0089D6' },
  { template: 'professional', name: 'Kubernetes Administrator (CKA)', issuer: 'CNCF', icon: 'kubernetes', color: '326CE5' },
  { template: 'professional', name: 'Terraform Associate', issuer: 'HashiCorp', icon: 'terraform', color: '7B42BC' },
  { template: 'achievement', name: 'GitHub Star', issuer: 'GitHub', icon: 'github', color: '181717' },
  { template: 'achievement', name: 'Google Developer Expert', issuer: 'Google', icon: 'google', color: 'EA4335' },
  { template: 'achievement', name: 'Microsoft MVP', issuer: 'Microsoft', icon: 'microsoft', color: '5E5E5E' },
  { template: 'course', name: 'Meta Front-End Developer', issuer: 'Meta', icon: 'meta', color: '0668E1' },
  { template: 'course', name: 'IBM Data Science', issuer: 'IBM', icon: 'ibm', color: '054ADA' },
];

const badgeColors = [
  { name: 'Blue', value: '0066CC' },
  { name: 'Gold', value: 'FFD700' },
  { name: 'Green', value: '28a745' },
  { name: 'Red', value: 'FF6B6B' },
  { name: 'Orange', value: 'FFA500' },
  { name: 'Purple', value: 'A020F0' },
  { name: 'Teal', value: '00CED1' },
  { name: 'Pink', value: 'FF69B4' },
  { name: 'Black', value: '000000' },
  { name: 'Gray', value: '6c757d' },
];

export function CertificationsEditor({ data, onChange }: CertificationsEditorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [certName, setCertName] = useState('');
  const [issuer, setIssuer] = useState('');
  const [certDate, setCertDate] = useState('');
  const [credentialId, setCredentialId] = useState('');
  const [credentialUrl, setCredentialUrl] = useState('');
  const [customIcon, setCustomIcon] = useState('');
  const [certColor, setCertColor] = useState('0066CC');
  const [description, setDescription] = useState('');

  const addCertification = (cert?: Partial<CertificationData>) => {
    const template = certificationTemplates.find(t => t.id === (cert?.template || selectedTemplate));
    const newCert: CertificationData = {
      template: cert?.template || selectedTemplate,
      name: cert?.name || certName.trim(),
      issuer: cert?.issuer || issuer.trim(),
      date: cert?.date || (certDate.trim() || undefined),
      credentialId: cert?.credentialId || (credentialId.trim() || undefined),
      credentialUrl: cert?.credentialUrl || (credentialUrl.trim() || undefined),
      icon: cert?.icon || (customIcon.trim() || template?.iconName),
      color: cert?.color || certColor,
      description: cert?.description || (description.trim() || undefined),
    };

    if (newCert.name && newCert.issuer) {
      onChange({ ...data, certifications: [...data.certifications, newCert] });
      
      if (!cert) {
        setCertName('');
        setIssuer('');
        setCertDate('');
        setCredentialId('');
        setCredentialUrl('');
        setCustomIcon('');
        setDescription('');
      }
    }
  };

  const removeCertification = (index: number) => {
    onChange({ ...data, certifications: data.certifications.filter((_, i) => i !== index) });
  };

  const previewBadge = (cert: CertificationData): string => {
    const label = encodeURIComponent(cert.name);
    const message = encodeURIComponent(cert.issuer);
    const color = cert.color || '0066CC';
    const logo = cert.icon || 'certificate';
    
    return `https://img.shields.io/badge/${label}-${message}-${color}?style=for-the-badge&logo=${logo}&logoColor=white`;
  };

  const currentTemplate = certificationTemplates.find(t => t.id === selectedTemplate);

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-xs uppercase tracking-wide font-medium mb-2 block">Certification Template</Label>
        <div className="grid grid-cols-2 gap-2">
          {certificationTemplates.map((template) => {
            const Icon = template.icon;
            return (
              <Button
                key={template.id}
                onClick={() => {
                  setSelectedTemplate(template.id);
                  setCertColor(template.defaultColor);
                  setCustomIcon(template.iconName);
                }}
                variant={selectedTemplate === template.id ? 'default' : 'outline'}
                className="h-auto py-3 px-3 justify-start gap-2"
              >
                <Icon size={20} weight="duotone" />
                <span className="text-xs font-medium">{template.name}</span>
              </Button>
            );
          })}
        </div>
      </div>

      <Card className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="cert-name" className="text-xs">Certification Name*</Label>
            <Input
              id="cert-name"
              value={certName}
              onChange={(e) => setCertName(e.target.value)}
              placeholder="e.g., AWS Solutions Architect"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="cert-issuer" className="text-xs">Issuer/Organization*</Label>
            <Input
              id="cert-issuer"
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              placeholder="e.g., Amazon Web Services"
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="cert-date" className="text-xs">Date (Optional)</Label>
            <Input
              id="cert-date"
              value={certDate}
              onChange={(e) => setCertDate(e.target.value)}
              placeholder="e.g., 2024 or Jan 2024"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="cert-credential" className="text-xs">Credential ID (Optional)</Label>
            <Input
              id="cert-credential"
              value={credentialId}
              onChange={(e) => setCredentialId(e.target.value)}
              placeholder="e.g., ABC-123-XYZ"
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="cert-url" className="text-xs">Credential URL (Optional)</Label>
          <Input
            id="cert-url"
            value={credentialUrl}
            onChange={(e) => setCredentialUrl(e.target.value)}
            placeholder="https://..."
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="cert-icon" className="text-xs">Icon (Simple Icons)</Label>
            <Input
              id="cert-icon"
              value={customIcon}
              onChange={(e) => setCustomIcon(e.target.value)}
              placeholder={`Default: ${currentTemplate?.iconName}`}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="cert-color" className="text-xs">Badge Color</Label>
            <Select value={certColor} onValueChange={setCertColor}>
              <SelectTrigger id="cert-color" className="mt-1">
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
        </div>

        <div>
          <Label htmlFor="cert-description" className="text-xs">Description (Optional)</Label>
          <Textarea
            id="cert-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of the certification or achievement"
            className="mt-1 min-h-[60px]"
          />
        </div>

        {certName && issuer && (
          <div className="pt-2 border-t">
            <Label className="text-xs">Preview</Label>
            <div className="mt-2 flex items-center justify-center p-4 bg-muted/30 rounded-md">
              <img
                src={previewBadge({
                  template: selectedTemplate,
                  name: certName,
                  issuer: issuer,
                  icon: customIcon || currentTemplate?.iconName,
                  color: certColor,
                })}
                alt="Badge preview"
              />
            </div>
          </div>
        )}

        <Button 
          onClick={() => addCertification()} 
          disabled={!certName.trim() || !issuer.trim()} 
          className="w-full gap-2"
        >
          <Plus weight="bold" />
          Add Certification
        </Button>
      </Card>

      <div>
        <Label className="text-xs uppercase tracking-wide font-medium">Quick Add Popular Certifications</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {popularCertifications.map((cert, idx) => (
            <Button
              key={idx}
              onClick={() => addCertification(cert)}
              variant="outline"
              size="sm"
              className="h-auto py-2 justify-start text-xs"
            >
              {cert.name}
            </Button>
          ))}
        </div>
      </div>

      {data.certifications.length > 0 && (
        <div>
          <Label className="text-xs uppercase tracking-wide font-medium">Your Certifications ({data.certifications.length})</Label>
          <div className="space-y-2 mt-2">
            {data.certifications.map((cert, index) => (
              <Card key={index} className="p-3">
                <div className="flex items-start gap-3">
                  <img src={previewBadge(cert)} alt={cert.name} className="h-7 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{cert.name}</div>
                    <div className="text-xs text-muted-foreground">{cert.issuer}</div>
                    {(cert.date || cert.credentialId) && (
                      <div className="flex gap-2 mt-1 text-xs text-muted-foreground">
                        {cert.date && <span>{cert.date}</span>}
                        {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                      </div>
                    )}
                    {cert.description && (
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{cert.description}</p>
                    )}
                  </div>
                  <Button
                    onClick={() => removeCertification(index)}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                  >
                    <X size={16} weight="bold" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
