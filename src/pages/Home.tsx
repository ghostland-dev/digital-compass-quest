import { Hero } from "@/components/Hero";
import { ToolCalculator } from "@/components/ToolCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Target,
      title: "Comparaison Détaillée",
      description: "Analyse approfondie de Trello, Asana et Monday avec scores et critères précis",
      link: "/comparison",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: TrendingUp,
      title: "Tendances 2024",
      description: "Les innovations qui transforment la gestion de projet cette année",
      link: "/trends",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Award,
      title: "Recommandation Finale",
      description: "Notre choix justifié avec plan de déploiement et ROI estimé",
      link: "/recommendations",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: BookOpen,
      title: "Méthodologie",
      description: "Découvrez notre approche de veille technologique et nos sources",
      link: "/methodology",
      color: "bg-success/10 text-success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Hero />
      
      {/* Quick Access Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explorez Notre Étude
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Accédez rapidement aux différentes sections de notre veille technologique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer"
                >
                  <Link to={feature.link}>
                    <CardHeader>
                      <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="group/btn">
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trouvez Votre Outil Idéal
            </h2>
            <p className="text-lg text-muted-foreground">
              Utilisez notre calculateur pour une recommandation personnalisée
            </p>
          </div>
          <ToolCalculator />
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Contexte du Projet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Dans le cadre du module <strong className="text-foreground">"Responsabilité éthique et sociétale du manager"</strong> à 
                CESI, ce projet de veille technologique s'inscrit dans une démarche d'amélioration continue 
                du bien-être et de la productivité des employés en entreprise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre mission : identifier et comparer les meilleurs outils gratuits de gestion de projet 
                pour proposer une solution adaptée qui renforce l'engagement et facilite la collaboration 
                au sein des équipes.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <Link to="/methodology">
                  <Button variant="outline">
                    Découvrir la méthodologie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline">
                    Consulter les ressources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
