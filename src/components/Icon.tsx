import {
  BadgeCheck,
  BatteryCharging,
  Boxes,
  ClipboardCheck,
  Clock3,
  Factory,
  Globe2,
  Handshake,
  LucideProps,
  MessageSquareText,
  PackageCheck,
  Plane,
  RefreshCcw,
  Search,
  ShieldCheck,
  Tags,
  Truck,
  Warehouse,
} from "lucide-react";
import type { IconName } from "../constants/content";

const icons = {
  search: Search,
  shield: ShieldCheck,
  package: PackageCheck,
  badge: BadgeCheck,
  factory: Factory,
  warehouse: Warehouse,
  truck: Truck,
  globe: Globe2,
  handshake: Handshake,
  clock: Clock3,
  message: MessageSquareText,
  boxes: Boxes,
  clipboard: ClipboardCheck,
  tag: Tags,
  refresh: RefreshCcw,
  battery: BatteryCharging,
  plane: Plane,
};

type Props = LucideProps & { name: IconName };

export default function Icon({ name, ...props }: Props) {
  const Component = icons[name];
  return <Component aria-hidden="true" {...props} />;
}
