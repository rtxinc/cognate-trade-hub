import { Header } from "@/components/Header";
import { AssetCard } from "@/components/AssetCard";
import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { 
  DollarSign, 
  Coins, 
  Zap, 
  TrendingUp, 
  Shield, 
  Smartphone,
  Monitor,
  BarChart3,
  Globe,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const Index = () => {
  const assets = [
    {
      icon: DollarSign,
      title: "Forex",
      description: "Trade major, minor, and exotic currency pairs with competitive spreads",
      features: ["70+ Currency Pairs", "24/5 Market Access", "Low Spreads", "High Liquidity"]
    },
    {
      icon: Coins,
      title: "Metals",
      description: "Access precious metals trading including gold, silver, and more",
      features: ["Gold & Silver", "Spot Trading", "Hedging Options", "Real-time Pricing"]
    },
    {
      icon: Zap,
      title: "Cryptocurrencies",
      description: "Trade popular digital assets with advanced security measures",
      features: ["Bitcoin & Ethereum", "24/7 Trading", "Secure Storage", "Real-time Data"]
    },
    {
      icon: TrendingUp,
      title: "Energies",
      description: "Oil, gas, and renewable energy commodity trading",
      features: ["Crude Oil", "Natural Gas", "Energy Futures", "Market Analysis"]
    },
    {
      icon: BarChart3,
      title: "Indices",
      description: "Global stock market indices from major exchanges worldwide",
      features: ["S&P 500", "NASDAQ", "DAX", "Nikkei"]
    }
  ];

  const accountTypes = [
    {
      name: "Standard Account",
      description: "Perfect for beginners and intermediate traders",
      features: ["$100 Minimum Deposit", "Variable Spreads", "24/5 Support", "Educational Resources"],
      highlight: false
    },
    {
      name: "Premium Account",
      description: "Advanced features for experienced traders",
      features: ["$1,000 Minimum Deposit", "Tighter Spreads", "Priority Support", "Advanced Tools"],
      highlight: true
    },
    {
      name: "Professional Account",
      description: "Institutional-grade trading experience",
      features: ["$10,000 Minimum Deposit", "Ultra-low Spreads", "Dedicated Manager", "Custom Solutions"],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Trade the Global
            <span className="text-accent block">Markets</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Access forex, metals, cryptocurrencies, energies, and indices with professional-grade tools and competitive spreads
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="xl">
              Start Trading Now
            </Button>
            <Button variant="outline-premium" size="xl">
              Explore Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section id="assets" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Multi-Asset Trading
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diversify your portfolio with access to multiple financial instruments across global markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assets.map((asset, index) => (
              <AssetCard key={index} {...asset} />
            ))}
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section id="accounts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Account Type
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the account that best aligns with your trading goals and capital requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {accountTypes.map((account, index) => (
              <Card 
                key={index} 
                className={`p-8 text-center transition-all duration-300 ${
                  account.highlight 
                    ? 'bg-gradient-accent text-accent-foreground shadow-glow scale-105' 
                    : 'bg-gradient-card border-accent/20 hover:shadow-card'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{account.name}</h3>
                <p className={`mb-6 ${account.highlight ? 'text-accent-foreground/80' : 'text-muted-foreground'}`}>
                  {account.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {account.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className={account.highlight ? 'text-accent-foreground' : 'text-foreground'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={account.highlight ? "outline-premium" : "trading"} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Trading Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trade with confidence using our proprietary platform available on desktop and mobile
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Desktop Platform</h3>
                  <p className="text-muted-foreground">
                    Full-featured trading interface with advanced charting, technical analysis, and risk management tools
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mobile Trading</h3>
                  <p className="text-muted-foreground">
                    Trade on the go with our mobile app featuring real-time quotes, instant execution, and account management
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Secure Trading</h3>
                  <p className="text-muted-foreground">
                    Bank-level security with encrypted connections and segregated client funds for your peace of mind
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-primary p-8 rounded-lg shadow-premium">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <div className="text-muted-foreground">Trading Instruments</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">24/5</div>
                  <div className="text-muted-foreground">Market Access</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">500:1</div>
                  <div className="text-muted-foreground">Max Leverage</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">0.1s</div>
                  <div className="text-muted-foreground">Execution Speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of traders who trust Cognate Market for their trading needs. 
              Open your account today and experience professional-grade trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl">
                <Globe className="w-5 h-5 mr-2" />
                Open Live Account
              </Button>
              <Button variant="outline-premium" size="xl">
                Try Demo Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-primary border-t border-accent/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-accent">
                  <TrendingUp className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-lg font-bold text-foreground">Cognate Market</span>
              </div>
              <p className="text-muted-foreground">
                Professional multi-asset brokerage providing access to global financial markets.
              </p>
            </div>
            
            <div>
              <h4 className="text-foreground font-semibold mb-4">Trading</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Forex</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Metals</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cryptocurrencies</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Indices</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-foreground font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Desktop</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">API</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-foreground font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-accent/20 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Cognate Market. All rights reserved. Trading involves risk of loss.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;