import type { AstroComponentFactory } from 'astro';


export interface Social {
    title: string;
    url: string;
    icon: AstroComponentFactory;
}