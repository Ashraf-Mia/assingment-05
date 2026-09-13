   export interface Technology {
    id: string,
    name: string,
    category: string,
    description: string,
    icon: string,
    rating: number,
    difficulty: string,
    badge:
    | "Popular"
    | "Versatile"
    | "Fast"
    | "Standard"
    | "Top SQL"
    | "Cache"
    | "Ubiquitous"
    | "Essential"
    | "Robust"
    | "Modern"
    | "Containers";
}


