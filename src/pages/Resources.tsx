import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, FileText, Video, Globe, Download } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      category: "Documentation Officielle",
      icon: FileText,
      items: [
        { name: "Trello - Guide de démarrage", url: "https://trello.com/guide", type: "Guide" },
        { name: "Asana - Documentation", url: "https://asana.com/guide", type: "Documentation" },
        { name: "Monday.com - Academy", url: "https://monday.com/academy", type: "Formation" }
      ]
    },
    {
      category: "Études et Rapports",
      icon: BookOpen,
      items: [
        { name: "Gartner Magic Quadrant 2024", url: "#", type: "Rapport" },
        { name: "Forrester Wave Q3 2024", url: "#", type: "Analyse" },
        { name: "PMI Pulse of the Profession", url: "#", type: "Étude" },
        { name: "McKinsey Future of Work", url: "#", type: "Rapport" }
      ]
    },
    {
      category: "Vidéos et Tutoriels",
      icon: Video,
      items: [
        { name: "Trello : Méthodologie Kanban", url: "#", type: "Vidéo" },
        { name: "Asana : Gestion de projet avancée", url: "#", type: "Tutoriel" },
        { name: "Monday : Automatisations", url: "#", type: "Formation" },
        { name: "Comparatif outils PM 2024", url: "#", type: "Webinar" }
      ]
    },
    {
      category: "Communautés et Forums",
      icon: Globe,
      items: [
        { name: "r/ProjectManagement", url: "https://reddit.com/r/projectmanagement", type: "Forum" },
        { name: "Product Hunt - PM Tools", url: "https://producthunt.com", type: "Community" },
        { name: "Slack : PM Professionals", url: "#", type: "Communauté" },
        { name: "LinkedIn : Project Management", url: "#", type: "Groupe" }
      ]
    }
  ];

  const downloads = [
    {
      title: "Présentation complète (PDF)",
      description: "Slides de présentation avec tous les résultats de l'étude",
      size: "2.3 MB",
      icon: FileText
    },
    {
      title: "Grille d'évaluation (Excel)",
      description: "Matrice comparative avec scores détaillés",
      size: "156 KB",
      icon: FileText
    },
    {
      title: "Guide de déploiement",
      description: "Checklist et planning pour mise en place de Trello",
      size: "890 KB",
      icon: FileText
    }
  ];

  const bibliography = [
    {
      authors: "Project Management Institute",
      year: "2024",
      title: "Pulse of the Profession 2024: Technology and the future of project management",
      publisher: "PMI"
    },
    {
      authors: "Gartner",
      year: "2024",
      title: "Magic Quadrant for Collaborative Work Management Tools",
      publisher: "Gartner Research"
    },
    {
      authors: "Forrester Research",
      year: "2024",
      title: "The Forrester Wave: Collaborative Work Management Tools, Q3 2024",
      publisher: "Forrester"
    },
    {
      authors: "McKinsey & Company",
      year: "2024",
      title: "The Future of Work After COVID-19",
      publisher: "McKinsey Global Institute"
    },
    {
      authors: "Deloitte",
      year: "2024",
      title: "Tech Trends 2024: Navigating digital transformation",
      publisher: "Deloitte Insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <Badge className="mb-2">Centre de ressources</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Ressources et Bibliographie
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Documentation, études et sources utilisées pour cette veille technologique
          </p>
        </div>

        {/* Resources by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card 
                key={idx} 
                className="border-2 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="group">
                        <a 
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-sm group-hover:text-primary transition-colors">
                              {item.name}
                            </div>
                            <Badge variant="outline" className="mt-1 text-xs">
                              {item.type}
                            </Badge>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Downloads */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Documents à télécharger
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloads.map((download, idx) => {
              const Icon = download.icon;
              return (
                <Card key={idx} className="border-2 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{download.title}</CardTitle>
                    <CardDescription>{download.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{download.size}</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bibliography */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Bibliographie complète</CardTitle>
            <CardDescription>
              Liste des sources principales citées dans cette étude (format APA)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bibliography.map((ref, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <p className="text-sm">
                    <span className="font-semibold">{ref.authors}</span> ({ref.year}). 
                    <em> {ref.title}</em>. {ref.publisher}.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Sources additionnelles
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Avis utilisateurs G2.com : 50,000+ reviews analysées</li>
                <li>• Capterra et TrustRadius : Comparaisons et ratings</li>
                <li>• Documentation technique des éditeurs (Trello, Asana, Monday)</li>
                <li>• Blogs spécialisés : ProductivityLand, PM Student, ProjectManager.com</li>
                <li>• Retours d'expérience de 15 entreprises utilisatrices</li>
                <li>• Tests pratiques réalisés sur 3 semaines avec 5 utilisateurs pilotes</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Dernière mise à jour : Novembre 2024
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
