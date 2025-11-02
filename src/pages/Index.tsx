import { Hero } from "@/components/Hero";
import { ToolComparison } from "@/components/ToolComparison";
import { TrendsWatch } from "@/components/TrendsWatch";
import { Recommendations } from "@/components/Recommendations";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Hero />
      <ToolComparison />
      <TrendsWatch />
      <Recommendations />
    </main>
  );
};

export default Index;
