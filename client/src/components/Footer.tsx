import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm md:text-base text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          <span>© 2025 Priyadharshini N</span>
          <span>—</span>
          <span className="flex items-center gap-2">
            Crafted with
            <Heart className="h-4 w-4 text-destructive fill-current" />
            using React and TailwindCSS
          </span>
        </p>
      </div>
    </footer>
  );
}
