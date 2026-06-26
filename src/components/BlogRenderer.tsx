import { Link } from "react-router-dom";
import { Lightbulb, AlertTriangle, CheckCircle2, TrendingUp, Clock, ArrowRight, Quote } from "lucide-react";

/**
 * Premium blog content renderer.
 * Parses markdown-like custom blocks (:::keynote, :::comparison, etc.)
 * and renders rich visual components.
 */

interface Props {
  content: string;
}

const BlogRenderer = ({ content }: Props) => {
  const blocks = parseContent(content);

  return (
    <div className="blog-content space-y-6">
      {blocks.map((block, i) => (
        <RenderBlock key={i} block={block} />
      ))}
    </div>
  );
};

// --- Block Types ---
type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "divider" }
  | { type: "list"; items: string[] }
  | { type: "keynote"; text: string }
  | { type: "bestpractice"; text: string }
  | { type: "mistake"; text: string }
  | { type: "example"; text: string }
  | { type: "comparison"; text: string }
  | { type: "architecture"; text: string }
  | { type: "timeline"; text: string }
  | { type: "stats"; text: string }
  | { type: "cta"; text: string }
  | { type: "image"; text: string }
  | { type: "faq"; text: string };

function parseContent(content: string): Block[] {
  const lines = content.split(/\r?\n/);
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Divider
    if (line.trim() === "---") {
      blocks.push({ type: "divider" });
      i++;
      continue;
    }

    // Custom blocks (:::type ... :::)
    const blockMatch = line.trim().match(/^:::(keynote|bestpractice|mistake|example|comparison|architecture|timeline|stats|cta|faq|image)\s*$/);
    if (blockMatch) {
      const blockType = blockMatch[1] as Block["type"];
      const blockLines: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim() !== ":::") {
        blockLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing :::
      blocks.push({ type: blockType, text: blockLines.join("\n") } as Block);
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      blocks.push({ type: "heading2", text: line.slice(3) });
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      blocks.push({ type: "heading3", text: line.slice(4) });
      i++;
      continue;
    }

    // List (consecutive - lines)
    if (line.trimStart().startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trimStart().startsWith("- ")) {
        items.push(lines[i].trimStart().slice(2));
        i++;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph (collect consecutive non-empty lines)
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("##") && !lines[i].startsWith("---") && !lines[i].startsWith(":::") && !lines[i].trimStart().startsWith("- ")) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: "paragraph", text: paraLines.join(" ") });
    }
  }

  return blocks;
}

// --- Render individual blocks ---
function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "divider":
      return <div className="my-8 border-t border-border/40" />;

    case "heading2":
      return (
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-4 scroll-mt-24">
          {renderInline(block.text)}
        </h2>
      );

    case "heading3":
      return (
        <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mt-8 mb-3">
          {renderInline(block.text)}
        </h3>
      );

    case "paragraph":
      return (
        <p className="text-[15px] md:text-base text-foreground/80 leading-[1.85]">
          {renderInline(block.text)}
        </p>
      );

    case "list":
      return (
        <ul className="space-y-2.5 my-4 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-foreground/80 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "keynote":
      return (
        <div className="my-8 p-6 rounded-xl bg-accent/5 border border-accent/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
          <div className="flex gap-3 items-start pl-4">
            <Lightbulb size={20} className="text-accent shrink-0 mt-0.5" />
            <div className="text-[15px] text-foreground/85 leading-relaxed">
              {renderMarkdown(block.text)}
            </div>
          </div>
        </div>
      );

    case "bestpractice":
      return (
        <div className="my-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200/60 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
          <div className="flex gap-3 items-start pl-4">
            <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-[15px] text-foreground/85 leading-relaxed">
              {renderMarkdown(block.text)}
            </div>
          </div>
        </div>
      );

    case "mistake":
      return (
        <div className="my-6 p-5 rounded-xl bg-red-50 border border-red-200/60 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
          <div className="flex gap-3 items-start pl-4">
            <AlertTriangle size={18} className="text-red-600 shrink-0 mt-0.5" />
            <div className="text-[15px] text-foreground/85 leading-relaxed">
              {renderMarkdown(block.text)}
            </div>
          </div>
        </div>
      );

    case "example":
      return (
        <div className="my-6 p-5 rounded-xl bg-purple-50 border border-purple-200/60 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
          <div className="flex gap-3 items-start pl-4">
            <Quote size={18} className="text-purple-600 shrink-0 mt-0.5" />
            <div className="text-[15px] text-foreground/85 leading-relaxed">
              {renderMarkdown(block.text)}
            </div>
          </div>
        </div>
      );

    case "stats":
      return <StatsBlock text={block.text} />;

    case "comparison":
      return <ComparisonTable text={block.text} />;

    case "architecture":
      return (
        <div className="my-8 p-6 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="text-[15px] text-foreground/85 leading-relaxed font-mono">
            {renderMarkdown(block.text)}
          </div>
        </div>
      );

    case "image":
      return <ImageBlock text={block.text} />;

    case "timeline":
      return <TimelineBlock text={block.text} />;

    case "cta":
      return <CTABlock text={block.text} />;

    case "faq":
      return <FAQBlock text={block.text} />;

    default:
      return null;
  }
}

