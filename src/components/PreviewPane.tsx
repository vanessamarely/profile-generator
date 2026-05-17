import { useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { generateMarkdown } from '@/lib/markdown';
import { Section } from '@/lib/types';
import { Marked } from 'marked';

interface PreviewPaneProps {
  sections: Section[];
}

const marked = new Marked();

export function PreviewPane({ sections }: PreviewPaneProps) {
  const markdown = useMemo(() => generateMarkdown(sections), [sections]);
  const html = useMemo(() => marked.parse(markdown) as string, [markdown]);

  return (
    <Card className="h-full flex flex-col">
      <div className="p-5 border-b border-border">
        <h2 className="text-xl font-semibold">Preview</h2>
        <p className="text-sm text-muted-foreground mt-0.5">See how your profile will look</p>
      </div>
      <ScrollArea className="flex-1 p-6">
        {sections.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div className="max-w-md">
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">No sections yet</h3>
              <p className="text-sm text-muted-foreground">
                Add sections to see your README preview here
              </p>
            </div>
          </div>
        ) : (
          <div 
            className="prose prose-invert max-w-none prose-headings:font-display prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-lg prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </ScrollArea>
    </Card>
  );
}