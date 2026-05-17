import { Marked } from 'marked';

const marked = new Marked();

export type ExportFormat = 'markdown' | 'html' | 'pdf';

export async function exportAsMarkdown(markdown: string): Promise<void> {
  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
  downloadBlob(blob, 'README.md');
}

export async function exportAsHTML(markdown: string): Promise<void> {
  const html = await marked.parse(markdown) as string;
  
  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Profile README</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #c9d1d9;
      background-color: #0d1117;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 1rem 0;
    }
    
    h1, h2, h3, h4, h5, h6 {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
      line-height: 1.25;
      color: #f0f6fc;
    }
    
    h1 {
      font-size: 2em;
      border-bottom: 1px solid #21262d;
      padding-bottom: 0.3em;
    }
    
    h2 {
      font-size: 1.5em;
      border-bottom: 1px solid #21262d;
      padding-bottom: 0.3em;
    }
    
    h3 {
      font-size: 1.25em;
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    a {
      color: #58a6ff;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    code {
      background-color: #161b22;
      padding: 0.2em 0.4em;
      border-radius: 6px;
      font-family: 'SF Mono', Monaco, Inconsolata, 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace;
      font-size: 85%;
    }
    
    pre {
      background-color: #161b22;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
      margin: 1rem 0;
    }
    
    pre code {
      background-color: transparent;
      padding: 0;
    }
    
    ul, ol {
      margin-left: 2rem;
      margin-bottom: 1rem;
    }
    
    li {
      margin-bottom: 0.25rem;
    }
    
    blockquote {
      border-left: 4px solid #3b434b;
      padding-left: 1rem;
      color: #8b949e;
      margin: 1rem 0;
    }
    
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
    }
    
    th, td {
      border: 1px solid #30363d;
      padding: 0.5rem;
      text-align: left;
    }
    
    th {
      background-color: #161b22;
      font-weight: 600;
    }
    
    hr {
      border: 0;
      border-top: 1px solid #21262d;
      margin: 1.5rem 0;
    }
    
    .badge-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }
    
    div[align="center"] {
      text-align: center;
    }
    
    div[align="left"] {
      text-align: left;
    }
    
    div[align="right"] {
      text-align: right;
    }
  </style>
</head>
<body>
${html}
</body>
</html>`;
  
  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  downloadBlob(blob, 'README.html');
}

export async function exportAsPDF(markdown: string): Promise<void> {
  const html = await marked.parse(markdown) as string;
  
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    throw new Error('Failed to open print window. Please allow pop-ups for this site.');
  }
  
  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Profile README</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    @page {
      size: A4;
      margin: 2cm;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #24292f;
      background-color: #ffffff;
      padding: 1rem;
      max-width: 210mm;
      margin: 0 auto;
    }
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 1rem 0;
      page-break-inside: avoid;
    }
    
    h1, h2, h3, h4, h5, h6 {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
      line-height: 1.25;
      color: #24292f;
      page-break-after: avoid;
    }
    
    h1 {
      font-size: 2em;
      border-bottom: 1px solid #d0d7de;
      padding-bottom: 0.3em;
    }
    
    h2 {
      font-size: 1.5em;
      border-bottom: 1px solid #d0d7de;
      padding-bottom: 0.3em;
    }
    
    h3 {
      font-size: 1.25em;
    }
    
    p {
      margin-bottom: 1rem;
      orphans: 3;
      widows: 3;
    }
    
    a {
      color: #0969da;
      text-decoration: none;
    }
    
    code {
      background-color: #f6f8fa;
      padding: 0.2em 0.4em;
      border-radius: 6px;
      font-family: 'SF Mono', Monaco, Inconsolata, 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace;
      font-size: 85%;
    }
    
    pre {
      background-color: #f6f8fa;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
      margin: 1rem 0;
      page-break-inside: avoid;
    }
    
    pre code {
      background-color: transparent;
      padding: 0;
    }
    
    ul, ol {
      margin-left: 2rem;
      margin-bottom: 1rem;
    }
    
    li {
      margin-bottom: 0.25rem;
    }
    
    blockquote {
      border-left: 4px solid #d0d7de;
      padding-left: 1rem;
      color: #57606a;
      margin: 1rem 0;
    }
    
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
      page-break-inside: avoid;
    }
    
    th, td {
      border: 1px solid #d0d7de;
      padding: 0.5rem;
      text-align: left;
    }
    
    th {
      background-color: #f6f8fa;
      font-weight: 600;
    }
    
    hr {
      border: 0;
      border-top: 1px solid #d0d7de;
      margin: 1.5rem 0;
    }
    
    div[align="center"] {
      text-align: center;
    }
    
    div[align="left"] {
      text-align: left;
    }
    
    div[align="right"] {
      text-align: right;
    }
    
    @media print {
      body {
        padding: 0;
      }
    }
  </style>
</head>
<body>
${html}
<script>
  window.onload = function() {
    setTimeout(function() {
      window.print();
      setTimeout(function() {
        window.close();
      }, 100);
    }, 500);
  };
</script>
</body>
</html>`;
  
  printWindow.document.write(fullHtml);
  printWindow.document.close();
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}
