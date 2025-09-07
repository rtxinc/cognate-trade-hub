import { Header } from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, PieChart } from "lucide-react";
import { InvestmentDashboard } from "@/components/portal/InvestmentDashboard";
import { TradingCharts } from "@/components/portal/TradingCharts";
import { WalletManager } from "@/components/portal/WalletManager";
import { AccountCreation } from "@/components/portal/AccountCreation";
import { useState } from "react";

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Client Portal
              </h1>
              <p className="text-muted-foreground text-lg">
                Access your trading account and manage your investments
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-card p-8">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Create Account</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <div className="max-w-md mx-auto space-y-6">
                    <h2 className="text-2xl font-semibold text-center">Login to Your Account</h2>
                    <form className="space-y-4" onSubmit={(e) => {
                      e.preventDefault();
                      setIsLoggedIn(true);
                    }}>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full p-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                          type="password"
                          className="w-full p-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-accent text-accent-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </TabsContent>

                <TabsContent value="register">
                  <AccountCreation onAccountCreated={() => setIsLoggedIn(true)} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-foreground">Trading Dashboard</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Logout
          </button>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="trading">Live Charts</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            <TabsTrigger value="investment">Investment</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <InvestmentDashboard />
          </TabsContent>

          <TabsContent value="trading">
            <TradingCharts />
          </TabsContent>

          <TabsContent value="wallet">
            <WalletManager />
          </TabsContent>

          <TabsContent value="investment">
            <div className="space-y-6">
              {/* Investment Products Header */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                <h2 className="text-3xl font-bold mb-2">Investment Products</h2>
                <p className="text-muted-foreground text-lg">
                  Diversify your portfolio with our premium investment solutions
                </p>
              </div>

              {/* Product Categories */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Forex */}
                <Card className="bg-gradient-to-br from-blue-500/5 to-blue-600/10 border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-600">
                      <TrendingUp className="w-5 h-5" />
                      Forex Trading
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Trade 40+ major, minor & exotic currency pairs with institutional-grade execution
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Minimum Deposit:</span>
                        <span className="font-semibold text-blue-600">$100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Maximum Leverage:</span>
                        <span className="font-semibold text-blue-600">1:500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Spreads From:</span>
                        <span className="font-semibold text-blue-600">0.1 pips</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Commission:</span>
                        <span className="font-semibold text-green-600">$0</span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors">
                      Start Forex Trading
                    </button>
                  </CardContent>
                </Card>

                {/* Cryptocurrency */}
                <Card className="bg-gradient-to-br from-orange-500/5 to-orange-600/10 border-orange-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-600">
                      <DollarSign className="w-5 h-5" />
                      Cryptocurrency
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Trade Bitcoin, Ethereum, and 50+ altcoins with advanced charting tools
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Minimum Deposit:</span>
                        <span className="font-semibold text-orange-600">$50</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Available Pairs:</span>
                        <span className="font-semibold text-orange-600">50+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Trading Hours:</span>
                        <span className="font-semibold text-orange-600">24/7</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Max Leverage:</span>
                        <span className="font-semibold text-orange-600">1:100</span>
                      </div>
                    </div>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors">
                      Trade Crypto
                    </button>
                  </CardContent>
                </Card>

                {/* Commodities */}
                <Card className="bg-gradient-to-br from-yellow-500/5 to-yellow-600/10 border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-600">
                      <PieChart className="w-5 h-5" />
                      Commodities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Trade gold, silver, oil, and agricultural commodities with tight spreads
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Minimum Deposit:</span>
                        <span className="font-semibold text-yellow-600">$200</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Available Assets:</span>
                        <span className="font-semibold text-yellow-600">25+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Max Leverage:</span>
                        <span className="font-semibold text-yellow-600">1:200</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Market Hours:</span>
                        <span className="font-semibold text-yellow-600">24/5</span>
                      </div>
                    </div>
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md transition-colors">
                      Trade Commodities
                    </button>
                  </CardContent>
                </Card>
              </div>

              {/* Premium Services */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-purple-500/5 to-purple-600/10 border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-purple-600">Managed Portfolios</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Let our expert traders manage your portfolio with proven strategies
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-purple-600">Conservative</div>
                        <div className="text-muted-foreground">5-8% annual return</div>
                      </div>
                      <div>
                        <div className="font-semibold text-purple-600">Aggressive</div>
                        <div className="text-muted-foreground">15-25% annual return</div>
                      </div>
                    </div>
                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md transition-colors">
                      Get Started
                    </button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500/5 to-green-600/10 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-green-600">Copy Trading</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Copy trades from successful traders and earn while you learn
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-green-600">Top Traders</div>
                        <div className="text-muted-foreground">500+ verified</div>
                      </div>
                      <div>
                        <div className="font-semibold text-green-600">Min Copy</div>
                        <div className="text-muted-foreground">$100</div>
                      </div>
                    </div>
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition-colors">
                      Browse Traders
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}