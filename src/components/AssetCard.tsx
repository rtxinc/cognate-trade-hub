import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AssetCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const AssetCard = ({ icon: Icon, title, description, features }: AssetCardProps) => {
  return (
    <Card className="bg-gradient-card border-accent/20 p-6 hover:shadow-glow transition-all duration-300 group">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
};