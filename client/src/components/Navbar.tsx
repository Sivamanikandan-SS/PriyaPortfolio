import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "internship", label: "Internship" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl md:text-2xl font-bold text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md"
              data-testid="button-logo"
            >
              Priyadharshini N
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative mt-16 bg-card border-b border-card-border shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-6 py-4 text-base font-medium transition-colors hover-elevate active-elevate-2 border-b border-card-border last:border-b-0 ${
                  activeSection === link.id
                    ? "text-primary bg-primary/5"
                    : "text-foreground"
                }`}
                data-testid={`mobile-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
