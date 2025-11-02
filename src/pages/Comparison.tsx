import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, XCircle, Users, Zap, Palette, Target, TrendingUp, DollarSign, Shield, Smartphone } from "lucide-react";

const tools = [
  {
    name: "Trello",
    tagline: "Organisation visuelle par tableaux",
    color: "bg-blue-500",
    logo: "🗂️",
    description: "Trello utilise une approche Kanban intuitive avec des tableaux, des listes et des cartes pour organiser visuellement les tâches et projets.",
    features: {
      interface: { score: 5, text: "Interface intuitive et visuelle type Kanban" },
      collaboration: { score: 4, text: "Collaboration fluide avec commentaires et mentions" },
      fonctionnalites: { score: 3, text: "Fonctionnalités basiques mais efficaces" },
      integration: { score: 4, text: "Nombreuses intégrations disponibles" },
      courbe: { score: 5, text: "Prise en main immédiate" },
      prix: { score: 5, text: "10 tableaux gratuits, excellent rapport qualité/prix" },
      mobile: { score: 5, text: "Application mobile excellente" },
      securite: { score: 4, text: "Sécurité standard avec 2FA" }
    },
    pros: [
      "Interface visuelle très intuitive",
      "Gratuit jusqu'à 10 tableaux",
      "Excellent pour méthodologie Kanban",
      "Application mobile performante",
      "Courbe d'apprentissage quasi nulle",
      "Power-Ups pour étendre les fonctionnalités"
    ],
    cons: [
      "Fonctionnalités avancées limitées en version gratuite",
      "Moins adapté aux projets très complexes",
      "Automatisations limitées sans Butler premium"
    ],
    pricing: {
      free: "10 tableaux, illimité en membres",
      standard: "5$/mois - tableaux illimités, 1000 automatisations",
      premium: "10$/mois - vues avancées, admin personnalisé"
    },
    bestFor: "Petites équipes (5-15 personnes) recherchant simplicité et visualisation Kanban",
    useCases: ["Gestion de sprints Agile", "Suivi de campagnes marketing", "Organisation d'événements"]
  },
  {
    name: "Asana",
    tagline: "Gestion de projet complète",
    color: "bg-pink-500",
    logo: "📋",
    description: "Asana est une plateforme robuste de gestion de travail qui permet de coordonner tous les aspects d'un projet avec des vues multiples et des workflows personnalisés.",
    features: {
      interface: { score: 4, text: "Interface moderne et professionnelle" },
      collaboration: { score: 5, text: "Outils de collaboration avancés" },
      fonctionnalites: { score: 5, text: "Large gamme de fonctionnalités" },
      integration: { score: 5, text: "Intégrations nombreuses et puissantes" },
      courbe: { score: 3, text: "Nécessite un temps d'adaptation" },
      prix: { score: 4, text: "Gratuit jusqu'à 10 membres" },
      mobile: { score: 4, text: "Application mobile complète" },
      securite: { score: 5, text: "Sécurité enterprise-grade" }
    },
    pros: [
      "Fonctionnalités très complètes",
      "Vues multiples (liste, tableau, chronologie, calendrier)",
      "Gestion de dépendances entre tâches",
      "Reporting et tableaux de bord avancés",
      "Templates prêts à l'emploi",
      "Excellentes intégrations tierces"
    ],
    cons: [
      "Interface plus complexe à maîtriser",
      "Limite de 10 membres en version gratuite",
      "Peut sembler surchargé pour projets simples"
    ],
    pricing: {
      free: "Jusqu'à 10 membres, fonctionnalités de base",
      premium: "10.99$/mois - chronologie, reporting avancé",
      business: "24.99$/mois - portfolios, workflows personnalisés"
    },
    bestFor: "Équipes moyennes à grandes (10-100 personnes) avec besoins avancés de planification",
    useCases: ["Gestion de produit complexe", "Coordination multi-équipes", "Suivi de roadmaps"]
  },
  {
    name: "Monday.com",
    tagline: "Plateforme de travail collaborative",
    color: "bg-orange-500",
    logo: "🎯",
    description: "Monday.com est une plateforme Work OS hautement personnalisable qui permet de créer des workflows sur mesure avec une interface visuelle moderne.",
    features: {
      interface: { score: 5, text: "Interface moderne et personnalisable" },
      collaboration: { score: 5, text: "Collaboration en temps réel excellente" },
      fonctionnalites: { score: 4, text: "Riche en fonctionnalités" },
      integration: { score: 4, text: "Bonnes options d'intégration" },
      courbe: { score: 4, text: "Relativement accessible" },
      prix: { score: 2, text: "Version gratuite très limitée (2 users)" },
      mobile: { score: 4, text: "Application mobile solide" },
      securite: { score: 5, text: "Certifications de sécurité multiples" }
    },
    pros: [
      "Interface hautement personnalisable",
      "Automatisations puissantes et visuelles",
      "Visualisations de données excellentes",
      "Support client réactif",
      "Nombreux templates par industrie",
      "Tableaux de bord personnalisables"
    ],
    cons: [
      "Version gratuite très limitée (2 utilisateurs)",
      "Prix élevé pour version complète",
      "Peut devenir complexe avec trop de personnalisation"
    ],
    pricing: {
      free: "2 utilisateurs seulement",
      basic: "8$/mois/user - 5GB stockage, vues illimitées",
      standard: "10$/mois/user - chronologie, automations"
    },
    bestFor: "Organisations (20+ personnes) valorisant la personnalisation et l'automatisation",
    useCases: ["Gestion de CRM", "Planification de ressources", "Suivi de projets clients"]
  }
];

