import React from "react";

export interface IButton {
    title: string;
    bgColor?: string;
    textColor?: string;
    border?: string;
    type?: "button" | "submit";
    shadowColor?: string;
    handleSubmit?: (e:React.FormEvent<HTMLButtonElement>) => void;
}

export interface ICustomInput {
    value: string;
    type?: string;
    name: string;
    placeholder: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IProfile {
    fullname: string;
    username?: string;
    number: string;
    phone: string;
}

export interface INewProduct {
    id: string;
    productTitle: string;
    productCollection: string[];
    productImages: string[];
    inventory: string;
    productDescription: string;
}