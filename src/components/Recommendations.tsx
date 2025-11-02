import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export const Recommendations = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
            <Award className="h-5 w-5" />
            <span className="font-semibold">Recommandation Finale</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Notre Choix : Trello
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La solution optimale pour votre entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main Recommendation Card */}
          <Card className="lg:col-span-2 border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">Pourquoi Trello ?</CardTitle>
                  <CardDescription className="text-base mt-1">
                    L'équilibre parfait entre simplicité et efficacité
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Après analyse approfondie, <strong className="text-foreground">Trello</strong> s'impose comme 
                le choix le plus adapté pour améliorer le confort et la productivité des employés de votre entreprise.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Adoption immédiate",
                    description: "Interface intuitive ne nécessitant aucune formation, permettant une mise en place rapide"
                  },
                  {
                    title: "Flexibilité maximale",
                    description: "S'adapte à tous les types de projets et méthodologies (Kanban, Scrum, GTD)"
                  },
                  {
                    title: "Coût optimal",
                    description: "Version gratuite généreuse (jusqu'à 10 tableaux) suffisante pour la plupart des équipes"
                  },
                  {
                    title: "Bien-être au travail",
                    description: "Réduit le stress lié à l'organisation et améliore la visibilité sur les tâches"
                  }
                ].map((reason, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">{reason.title}</h4>
                        <p className="text-sm text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Implementation Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Plan de Déploiement</CardTitle>
              <CardDescription>Stratégie de mise en œuvre progressive</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { phase: "Phase 1", title: "Projet pilote", duration: "2 semaines", description: "Test avec une équipe de 5-10 personnes" },
                  { phase: "Phase 2", title: "Formation", duration: "1 semaine", description: "Sessions de formation pour tous les utilisateurs" },
                  { phase: "Phase 3", title: "Déploiement", duration: "1 mois", description: "Généralisation progressive à l'entreprise" },
                  { phase: "Phase 4", title: "Optimisation", duration: "Continue", description: "Ajustements et personnalisations" }
                ].map((step, i) => (
                  <div key={i} className="relative pl-6 pb-4 border-l-2 border-primary/30 last:border-transparent last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-primary">{step.phase}</span>
                        <span className="text-xs text-muted-foreground">{step.duration}</span>
                      </div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Expected Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Bénéfices Attendus</CardTitle>
              <CardDescription>Impact mesurable sur l'organisation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { metric: "+40%", label: "Visibilité des tâches" },
                  { metric: "-30%", label: "Temps de coordination" },
                  { metric: "+25%", label: "Satisfaction employés" },
                  { metric: "90%", label: "Taux d'adoption prévu" }
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium">{benefit.label}</span>
                    <span className="text-2xl font-bold text-primary">{benefit.metric}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-success/10 border border-success/20">
                <p className="text-sm text-center font-medium">
                  <span className="text-success">ROI estimé :</span> Positif dès le 2ème mois d'utilisation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-to-br from-primary to-secondary text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3">Prêt à améliorer votre organisation ?</h3>
              <p className="mb-6 opacity-90">
                Commencez dès aujourd'hui avec Trello et transformez votre manière de travailler
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
              >
                Démarrer avec Trello
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Note :</strong> Cette recommandation est basée sur une analyse comparative détaillée 
            et peut être ajustée selon les besoins spécifiques et l'évolution de votre organisation.
          </p>
        </div>
      </div>
    </section>
  );
};
