import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Section, SectionType, sectionTemplates } from '@/lib/types';
import { HeaderEditor } from '@/components/editors/HeaderEditor';
import { AboutEditor } from '@/components/editors/AboutEditor';
import { SkillsEditor } from '@/components/editors/SkillsEditor';
import { StatsEditor } from '@/components/editors/StatsEditor';
import { BadgesEditor } from '@/components/editors/BadgesEditor';
import { SocialsEditor } from '@/components/editors/SocialsEditor';
import { TechStackEditor } from '@/components/editors/TechStackEditor';
import { StreamingEditor } from '@/components/editors/StreamingEditor';
import { TrophyEditor } from '@/components/editors/TrophyEditor';
import { ContributionsEditor } from '@/components/editors/ContributionsEditor';
import { CertificationsEditor } from '@/components/editors/CertificationsEditor';
import { Trash, UserCircle, Article, Lightning, ChartBar, LinkSimple, DotsSixVertical, Code, VideoCamera, Trophy, ChartLine, Certificate } from '@phosphor-icons/react';
import { Reorder, useDragControls } from 'framer-motion';

interface SectionBuilderProps {
  section: Section;
  onUpdate: (data: any) => void;
  onRemove: () => void;
}

function getSectionIcon(type: SectionType) {
  switch (type) {
    case 'header': return <UserCircle />;
    case 'about': return <Article />;
    case 'skills': return <Lightning />;
    case 'stats': return <ChartBar />;
    case 'badges': return <Lightning weight="duotone" />;
    case 'socials': return <LinkSimple />;
    case 'techstack': return <Code weight="duotone" />;
    case 'streaming': return <VideoCamera weight="duotone" />;
    case 'trophy': return <Trophy weight="duotone" />;
    case 'contributions': return <ChartLine weight="duotone" />;
    case 'certifications': return <Certificate weight="duotone" />;
  }
}

function getSectionEditor(section: Section, onChange: (data: any) => void) {
  switch (section.type) {
    case 'header':
      return <HeaderEditor data={section.data as any} onChange={onChange} />;
    case 'about':
      return <AboutEditor data={section.data as any} onChange={onChange} />;
    case 'skills':
      return <SkillsEditor data={section.data as any} onChange={onChange} />;
    case 'stats':
      return <StatsEditor data={section.data as any} onChange={onChange} />;
    case 'badges':
      return <BadgesEditor data={section.data as any} onChange={onChange} />;
    case 'socials':
      return <SocialsEditor data={section.data as any} onChange={onChange} />;
    case 'techstack':
      return <TechStackEditor data={section.data as any} onChange={onChange} />;
    case 'streaming':
      return <StreamingEditor data={section.data as any} onChange={onChange} />;
    case 'trophy':
      return <TrophyEditor data={section.data as any} onChange={onChange} />;
    case 'contributions':
      return <ContributionsEditor data={section.data as any} onChange={onChange} />;
    case 'certifications':
      return <CertificationsEditor data={section.data as any} onChange={onChange} />;
  }
}

export function SectionBuilder({ section, onUpdate, onRemove }: SectionBuilderProps) {
  const template = sectionTemplates[section.type];
  const dragControls = useDragControls();
  
  return (
    <Reorder.Item
      value={section}
      dragListener={false}
      dragControls={dragControls}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      whileDrag={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
    >
      <Card className="p-5 relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <button
              onPointerDown={(e) => dragControls.start(e)}
              className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-accent transition-colors touch-none p-1 -ml-1"
              aria-label="Drag to reorder"
            >
              <DotsSixVertical size={24} weight="bold" />
            </button>
            <div className="text-accent">
              {getSectionIcon(section.type)}
            </div>
            <div>
              <h3 className="font-semibold">{template.name}</h3>
              <p className="text-xs text-muted-foreground">{template.description}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onRemove}
            className="hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash weight="bold" />
          </Button>
        </div>
        <Separator className="mb-4" />
        {getSectionEditor(section, onUpdate)}
      </Card>
    </Reorder.Item>
  );
}