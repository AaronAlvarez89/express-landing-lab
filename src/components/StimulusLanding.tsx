import { AlertTriangle, CheckCircle, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StimulusLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground">Official Stimulus Check Portal</span>
          </div>
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            <Shield className="h-3 w-3 mr-1" />
            Secured
          </Badge>
        </div>
      </header>

      {/* Alert Banner */}
      <div className="bg-warning/10 border-b border-warning/20 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <span className="text-warning-foreground font-medium">
            Limited Time: Check Your Eligibility Before Deadline
          </span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Check Your US{" "}
            <span className="text-primary">Stimulus Check</span>{" "}
            <span className="text-secondary">Eligibility</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find out if you qualify for government relief funds. Millions of Americans are still owed.
          </p>

          {/* 3 Steps Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-8 text-foreground">
              Claim Your Stimulus in 3 Simple Steps
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-destructive mb-2">1.</div>
                  <div className="text-foreground">Click the button below.</div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2.</div>
                  <div className="text-foreground">Complete the form with basic info.</div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">3.</div>
                  <div className="text-foreground">Claim your Stimulus Cheque.</div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Button */}
            <Button variant="claim" size="lg" className="text-xl px-12 py-4">
              CLAIM NOW (FREE)
            </Button>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-success" />
                No credit card required
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-success" />
                100% free eligibility check
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-success" />
                Instant results
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <Card className="mb-16 p-8">
          <CardContent className="p-0 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join Over 2.8 Million Americans Who've Already Checked
            </h3>
            
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
              <span className="ml-2 font-semibold text-foreground">4.9/5</span>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Based on 847,000+ verified reviews
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$3.2B+</div>
                <div className="text-muted-foreground">Total funds claimed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">2.8M+</div>
                <div className="text-muted-foreground">People helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">98.7%</div>
                <div className="text-muted-foreground">Success rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Quick Check</h3>
                <p className="text-sm text-muted-foreground">
                  Enter basic information to check your eligibility instantly
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Secure Process</h3>
                <p className="text-sm text-muted-foreground">
                  Your information is protected with bank-level security
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Get Results</h3>
                <p className="text-sm text-muted-foreground">
                  Receive instant results about your stimulus eligibility
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-warning" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Claim Funds</h3>
                <p className="text-sm text-muted-foreground">
                  Follow simple steps to claim your available stimulus funds
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StimulusLanding;