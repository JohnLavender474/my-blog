"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function parseFootnotes(content: string): Map<string, string> {
  const footnotes = new Map<string, string>();
  for (const [, key, text] of content.matchAll(/^\[\^([^\]]+)\]: (.+)$/gm)) {
    footnotes.set(key, text.trim());
  }
  return footnotes;
}

export default function PostContent({ content }: { content: string }) {
  const footnotes = parseFootnotes(content);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        section: ({ className, children, ...props }: any) => {
          if (className?.includes("footnotes")) return null;
          return <section className={className} {...props}>{children}</section>;
        },
        a: ({ href, children, ...props }: any) => {
          if (href?.startsWith("#user-content-fn-")) {
            const key = href.replace("#user-content-fn-", "");
            const tooltipText = footnotes.get(key);
            return (
              <span className="footnote-ref" data-tooltip={tooltipText}>
                {children}
              </span>
            );
          }
          return <a href={href} {...props}>{children}</a>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
