import { useMemo } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Convert markdown to HTML and sanitize it
  const html = useMemo(() => DOMPurify.sanitize(marked(content) as string), [content]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
