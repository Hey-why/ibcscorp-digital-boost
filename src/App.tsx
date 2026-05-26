import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  BarChart, 
  Search, 
  Megaphone, 
  Facebook, 
  Linkedin, 
  ExternalLink, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  Mail,
  Users,
  Layers,
  Zap,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Toaster, toast } from "sonner";
import { SignUpGate } from "@/components/SignUpGate";

// --- Types & Data ---

interface Service {
  title: string;
  description: string;
  icon: any;
  category: "Software" | "Marketing";
}

const services: Service[] = [
  {
    title: "Application Development",
    description: "Custom software solutions tailored to your unique business needs and growth goals.",
    icon: Code,
    category: "Software"
  },
  {
    title: "Enterprise Software",
    description: "Robust, scalable systems designed to streamline complex business processes at scale.",
    icon: Layers,
    category: "Software"
  },
  {
    title: "Mobile App Development",
    description: "High-performance iOS and Android applications that engage users and drive loyalty.",
    icon: Smartphone,
    category: "Software"
  },
  {
    title: "Big Data Consulting",
    description: "Turn your data into actionable insights with our expert implementation strategies.",
    icon: Database,
    category: "Software"
  },
  {
    title: "Data Centre Management",
    description: "Secure, reliable management of your critical data infrastructure and operations.",
    icon: Globe,
    category: "Software"
  },
  {
    title: "Software Outsourcing",
    description: "Extend your team with our expert developers to accelerate your project delivery.",
    icon: Users,
    category: "Software"
  },
  {
    title: "Digital Marketing Services",
    description: "Comprehensive strategies to boost your online visibility and drive qualified leads.",
    icon: Megaphone,
    category: "Marketing"
  },
  {
    title: "SEO & Content Marketing",
    description: "Rank higher on search engines and attract organic traffic with high-value content.",
    icon: Search,
    category: "Marketing"
  },
  {
    title: "Facebook Management",
    description: "Targeted advertising and community management to grow your brand presence.",
    icon: Facebook,
    category: "Marketing"
  },
  {
    title: "LinkedIn Optimization",
    description: "Professional networking strategies to connect with B2B decision-makers.",
    icon: Linkedin,
    category: "Marketing"
  },
  {
    title: "Link Building",
    description: "Authority-driven link acquisition to improve your domain strength and rankings.",
    icon: ExternalLink,
    category: "Marketing"
  },
  {
    title: "Corporate Identity",
    description: "Establishing a strong, memorable brand voice and visual presence in the market.",
    icon: CheckCircle2,
    category: "Marketing"
  }
];

const stats = [
  { label: "Google Rating", value: "5.0", icon: Star },
  { label: "Happy Clients", value: "500+", icon: Users },
  { label: "Expert Developers", value: "50+", icon: Code },
  { label: "Hours Support", value: "24/7", icon: Clock },
];

// --- Components ---

