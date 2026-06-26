import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PageBackdrop from "@/components/PageBackdrop";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted relative overflow-hidden">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Page Not Found – Accuriantech</title>
      </Helmet>
      <PageBackdrop variant="soft" />
      <div className="text-center rounded-2xl border border-border/60 bg-card/90 backdrop-blur-sm px-10 py-12 shadow-[var(--shadow-card)]">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
