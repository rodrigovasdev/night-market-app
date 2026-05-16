export interface ProductImage {
  id: number;
  url: string;
  isMain: boolean;
}

export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  visits: number;
  images: ProductImage[];
}
