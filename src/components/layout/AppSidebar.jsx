import { Home, Sparkles, Workflow, HelpCircle, Mail } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Les liens de navigation principaux.
const mainItems = [
  {
    title: "Accueil",
    url: "#accueil", // Pointe vers l'id de la section Hero
    icon: Home,
  },

  {
    title: "Processus",
    url: "#processus", // Pointe vers l'id de la section Process
    icon: Workflow,
  },
    {
    title: "Services",
    url: "#services", // Pointe vers l'id de la section Services
    icon: Sparkles,
  },
  {
    title: "FAQ",
    url: "#faq", // Pointe vers l'id de la section FAQ
    icon: HelpCircle,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="flex flex-col">
        {/* On crée un premier groupe pour la navigation principale */}
        <SidebarGroup className="flex-1">
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* On crée un second groupe, tout en bas, pour le CTA Contact */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                    asChild 
                    // On applique des classes pour le faire ressembler à un bouton principal
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="#contact">
                    <Mail className="h-5 w-5" />
                    <span>Me Contacter</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}