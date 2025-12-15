import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  id: string;
  name: string;
  studentId: string;
  role?: string;
}

export interface NavLink {
  label: string;
  href: string;
}