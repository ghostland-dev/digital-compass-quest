import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, BarChart, CheckCircle, Target, Users } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      icon: Target,
      title: "1. Définition des objectifs",
      duration: "Semaine 1",
      description: "Identification des besoins de l'entreprise et des critères d'évaluation",
      tasks: [
        "Analyse du contexte entreprise",
        "Identification des pain points actuels",
        "Définition des critères d'évaluation (interface, collaboration, prix, etc.)",
        "Validation avec les parties prenantes"
      ]
    },
    {
      icon: Search,
      title: "2. Recherche et sélection",
      duration: "Semaine 2-3",
      description: "Identification et présélection des outils gratuits du marché",
      tasks: [
        "Veille technologique sur les outils disponibles",
        "Analyse des avis utilisateurs (G2, Capterra)",
        "Présélection de 3 outils leaders (Trello, Asana, Monday)",
        "Création de comptes tests sur chaque plateforme"
      ]
    },
    {
      icon: FileText,
      title: "3. Tests pratiques",
      duration: "Semaine 4-5",
      description: "Évaluation approfondie de chaque outil en conditions réelles",
      tasks: [
        "Création de projets tests types",
        "Test des fonctionnalités clés",
        "Évaluation de l'ergonomie et de la courbe d'apprentissage",
        "Tests avec un groupe pilote de 5 utilisateurs"
      ]
    },
    {
      icon: BarChart,
      title: "4. Analyse comparative",
      duration: "Semaine 6",
      description: "Comparaison détaillée selon les critères définis",
      tasks: [
        "Notation de chaque outil (score /5)",
        "Analyse des forces et faiblesses",
        "Évaluation du rapport qualité/prix",
        "Synthèse des retours utilisateurs"
      ]
    },
    {
      icon: CheckCircle,
      title: "5. Recommandation",
      duration: "Semaine 7",
      description: "Formulation de la recommandation finale argumentée",
      tasks: [
        "Choix justifié de l'outil optimal",
        "Élaboration du plan de déploiement",
        "Estimation du ROI",
        "Préparation de la documentation"
      ]
    },
    {
      icon: Users,
      title: "6. Présentation",
      duration: "Semaine 8",
      description: "Communication des résultats aux décideurs",
      tasks: [
        "Préparation de la présentation orale",
        "Création de supports visuels",
        "Anticipation des questions",
        "Présentation devant le jury"
      ]
    }
  ];

  const criteria = [
    { name: "Interface utilisateur", weight: "20%", description: "Intuitivité et design" },
    { name: "Collaboration", weight: "20%", description: "Outils de travail d'équipe" },
    { name: "Fonctionnalités", weight: "15%", description: "Richesse des features" },
    { name: "Intégrations", weight: "15%", description: "Compatibilité avec autres outils" },
    { name: "Facilité d'apprentissage", weight: "15%", description: "Courbe d'adoption" },
    { name: "Rapport qualité/prix", weight: "10%", description: "Offre gratuite vs payante" },
    { name: "Application mobile", weight: "5%", description: "Mobilité et accessibilité" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <Badge className="mb-2">Méthodologie scientifique</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Notre Approche de Veille Technologique
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une démarche structurée et rigoureuse sur 8 semaines
          </p>
        </div>

        {/* Overview Card */}
        <Card className="mb-16 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Vue d'ensemble</CardTitle>
            <CardDescription>Principes fondamentaux de notre analyse</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Notre méthodologie de veille technologique s'appuie sur une approche structurée combinant 
              recherche documentaire, tests pratiques et analyse comparative. L'objectif est de fournir 
              une recommandation objective et argumentée basée sur des critères mesurables et pertinents 
              pour le contexte de l'entreprise.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="text-center p-3 rounded-lg bg-background/50">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-xs text-muted-foreground">Semaines</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background/50">
                <div className="text-2xl font-bold text-secondary">3</div>
                <div className="text-xs text-muted-foreground">Outils testés</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background/50">
                <div className="text-2xl font-bold text-accent">7</div>
                <div className="text-xs text-muted-foreground">Critères d'évaluation</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background/50">
                <div className="text-2xl font-bold text-success">5</div>
                <div className="text-xs text-muted-foreground">Testeurs pilotes</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Steps Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Processus en 6 étapes
          </h2>
          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={idx} 
                  className="border-2 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                          <Badge variant="outline">{step.duration}</Badge>
                        </div>
                        <CardDescription className="text-base">{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Evaluation Criteria */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Critères d'évaluation</CardTitle>
            <CardDescription>Grille de notation pondérée</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criteria.map((criterion, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{criterion.name}</div>
                    <div className="text-sm text-muted-foreground">{criterion.description}</div>
                  </div>
                  <Badge className="ml-4 bg-primary">{criterion.weight}</Badge>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm text-center">
                <span className="font-semibold">Score final calculé :</span> Moyenne pondérée sur 5 points
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sources */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Sources et références</CardTitle>
            <CardDescription>Documentation utilisée pour cette veille</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Sources primaires</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Documentation officielle : Trello, Asana, Monday.com</li>
                  <li>• Tests pratiques en conditions réelles (5 utilisateurs sur 3 semaines)</li>
                  <li>• Retours d'expérience internes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sources secondaires</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Gartner Magic Quadrant for Collaborative Work Management Tools 2024</li>
                  <li>• Forrester Wave: Collaborative Work Management Tools, Q3 2024</li>
                  <li>• Avis utilisateurs : G2 (50K+ reviews), Capterra, TrustRadius</li>
                  <li>• Articles académiques sur ScholarVox concernant la gestion de projet</li>
                  <li>• Études de cas d'entreprises similaires</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Rapports sectoriels</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Project Management Institute - Pulse of the Profession 2024</li>
                  <li>• McKinsey - Future of Work Post-Pandemic</li>
                  <li>• Deloitte Tech Trends 2024</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Methodology;