// --- Sub-components ---

function ImageBlock({ text }: { text: string }) {
  const lines = text.trim().split("\n");
  const src = lines[0]?.trim() || "";
  const caption = lines[1]?.trim() || "";
  const alt = lines[2]?.trim() || caption || "Blog illustration";

  return (
    <figure className="my-10">
      <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function StatsBlock({ text }: { text: string }) {
  const lines = text.trim().split("\n").filter(l => l.startsWith("- "));
  const stats = lines.map(l => {
    const match = l.slice(2).match(/\*\*(.+?)\*\*\s*(.+)/);
    return match ? { value: match[1], label: match[2] } : { value: "", label: l.slice(2) };
  });

  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="p-5 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/15 text-center">
          <TrendingUp size={18} className="text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
          <div className="text-xs text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable({ text }: { text: string }) {
  const lines = text.trim().split("\n").filter(l => l.includes("|"));
  if (lines.length < 2) return <div className="text-sm text-muted-foreground">{text}</div>;

  const headers = lines[0].split("|").map(c => c.trim()).filter(Boolean);
  const rows = lines.slice(2).map(l => l.split("|").map(c => c.trim()).filter(Boolean)); // skip separator row

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-border/60">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-accent/5 border-b border-border/40">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-foreground/75 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TimelineBlock({ text }: { text: string }) {
  const phases = text.split(/\*\*Phase/g).filter(Boolean).map(p => {
    const titleMatch = p.match(/^(.+?)\*\*/);
    const title = titleMatch ? `Phase${titleMatch[1]}` : "";
    const items = p.split("\n").filter(l => l.startsWith("- ")).map(l => l.slice(2));
    return { title, items };
  });

  return (
    <div className="my-8 space-y-4">
      {phases.map((phase, i) => (
        <div key={i} className="relative pl-8 pb-4 border-l-2 border-accent/30 last:border-0">
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-white" />
          <div className="flex items-center gap-2 mb-2">
            <Clock size={14} className="text-accent" />
            <h4 className="font-semibold text-foreground text-sm">{phase.title.replace(/\*\*/g, "")}</h4>
          </div>
          <ul className="space-y-1">
            {phase.items.map((item, j) => (
              <li key={j} className="text-sm text-foreground/70 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CTABlock({ text }: { text: string }) {
  const linkMatch = text.match(/\[(.+?)\]\((.+?)\)/);
  const descLines = text.split("\n").filter(l => !l.startsWith("**[") && l.trim() !== "");

  return (
    <div className="my-10 p-8 md:p-10 rounded-2xl text-center relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="relative z-10">
        <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          {descLines.map(l => l.replace(/\*\*/g, "")).join(" ")}
        </p>
        {linkMatch && (
          <Link
            to={linkMatch[2]}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-accent font-semibold hover:bg-white/90 transition-all shadow-lg"
          >
            {linkMatch[1].replace(" →", "")}
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}

function FAQBlock({ text }: { text: string }) {
  const qaPairs = text.split(/\*\*Q:/).filter(Boolean).map(qa => {
    const parts = qa.split(/\*\*\s*\n\s*A:/);
    const question = parts[0]?.replace(/\*\*/g, "").trim() || "";
    const answer = parts[1]?.trim() || "";
    return { question, answer };
  });

  return (
    <div className="my-8 space-y-3">
      <h3 className="text-xl font-heading font-bold text-foreground mb-4">Frequently Asked Questions</h3>
      {qaPairs.map((qa, i) => (
        <details key={i} className="group border border-border/60 rounded-xl bg-white overflow-hidden">
          <summary className="px-6 py-4 cursor-pointer text-[15px] font-medium text-foreground hover:bg-muted/30 transition-colors list-none flex items-center justify-between">
            {qa.question}
            <span className="text-accent ml-4 shrink-0 transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-3">
            {qa.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

// --- Inline rendering helpers ---
function renderInline(text: string): React.ReactNode {
  // Bold
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function renderMarkdown(text: string): React.ReactNode {
  const lines = text.split("\n").filter(l => l.trim() !== "");
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        if (line.trimStart().startsWith("- ")) {
          return (
            <div key={i} className="flex items-start gap-2 ml-2">
              <span className="w-1 h-1 rounded-full bg-current mt-2.5 shrink-0 opacity-50" />
              <span>{renderInline(line.trimStart().slice(2))}</span>
            </div>
          );
        }
        return <p key={i}>{renderInline(line)}</p>;
      })}
    </div>
  );
}

export default BlogRenderer;
