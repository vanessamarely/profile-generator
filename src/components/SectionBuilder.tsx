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
import { Trash, User, TextAlignLeft, Lightning, ChartBar, IconContext, Link } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

interface SectionBuilderProps {
  section: Section;
  onUpdate: (data: any) => void;
  onRemove: () => void;
}

function getSectionIcon(type: SectionType) {
  switch (type) {
    case 'header': return <User />;
    case 'about': return <TextAlignLeft />;
    case 'skills': return <Lightning />;
    case 'stats': return <ChartBar />;
    case 'badges': return <IconContext.Provider value={{ weight: 'duotone' }}><Lightning /></IconContext.Provider>;
    case 'socials': return <Link />;
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
  }
}

export function SectionBuilder({ section, onUpdate, onRemove }: SectionBuilderProps) {
  const template = sectionTemplates[section.type];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
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
    </motion.div>
  );
}