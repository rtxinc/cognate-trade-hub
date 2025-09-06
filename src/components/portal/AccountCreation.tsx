import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Mail, Lock, User, Phone } from "lucide-react";
import { toast } from "sonner";

interface AccountCreationProps {
  onAccountCreated: () => void;
}

export const AccountCreation = ({ onAccountCreated }: AccountCreationProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "individual",
    agreeToTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submission
      toast.success("Account created successfully!");
      onAccountCreated();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNum ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {stepNum}
              </div>
              {stepNum < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  step > stepNum ? 'bg-accent' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Step {step} of 3: {step === 1 ? 'Personal Information' : step === 2 ? 'Account Details' : 'Verification'}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full p-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 pl-10 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 pl-10 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Account Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center p-4 border border-border rounded-md cursor-pointer hover:bg-muted/20">
                    <input
                      type="radio"
                      name="accountType"
                      value="individual"
                      checked={formData.accountType === 'individual'}
                      onChange={(e) => handleInputChange('accountType', e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Individual</div>
                      <div className="text-sm text-muted-foreground">Personal trading account</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-border rounded-md cursor-pointer hover:bg-muted/20">
                    <input
                      type="radio"
                      name="accountType"
                      value="corporate"
                      checked={formData.accountType === 'corporate'}
                      onChange={(e) => handleInputChange('accountType', e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Corporate</div>
                      <div className="text-sm text-muted-foreground">Business trading account</div>
                    </div>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Account Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Password *</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full p-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring"
                  placeholder="Create a strong password"
                  required
                />
                <div className="text-sm text-muted-foreground mt-1">
                  Password must be at least 8 characters with uppercase, lowercase, and number
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password *</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full p-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className="p-4 bg-muted/20 rounded-lg">
                <h4 className="font-medium mb-2">Password Requirements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Minimum 8 characters</li>
                  <li>• At least one uppercase letter</li>
                  <li>• At least one lowercase letter</li>
                  <li>• At least one number</li>
                  <li>• At least one special character</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Terms & Verification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/20 rounded-lg">
                <h4 className="font-medium mb-2">Account Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Name:</span>
                    <span>{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone:</span>
                    <span>{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Type:</span>
                    <span className="capitalize">{formData.accountType}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <div className="text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-accent hover:underline">Terms of Service</a>
                    {" "}and{" "}
                    <a href="#" className="text-accent hover:underline">Privacy Policy</a>
                    . I understand that trading involves risk and I may lose money.
                  </div>
                </label>

                <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <div className="text-sm">
                    <strong>Next Steps:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Verify your email address</li>
                      <li>• Complete identity verification (KYC)</li>
                      <li>• Make your first deposit</li>
                      <li>• Start trading!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Previous
            </button>
          )}
          <button
            type="submit"
            className="flex-1 bg-accent text-accent-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            {step === 3 ? 'Create Account' : 'Continue'}
          </button>
        </div>
      </form>
    </div>
  );
};