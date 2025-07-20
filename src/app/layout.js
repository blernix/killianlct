
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Menu } from "lucide-react"; 

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Killian Lecrut — Création de Sites & Applications Web sur-mesure",
  description: "Je conçois et développe des expériences web rapides, modernes et sur-mesure pour aider les entreprises à atteindre leurs objectifs en ligne. Parlons de votre projet !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" >
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}>
  
<main className="relative z-19 flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}