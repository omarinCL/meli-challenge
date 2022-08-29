import HttpClient from "../common/HttpClient";
import { ItemResponse, SearchItem, SearchResponse } from "../common/types";
import { author } from "../common/utils";

const baseURL = "https://api.mercadolibre.com";

export default class MeliApi extends HttpClient {
  constructor() {
    super({ baseURL });
  }

  getSearch = async (q: string) => {
    const result = await this.client.get("/sites/MLC/search", {
      params: {
        q,
        limit: 4,
      },
    });
    return this.parseSearchResponseApi(result.data);
  };

  getItem = async (id: string) => {
    const [resultItem, resultDescription] = await Promise.all([
      this.client.get(`/items/${id}`),
      this.client.get(`/items/${id}/description`),
    ]);
    return this.parseItemResponseApi(resultItem.data, resultDescription.data);
  };

  private parseSearchResponseApi = (searchData: any): SearchResponse => ({
    author,
    categories: searchData.filters.reduce(
      (acc: string[], category: any) => [
        ...acc,
        ...category.values.map((value: any) => value.name),
      ],
      [] as string[]
    ),
    items: searchData.results.reduce(
      (acc: SearchItem[], item: any) => [
        ...acc,
        {
          id: item.id,
          title: item.title,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          picture: item.thumbnail,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: item.decimals || 0,
          },
        } as SearchItem,
      ],
      [] as SearchItem[]
    ),
  });

  private parseItemResponseApi = (
    itemData: any,
    descriptionData: any
  ): ItemResponse => ({
    author,
    item: {
      id: itemData.id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        amount: itemData.price,
        decimals: itemData.decimals || 0,
      },
      picture: itemData.pictures[0].url,
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: descriptionData.plain_text,
    },
  });
}
