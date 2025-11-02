import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Comparaison", href: "/comparison" },
  { name: "Tendances", href: "/trends" },
  { name: "Recommandations", href: "/recommendations" },
  { name: "Méthodologie", href: "/methodology" },
  { name: "Ressources", href: "/resources" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">Veille Tech</span>
              <span className="block text-xs text-muted-foreground">CESI 2024</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
