import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, ArrowRight, Share2, Bookmark } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PageBackdrop from "@/components/PageBackdrop";
import BlogRenderer from "@/components/BlogRenderer";
import { BLOG_POSTS } from "@/lib/blog-data";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen relative overflow-hidden">
          <PageBackdrop />
          <Navbar />
          <div className="container mx-auto px-4 md:px-8 py-32 text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        <SEOHead
          title={post.seoTitle}
          description={post.metaDescription}
          canonical={`https://accuriantech.com/blog/${post.slug}`}
          keywords={post.keywords.join(", ")}
        />
        <PageBackdrop />
        <Navbar />

        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border/40">
          <div className="container mx-auto px-4 md:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <ChevronRight size={12} />
              <span className="text-foreground/70 truncate max-w-[200px] md:max-w-md">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Hero with Cover Image */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent" />
          <div className="container mx-auto px-4 md:px-8 max-w-4xl pt-12 pb-8 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Category badge */}
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent mb-5">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-foreground mb-6 leading-[1.2]">
                {post.title}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-5 text-muted-foreground text-sm pb-6 border-b border-border/50">
                <span className="inline-flex items-center gap-1.5">
                  <User size={14} className="text-accent" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} className="text-accent" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} className="text-accent" />
                  {post.readTime}
                </span>
                <div className="ml-auto hidden md:flex items-center gap-3">
                  <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-accent transition-colors" aria-label="Share">
                    <Share2 size={16} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-accent transition-colors" aria-label="Bookmark">
                    <Bookmark size={16} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Cover Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 rounded-2xl overflow-hidden border border-border/40 shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <BlogRenderer content={post.content} />
            </motion.div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border/40">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Topics:</span>
                {post.keywords.map((kw) => (
                  <span key={kw} className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {related.map((relPost) => (
                    <Link
                      key={relPost.slug}
                      to={`/blog/${relPost.slug}`}
                      className="group bg-white rounded-xl border border-border/60 p-5 hover:shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <span className="text-[11px] font-semibold text-accent mb-2 block uppercase tracking-wide">{relPost.category}</span>
                      <h4 className="font-heading font-semibold text-foreground text-sm group-hover:text-accent transition-colors line-clamp-2 mb-2 leading-snug">
                        {relPost.title}
                      </h4>
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground mt-3">
                        <span>{relPost.date}</span>
                        <span>•</span>
                        <span>{relPost.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
