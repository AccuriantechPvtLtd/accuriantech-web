import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";

const BlogSection = () => {
  // Pick 3 posts from different categories for visual variety
  const seen = new Set<string>();
  const featured: typeof BLOG_POSTS = [];
  // Preferred order: AI first, then Cloud, then Salesforce
  const preferredCategories = ["AI Solutions", "Cloud", "Salesforce", "ServiceNow", "Power BI", "Software Development"];
  for (const cat of preferredCategories) {
    if (featured.length >= 3) break;
    const post = BLOG_POSTS.find(p => p.category === cat && !featured.includes(p));
    if (post) {
      featured.push(post);
      seen.add(post.category);
    }
  }
  // If less than 3 unique categories, fill remaining
  if (featured.length < 3) {
    for (const post of BLOG_POSTS) {
      if (!featured.includes(post) && featured.length < 3) {
        featured.push(post);
      }
    }
  }

  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3"
          >
            Insights & Articles
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-foreground mb-4"
          >
            Latest from Our Knowledge Center
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Expert perspectives on enterprise AI, cloud strategy, and digital transformation
            from the Accuriantech team.
          </motion.p>
        </div>

        {/* Blog Grid — Premium cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-border/50 overflow-hidden hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image / Hero Banner */}
              <div className="h-52 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 text-[11px] font-semibold rounded-full bg-white/15 text-white backdrop-blur-sm border border-white/10 uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                {/* Read time badge */}
                <div className="absolute bottom-4 right-4 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-black/30 text-white/90 backdrop-blur-sm inline-flex items-center gap-1">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={11} />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <User size={11} />
                    {post.author}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-foreground text-[1.05rem] mb-3 leading-snug group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-5">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all duration-300"
                >
                  Read Article
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_0_24px_hsl(218_79%_46%_/_0.3)]"
          >
            Explore All Insights
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
