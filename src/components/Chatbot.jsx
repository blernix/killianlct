'use client';

// 1. Importer useState en plus
import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, X } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  
  // 2. On ajoute un état pour savoir si le composant est monté côté client
  const [isMounted, setIsMounted] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: 'https://auto.2minaci.xyz/webhook-test/mon-chatbot',
  });

  const scrollAreaRef = useRef(null);

  // 3. Cet effet ne s'exécute QUE côté client, une fois le composant monté
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  // Si le composant n'est pas encore monté, on ne rend rien.
  // Ceci garantit que le rendu serveur et le premier rendu client sont identiques (rien).
  if (!isMounted) {
    return null;
  }

  // Le reste de ta logique est maintenant en sécurité
  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="rounded-full w-16 h-16"
      >
        <MessageCircle size={32} />
      </Button>
    );
  }

  return (
    <Card className="w-[450px] h-[600px] flex flex-col shadow-lg rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Assistant Virtuel</CardTitle>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.length > 0 ? (
              messages.map(m => (
                <div key={m.id} className={`flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.role === 'assistant' && <Avatar className="h-8 w-8"><AvatarImage src="/bot-avatar.png" alt="Assistant" /><AvatarFallback>A</AvatarFallback></Avatar>}
                  <div className={`max-w-[75%] rounded-lg px-4 py-2 text-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50'}`}>
                    {m.content}
                  </div>
                  {m.role === 'user' && <Avatar className="h-8 w-8"><AvatarImage src="/user-avatar.png" alt="Utilisateur" /><AvatarFallback>U</AvatarFallback></Avatar>}
                </div>
              ))
            ) : (
              <div className="flex h-full items-center justify-center"><p className="text-gray-500">Posez-moi une question !</p></div>
            )}
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
          <Input value={input} onChange={handleInputChange} placeholder="Écrivez votre message..." disabled={isLoading} />
          <Button type="submit" disabled={isLoading}>
            Envoyer
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}