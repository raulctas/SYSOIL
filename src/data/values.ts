import {
  Activity,
  BarChart3,
  Globe2,
  Handshake,
  Leaf,
  LucideIcon,
  ShieldCheck,
  ShieldHalf,
  Sparkles,
  Timer,
  Zap,
} from 'lucide-react';

export interface CompanyValue {
  /** Clave de traducción bajo `values.<key>`. */
  key: string;
  icon: LucideIcon;
}

/** Los 10 valores corporativos (contenido en translation.json → values.<key>). */
export const VALUES: CompanyValue[] = [
  { key: 'integrity', icon: ShieldCheck },
  { key: 'analysis', icon: BarChart3 },
  { key: 'agility', icon: Zap },
  { key: 'risk', icon: ShieldHalf },
  { key: 'innovation', icon: Sparkles },
  { key: 'reliability', icon: Timer },
  { key: 'transparency', icon: Handshake },
  { key: 'responsibility', icon: Leaf },
  { key: 'globalVision', icon: Globe2 },
  { key: 'safety', icon: Activity },
];
