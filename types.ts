export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: string;
  image: string;
  description: string;
  seller: string;
  isSponsored?: boolean;
  isCommunity?: boolean;
  timeAgo: string;
  condition: string;
}

export enum ViewState {
  BROWSING = 'BROWSING',
  DETAILS = 'DETAILS'
}