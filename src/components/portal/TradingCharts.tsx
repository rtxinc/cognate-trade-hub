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
          <div className="h-96 bg-gradient-subtle rounded-lg relative overflow-hidden">
            {/* Simulated Chart Background */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <path 
                  d="M0,150 Q50,120 100,130 T200,110 T300,85 T400,75" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  className="text-accent"
                />
                <path 
                  d="M0,180 L50,175 L100,165 L150,170 L200,160 L250,145 L300,140 L350,135 L400,130" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  fill="none" 
                  className="text-success"
                />
              </svg>
            </div>
            
            {/* Chart Interface */}
            <div className="relative z-10 p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <select className="bg-background border border-border rounded px-3 py-1 text-sm">
                    <option>EUR/USD</option>
                    <option>GBP/USD</option>
                    <option>BTC/USD</option>
                  </select>
                  <div className="text-xl font-bold">1.0875</div>
                  <div className="text-success text-sm">+0.0012 (+0.11%)</div>
                </div>
                <div className="flex gap-2">
                  {['1m', '5m', '15m', '1h', '4h', '1d'].map((timeframe) => (
                    <button 
                      key={timeframe}
                      className="px-2 py-1 text-xs bg-muted hover:bg-accent hover:text-accent-foreground rounded"
                    >
                      {timeframe}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>09:00</span>
                  <span>12:00</span>
                  <span>15:00</span>
                  <span>18:00</span>
                </div>
              </div>
            </div>
            
            {/* Trading Panel */}
            <div className="absolute top-4 right-4 bg-background/95 backdrop-blur border border-border rounded-lg p-4 w-48">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button className="flex-1 bg-success text-success-foreground py-2 text-sm rounded">
                    BUY
                  </button>
                  <button className="flex-1 bg-destructive text-destructive-foreground py-2 text-sm rounded">
                    SELL
                  </button>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lot Size:</span>
                    <input className="w-16 px-1 border border-border rounded text-right" defaultValue="1.0" />
                  </div>
                  <div className="flex justify-between">
                    <span>Stop Loss:</span>
                    <input className="w-16 px-1 border border-border rounded text-right" placeholder="1.0820" />
                  </div>
                  <div className="flex justify-between">
                    <span>Take Profit:</span>
                    <input className="w-16 px-1 border border-border rounded text-right" placeholder="1.0920" />
                  </div>
                </div>
              </div>
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