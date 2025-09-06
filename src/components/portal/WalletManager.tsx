import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, Copy, ExternalLink, Download, Upload } from "lucide-react";
import { toast } from "sonner";

export const WalletManager = () => {
  const cryptoWallets = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      balance: "0.00245",
      value: "$105.50",
      network: "Bitcoin Network",
      minDeposit: "0.0001 BTC"
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      address: "0x742d35Cc6e99B4c34C1234567890ABCdef123456",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=0x742d35Cc6e99B4c34C1234567890ABCdef123456",
      balance: "0.85",
      value: "$2,252.50",
      network: "Ethereum (ERC-20)",
      minDeposit: "0.001 ETH"
    },
    {
      symbol: "USDT",
      name: "Tether",
      address: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs",
      balance: "1,250.00",
      value: "$1,250.00",
      network: "Tron (TRC-20)",
      minDeposit: "10 USDT"
    },
    {
      symbol: "SOL",
      name: "Solana",
      address: "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",
      balance: "25.50",
      value: "$2,518.75",
      network: "Solana Network",
      minDeposit: "0.1 SOL"
    }
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  return (
    <div className="space-y-6">
      {/* Wallet Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Total Portfolio Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent mb-2">$6,126.75</div>
            <div className="text-success text-sm">+$245.30 (+4.17%) today</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Available Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">$5,980.25</div>
            <div className="text-muted-foreground text-sm">Ready for trading</div>
          </CardContent>
        </Card>
      </div>

      {/* Crypto Wallets */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle>Cryptocurrency Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="BTC" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full">
              {cryptoWallets.map((wallet) => (
                <TabsTrigger key={wallet.symbol} value={wallet.symbol}>
                  {wallet.symbol}
                </TabsTrigger>
              ))}
            </TabsList>

            {cryptoWallets.map((wallet) => (
              <TabsContent key={wallet.symbol} value={wallet.symbol}>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Deposit Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Deposit {wallet.name} ({wallet.symbol})
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/20 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">Network</div>
                          <div className="font-medium">{wallet.network}</div>
                        </div>
                        
                        <div className="p-4 bg-muted/20 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">Minimum Deposit</div>
                          <div className="font-medium">{wallet.minDeposit}</div>
                        </div>

                        <div className="p-4 bg-muted/20 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-2">Deposit Address</div>
                          <div className="flex items-center gap-2">
                            <code className="bg-background p-2 rounded flex-1 text-sm font-mono break-all">
                              {wallet.address}
                            </code>
                            <button
                              onClick={() => copyToClipboard(wallet.address, "Address")}
                              className="p-2 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                          <div className="text-sm text-destructive font-medium mb-2">⚠️ Important Notice</div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Only send {wallet.symbol} to this address</li>
                            <li>• Ensure you're using the correct network: {wallet.network}</li>
                            <li>• Deposits require network confirmations</li>
                            <li>• Minimum deposit: {wallet.minDeposit}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* QR Code and Balance */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-4">QR Code</h4>
                      <div className="inline-block p-4 bg-white rounded-lg">
                        <img
                          src={wallet.qrCode}
                          alt={`${wallet.symbol} QR Code`}
                          className="w-48 h-48 mx-auto"
                        />
                      </div>
                      <div className="mt-4 text-sm text-muted-foreground">
                        Scan with your crypto wallet
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-muted/20 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Current Balance</div>
                        <div className="text-2xl font-bold">{wallet.balance} {wallet.symbol}</div>
                        <div className="text-accent font-medium">{wallet.value}</div>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 bg-accent text-accent-foreground py-2 rounded-md hover:opacity-90 transition-opacity">
                          Deposit
                        </button>
                        <button className="flex-1 bg-secondary text-secondary-foreground py-2 rounded-md hover:opacity-90 transition-opacity">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                  <Download className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="font-medium">BTC Deposit</div>
                  <div className="text-sm text-muted-foreground">2024-01-15 14:30</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">+0.00245 BTC</div>
                <div className="text-sm text-success">Confirmed</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Upload className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium">ETH Withdrawal</div>
                  <div className="text-sm text-muted-foreground">2024-01-14 09:15</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">-0.15 ETH</div>
                <div className="text-sm text-muted-foreground">Processing</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};