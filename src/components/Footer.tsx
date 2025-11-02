import { Link } from "react-router-dom";
import { BarChart3, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-foreground">Veille Tech</span>
                <span className="block text-xs text-muted-foreground">CESI 2024</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Projet de veille technologique sur les outils de gestion de projet gratuits.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/comparison" className="text-sm text-muted-foreground hover:text-primary transition-colors">Comparaison</Link></li>
              <li><Link to="/trends" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tendances</Link></li>
              <li><Link to="/recommendations" className="text-sm text-muted-foreground hover:text-primary transition-colors">Recommandations</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/methodology" className="text-sm text-muted-foreground hover:text-primary transition-colors">Méthodologie</Link></li>
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bibliographie</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Téléchargements</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@cesi.fr</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Github className="h-4 w-4" />
                <a href="#" className="hover:text-primary transition-colors">GitHub</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Linkedin className="h-4 w-4" />
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 CESI - Projet de veille technologique. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Module : Responsabilité éthique et sociétale du manager
          </p>
        </div>
      </div>
    </footer>
  );
};
