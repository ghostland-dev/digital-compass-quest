import { TrendsWatch } from "@/components/TrendsWatch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, BarChart3, Calendar } from "lucide-react";

const Trends = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <Badge className="mb-2">Analyse 2024-2025</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Tendances Numériques en Gestion de Projet
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Les innovations technologiques qui transforment la collaboration et la productivité
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <LineChart className="h-8 w-8 text-primary" />
                <Badge variant="secondary">Croissance</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">+47%</div>
              <p className="text-sm text-muted-foreground">
                Adoption des outils collaboratifs en 2024
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <BarChart3 className="h-8 w-8 text-secondary" />
                <Badge variant="secondary">Marché</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary mb-2">6.5Mds$</div>
              <p className="text-sm text-muted-foreground">
                Taille du marché global des outils PM
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Calendar className="h-8 w-8 text-accent" />
                <Badge variant="secondary">Prévision</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent mb-2">83%</div>
              <p className="text-sm text-muted-foreground">
                Des entreprises utiliseront l'IA d'ici 2026
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Trends Component */}
        <TrendsWatch />

        {/* Future Outlook */}
        <div className="mt-16">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Perspectives 2025-2026</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Émergence de nouvelles technologies</h3>
                  <ul className="space-y-2">
                    {[
                      "IA générative pour la création automatique de tâches",
                      "Réalité augmentée pour la collaboration à distance",
                      "Blockchain pour la traçabilité des projets",
                      "Analytics prédictifs basés sur le machine learning"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Évolution des pratiques</h3>
                  <ul className="space-y-2">
                    {[
                      "Travail asynchrone comme norme",
                      "Décentralisation des équipes",
                      "Focus sur le bien-être et l'équilibre vie pro/perso",
                      "Méthodologies hybrides (Agile + Waterfall)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Note :</strong> Ces tendances sont basées sur l'analyse de rapports sectoriels 
                  (Gartner, Forrester) et d'études de marché récentes. Les entreprises qui adoptent 
                  ces innovations tôt bénéficient d'un avantage concurrentiel significatif.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Trends;
