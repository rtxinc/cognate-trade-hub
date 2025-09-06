import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, BarChart3, Zap } from "lucide-react";

export const TradingCharts = () => {
  const marketData = [
    { symbol: "EUR/USD", price: "1.0875", change: "+0.0012", percentage: "+0.11%", positive: true },
    { symbol: "GBP/USD", price: "1.2684", change: "-0.0023", percentage: "-0.18%", positive: false },
    { symbol: "USD/JPY", price: "149.85", change: "+0.45", percentage: "+0.30%", positive: true },
    { symbol: "BTC/USD", price: "43,250", change: "+1,250", percentage: "+2.98%", positive: true },
    { symbol: "ETH/USD", price: "2,650", change: "+85", percentage: "+3.31%", positive: true },
    { symbol: "XRP/USD", price: "0.6245", change: "+0.0145", percentage: "+2.38%", positive: true },
  ];

  const cryptoData = [
    { symbol: "BTC/USD", price: "43,250.00", change: "+2.98%", positive: true },
    { symbol: "ETH/USD", price: "2,650.00", change: "+3.31%", positive: true },
    { symbol: "BNB/USD", price: "310.45", change: "+1.85%", positive: true },
    { symbol: "SOL/USD", price: "98.75", change: "+4.25%", positive: true },
    { symbol: "ADA/USD", price: "0.4250", change: "-0.95%", positive: false },
    { symbol: "DOT/USD", price: "6.85", change: "+2.15%", positive: true },
  ];

  return (
    <div className="space-y-6">
      {/* Live Chart Placeholder */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Live Trading Chart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-muted/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Trading Charts</h3>
              <p className="text-muted-foreground">
                Advanced TradingView charts with technical indicators, multiple timeframes, and real-time data
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Data */}
      <Tabs defaultValue="forex" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="forex">Forex</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="indices">Indices</TabsTrigger>
        </TabsList>

        <TabsContent value="forex">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle>Major Currency Pairs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketData.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                    <div>
                      <div className="font-semibold text-lg">{item.symbol}</div>
                      <div className="text-2xl font-bold">{item.price}</div>
                    </div>
                    <div className={`text-right ${item.positive ? 'text-success' : 'text-destructive'}`}>
                      <div className="flex items-center gap-1 justify-end">
                        {item.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span className="font-semibold">{item.percentage}</span>
                      </div>
                      <div className="text-sm">{item.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crypto">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle>Cryptocurrency Markets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cryptoData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                    <div>
                      <div className="font-semibold text-lg">{item.symbol}</div>
                      <div className="text-2xl font-bold">${item.price}</div>
                    </div>
                    <div className={`text-right ${item.positive ? 'text-success' : 'text-destructive'}`}>
                      <div className="flex items-center gap-1 justify-end">
                        {item.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span className="font-semibold">{item.change}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="indices">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle>Global Stock Indices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div>
                    <div className="font-semibold text-lg">S&P 500</div>
                    <div className="text-2xl font-bold">4,785.52</div>
                  </div>
                  <div className="text-right text-success">
                    <div className="flex items-center gap-1 justify-end">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold">+0.85%</span>
                    </div>
                    <div className="text-sm">+40.25</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div>
                    <div className="font-semibold text-lg">NASDAQ</div>
                    <div className="text-2xl font-bold">15,245.87</div>
                  </div>
                  <div className="text-right text-success">
                    <div className="flex items-center gap-1 justify-end">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold">+1.25%</span>
                    </div>
                    <div className="text-sm">+188.45</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};