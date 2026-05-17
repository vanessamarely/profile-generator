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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CopySimple, DownloadSimple, CaretDown, FilePdf, FileHtml, FileText } from '@phosphor-icons/react';
import { toast } from 'sonner';
import { Marked } from 'marked';
import { useMemo, useState } from 'react';
import { exportAsMarkdown, exportAsHTML, exportAsPDF } from '@/lib/exporters';

interface MarkdownPreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  markdown: string;
}

const marked = new Marked();

export function MarkdownPreviewDialog({
  open,
  onOpenChange,
  markdown,
}: MarkdownPreviewDialogProps) {
  const [isExporting, setIsExporting] = useState(false);
  const html = useMemo(() => marked.parse(markdown) as string, [markdown]);

  const copyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      toast.success('Markdown copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy markdown');
    }
  };

  const handleExport = async (format: 'markdown' | 'html' | 'pdf') => {
    setIsExporting(true);
    try {
      switch (format) {
        case 'markdown':
          await exportAsMarkdown(markdown);
          toast.success('Downloaded README.md');
          break;
        case 'html':
          await exportAsHTML(markdown);
          toast.success('Downloaded README.html');
          break;
        case 'pdf':
          await exportAsPDF(markdown);
          toast.success('Opening print dialog for PDF export');
          break;
      }
      onOpenChange(false);
    } catch (err) {
      console.error('Export error:', err);
      toast.error(`Failed to export as ${format.toUpperCase()}`);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Preview & Export Your README</DialogTitle>
          <DialogDescription>
            Review your generated markdown and export in multiple formats
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2" disabled={isExporting}>
                <DownloadSimple weight="bold" />
                Export
                <CaretDown weight="bold" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => handleExport('markdown')} className="gap-2">
                <FileText weight="fill" className="text-accent" />
                <div>
                  <div className="font-medium">Markdown</div>
                  <div className="text-xs text-muted-foreground">Download as .md file</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('html')} className="gap-2">
                <FileHtml weight="fill" className="text-accent" />
                <div>
                  <div className="font-medium">HTML</div>
                  <div className="text-xs text-muted-foreground">Download as .html file</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('pdf')} className="gap-2">
                <FilePdf weight="fill" className="text-accent" />
                <div>
                  <div className="font-medium">PDF</div>
                  <div className="text-xs text-muted-foreground">Print to PDF</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
