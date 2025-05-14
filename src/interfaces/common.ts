import type { ReactNode } from "react";

export interface City {
    name: string;
    lat: string;
    lng: string;
    country: string;
    admin1: string;
    admin2?: string;
}

export interface Column<T> {
    header: string;
    responseKey: keyof T; 
}

export interface TableProps<T> { 
    columns: Column<T>[];
    data: T[]; 
    onRowClick?: (row: T) => void;
}

export interface FooterLink {
    label: string;
    href: string;
};

export interface FooterProps {
    copyright: string;
    links: FooterLink[];
};


export interface HeaderProps {
    appName: string;
}

export interface  ButtonProps  {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export interface SelectedCityProps {
    locationID: number;
    countryName : string;
}

export interface CardProps {
    title: string;
    description: string;
    icon?: ReactNode;
}

export interface LoaderProps {
  message?: string;
}