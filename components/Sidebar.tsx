"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Search, History, Info, Menu, X, BookOpen, Gavel } from "lucide-react";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  expanded: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ href, icon, label, expanded, onClick }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        expanded ? "justify-start" : "justify-center",
        isActive 
          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
          : "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-white/10"
      )}
      onClick={onClick}
    >
      <div>{icon}</div>
      {expanded && <span>{label}</span>}
    </Link>
  );
};

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const { t } = useTranslation();
  
  // Set expanded to false on mobile by default
  useEffect(() => {
    if (isMobile) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }, [isMobile]);
  
  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setExpanded(false);
    }
  }, [pathname, isMobile]);
  
  const handleLinkClick = () => {
    if (isMobile) {
      setExpanded(false);
    }
  };

  return (
    <div
      className={cn(
        "h-screen bg-justice-navy text-white flex flex-col border-r border-sidebar-border transition-all duration-300 absolute md:relative z-20",
        expanded ? "w-64" : "w-16",
        isMobile && expanded ? "shadow-lg" : ""
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className={cn("flex items-center gap-3", !expanded && "hidden")}>
          <Gavel className="h-6 w-6 text-yellow-600" />
          <h1 className="font-bold text-black dark:text-white text-lg">{t("app.name")}</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setExpanded(!expanded)}
          className="text-white hover:bg-white/10"
        >
          {expanded ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      <div className="flex-1 py-6 flex flex-col gap-2 px-2">
        <SidebarLink href="/" icon={<Home size={20} />} label={t("nav.home")} expanded={expanded} onClick={handleLinkClick} />
        <SidebarLink href="/search" icon={<Search size={20} />} label={t("nav.search")} expanded={expanded} onClick={handleLinkClick} />
        <SidebarLink href="/history" icon={<History size={20} />} label={t("nav.history")} expanded={expanded} onClick={handleLinkClick} />
        <SidebarLink href="/about" icon={<Info size={20} />} label={t("nav.about")} expanded={expanded} onClick={handleLinkClick} />
      </div>
      
      <div className="p-4 border-t border-sidebar-border flex justify-center">
        {expanded ? (
          <div className="text-xs text-center text-white/70">
            <p>{t("app.name")}</p>
            <p>{t("app.version")}</p>
          </div>
        ) : (
          <Link href="/about" className="text-white/70 hover:text-white transition-colors">
            <BookOpen size={20} />
          </Link>
        )}
      </div>
    </div>
  );
}