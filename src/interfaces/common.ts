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
    responseKey: keyof T; // in this City case:  responsekey should be 'name | lat | lng | country | admin1 | admin2' (we can write these if its not a reusable components, because here responseKey can be anything, we are mentioning it as keyOf T)
}

export interface TableProps<T> { // here T means City. can be any object for a reusable table.
    columns: Column<T>[];
    data: T[]; // data is also reusable can be anything, so we are passing it as generic type 
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