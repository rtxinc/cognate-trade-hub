import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Shield, TrendingDown, DollarSign, Percent, Target } from "lucide-react";

export const RiskManagement = () => {
  const riskMetrics = {
    totalRisk: 15,
    maxRisk: 20,
    riskPercentage: 75,
    exposureByAsset: [
      { asset: "EUR/USD", exposure: 35, amount: "$52,500" },
      { asset: "BTC/USD", exposure: 25, amount: "$37,500" },
      { asset: "GBP/USD", exposure: 20, amount: "$30,000" },
      { asset: "ETH/USD", exposure: 15, amount: "$22,500" },
      { asset: "USD/JPY", exposure: 5, amount: "$7,500" }
    ],
    stopLossOrders: [
      { symbol: "EUR/USD", currentPrice: "1.0875", stopPrice: "1.0820", distance: "55 pips" },
      { symbol: "GBP/USD", currentPrice: "1.2684", stopPrice: "1.2650", distance: "34 pips" },
      { symbol: "BTC/USD", currentPrice: "43,250", stopPrice: "42,000", distance: "$1,250" }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Risk Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Shield className="w-5 h-5" />
              Risk Utilization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Current Risk</span>
                <span className="font-medium">{riskMetrics.totalRisk}%</span>
              </div>
              <Progress value={riskMetrics.riskPercentage} className="h-2" />
              <div className="text-xs text-muted-foreground">
                {riskMetrics.totalRisk}% of {riskMetrics.maxRisk}% maximum risk limit
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <DollarSign className="w-5 h-5" />
              Risk Capital
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">$150,000</div>
            <div className="text-sm text-muted-foreground">
              Total exposure across all positions
            </div>
            <div className="text-xs text-success mt-2">
              Within safe limits
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="w-5 h-5" />
              Daily P&L Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">$2,500</div>
            <div className="text-sm text-muted-foreground">
              Maximum daily loss limit
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Current exposure: $1,850
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Asset Exposure */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Percent className="w-5 h-5" />
            Portfolio Exposure by Asset
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskMetrics.exposureByAsset.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="font-medium">{item.asset}</div>
                  <div className="text-right">
                    <div className="font-semibold">{item.amount}</div>
                    <div className="text-sm text-muted-foreground">{item.exposure}%</div>
                  </div>
                </div>
                <Progress value={item.exposure} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stop Loss Orders */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Active Stop Loss Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskMetrics.stopLossOrders.map((order, index) => (
              <div key={index} className="p-4 bg-muted/20 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <div className="font-semibold text-lg">{order.symbol}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Current Price</div>
                    <div className="font-medium">{order.currentPrice}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stop Price</div>
                    <div className="font-medium text-destructive">{order.stopPrice}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Distance</div>
                    <div className="font-medium">{order.distance}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Warnings */}
      <Card className="bg-gradient-card border-border border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-accent">
            <AlertTriangle className="w-5 h-5" />
            Risk Alerts & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium text-accent">High Correlation Risk</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Your EUR/USD and GBP/USD positions are highly correlated. Consider reducing exposure to one pair.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <div className="font-medium">Diversification Good</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Your portfolio is well-diversified across forex and crypto markets.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <div className="font-medium">Position Sizing</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Consider reducing position sizes during high volatility periods like this week.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};