import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Clock, CheckCircle, XCircle, Calendar } from "lucide-react";

export const TradingHistory = () => {
  const trades = [
    {
      id: "TXN-001",
      symbol: "EUR/USD",
      type: "Buy",
      size: "1.5",
      openPrice: "1.0850",
      closePrice: "1.0875",
      pnl: "+375.00",
      status: "Closed",
      openTime: "2024-01-15 09:30",
      closeTime: "2024-01-15 14:45",
      positive: true
    },
    {
      id: "TXN-002",
      symbol: "BTC/USD",
      type: "Sell",
      size: "0.1",
      openPrice: "42,500",
      closePrice: "43,250",
      pnl: "-750.00",
      status: "Closed",
      openTime: "2024-01-14 16:20",
      closeTime: "2024-01-15 08:15",
      positive: false
    },
    {
      id: "TXN-003",
      symbol: "GBP/USD",
      type: "Buy",
      size: "2.0",
      openPrice: "1.2650",
      closePrice: "1.2684",
      pnl: "+680.00",
      status: "Open",
      openTime: "2024-01-15 11:45",
      closeTime: null,
      positive: true
    }
  ];

  const orders = [
    {
      id: "ORD-001",
      symbol: "USD/JPY",
      type: "Buy Limit",
      size: "1.0",
      targetPrice: "149.50",
      currentPrice: "149.85",
      status: "Pending",
      created: "2024-01-15 13:20"
    },
    {
      id: "ORD-002",
      symbol: "ETH/USD",
      type: "Sell Stop",
      size: "2.0",
      targetPrice: "2,600",
      currentPrice: "2,650",
      status: "Pending",
      created: "2024-01-15 10:15"
    }
  ];

  const deposits = [
    {
      id: "DEP-001",
      method: "Bank Transfer",
      amount: "$10,000",
      status: "Completed",
      date: "2024-01-14 09:30",
      fee: "$0.00"
    },
    {
      id: "DEP-002",
      method: "Credit Card",
      amount: "$2,500",
      status: "Processing",
      date: "2024-01-15 14:20",
      fee: "$25.00"
    }
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="trades" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="trades">Trade History</TabsTrigger>
          <TabsTrigger value="orders">Open Orders</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="trades">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Trading History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trades.map((trade) => (
                  <div key={trade.id} className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                      <div>
                        <div className="font-semibold text-lg">{trade.symbol}</div>
                        <div className="text-sm text-muted-foreground">{trade.id}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Type & Size</div>
                        <div className="font-medium">{trade.type} {trade.size}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Open Price</div>
                        <div className="font-medium">{trade.openPrice}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Close Price</div>
                        <div className="font-medium">{trade.closePrice || "—"}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">P&L</div>
                        <div className={`font-bold ${trade.positive ? 'text-success' : 'text-destructive'}`}>
                          {trade.pnl}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          trade.status === 'Closed' ? 'bg-success/20 text-success' : 'bg-accent/20 text-accent'
                        }`}>
                          {trade.status === 'Closed' ? (
                            <CheckCircle className="w-3 h-3" />
                          ) : (
                            <Clock className="w-3 h-3" />
                          )}
                          {trade.status}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {trade.openTime}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Open Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="p-4 bg-muted/20 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                      <div>
                        <div className="font-semibold text-lg">{order.symbol}</div>
                        <div className="text-sm text-muted-foreground">{order.id}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Order Type</div>
                        <div className="font-medium">{order.type}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Size</div>
                        <div className="font-medium">{order.size}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Target Price</div>
                        <div className="font-medium">{order.targetPrice}</div>
                        <div className="text-xs text-muted-foreground">Current: {order.currentPrice}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                          <Clock className="w-3 h-3" />
                          {order.status}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {order.created}
                        </div>
                        <button className="text-xs text-destructive hover:underline mt-1 block">
                          Cancel Order
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Transaction History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deposits.map((deposit) => (
                  <div key={deposit.id} className="p-4 bg-muted/20 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                      <div>
                        <div className="font-semibold">{deposit.method}</div>
                        <div className="text-sm text-muted-foreground">{deposit.id}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Amount</div>
                        <div className="font-bold text-lg">{deposit.amount}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Fee</div>
                        <div className="font-medium">{deposit.fee}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground">Date</div>
                        <div className="font-medium">{deposit.date}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          deposit.status === 'Completed' ? 'bg-success/20 text-success' : 'bg-accent/20 text-accent'
                        }`}>
                          {deposit.status === 'Completed' ? (
                            <CheckCircle className="w-3 h-3" />
                          ) : (
                            <Clock className="w-3 h-3" />
                          )}
                          {deposit.status}
                        </div>
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