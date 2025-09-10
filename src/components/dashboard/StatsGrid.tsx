import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Brain, Zap, TrendingUp, Clock } from "lucide-react";

const stats = [
  {
    title: "Total de Conversas",
    value: "1,247",
    change: "+20.1%",
    changeType: "positive",
    icon: MessageSquare,
    description: "Últimos 30 dias"
  },
  {
    title: "Usuários Únicos", 
    value: "573",
    change: "+12.5%",
    changeType: "positive",
    icon: Users,
    description: "Este mês"
  },
  {
    title: "Taxa de Resolução",
    value: "94.2%",
    change: "+2.1%",
    changeType: "positive", 
    icon: Brain,
    description: "Perguntas resolvidas"
  },
  {
    title: "Tempo Médio",
    value: "1.2s",
    change: "-0.3s",
    changeType: "positive",
    icon: Zap,
    description: "Tempo de resposta"
  },
  {
    title: "Satisfação",
    value: "4.8/5",
    change: "+0.2",
    changeType: "positive",
    icon: TrendingUp,
    description: "Avaliação média"
  },
  {
    title: "Uptime",
    value: "99.9%",
    change: "Estável",
    changeType: "neutral",
    icon: Clock,
    description: "Disponibilidade"
  }
];

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span 
                  className={`font-medium ${
                    stat.changeType === 'positive' 
                      ? 'text-success' 
                      : stat.changeType === 'negative' 
                      ? 'text-destructive' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {stat.change}
                </span>
                <span>{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};