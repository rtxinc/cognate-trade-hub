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
        <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-500/30 transition-all duration-300 group">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
              <DollarSign className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Deposit Funds</h3>
            <p className="text-sm text-muted-foreground mb-4">Instant deposits via crypto, wire transfer, or card</p>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              Deposit Now
            </button>
            <div className="mt-3 text-xs text-muted-foreground">
              Min: $100 • Instant processing
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Start Trading</h3>
            <p className="text-sm text-muted-foreground mb-4">Access 500+ instruments with leverage up to 1:500</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
              Trade Now
            </button>
            <div className="mt-3 text-xs text-muted-foreground">
              Spreads from 0.1 pips • No commissions
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 group">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
              <PieChart className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Portfolio Analysis</h3>
            <p className="text-sm text-muted-foreground mb-4">Advanced analytics and risk management tools</p>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-md font-medium transition-all duration-200 shadow-lg hover:shadow-purple-500/25">
              Analyze Portfolio
            </button>
            <div className="mt-3 text-xs text-muted-foreground">
              Real-time insights • Risk metrics
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};