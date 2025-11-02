import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Calculator, ArrowRight, CheckCircle } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    scores: { trello: number; asana: number; monday: number };
  }[];
}

const questions: Question[] = [
  {
    id: "team-size",
    question: "Quelle est la taille de votre équipe ?",
    options: [
      { value: "small", label: "1-10 personnes", scores: { trello: 5, asana: 3, monday: 2 } },
      { value: "medium", label: "11-50 personnes", scores: { trello: 3, asana: 5, monday: 4 } },
      { value: "large", label: "50+ personnes", scores: { trello: 2, asana: 4, monday: 5 } },
    ],
  },
  {
    id: "complexity",
    question: "Niveau de complexité de vos projets ?",
    options: [
      { value: "simple", label: "Simple (to-do lists, suivis basiques)", scores: { trello: 5, asana: 3, monday: 3 } },
      { value: "medium", label: "Moyen (dépendances, deadlines)", scores: { trello: 3, asana: 5, monday: 4 } },
      { value: "complex", label: "Complexe (multi-projets, portfolios)", scores: { trello: 2, asana: 5, monday: 5 } },
    ],
  },
  {
    id: "priority",
    question: "Qu'est-ce qui est le plus important pour vous ?",
    options: [
      { value: "ease", label: "Facilité d'utilisation", scores: { trello: 5, asana: 3, monday: 4 } },
      { value: "features", label: "Richesse des fonctionnalités", scores: { trello: 2, asana: 5, monday: 5 } },
      { value: "visual", label: "Interface visuelle attractive", scores: { trello: 5, asana: 4, monday: 5 } },
    ],
  },
  {
    id: "budget",
    question: "Quel est votre budget ?",
    options: [
      { value: "free", label: "Gratuit uniquement", scores: { trello: 5, asana: 4, monday: 1 } },
      { value: "low", label: "Petit budget (5-10€/user/mois)", scores: { trello: 4, asana: 5, monday: 4 } },
      { value: "flexible", label: "Budget flexible", scores: { trello: 3, asana: 4, monday: 5 } },
    ],
  },
];

export const ToolCalculator = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
    setShowResult(false);
  };

  const calculateResults = () => {
    const scores = { trello: 0, asana: 0, monday: 0 };
    
    questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer) {
        const option = question.options.find((opt) => opt.value === answer);
        if (option) {
          scores.trello += option.scores.trello;
          scores.asana += option.scores.asana;
          scores.monday += option.scores.monday;
        }
      }
    });

    return scores;
  };

  const getRecommendation = () => {
    const scores = calculateResults();
    const entries = Object.entries(scores) as [string, number][];
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    return {
      winner: sorted[0][0],
      scores: scores,
      maxScore: sorted[0][1],
    };
  };

  const isComplete = Object.keys(answers).length === questions.length;

  const toolNames: Record<string, string> = {
    trello: "Trello",
    asana: "Asana",
    monday: "Monday.com",
  };

  const toolColors: Record<string, string> = {
    trello: "bg-blue-500",
    asana: "bg-pink-500",
    monday: "bg-orange-500",
  };

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-2xl">Quel outil vous correspond ?</CardTitle>
            <CardDescription className="text-base">
              Répondez à 4 questions pour obtenir une recommandation personnalisée
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {questions.map((question, idx) => (
          <div key={question.id} className="space-y-3">
            <Label className="text-base font-semibold flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                {idx + 1}
              </span>
              {question.question}
            </Label>
            <RadioGroup
              value={answers[question.id] || ""}
              onValueChange={(value) => handleAnswer(question.id, value)}
            >
              <div className="space-y-2">
                {question.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 p-3 rounded-lg border-2 hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                    <Label
                      htmlFor={`${question.id}-${option.value}`}
                      className="flex-1 cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        ))}

        <div className="pt-6 border-t">
          <Button
            onClick={() => setShowResult(true)}
            disabled={!isComplete}
            className="w-full"
            size="lg"
          >
            {isComplete ? "Voir le résultat" : `Répondez aux ${questions.length - Object.keys(answers).length} questions restantes`}
            {isComplete && <ArrowRight className="ml-2 h-5 w-5" />}
          </Button>
        </div>

        {showResult && isComplete && (
          <div className="pt-6 border-t animate-fade-in">
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <CheckCircle className="h-12 w-12 text-success mx-auto" />
                <h3 className="text-2xl font-bold">Notre recommandation</h3>
              </div>

              {(() => {
                const result = getRecommendation();
                return (
                  <>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 text-center">
                      <div className="text-5xl mb-3">
                        {result.winner === "trello" ? "🗂️" : result.winner === "asana" ? "📋" : "🎯"}
                      </div>
                      <div className="text-3xl font-bold mb-2">{toolNames[result.winner]}</div>
                      <Badge className={`${toolColors[result.winner]} text-white border-0`}>
                        Score : {result.scores[result.winner as keyof typeof result.scores]}/{questions.length * 5}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Scores détaillés :</p>
                      {Object.entries(result.scores).map(([tool, score]) => (
                        <div key={tool} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                          <span className="font-medium">{toolNames[tool]}</span>
                          <div className="flex items-center gap-3">
                            <div className="w-32 bg-background rounded-full h-2">
                              <div
                                className={`${toolColors[tool]} h-2 rounded-full`}
                                style={{ width: `${(score / (questions.length * 5)) * 100}%` }}
                              />
                            </div>
                            <span className="text-sm font-semibold w-12 text-right">
                              {score}/{questions.length * 5}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                      <p className="text-sm text-center">
                        💡 Cette recommandation est basée sur vos réponses. Consultez notre comparaison 
                        détaillée pour en savoir plus sur chaque outil.
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
