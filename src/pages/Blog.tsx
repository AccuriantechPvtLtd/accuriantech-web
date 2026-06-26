import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, User, Search } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PageBackdrop from "@/components/PageBackdrop";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        <SEOHead
          title="Blog & Insights – Accuriantech | Enterprise Technology Knowledge Center"
          description="Expert articles on enterprise AI, cloud migration, Salesforce, ServiceNow, and digital transformation. Authoritative insights from Accuriantech consultants."
          canonical="https://accuriantech.com/blog"
          keywords="enterprise AI blog, cloud migration guide, Salesforce articles, ServiceNow ITSM, Power BI insights, technology consulting blog"
        />
        <PageBackdrop />
        <Navbar />

        {/* Hero */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          <img src="/blog-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F172A]/55" />
          <div className="absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          </div>
          <div className="container mx-auto px-4 md:px-8 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-white/60 text-sm uppercase tracking-[0.15em] font-medium mb-4">
                Knowledge Center
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                Insights & Articles
              </h1>
              <p className="text-white/75 text-lg max-w-2xl">
                Authoritative perspectives on enterprise AI, cloud architecture, and digital transformation
                from our team of certified consultants.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border/40 bg-white/50 backdrop-blur-sm sticky top-[72px] z-30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-72">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-accent text-white shadow-[0_2px_12px_hsl(218_79%_46%_/_0.25)]"
                        : "bg-muted/50 text-muted-foreground hover:bg-accent/10 hover:text-accent"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredPosts.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="group bg-white rounded-2xl border border-border/50 overflow-hidden hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5"
                  >
                    {/* Hero banner */}
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 text-[10px] font-semibold rounded-full bg-white/15 text-white backdrop-blur-sm border border-white/10 uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 z-10">
                        <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-black/30 text-white/90 backdrop-blur-sm inline-flex items-center gap-1">
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

                      <h2 className="font-heading font-bold text-foreground text-[1.05rem] mb-3 leading-snug group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

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
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg mb-2">No articles found matching your criteria.</p>
                <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} className="text-accent font-medium text-sm hover:underline">
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
