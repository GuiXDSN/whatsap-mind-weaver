import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Clock, CheckCircle, AlertCircle, User } from "lucide-react";

const conversations = [
  {
    id: "conv_001",
    user: "João Silva",
    lastMessage: "Preciso de ajuda com o produto X...",
    timestamp: "2 min atrás",
    status: "resolved",
    messages: 7,
    satisfaction: 5
  },
  {
    id: "conv_002", 
    user: "Maria Santos",
    lastMessage: "Como faço para cancelar meu pedido?",
    timestamp: "5 min atrás",
    status: "active",
    messages: 3,
    satisfaction: null
  },
  {
    id: "conv_003",
    user: "Pedro Costa",
    lastMessage: "Obrigado! Problema resolvido.",
    timestamp: "8 min atrás", 
    status: "resolved",
    messages: 12,
    satisfaction: 4
  },
  {
    id: "conv_004",
    user: "Ana Oliveira", 
    lastMessage: "Não entendi a resposta anterior...",
    timestamp: "12 min atrás",
    status: "needs_attention",
    messages: 8,
    satisfaction: null
  },
  {
    id: "conv_005",
    user: "Carlos Mendes",
    lastMessage: "Qual o prazo de entrega?",
    timestamp: "15 min atrás",
    status: "active", 
    messages: 2,
    satisfaction: null
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'resolved':
      return (
        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
          <CheckCircle className="w-3 h-3 mr-1" />
          Resolvida
        </Badge>
      );
    case 'active':
      return (
        <Badge variant="outline" className="bg-info/10 text-info border-info/20">
          <MessageSquare className="w-3 h-3 mr-1" />
          Ativa
        </Badge>
      );
    case 'needs_attention':
      return (
        <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
          <AlertCircle className="w-3 h-3 mr-1" />
          Atenção
        </Badge>
      );
    default:
      return null;
  }
};

export const RecentConversations = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Conversas Recentes
            </CardTitle>
            <CardDescription>
              Últimas interações dos usuários
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Ver Todas
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conversations.map((conversation) => (
            <div key={conversation.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-foreground truncate">
                    {conversation.user}
                  </p>
                  {getStatusBadge(conversation.status)}
                </div>
                
                <p className="text-sm text-muted-foreground truncate mb-2">
                  {conversation.lastMessage}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {conversation.timestamp}
                    </span>
                    <span>
                      {conversation.messages} mensagens
                    </span>
                    {conversation.satisfaction && (
                      <span className="flex items-center gap-1">
                        <span>⭐</span>
                        {conversation.satisfaction}/5
                      </span>
                    )}
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};