export interface Item {
  Titre: string | undefined;
  Text: string | undefined;
  Icon: string | undefined;
  Images: ImageData | undefined;
}

export interface Price {
  Currency: string;
  Value: number;
  Unite: string;
}

export interface Activite {}

export interface Circuit {
  Titre: string;
  Prices: Price[];
}
