
import { Navigation } from "@/components/Navigation";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";
import { BookOpen } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              RTE Seat Registration
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Register your child for RTE seats in private schools. Ensure you meet the eligibility 
              criteria for EWS (Economically Weaker Section) or DG (Disadvantaged Group) before applying.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <RegistrationForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
