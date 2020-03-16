// types.ts 
import * as t from "io-ts";
export const Product = t.interface({
  id: t.number,
  name: t.string,
  quantity: t.number,
  type: t.union([t.literal("FURNITURE"), t.literal("BOOK")])
});

export interface Producty {
  id: number;
  name: string;
  quantity: number;
  type: string;
}
export const Products = t.array(Product);


export type Productys = Producty[];