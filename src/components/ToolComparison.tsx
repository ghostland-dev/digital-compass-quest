import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Users, Zap, Palette, Target, TrendingUp } from "lucide-react";

const tools = [
  {
    name: "Trello",
    tagline: "Organisation visuelle par tableaux",
    color: "bg-blue-500",
    features: {
      interface: { score: 5, text: "Interface intuitive et visuelle type Kanban" },
      collaboration: { score: 4, text: "Collaboration fluide avec commentaires et mentions" },
      fonctionnalites: { score: 3, text: "Fonctionnalités basiques mais efficaces" },
      integration: { score: 4, text: "Nombreuses intégrations disponibles" },
      courbe: { score: 5, text: "Prise en main immédiate" }
    },
    pros: [
      "Interface visuelle très intuitive",
      "Gratuit jusqu'à 10 tableaux",
      "Excellent pour méthodologie Kanban",
      "Application mobile performante"
    ],
    cons: [
      "Fonctionnalités avancées limitées en version gratuite",
      "Moins adapté aux projets complexes"
    ],
    bestFor: "Petites équipes recherchant simplicité et visualisation"
  },
  {
    name: "Asana",
    tagline: "Gestion de projet complète",
    color: "bg-pink-500",
    features: {
      interface: { score: 4, text: "Interface moderne et professionnelle" },
      collaboration: { score: 5, text: "Outils de collaboration avancés" },
      fonctionnalites: { score: 5, text: "Large gamme de fonctionnalités" },
      integration: { score: 5, text: "Intégrations nombreuses et puissantes" },
      courbe: { score: 3, text: "Nécessite un temps d'adaptation" }
    },
    pros: [
      "Fonctionnalités très complètes",
      "Vues multiples (liste, tableau, chronologie)",
      "Gestion de dépendances entre tâches",
      "Reporting et tableaux de bord"
    ],
    cons: [
      "Interface plus complexe",
      "Limite de 10 membres en version gratuite"
    ],
    bestFor: "Équipes moyennes avec besoins avancés de planification"
  },
  {
    name: "Monday.com",
    tagline: "Plateforme de travail collaborative",
    color: "bg-orange-500",
    features: {
      interface: { score: 5, text: "Interface moderne et personnalisable" },
      collaboration: { score: 5, text: "Collaboration en temps réel excellente" },
      fonctionnalites: { score: 4, text: "Riche en fonctionnalités" },
      integration: { score: 4, text: "Bonnes options d'intégration" },
      courbe: { score: 4, text: "Relativement accessible" }
    },
    pros: [
      "Interface hautement personnalisable",
      "Automatisations puissantes",
      "Visualisations de données excellentes",
      "Support client réactif"
    ],
    cons: [
      "Version gratuite très limitée (2 utilisateurs)",
      "Prix élevé pour version complète"
    ],
    bestFor: "Organisations valorisant la personnalisation et l'automatisation"
  }
];

const criteria = [
  { key: "interface", label: "Interface utilisateur", icon: Palette },
  { key: "collaboration", label: "Collaboration", icon: Users },
  { key: "fonctionnalites", label: "Fonctionnalités", icon: Zap },
  { key: "integration", label: "Intégrations", icon: Target },
  { key: "courbe", label: "Facilité d'apprentissage", icon: TrendingUp }
];

export const ToolComparison = () => {
  return (
    <section id="comparison" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Comparaison Détaillée
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analyse approfondie de trois solutions leaders du marché
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, idx) => (
            <Card 
              key={tool.name} 
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${tool.color}`} />
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-2xl mb-2">{tool.name}</CardTitle>
                    <CardDescription className="text-base">{tool.tagline}</CardDescription>
                  </div>
                  <Badge className={`${tool.color} text-white border-0`}>
                    {Math.round(Object.values(tool.features).reduce((acc, f: any) => acc + f.score, 0) / 5 * 20)}%
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Criteria Scores */}
                <div className="space-y-3">
                  {criteria.map(({ key, label, icon: Icon }) => {
                    const feature = tool.features[key as keyof typeof tool.features];
                    return (
                      <div key={key} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{label}</span>
                          </div>
                          <span className="text-muted-foreground">{feature.score}/5</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`${tool.color} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${(feature.score / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pros */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-success">
                    <CheckCircle2 className="h-5 w-5" />
                    Points forts
                  </h4>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-success mt-1">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
                    <XCircle className="h-5 w-5" />
                    Limitations
                  </h4>
                  <ul className="space-y-2">
                    {tool.cons.map((con, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div className="pt-4 border-t">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Idéal pour : </span>
                    <span className="text-muted-foreground">{tool.bestFor}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
