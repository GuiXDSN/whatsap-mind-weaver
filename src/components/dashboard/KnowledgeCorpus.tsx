import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload, Search, Brain, Database, Plus, Trash2, Edit } from "lucide-react";

const knowledgeItems = [
  {
    id: "kb_001",
    name: "FAQ - Produtos",
    type: "FAQ",
    documents: 45,
    lastUpdated: "Ontem",
    status: "active",
    accuracy: 96
  },
  {
    id: "kb_002", 
    name: "Manual do Usuário",
    type: "Documento",
    documents: 23,
    lastUpdated: "3 dias atrás", 
    status: "active",
    accuracy: 94
  },
  {
    id: "kb_003",
    name: "Políticas da Empresa",
    type: "Política",
    documents: 12,
    lastUpdated: "1 semana atrás",
    status: "needs_update", 
    accuracy: 89
  },
  {
    id: "kb_004",
    name: "Tutoriais em Vídeo",
    type: "Mídia",
    documents: 18,
    lastUpdated: "2 dias atrás",
    status: "processing",
    accuracy: null
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return (
        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
          Ativo
        </Badge>
      );
    case 'needs_update':
      return (
        <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
          Precisa Atualizar
        </Badge>
      );
    case 'processing':
      return (
        <Badge variant="outline" className="bg-info/10 text-info border-info/20">
          Processando
        </Badge>
      );
    default:
      return null;
  }
};

export const KnowledgeCorpus = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Base de Conhecimento
                </CardTitle>
                <CardDescription>
                  Gerencie documentos e fontes de conhecimento do chatbot
                </CardDescription>
              </div>
              <Button className="bg-gradient-primary shadow-primary">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Fonte
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {knowledgeItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-foreground">
                          {item.name}
                        </h3>
                        {getStatusBadge(item.status)}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{item.type}</span>
                        <span>•</span>
                        <span>{item.documents} documentos</span>
                        <span>•</span>
                        <span>{item.lastUpdated}</span>
                      </div>
                      
                      {item.accuracy && (
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-muted-foreground">Precisão:</span>
                          <Progress value={item.accuracy} className="w-20 h-2" />
                          <span className="text-xs font-medium text-success">
                            {item.accuracy}%
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Search className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Upload Rápido
            </CardTitle>
            <CardDescription>
              Adicione novos documentos à base
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Arraste arquivos aqui ou
              </p>
              <Button variant="outline" size="sm">
                Selecionar Arquivos
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Status RAG
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total de Documentos</span>
              <span className="font-medium">98</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Vetores Indexados</span>
              <span className="font-medium">12,847</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Última Indexação</span>
              <span className="font-medium">2h atrás</span>
            </div>
            <div className="pt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-muted-foreground">Performance</span>
                <span className="text-sm font-medium text-success">Excelente</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};