const Navbar = ({ onLogout }: { onLogout: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
            iB
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">iBCScorp Lagos</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          <Button variant="ghost" size="icon" onClick={onLogout} title="Logout">
            <LogOut className="w-5 h-5" />
          </Button>
          <Button asChild>
            <a href="tel:08165339242">Call Now</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={onLogout}>
            <LogOut className="w-5 h-5" />
          </Button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-background border-b md:hidden p-4 space-y-4"
          >
            <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 font-medium">Services</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 font-medium">About</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 font-medium">Contact</a>
            <Button className="w-full" asChild>
              <a href="tel:08165339242">Call Now</a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 py-1 px-4 text-sm">
              Lagos' Premier Digital Agency
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Empowering Businesses with Software & Digital Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              From enterprise software development to growth-driven digital marketing, iBCScorp Lagos helps you attract more customers and scale your business with world-class technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <a href="#contact">Start Your Project</a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg group" asChild>
                <a href="tel:08165339242">
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  0816 533 9242
                </a>
              </Button>
            </div>
          </motion.div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-2 text-foreground font-bold">5.0</span>
              </div>
              <p className="text-muted-foreground text-xs">Trusted by 46+ verified clients in Lagos</p>
            </div>
          </div>
        </div>

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border aspect-video lg:aspect-square">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f8f869ab-8a26-4f51-9949-fe8ea0283bdc/hero-office-f0d34ae0-1779758947207.webp" 
              alt="iBCScorp Office" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-xl">39 Alfred Rewane Rd, Ikoyi</p>
                <p className="text-sm opacity-90 text-blue-200">The Heart of Lagos Business District</p>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center space-y-2"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-2">
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
            <div className="text-sm text-primary-foreground/80 font-medium uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  const [activeTab, setActiveTab] = useState<"All" | "Software" | "Marketing">("All");

  const filteredServices = activeTab === "All" 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          We provide end-to-end technological and marketing solutions to help your business stay ahead of the competition.
        </p>

        <div className="flex justify-center gap-2 mb-12">
          {["All", "Software", "Marketing"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              onClick={() => setActiveTab(tab as any)}
              className="rounded-full px-6"
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-none bg-background group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f8f869ab-8a26-4f51-9949-fe8ea0283bdc/software-development-team-8397acd6-1779758946693.webp" 
              className="rounded-2xl shadow-xl w-full h-64 object-cover" 
              alt="Team" 
            />
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f8f869ab-8a26-4f51-9949-fe8ea0283bdc/digital-marketing-workspace-021a3b07-1779758946986.webp" 
              className="rounded-2xl shadow-xl w-full h-80 object-cover mt-12" 
              alt="Workspace" 
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center text-white text-center p-4 border-8 border-background">
            <span className="font-bold text-2xl">5.0</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Star Rating</span>
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Leading the Digital Transformation in Lagos</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              iBCScorp Lagos is a premier software company and digital marketing agency dedicated to helping businesses in Nigeria and across Africa leverage technology for growth.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl hover:bg-muted transition-colors border bg-background shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Fast Execution</h4>
                <p className="text-muted-foreground text-sm">We deliver high-quality software and marketing results with speed and precision.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl hover:bg-muted transition-colors border bg-background shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Proven Results</h4>
                <p className="text-muted-foreground text-sm">Our 5.0-star rating is a testament to our commitment to client success and satisfaction.</p>
              </div>
            </div>
          </div>

          <Button variant="outline" size="lg" className="h-12" asChild>
            <a href="#contact">Learn More About Our Process</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! We'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Great</h2>
              <p className="text-muted-foreground">Ready to take your business to the next level? Contact us today for a free consultation.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Our Office</h4>
                  <p className="text-muted-foreground">39 Alfred Rewane Rd, Ikoyi, Lagos 106104, Lagos</p>
                  <a href="https://maps.google.com/?q=iBCScorp+Lagos" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline inline-flex items-center mt-1">
                    Get Directions <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-muted-foreground">0816 533 9242</p>
                  <p className="text-xs text-primary mt-1 font-medium">Click to dial — We're here to help!</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Working Hours</h4>
                  <p className="text-muted-foreground">Open 24 Hours (Monday - Sunday)</p>
                  <Badge variant="outline" className="mt-2 text-green-600 border-green-200 bg-green-50">Operational Now</Badge>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-xl border-none p-4 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Email</label>
                  <Input type="email" placeholder="john@company.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Service Interested In</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>Software Development</option>
                  <option>Digital Marketing</option>
                  <option>Mobile App Development</option>
                  <option>SEO & Content</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[120px]" required />
              </div>
              <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">iB</div>
            <span className="font-bold text-white text-xl">iBCScorp Lagos</span>
          </div>
          <p className="max-w-sm">
            Providing expert software development and digital marketing services to businesses in Lagos and beyond. Rated 5.0 stars for excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#services" className="hover:text-primary transition-colors">Software Development</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Digital Marketing</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Mobile Apps</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">SEO & Strategy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} iBCScorp Lagos. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <span className="text-red-500">❤️</span> in Ikoyi, Lagos
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for existing session on mount
  useEffect(() => {
    const session = localStorage.getItem("auth_session");
    if (session) setIsAuthenticated(true);
  }, []);

  const handleAuthSuccess = () => {
    localStorage.setItem("auth_session", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_session");
    setIsAuthenticated(false);
    toast.info("Logged out successfully");
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SignUpGate onSuccess={handleAuthSuccess} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar onLogout={handleLogout} />
            <main>
              <Hero />
              <Stats />
              <Services />
              <About />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster position="top-center" />
    </div>
  );
}