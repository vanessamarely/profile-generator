import { useKV } from '@github/spark/hooks';
import { Section, SectionType, sectionTemplates } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SectionBuilder } from '@/components/SectionBuilder';
import { PreviewPane } from '@/components/PreviewPane';
import { generateMarkdown } from '@/lib/markdown';
import { CopySimple, DownloadSimple, GithubLogo } from '@phosphor-icons/react';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Toaster } from '@/components/ui/sonner';
import { Reorder } from 'framer-motion';
import { MarkdownPreviewDialog } from '@/components/MarkdownPreviewDialog';
import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { LanguageSelector } from '@/components/LanguageSelector';

function App() {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const [sections, setSections] = useKV<Section[]>('readme-sections', []);
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);

  const currentSections = sections || [];
  const addSection = (type: SectionType) => {
    const newSection: Section = {
    const newSection: Section = {
      id: `${type}-${Date.now()}`,
      type,
      data: { ...sectionTemplates[type].defaultData },
    };
    setSections((current) => [...(current || []), newSection]);
    toast.success(t.notifications.sectionAdded);
  };

  const updateSection = (id: string, data: any) => {
    setSections((current) =>
      (current || []).map((section) =>
        section.id === id ? { ...section, data } : section
      )
    );
  };

  const removeSection = (id: string) => {
    setSections((current) => (current || []).filter((section) => section.id !== id));
    toast.success(t.notifications.sectionRemoved);
  };

  const copyToClipboard = async () => {
    const markdown = generateMarkdown(currentSections);
    try {
      await navigator.clipboard.writeText(markdown);
      toast.success(t.notifications.copied);
    } catch (err) {
      toast.error(t.notifications.copyFailed);
    }
  };

  const openPreviewDialog = () => {
    setPreviewDialogOpen(true);
  };

  const sectionTypes = Object.entries(sectionTemplates);

  const handleReorder = (newOrder: Section[]) => {
    setSections(newOrder);
  };

  const editorContent = (
    <div className="space-y-4">
      <Card className="p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">{t.sections.addSection}</h3>
        <div className="grid grid-cols-2 gap-2">
          {sectionTypes.map(([type, template]) => (
            <Button
              key={type}
              onClick={() => addSection(type as SectionType)}
              variant="outline"
              className="justify-start h-auto py-3 px-4"
            >
              <div className="text-left">
                <div className="font-medium">{t.sections[type as SectionType]?.name || template.name}</div>
                <div className="text-xs text-muted-foreground">{t.sections[type as SectionType]?.description || template.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </Card>

      <Reorder.Group axis="y" values={currentSections} onReorder={handleReorder} className="space-y-4">
        {currentSections.map((section) => (
          <SectionBuilder
            key={section.id}
            section={section}
            onUpdate={(data) => updateSection(section.id, data)}
            onRemove={() => removeSection(section.id)}
          />
        ))}
      </Reorder.Group>

      {currentSections.length === 0 && (
        <Card className="p-12 text-center">
          <div className="max-w-sm mx-auto">
            <h3 className="text-lg font-semibold mb-2">{t.sections.startBuilding}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t.sections.startBuildingDesc}
            </p>
          </div>
        </Card>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-6 py-8">
          <header className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <GithubLogo size={36} weight="duotone" className="text-accent" />
                <h1 className="text-3xl font-bold tracking-tight">{t.app.title}</h1>
              </div>
              <LanguageSelector />
            </div>
            <p className="text-muted-foreground">
              {t.app.subtitle}
            </p>
          </header>

          <div className="flex gap-4 mb-6">
            <Button onClick={copyToClipboard} disabled={currentSections.length === 0} className="gap-2">
              <CopySimple weight="bold" />
              {t.actions.copy}
            </Button>
            <Button onClick={openPreviewDialog} disabled={currentSections.length === 0} variant="outline" className="gap-2">
              <DownloadSimple weight="bold" />
              {t.actions.download}
            </Button>
          </div>

          <MarkdownPreviewDialog
            open={previewDialogOpen}
            onOpenChange={setPreviewDialogOpen}
            markdown={generateMarkdown(currentSections)}
          />

          {isMobile ? (
            <Tabs defaultValue="edit" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="edit">{t.tabs.edit}</TabsTrigger>
                <TabsTrigger value="preview">{t.tabs.preview}</TabsTrigger>
              </TabsList>
              <TabsContent value="edit">
                <ScrollArea className="h-[calc(100vh-280px)]">
                  {editorContent}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="preview">
                <div className="h-[calc(100vh-280px)]">
                  <PreviewPane sections={currentSections} />
                </div>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="grid grid-cols-2 gap-6">
              <ScrollArea className="h-[calc(100vh-280px)]">
                {editorContent}
              </ScrollArea>
              <div className="h-[calc(100vh-280px)] sticky top-6">
                <PreviewPane sections={currentSections} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;