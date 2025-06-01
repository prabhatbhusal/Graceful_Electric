export interface FooterItem {
    name?: string;
    type?: 'phone' | 'address' | 'email';
    value?: string;
}

export interface FooterSection {
    id: number;
    title: string;
    item: FooterItem[];
}
export interface Testimonial {
    name: string;
    rating: number;
    message: string;
    service: string;
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    url: string; // You can use a string for icon name or path
}
export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}
export interface Stats {
    id: number;
    value: string;
    label: string;
}