import { Link, useLocation } from "wouter";
import { Home, Calendar, DollarSign, Users, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SiYoutube, SiInstagram, SiFacebook, SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
  { path: "/", label: "HOME", icon: Home },
  { path: "/events", label: "EVENTS", icon: Calendar },
  { path: "/sponsors", label: "SPONSORS", icon: DollarSign },
  { path: "/team", label: "TEAM", icon: Users },
  { path: "/contact", label: "CONTACT", icon: Mail },
];

const socialLinks = [
  { icon: SiYoutube, href: "https://www.youtube.com/@psitkanpur", label: "YouTube" },
  { icon: SiInstagram, href: "https://www.instagram.com/ignitia.psitkanpur/", label: "Instagram" },
  { icon: SiFacebook, href: "https://www.facebook.com/psitkanpur2004", label: "Facebook" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/school/psitkanpur/", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/PSITKanpur2004", label: "Twitter" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              IGNITIA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <button
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all hover-elevate ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <Icon className="w-4 h-4" />
                  </Button>
                </a>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <button
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left transition-all hover-elevate ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-nav-mobile-${item.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </Link>
              );
            })}
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-border">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Button variant="ghost" size="icon" className="w-9 h-9">
                      <Icon className="w-4 h-4" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
