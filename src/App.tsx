import { useKV } from '@github/spark/hooks';
import { Section, SectionType, sectionTemplates } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SectionBuilder } from '@/components/SectionBuilder';
import { PreviewPane } from '@/components/PreviewPane';
import { generateMarkdown } from '@/lib/markdown';
import { Copy, Download, Plus, GithubLogo } from '@phosphor-icons/react';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Toaster } from '@/components/ui/sonner';
import { Reorder } from 'framer-motion';

function App() {
  const isMobile = useIsMobile();
  const [sections, setSections] = useKV<Section[]>('readme-sections', []);

  const currentSections = sections || [];

  const addSection = (type: SectionType) => {
    const newSection: Section = {
      id: `${type}-${Date.now()}`,
      type,
      data: { ...sectionTemplates[type].defaultData },
    };
    setSections((current) => [...(current || []), newSection]);
    toast.success('Section added');
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
    toast.success('Section removed');
  };

  const copyToClipboard = async () => {
    const markdown = generateMarkdown(currentSections);
    try {
      await navigator.clipboard.writeText(markdown);
      toast.success('Copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  const downloadFile = () => {
    const markdown = generateMarkdown(currentSections);
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Downloaded README.md');
  };

  const sectionTypes = Object.entries(sectionTemplates);

  const handleReorder = (newOrder: Section[]) => {
    setSections(newOrder);
  };

  const editorContent = (
    <div className="space-y-4">
      <Card className="p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">Add Section</h3>
        <div className="grid grid-cols-2 gap-2">
          {sectionTypes.map(([type, template]) => (
            <Button
              key={type}
              onClick={() => addSection(type as SectionType)}
              variant="outline"
              className="justify-start h-auto py-3 px-4"
            >
              <div className="text-left">
                <div className="font-medium">{template.name}</div>
                <div className="text-xs text-muted-foreground">{template.description}</div>
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
            <h3 className="text-lg font-semibold mb-2">Start Building Your README</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Add sections above to create your personalized GitHub profile
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
            <div className="flex items-center gap-3 mb-2">
              <GithubLogo size={36} weight="duotone" className="text-accent" />
              <h1 className="text-3xl font-bold tracking-tight">README Profile Generator</h1>
            </div>
            <p className="text-muted-foreground">
              Create a stunning GitHub profile README with live preview
            </p>
          </header>

          <div className="flex gap-4 mb-6">
            <Button onClick={copyToClipboard} disabled={currentSections.length === 0} className="gap-2">
              <Copy weight="bold" />
              Copy Markdown
            </Button>
            <Button onClick={downloadFile} disabled={currentSections.length === 0} variant="outline" className="gap-2">
              <Download weight="bold" />
              Download
            </Button>
          </div>

          {isMobile ? (
            <Tabs defaultValue="edit" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="edit">Edit</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
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