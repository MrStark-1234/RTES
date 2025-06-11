
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    childName: "",
    dateOfBirth: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    address: "",
    category: "ews", // ews or dg
    annualIncome: "",
    preferredSchools: "",
    documents: {
      birthCertificate: null as File | null,
      incomeProof: null as File | null,
      addressProof: null as File | null,
      categoryProof: null as File | null,
    }
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents, [field]: file }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.childName || !formData.dateOfBirth || !formData.parentName || !formData.parentPhone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted",
      description: "Your RTE seat application has been submitted successfully. You will receive a confirmation email shortly.",
    });

    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Child Information */}
      <Card>
        <CardHeader>
          <CardTitle>Child Information</CardTitle>
          <CardDescription>Enter details about the child applying for RTE seat</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="childName">Child's Full Name *</Label>
              <Input
                id="childName"
                value={formData.childName}
                onChange={(e) => handleInputChange("childName", e.target.value)}
                placeholder="Enter child's full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Parent/Guardian Information */}
      <Card>
        <CardHeader>
          <CardTitle>Parent/Guardian Information</CardTitle>
          <CardDescription>Contact details of parent or guardian</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="parentName">Parent/Guardian Name *</Label>
            <Input
              id="parentName"
              value={formData.parentName}
              onChange={(e) => handleInputChange("parentName", e.target.value)}
              placeholder="Enter parent/guardian name"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="parentPhone">Phone Number *</Label>
              <Input
                id="parentPhone"
                type="tel"
                value={formData.parentPhone}
                onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parentEmail">Email Address</Label>
              <Input
                id="parentEmail"
                type="email"
                value={formData.parentEmail}
                onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Complete Address *</Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter complete residential address"
              rows={3}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Eligibility Category */}
      <Card>
        <CardHeader>
          <CardTitle>Eligibility Category</CardTitle>
          <CardDescription>Select the category under which you are applying</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={formData.category}
            onValueChange={(value) => handleInputChange("category", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ews" id="ews" />
              <Label htmlFor="ews">Economically Weaker Section (EWS)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dg" id="dg" />
              <Label htmlFor="dg">Disadvantaged Group (DG)</Label>
            </div>
          </RadioGroup>
          
          <div className="mt-4 space-y-2">
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
        </CardContent>
      </Card>

      {/* School Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>School Preferences</CardTitle>
          <CardDescription>List your preferred schools in order of preference</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="preferredSchools">Preferred Schools</Label>
            <Textarea
              id="preferredSchools"
              value={formData.preferredSchools}
              onChange={(e) => handleInputChange("preferredSchools", e.target.value)}
              placeholder="List up to 3 preferred schools in order of preference"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Document Upload */}
      <Card>
        <CardHeader>
          <CardTitle>Required Documents</CardTitle>
          <CardDescription>Upload all required documents (PDF/JPG format, max 2MB each)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="birthCertificate">Birth Certificate *</Label>
              <Input
                id="birthCertificate"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange("birthCertificate", e.target.files?.[0] || null)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="incomeProof">Income Proof *</Label>
              <Input
                id="incomeProof"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange("incomeProof", e.target.files?.[0] || null)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="addressProof">Address Proof *</Label>
              <Input
                id="addressProof"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange("addressProof", e.target.files?.[0] || null)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="categoryProof">EWS/DG Certificate *</Label>
              <Input
                id="categoryProof"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange("categoryProof", e.target.files?.[0] || null)}
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="text-center">
        <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 px-12">
          Submit Application
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          By submitting this application, you confirm that all information provided is accurate and complete.
        </p>
      </div>
    </form>
  );
};
