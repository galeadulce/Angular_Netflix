
export interface NavigatorInterface {
    logo: ImageInterface;
    links: LinksInterface[]
}

export interface LinksInterface {
    text: string;
    link: string;
}

export interface ImageInterface {
    src: string,
    alt: string
}

export interface HeroInterface {
    title: string;
    films: ImageInterface[]
}

export interface FilmsInterface{
    title: string;
    films: ImageInterface[];
}

