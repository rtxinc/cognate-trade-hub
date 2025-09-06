import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, PieChart } from "lucide-react";

export const InvestmentDashboard = () => {
  const portfolioData = [
    { name: "Total Balance", value: "$25,430.50", change: "+12.5%", positive: true },
    { name: "Available Margin", value: "$18,230.00", change: "+5.2%", positive: true },
    { name: "Unrealized P&L", value: "+$1,250.30", change: "+8.7%", positive: true },
    { name: "Today's P&L", value: "+$125.50", change: "+2.1%", positive: true },
  ];

  const positions = [
    { pair: "EUR/USD", type: "Buy", lots: "0.5", profit: "+$45.20", positive: true },
    { pair: "GBP/JPY", type: "Sell", lots: "0.3", profit: "-$12.80", positive: false },
    { pair: "BTC/USD", type: "Buy", lots: "0.1", profit: "+$234.50", positive: true },
    { pair: "ETH/USD", type: "Buy", lots: "0.2", profit: "+$89.30", positive: true },
  ];

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.map((item, index) => (
          <Card key={index} className="bg-gradient-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{item.value}</span>
                <div className={`flex items-center gap-1 text-sm ${
                  item.positive ? 'text-success' : 'text-destructive'
                }`}>
                  {item.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {item.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Open Positions */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="w-5 h-5" />
            Open Positions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold">{position.pair}</div>
                    <div className="text-sm text-muted-foreground">{position.type} • {position.lots} lots</div>
                  </div>
                </div>
                <div className={`font-semibold ${
                  position.positive ? 'text-success' : 'text-destructive'
                }`}>
                  {position.profit}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-border">
          <CardContent className="p-6 text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold mb-2">Deposit Funds</h3>
            <p className="text-sm text-muted-foreground mb-4">Add funds to your trading account</p>
            <button className="w-full bg-accent text-accent-foreground py-2 rounded-md hover:opacity-90 transition-opacity">
              Deposit
            </button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold mb-2">Start Trading</h3>
            <p className="text-sm text-muted-foreground mb-4">Open new positions in the market</p>
            <button className="w-full bg-accent text-accent-foreground py-2 rounded-md hover:opacity-90 transition-opacity">
              Trade Now
            </button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardContent className="p-6 text-center">
            <PieChart className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold mb-2">Portfolio Analysis</h3>
            <p className="text-sm text-muted-foreground mb-4">View detailed portfolio insights</p>
            <button className="w-full bg-accent text-accent-foreground py-2 rounded-md hover:opacity-90 transition-opacity">
              Analyze
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};