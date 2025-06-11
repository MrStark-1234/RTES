
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">RTE Act</span> Seat Reservation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Secure quality education for children from Economically Weaker Sections (EWS) 
                and Disadvantaged Groups (DG) through RTE Act compliance. Reserve seats in 
                private schools with our transparent online portal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                <a href="/register">Register for Seat</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <a href="/eligibility">Check Eligibility</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">25%</div>
                <div className="text-sm text-muted-foreground">Reserved Seats</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Partner Schools</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Free Admission</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Children studying in classroom"
                className="rounded-xl w-full h-64 object-cover"
              />
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold text-lg">Equal Education Access</h3>
                <p className="text-muted-foreground">
                  Ensuring every child gets quality education through RTE Act implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
