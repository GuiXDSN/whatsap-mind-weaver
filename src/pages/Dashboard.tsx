import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Users, Brain, TrendingUp, Activity, Bot, FileText, Settings } from "lucide-react";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ConversationsChart } from "@/components/dashboard/ConversationsChart";
import { RecentConversations } from "@/components/dashboard/RecentConversations";
import { KnowledgeCorpus } from "@/components/dashboard/KnowledgeCorpus";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Painel RAG Chatbot
              </h1>
              <p className="text-muted-foreground">
                Gerencie seu assistente inteligente para WhatsApp
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <Activity className="w-3 h-3 mr-1" />
                Online
              </Badge>
              <Button className="bg-gradient-primary shadow-primary">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <StatsGrid />

        {/* Main Content */}
        <Tabs defaultValue="conversations" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="conversations" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Conversas
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="knowledge" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Base de Conhecimento
            </TabsTrigger>
            <TabsTrigger value="bot-config" className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Configurar Bot
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conversations" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RecentConversations />
              </div>
              <div>
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Usuários Ativos
                    </CardTitle>
                    <CardDescription>
                      Últimas 24 horas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-2">247</div>
                    <p className="text-sm text-muted-foreground">
                      +12% comparado a ontem
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <ConversationsChart />
          </TabsContent>

          <TabsContent value="knowledge" className="mt-6">
            <KnowledgeCorpus />
          </TabsContent>

          <TabsContent value="bot-config" className="mt-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  Configuração do Chatbot
                </CardTitle>
                <CardDescription>
                  Configure a personalidade e comportamento do seu assistente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Conecte ao Supabase</h3>
                  <p className="text-muted-foreground mb-4">
                    Para configurar o chatbot, você precisa conectar ao Supabase primeiro.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;