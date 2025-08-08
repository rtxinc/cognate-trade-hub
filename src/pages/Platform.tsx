import { Header } from "@/components/Header";
import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { 
  Monitor, 
  Smartphone, 
  BarChart3, 
  TrendingUp, 
  Settings, 
  Shield,
  Zap,
  Calendar,
  Download,
  Play,
  CheckCircle,
  Globe,
  Brain,
  Target,
  LineChart,
  Clock,
  DollarSign
} from "lucide-react";

const Platform = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Charting",
      description: "Professional-grade charts with 100+ technical indicators, multiple timeframes, and customizable layouts"
    },
    {
      icon: Brain,
      title: "Expert Advisors",
      description: "Automated trading with custom algorithms, backtesting capabilities, and strategy optimization"
    },
    {
      icon: Target,
      title: "Market Depth",
      description: "Level II pricing, time & sales data, and advanced order book visualization for better market insight"
    },
    {
      icon: Calendar,
      title: "Economic Calendar",
      description: "Built-in economic calendar with real-time news feeds and market-moving event notifications"
    },
    {
      icon: Settings,
      title: "Custom Indicators",
      description: "Create and install custom technical indicators using MQL5 programming language"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced risk management tools including stop-loss, take-profit, and position sizing controls"
    }
  ];

  const orderTypes = [
    "Market Orders",
    "Pending Orders",
    "Stop Loss",
    "Take Profit",
    "Stop Limit",
    "Trailing Stop"
  ];

  const platforms = [
    {
      icon: Monitor,
      title: "Desktop Platform",
      description: "Full-featured MetaTrader 5 for Windows and Mac with complete functionality",
      features: ["Multi-monitor support", "Custom workspaces", "Advanced analytics", "Strategy testing"]
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "MetaTrader 5 mobile app for iOS and Android with essential trading tools",
      features: ["Real-time quotes", "Interactive charts", "Trade management", "News & analysis"]
    },
    {
      icon: Globe,
      title: "Web Platform",
      description: "Browser-based MetaTrader 5 accessible from any device without downloads",
      features: ["No installation", "Cross-platform", "Secure connection", "Full compatibility"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              MetaTrader 5
              <span className="text-accent block">Trading Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience professional trading with the world's most popular multi-asset platform. 
              Advanced charting, automated trading, and comprehensive market analysis tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl">
                <Download className="w-5 h-5 mr-2" />
                Download MT5
              </Button>
              <Button variant="outline-premium" size="xl">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Versions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              MetaTrader 5 is available across all devices, ensuring you never miss a trading opportunity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-gradient-card border-accent/20 p-8 text-center hover:shadow-glow transition-all duration-300 group">
                <div className="p-4 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 w-fit mx-auto mb-6">
                  <platform.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{platform.title}</h3>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                <ul className="space-y-2 mb-8">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="trading" className="w-full">
                  Download Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Professional Trading Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              MetaTrader 5 provides everything you need for successful trading across multiple asset classes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-accent/20 p-6 hover:shadow-card transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Advanced Trading Capabilities
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                MetaTrader 5 offers sophisticated trading tools and order types to execute your strategies with precision
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Lightning Fast Execution</h3>
                    <p className="text-muted-foreground">
                      Market orders executed in milliseconds with advanced order routing technology
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Multiple Order Types</h3>
                    <p className="text-muted-foreground">
                      Comprehensive order management with various execution modes and conditions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Historical Data</h3>
                    <p className="text-muted-foreground">
                      Access years of historical price data for backtesting and analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-primary p-8 rounded-lg shadow-premium">
              <h3 className="text-2xl font-bold text-foreground mb-6">Order Types Available</h3>
              <div className="grid grid-cols-2 gap-4">
                {orderTypes.map((orderType, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-foreground text-sm">{orderType}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-accent/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">100ms</div>
                    <div className="text-sm text-muted-foreground">Avg Execution</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">21</div>
                    <div className="text-sm text-muted-foreground">Timeframes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">100+</div>
                    <div className="text-sm text-muted-foreground">Indicators</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithmic Trading */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-card p-8 rounded-lg shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Expert Advisor Features</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-foreground">Custom algorithm development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-foreground">Strategy backtesting & optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-foreground">Real-time automated execution</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-foreground">Risk management integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-foreground">Multi-threading support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-foreground">MQL5 marketplace access</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Algorithmic Trading
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Build, test, and deploy automated trading strategies with Expert Advisors (EAs) using the powerful MQL5 programming language
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-success" />
                  <span className="text-foreground">Reduce emotional trading decisions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-success" />
                  <span className="text-foreground">24/7 market monitoring and execution</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="text-foreground">Consistent strategy implementation</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button variant="premium">
                  Learn MQL5
                </Button>
                <Button variant="outline-premium">
                  Browse EAs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              System Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              MetaTrader 5 is optimized to run efficiently on various hardware configurations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-accent/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Monitor className="w-6 h-6 text-accent" />
                Desktop Requirements
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-foreground">OS:</span>
                  <span className="text-muted-foreground ml-2">Windows 7/8/10/11, macOS 10.12+</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Processor:</span>
                  <span className="text-muted-foreground ml-2">1.7 GHz or higher</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">RAM:</span>
                  <span className="text-muted-foreground ml-2">4 GB minimum, 8 GB recommended</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Storage:</span>
                  <span className="text-muted-foreground ml-2">1 GB free space</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Internet:</span>
                  <span className="text-muted-foreground ml-2">Broadband connection required</span>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gradient-card border-accent/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-accent" />
                Mobile Requirements
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-foreground">iOS:</span>
                  <span className="text-muted-foreground ml-2">iOS 12.0 or later</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Android:</span>
                  <span className="text-muted-foreground ml-2">Android 5.0 (API level 21) or higher</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">RAM:</span>
                  <span className="text-muted-foreground ml-2">2 GB minimum, 4 GB recommended</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Storage:</span>
                  <span className="text-muted-foreground ml-2">200 MB free space</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Network:</span>
                  <span className="text-muted-foreground ml-2">3G/4G/5G or Wi-Fi connection</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Start Trading with MT5?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Download MetaTrader 5 today and experience professional trading with the world's most advanced platform. 
              Available for desktop, mobile, and web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl">
                <Download className="w-5 h-5 mr-2" />
                Download MT5 Desktop
              </Button>
              <Button variant="outline-premium" size="xl">
                <Smartphone className="w-5 h-5 mr-2" />
                Get Mobile App
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Free download • No hidden fees • Professional support included
            </p>
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
                Professional MetaTrader 5 platform with advanced trading capabilities and multi-asset support.
              </p>
            </div>
            
            <div>
              <h4 className="text-foreground font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Desktop MT5</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Web Platform</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Expert Advisors</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-foreground font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Advanced Charts</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Technical Analysis</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Automated Trading</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Market Analysis</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-foreground font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">User Guide</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Video Tutorials</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">MQL5 Community</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Technical Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-accent/20 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Cognate Market. MetaTrader 5 platform by MetaQuotes Software Corp.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Platform;