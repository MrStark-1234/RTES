
import { Navigation } from "@/components/Navigation";
import { EligibilityChecker } from "@/components/EligibilityChecker";
import { Footer } from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const Eligibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              RTE Eligibility Checker
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check if you meet the eligibility criteria for RTE Act seat reservation. 
              This quick assessment will help determine if your child qualifies for admission 
              under EWS or DG categories.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <EligibilityChecker />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Eligibility;
