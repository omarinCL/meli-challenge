import { Author } from "./types";

export const author: Author = {
  name: "Orlando",
  lastname: "Marin",
};

export const actionCreator = (type: string, args: any = {}) => ({
  type,
  ...args,
});

export const currencyFormat = (price: number) =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(
    price
  );

export const conditionFormat = (condition: string | undefined) =>
  condition === "new" ? "Nuevo" : "Usado";
