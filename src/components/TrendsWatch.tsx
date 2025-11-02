import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cloud, Lock, Smartphone, TrendingUp, Workflow } from "lucide-react";

const trends = [
  {
    icon: Brain,
    title: "Intelligence Artificielle Intégrée",
    category: "IA & Automatisation",
    description: "Les outils intègrent de plus en plus d'IA pour automatiser les tâches répétitives, suggérer des plannings optimaux et prédire les retards potentiels.",
    impact: "Élevé",
    examples: ["Asana AI", "Monday AI", "ClickUp AI"]
  },
  {
    icon: Cloud,
    title: "Collaboration Hybride",
    category: "Travail à distance",
    description: "Solutions optimisées pour les équipes hybrides avec fonctionnalités de visioconférence intégrée, tableaux blancs virtuels et synchronisation temps réel.",
    impact: "Élevé",
    examples: ["Miro", "Notion", "Microsoft Teams"]
  },
  {
    icon: Workflow,
    title: "No-Code & Automatisation",
    category: "Productivité",
    description: "Interfaces no-code permettant de créer des workflows complexes sans compétences techniques, démocratisant l'automatisation.",
    impact: "Moyen",
    examples: ["Zapier", "Make", "Airtable Automations"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    category: "Mobilité",
    description: "Applications mobiles aussi puissantes que les versions desktop, permettant une gestion complète en déplacement.",
    impact: "Élevé",
    examples: ["Notion Mobile", "Todoist", "Things 3"]
  },
  {
    icon: Lock,
    title: "Sécurité & Conformité",
    category: "Sécurité",
    description: "Renforcement des protocoles de sécurité (RGPD, ISO 27001) et fonctionnalités avancées de gestion des accès.",
    impact: "Moyen",
    examples: ["Encryption end-to-end", "SSO", "2FA obligatoire"]
  },
  {
    icon: TrendingUp,
    title: "Analytics & Data-Driven",
    category: "Performance",
    description: "Tableaux de bord analytiques avancés pour mesurer la productivité, identifier les goulots d'étranglement et optimiser les processus.",
    impact: "Élevé",
    examples: ["Power BI Integration", "Tableau", "Custom Dashboards"]
  }
];

export const TrendsWatch = () => {
  return (
    <section id="trends" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Tendances Numériques 2024
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Les innovations qui transforment la gestion de projet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map((trend, idx) => {
            const Icon = trend.icon;
            return (
              <Card 
                key={idx} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge 
                      variant={trend.impact === "Élevé" ? "default" : "secondary"}
                      className={trend.impact === "Élevé" ? "bg-primary" : ""}
                    >
                      Impact {trend.impact}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{trend.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-primary">
                    {trend.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {trend.description}
                  </p>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2">Exemples :</p>
                    <div className="flex flex-wrap gap-2">
                      {trend.examples.map((example, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Insights */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Impact sur les Entreprises</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Ces tendances technologiques transforment profondément la manière dont les équipes collaborent et gèrent leurs projets. 
                L'adoption de ces innovations permet d'améliorer significativement :
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "La productivité des équipes (+35% en moyenne)",
                  "La satisfaction des employés",
                  "La transparence et la communication",
                  "La prise de décision basée sur les données"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
