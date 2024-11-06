// src/types/index.ts
export type User = {
    id: string;
    name: string;
    email: string;
    phone: string;
    socialLinks?: {
      instagram?: string;
      youtube?: string;
    };
  };
  
  export type MetricCard = {
    title: string;
    value: string | number;
    change: number;
    icon: React.ReactNode;
  };
  
  export type Product = {
    name: string;
    percentage: number;
    color: string;
  };
  
  export type ActivityData = {
    week: number;
    users: number;
    guests: number;
  };