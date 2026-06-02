import {
  Code2,
  Gauge,
  Globe2,
  LayoutDashboard,
  Link2,
  MessageCircle,
  MonitorCog,
  Network,
  PenTool,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

const iconMap = {
  code: Code2,
  gauge: Gauge,
  globe: Globe2,
  layout: LayoutDashboard,
  link: Link2,
  message: MessageCircle,
  monitor: MonitorCog,
  network: Network,
  pen: PenTool,
  search: SearchCheck,
  shield: ShieldCheck,
  sparkles: Sparkles,
  users: Users,
  workflow: Workflow,
  wrench: Wrench,
};

export function getIcon(name) {
  return iconMap[name] ?? Sparkles;
}
