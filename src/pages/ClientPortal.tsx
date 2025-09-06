import { Header } from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Investment Opportunities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Forex Trading</h3>
                  <p className="text-muted-foreground mb-4">
                    Trade major currency pairs with tight spreads and leverage up to 1:500
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Minimum Deposit:</span>
                      <span className="text-accent">$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Maximum Leverage:</span>
                      <span className="text-accent">1:500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Spreads From:</span>
                      <span className="text-accent">0.1 pips</span>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Cryptocurrency</h3>
                  <p className="text-muted-foreground mb-4">
                    Trade Bitcoin, Ethereum, and other major cryptocurrencies 24/7
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Minimum Deposit:</span>
                      <span className="text-accent">$50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Available Pairs:</span>
                      <span className="text-accent">50+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trading Hours:</span>
                      <span className="text-accent">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}