const criteria = [
  { key: "interface", label: "Interface utilisateur", icon: Palette },
  { key: "collaboration", label: "Collaboration", icon: Users },
  { key: "fonctionnalites", label: "Fonctionnalités", icon: Zap },
  { key: "integration", label: "Intégrations", icon: Target },
  { key: "courbe", label: "Facilité d'apprentissage", icon: TrendingUp },
  { key: "prix", label: "Rapport qualité/prix", icon: DollarSign },
  { key: "mobile", label: "Application mobile", icon: Smartphone },
  { key: "securite", label: "Sécurité", icon: Shield }
];

const Comparison = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Comparaison Détaillée des Outils
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analyse approfondie de trois solutions leaders du marché de la gestion de projet
          </p>
        </div>

        {/* Tabs for different views */}
        <Tabs defaultValue="overview" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="detailed">Détaillé</TabsTrigger>
            <TabsTrigger value="pricing">Tarifs</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {tools.map((tool, idx) => (
                <Card 
                  key={tool.name} 
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() => setSelectedTool(tool.name)}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 ${tool.color}`} />
                  
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-4xl mb-2">{tool.logo}</div>
                        <CardTitle className="text-2xl mb-2">{tool.name}</CardTitle>
                        <CardDescription className="text-base">{tool.tagline}</CardDescription>
                      </div>
                      <Badge className={`${tool.color} text-white border-0`}>
                        {Math.round(Object.values(tool.features).reduce((acc, f: any) => acc + f.score, 0) / 8 * 20)}%
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Criteria Scores */}
                    <div className="space-y-3">
                      {criteria.slice(0, 5).map(({ key, label, icon: Icon }) => {
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

                    <Button className="w-full" variant="outline">
                      Voir les détails complets
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Detailed Tab */}
          <TabsContent value="detailed" className="mt-8">
            <div className="space-y-8">
              {tools.map((tool) => (
                <Card key={tool.name} className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{tool.logo}</div>
                      <div>
                        <CardTitle className="text-3xl">{tool.name}</CardTitle>
                        <CardDescription className="text-lg mt-1">{tool.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* All Criteria */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Évaluation Complète</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {criteria.map(({ key, label, icon: Icon }) => {
                          const feature = tool.features[key as keyof typeof tool.features];
                          return (
                            <div key={key} className="p-4 rounded-lg bg-muted/50">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Icon className="h-5 w-5 text-primary" />
                                  <span className="font-semibold">{label}</span>
                                </div>
                                <Badge variant="secondary">{feature.score}/5</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{feature.text}</p>
                              <div className="w-full bg-background rounded-full h-2 mt-2">
                                <div 
                                  className={`${tool.color} h-2 rounded-full`}
                                  style={{ width: `${(feature.score / 5) * 100}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-success text-lg">
                          <CheckCircle2 className="h-5 w-5" />
                          Points forts
                        </h4>
                        <ul className="space-y-2">
                          {tool.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-success mt-1">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-destructive text-lg">
                          <XCircle className="h-5 w-5" />
                          Limitations
                        </h4>
                        <ul className="space-y-2">
                          {tool.cons.map((con, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-destructive mt-1">✗</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Cas d'usage typiques</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.useCases.map((useCase, i) => (
                          <Badge key={i} variant="outline" className="text-sm">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Best For */}
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-sm">
                        <span className="font-semibold text-foreground">💡 Idéal pour : </span>
                        <span className="text-muted-foreground">{tool.bestFor}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <Card key={tool.name} className="border-2">
                  <CardHeader>
                    <div className="text-4xl mb-2">{tool.logo}</div>
                    <CardTitle className="text-2xl">{tool.name}</CardTitle>
                    <CardDescription>Grille tarifaire</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                      <div className="font-semibold text-success mb-2">Gratuit</div>
                      <p className="text-sm text-muted-foreground">{tool.pricing.free}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted">
                      <div className="font-semibold mb-2">Payant</div>
                      <p className="text-sm text-muted-foreground mb-1">{tool.pricing.standard || tool.pricing.basic}</p>
                      <p className="text-sm text-muted-foreground">{tool.pricing.premium || tool.pricing.business}</p>
                    </div>
                    <div className="pt-2">
                      <Badge className={`${tool.color} text-white border-0`}>
                        Score prix: {tool.features.prix.score}/5
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Comparison;
