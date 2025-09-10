import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Seg', conversas: 65, resolucoes: 61 },
  { name: 'Ter', conversas: 89, resolucoes: 84 },
  { name: 'Qua', conversas: 123, resolucoes: 116 },
  { name: 'Qui', conversas: 95, resolucoes: 89 },
  { name: 'Sex', conversas: 147, resolucoes: 139 },
  { name: 'Sáb', conversas: 78, resolucoes: 73 },
  { name: 'Dom', conversas: 56, resolucoes: 52 },
];

const responseTimeData = [
  { hour: '00h', tempo: 1.8 },
  { hour: '04h', tempo: 1.2 },
  { hour: '08h', tempo: 2.3 },
  { hour: '12h', tempo: 2.8 },
  { hour: '16h', tempo: 2.1 },
  { hour: '20h', tempo: 1.5 },
  { hour: '24h', tempo: 1.3 },
];

export const ConversationsChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Conversas e Resoluções</CardTitle>
          <CardDescription>
            Análise semanal de performance do chatbot
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
              <XAxis 
                dataKey="name" 
                className="text-muted-foreground"
                fontSize={12}
              />
              <YAxis 
                className="text-muted-foreground"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  fontSize: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="conversas" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                name="Conversas"
              />
              <Line 
                type="monotone" 
                dataKey="resolucoes" 
                stroke="hsl(var(--success))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 4 }}
                name="Resoluções"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Tempo de Resposta</CardTitle>
          <CardDescription>
            Tempo médio de resposta por hora do dia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={responseTimeData}>
              <defs>
                <linearGradient id="responseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--info))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--info))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
              <XAxis 
                dataKey="hour" 
                className="text-muted-foreground"
                fontSize={12}
              />
              <YAxis 
                className="text-muted-foreground"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  fontSize: '12px'
                }}
                formatter={(value) => [`${value}s`, 'Tempo de Resposta']}
              />
              <Area 
                type="monotone" 
                dataKey="tempo" 
                stroke="hsl(var(--info))" 
                strokeWidth={2}
                fill="url(#responseGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};