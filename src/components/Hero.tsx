import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToComparison = () => {
    document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-75" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Veille Technologique 2024
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Outils de Gestion de Projet
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Analyse Comparative
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une étude approfondie des solutions gratuites pour optimiser la collaboration 
            et améliorer le confort des employés
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={scrollToComparison}
            >
              Découvrir l'analyse
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all duration-300"
              onClick={() => document.getElementById("trends")?.scrollIntoView({ behavior: "smooth" })}
            >
              Tendances numériques
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Outils analysés</div>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Gratuits</div>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-accent mb-2">5</div>
              <div className="text-sm text-muted-foreground">Critères comparés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
