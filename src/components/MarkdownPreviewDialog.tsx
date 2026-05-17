import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CopySimple, DownloadSimple } from '@phosphor-icons/react';
import { toast } from 'sonner';
import { Marked } from 'marked';
import { useMemo } from 'react';

interface MarkdownPreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  markdown: string;
  onDownload: () => void;
}

const marked = new Marked();

export function MarkdownPreviewDialog({
  open,
  onOpenChange,
  markdown,
  onDownload,
}: MarkdownPreviewDialogProps) {
  const html = useMemo(() => marked.parse(markdown) as string, [markdown]);

  const copyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      toast.success('Markdown copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy markdown');
    }
  };

  const handleDownload = () => {
    onDownload();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Preview Your README</DialogTitle>
          <DialogDescription>
            Review your generated markdown before downloading
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="preview" className="flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="markdown">Raw Markdown</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="flex-1 mt-4 min-h-0">
            <ScrollArea className="h-[50vh] border border-border rounded-md">
              <div 
                className="prose prose-invert max-w-none p-6 prose-headings:font-display prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-lg prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="markdown" className="flex-1 mt-4 min-h-0">
            <ScrollArea className="h-[50vh] border border-border rounded-md">
              <pre className="p-6 text-sm font-mono bg-muted/30 rounded-md">
                <code className="text-foreground">{markdown}</code>
              </pre>
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button onClick={copyMarkdown} variant="outline" className="gap-2">
            <CopySimple weight="bold" />
            Copy Markdown
          </Button>
          <Button onClick={handleDownload} className="gap-2">
            <DownloadSimple weight="bold" />
            Download README.md
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
