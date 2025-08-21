import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AIAndTech } from "@/components/categories/AIAndTech";
import { StartupsOpsFundraising } from "@/components/categories/StartupsOpsFundraising";
import { CompaniesThatShouldExist } from "@/components/categories/CompaniesThatShouldExist";
import { FootballSoccer } from "@/components/categories/FootballSoccer";
import { HobbiesAndHyperfixations } from "@/components/categories/HobbiesAndHyperfixations";
import { ThoughtOfTheDay } from "@/components/categories/ThoughtOfTheDay";

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground leading-tight">
              Abhijith's <span className="text-primary">Wanderings</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Idk whats going on in my head, but I guess you can see it here.
            </p>
          </div>

          {/* Category Sections */}
          <div className="space-y-8">
            <div className="space-y-4">
              <AIAndTech />
              <StartupsOpsFundraising />
              <CompaniesThatShouldExist />
              <FootballSoccer />
              <HobbiesAndHyperfixations />
              <ThoughtOfTheDay />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Index;