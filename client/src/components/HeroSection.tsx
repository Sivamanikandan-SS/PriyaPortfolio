import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-16 md:pt-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I'm Priyadharshini
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Aspiring Software Engineer
              <br />& Full Stack Developer
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Computer Science Engineering student passionate about creating innovative IT solutions
              that make a real impact.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto"
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto"
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-chart-3/20 rounded-full blur-3xl" />
              <div className="relative flex items-center justify-center h-full">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="200" cy="200" r="150" fill="url(#gradient1)" opacity="0.3" />
                  <circle cx="200" cy="200" r="120" fill="url(#gradient2)" opacity="0.4" />
                  <circle cx="200" cy="200" r="90" fill="url(#gradient3)" opacity="0.5" />
                  <defs>
                    <radialGradient id="gradient1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </radialGradient>
                    <radialGradient id="gradient2">
                      <stop offset="0%" stopColor="hsl(var(--accent))" />
                      <stop offset="100%" stopColor="hsl(var(--chart-3))" />
                    </radialGradient>
                    <radialGradient id="gradient3">
                      <stop offset="0%" stopColor="hsl(var(--chart-3))" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
