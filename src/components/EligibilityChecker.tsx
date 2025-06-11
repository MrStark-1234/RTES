
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

export const EligibilityChecker = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    annualIncome: "",
    category: "ews",
    childAge: "",
    hasSchoolDocuments: "",
    hasAddressProof: "",
    hasIncomeProof: "",
  });
  const [result, setResult] = useState<{
    eligible: boolean;
    category: string;
    message: string;
    requirements: string[];
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    
    const income = parseInt(formData.annualIncome);
    const age = parseInt(formData.childAge);
    
    // Basic validation
    if (!income || !age) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    let eligible = false;
    let category = "";
    let message = "";
    const requirements = [];

    // EWS Category Check (Annual income up to ₹8 lakh)
    if (formData.category === "ews" && income <= 800000) {
      eligible = true;
      category = "EWS (Economically Weaker Section)";
      message = "Congratulations! You are eligible for RTE seat reservation under EWS category.";
    }
    // DG Category Check (Various disadvantaged groups)
    else if (formData.category === "dg") {
      eligible = true;
      category = "DG (Disadvantaged Group)";
      message = "You may be eligible for RTE seat reservation under DG category. Please verify with local authorities.";
    }
    // Income too high for EWS
    else if (formData.category === "ews" && income > 800000) {
      eligible = false;
      category = "Not Eligible";
      message = "Your annual income exceeds the EWS limit of ₹8 lakhs. You may check DG category eligibility.";
    }

    // Age check (typically 3-6 years for entry level)
    if (age < 3 || age > 6) {
      eligible = false;
      message = "Child's age should be between 3-6 years for RTE entry level admission.";
    }

    // Required documents check
    if (formData.hasSchoolDocuments === "no" || 
        formData.hasAddressProof === "no" || 
        formData.hasIncomeProof === "no") {
      requirements.push("Ensure you have all required documents before applying.");
    }

    if (eligible) {
      requirements.push("Birth Certificate of the child");
      requirements.push("Income Certificate from competent authority");
      requirements.push("Address Proof (Ration Card/Voter ID/Aadhaar)");
      requirements.push("EWS/DG Certificate from competent authority");
      requirements.push("Recent passport size photographs");
    }

    setResult({
      eligible,
      category,
      message,
      requirements
    });

    toast({
      title: eligible ? "Eligibility Confirmed" : "Please Review Requirements",
      description: eligible ? "You meet the basic eligibility criteria." : "Please check the requirements below.",
      variant: eligible ? "default" : "destructive",
    });
  };

  return (
    <div className="space-y-8">
      <form onSubmit={checkEligibility} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Provide basic details to check eligibility</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="annualIncome">Annual Family Income (₹) *</Label>
                <Input
                  id="annualIncome"
                  type="number"
                  value={formData.annualIncome}
                  onChange={(e) => handleInputChange("annualIncome", e.target.value)}
                  placeholder="Enter annual family income"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="childAge">Child's Age (years) *</Label>
                <Input
                  id="childAge"
                  type="number"
                  value={formData.childAge}
                  onChange={(e) => handleInputChange("childAge", e.target.value)}
                  placeholder="Enter child's age"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Category *</Label>
              <RadioGroup
                value={formData.category}
                onValueChange={(value) => handleInputChange("category", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ews" id="ews-check" />
                  <Label htmlFor="ews-check">Economically Weaker Section (EWS)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dg" id="dg-check" />
                  <Label htmlFor="dg-check">Disadvantaged Group (DG)</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Document Availability */}
        <Card>
          <CardHeader>
            <CardTitle>Document Availability</CardTitle>
            <CardDescription>Do you have the following documents ready?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block">Birth Certificate of child</Label>
                <RadioGroup
                  value={formData.hasSchoolDocuments}
                  onValueChange={(value) => handleInputChange("hasSchoolDocuments", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="birth-yes" />
                    <Label htmlFor="birth-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="birth-no" />
                    <Label htmlFor="birth-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-2 block">Income Proof Certificate</Label>
                <RadioGroup
                  value={formData.hasIncomeProof}
                  onValueChange={(value) => handleInputChange("hasIncomeProof", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="income-yes" />
                    <Label htmlFor="income-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="income-no" />
                    <Label htmlFor="income-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-2 block">Address Proof</Label>
                <RadioGroup
                  value={formData.hasAddressProof}
                  onValueChange={(value) => handleInputChange("hasAddressProof", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="address-yes" />
                    <Label htmlFor="address-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="address-no" />
                    <Label htmlFor="address-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 px-12">
            Check Eligibility
          </Button>
        </div>
      </form>

      {/* Results */}
      {result && (
        <Card className={`border-2 ${result.eligible ? 'border-green-500' : 'border-red-500'}`}>
          <CardHeader>
            <div className="flex items-center space-x-2">
              {result.eligible ? (
                <CheckCircle className="h-6 w-6 text-green-500" />
              ) : (
                <XCircle className="h-6 w-6 text-red-500" />
              )}
              <CardTitle className={result.eligible ? 'text-green-700' : 'text-red-700'}>
                Eligibility Result: {result.category}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">{result.message}</p>
            
            {result.requirements.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {result.eligible ? "Required Documents:" : "Requirements:"}
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {result.requirements.map((req, index) => (
                    <li key={index} className="text-muted-foreground">{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {result.eligible && (
              <div className="mt-6">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href="/register">Proceed to Registration</a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
