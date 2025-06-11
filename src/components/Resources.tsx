
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Play, Users } from "lucide-react";

export const Resources = () => {
  const resources = [
    {
      title: "Eligibility Guidelines",
      description: "Complete documentation requirements for EWS and DG certificate verification",
      icon: FileText,
      count: "Updated 2024",
      color: "bg-blue-500",
    },
    {
      title: "Application Tutorials",
      description: "Step-by-step video guides for completing your RTE seat application",
      icon: Play,
      count: "Video Guides",
      color: "bg-green-500",
    },
    {
      title: "Required Documents",
      description: "Downloadable checklist and sample formats for all required documents",
      icon: Download,
      count: "Document Kit",
      color: "bg-purple-500",
    },
    {
      title: "Parent Community",
      description: "Connect with other parents and share experiences about the RTE process",
      icon: Users,
      count: "Active Forum",
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            RTE Application Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to successfully apply for RTE seats, from eligibility criteria 
            to document preparation and application submission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${resource.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <resource.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <div className="text-sm text-primary font-semibold">{resource.count}</div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  {resource.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Ready to Apply for RTE Seats?
              </h3>
              <p className="text-lg text-muted-foreground">
                Secure your child's future with quality education. Our streamlined RTE application 
                process ensures equal opportunities for all children from economically weaker sections 
                and disadvantaged groups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="/register">Start Application</a>
                </Button>
                <Button size="lg" variant="outline">
                  Download Guidelines
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Children in classroom"
                className="rounded-xl w-full h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
