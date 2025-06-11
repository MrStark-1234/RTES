
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Calendar, Trophy, Headphones, FileText } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "RTE Act Compliance",
      description: "Fully compliant with Right to Education Act ensuring 25% seat reservation for EWS/DG children.",
    },
    {
      icon: Users,
      title: "Eligibility Verification",
      description: "Streamlined process to verify EWS and DG status with proper documentation guidelines.",
    },
    {
      icon: BookOpen,
      title: "School Directory",
      description: "Access comprehensive list of participating private schools with available RTE seats.",
    },
    {
      icon: Calendar,
      title: "Online Application",
      description: "Simple online registration process with real-time application status tracking.",
    },
    {
      icon: Trophy,
      title: "Transparent Selection",
      description: "Fair and transparent lottery system for seat allocation when applications exceed availability.",
    },
    {
      icon: Headphones,
      title: "Support Assistance",
      description: "Dedicated helpline and support team to guide families through the application process.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            RTE Seat Reservation Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform ensures seamless implementation of RTE Act provisions, making quality 
            education accessible to children from economically weaker sections and disadvantaged groups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
