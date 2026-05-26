import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface SignUpGateProps {
  onSuccess: () => void;
}

export const SignUpGate = ({ onSuccess }: SignUpGateProps) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(isLogin ? "Welcome back!" : "Account created successfully!");
      onSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-muted/30 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 w-full max-w-4xl grid lg:grid-cols-2 bg-background rounded-3xl overflow-hidden shadow-2xl border"
      >
        {/* Left Side: Image & Info */}
        <div className="hidden lg:block relative bg-primary p-12 text-primary-foreground overflow-hidden">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-xl">
                iB
              </div>
              <span className="font-bold text-xl tracking-tight text-white">iBCScorp Lagos</span>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Unlock Premium Business Growth Strategies
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-blue-200" />
                  </div>
                  <p className="text-sm font-medium">Access exclusive software consulting</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-full">
                    <ArrowRight className="w-5 h-5 text-blue-200" />
                  </div>
                  <p className="text-sm font-medium">Book digital marketing audits</p>
                </div>
              </div>
            </div>

            <p className="text-sm opacity-80 italic">
              "Transforming businesses in Lagos since 2010. Join 500+ successful companies today."
            </p>
          </div>
          
          {/* Overlay Image */}
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f8f869ab-8a26-4f51-9949-fe8ea0283bdc/hero-office-f0d34ae0-1779758947207.webp" 
            alt="Office" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">iB</div>
            <span className="font-bold text-xl">iBCScorp Lagos</span>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">
              {isLogin ? "Welcome Back" : "Create your account"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {isLogin 
                ? "Enter your credentials to access your dashboard." 
                : "Join the leading tech agency in Lagos today."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" /> Full Name
                </label>
                <Input placeholder="John Doe" required />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" /> Work Email
              </label>
              <Input type="email" placeholder="john@company.com" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Lock className="w-4 h-4 text-muted-foreground" /> Password
              </label>
              <Input type="password" placeholder="••••••••" required />
            </div>

            <Button className="w-full h-12 text-lg font-semibold mt-4" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Please wait...
                </div>
              ) : (
                isLogin ? "Sign In" : "Get Started Now"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm">
            <p className="text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-bold hover:underline"
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};