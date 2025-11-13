import Navbar from "@/components/navbar";
import { FEATURES, HOW_IT_WORKS, TESTIMONIALS } from "@/constants";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Users,
  Brain,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                AI-Powered Resume Analysis
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Land your dream job with{" "}
              <span className="text-primary">smarter resumes</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Get instant AI feedback on your resume. Catch mistakes, optimize
              keywords, and boost your chances with recruiters completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/upload">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2 text-lg">
                  Review Your Resume
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card/50 py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Resumes Reviewed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">87%</div>
              <p className="text-muted-foreground">
                Interview Rate Improvement
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Free</div>
              <p className="text-muted-foreground">Forever & Always</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Powerful AI-Driven Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI analyzes every aspect of your resume to identify
              improvements and increase your chances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-8"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to a better resume
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-primary/75 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/4 -right-8 w-16 h-0.5 bg-linear-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Trusted by Job Seekers
            </h2>
            <p className="text-xl text-muted-foreground">
              See what people are saying about ResumeAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-primary">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg mb-6 text-balance">{`"${testimonial.quote}"`}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="text-center border-t border-border py-12">
        <span>
          Made with <Heart className="inline border-none size-5" /> by{" "}
        </span>
        <a
          href="https://x.com/akgbytes"
          aria-label="twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:underline"
        >
          akgbytes
        </a>
      </footer>
    </div>
  );
}
