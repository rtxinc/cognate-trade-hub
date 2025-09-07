import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, BarChart3, Calendar, Clock, Globe } from "lucide-react";

export const MarketAnalysis = () => {
  const marketSentiment = {
    overall: "Bullish",
    percentage: 68,
    indicators: [
      { name: "Fear & Greed Index", value: 72, status: "Greed" },
      { name: "VIX", value: 18.5, status: "Low Volatility" },
      { name: "USD Index", value: 103.2, status: "Strong" }
    ]
  };

  const technicalAnalysis = [
    {
      symbol: "EUR/USD",
      trend: "Bullish",
      resistance: "1.0920",
      support: "1.0820",
      rsi: 65,
      signal: "Buy",
      positive: true
    },
    {
      symbol: "GBP/USD",
      trend: "Bearish",
      resistance: "1.2750",
      support: "1.2620",
      rsi: 38,
      signal: "Sell",
      positive: false
    },
    {
      symbol: "BTC/USD",
      trend: "Bullish",
      resistance: "45,000",
      support: "41,500",
      rsi: 58,
      signal: "Hold",
      positive: true
    }
  ];

  const economicEvents = [
    {
      time: "10:30",
      currency: "USD",
      event: "Core CPI m/m",
      impact: "High",
      forecast: "0.3%",
      previous: "0.4%"
    },
    {
      time: "14:00",
      currency: "EUR",
      event: "ECB Interest Rate Decision",
      impact: "High",
      forecast: "4.50%",
      previous: "4.50%"
    },
    {
      time: "15:30",
      currency: "USD",
      event: "Fed Chair Powell Speech",
      impact: "Medium",
      forecast: "-",
      previous: "-"
    }
  ];

  const marketNews = [
    {
      time: "2 hours ago",
      headline: "Federal Reserve Hints at Pause in Rate Hikes",
      impact: "High",
      category: "Central Bank"
    },
    {
      time: "4 hours ago",
      headline: "European Central Bank Maintains Hawkish Stance",
      impact: "Medium",
      category: "Central Bank"
    },
    {
      time: "6 hours ago",
      headline: "Bitcoin ETF Sees Record Inflows This Week",
      impact: "Medium",
      category: "Cryptocurrency"
    }
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="sentiment" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="sentiment">Market Sentiment</TabsTrigger>
          <TabsTrigger value="technical">Technical Analysis</TabsTrigger>
          <TabsTrigger value="economic">Economic Calendar</TabsTrigger>
          <TabsTrigger value="news">Market News</TabsTrigger>
        </TabsList>

        <TabsContent value="sentiment">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Overall Market Sentiment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold text-success">{marketSentiment.overall}</div>
                  <div className="w-32 h-32 mx-auto relative">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted/20"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${marketSentiment.percentage * 2.51} 251`}
                        className="text-success"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">{marketSentiment.percentage}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>Market Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketSentiment.indicators.map((indicator, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                      <div>
                        <div className="font-medium">{indicator.name}</div>
                        <div className="text-sm text-muted-foreground">{indicator.status}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{indicator.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="technical">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Technical Analysis Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {technicalAnalysis.map((analysis, index) => (
                  <div key={index} className="p-4 bg-muted/20 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                      <div>
                        <div className="font-semibold text-lg">{analysis.symbol}</div>
                        <div className={`text-sm ${analysis.positive ? 'text-success' : 'text-destructive'}`}>
                          {analysis.trend}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Support</div>
                        <div className="font-medium">{analysis.support}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Resistance</div>
                        <div className="font-medium">{analysis.resistance}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">RSI</div>
                        <div className="font-medium">{analysis.rsi}</div>
                      </div>
                      
                      <div>
                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                          analysis.signal === 'Buy' ? 'bg-success/20 text-success' :
                          analysis.signal === 'Sell' ? 'bg-destructive/20 text-destructive' :
                          'bg-accent/20 text-accent'
                        }`}>
                          {analysis.signal === 'Buy' ? (
                            <TrendingUp className="w-3 h-3" />
                          ) : analysis.signal === 'Sell' ? (
                            <TrendingDown className="w-3 h-3" />
                          ) : null}
                          {analysis.signal}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <button className="text-sm text-accent hover:underline">
                          View Chart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="economic">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Today's Economic Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {economicEvents.map((event, index) => (
                  <div key={index} className="p-4 bg-muted/20 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded">
                          {event.currency}
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <div className="font-medium">{event.event}</div>
                      </div>
                      
                      <div>
                        <div className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                          event.impact === 'High' ? 'bg-destructive/20 text-destructive' :
                          event.impact === 'Medium' ? 'bg-accent/20 text-accent' :
                          'bg-muted/40 text-muted-foreground'
                        }`}>
                          {event.impact} Impact
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Forecast: {event.forecast}</div>
                        <div className="text-sm text-muted-foreground">Previous: {event.previous}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Latest Market News
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketNews.map((news, index) => (
                  <div key={index} className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="font-medium mb-2">{news.headline}</div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{news.time}</span>
                          <span className="px-2 py-1 bg-accent/20 text-accent rounded text-xs">
                            {news.category}
                          </span>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium shrink-0 ${
                        news.impact === 'High' ? 'bg-destructive/20 text-destructive' :
                        'bg-accent/20 text-accent'
                      }`}>
                        {news.impact} Impact
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};