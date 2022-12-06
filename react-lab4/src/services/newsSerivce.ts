import type { News } from "../types";

export const newsService = {
  async getAllNews() {
    const data = await fetch("/src/data/news.json")
      .then((response): Promise<News[]> => response.json())
      .catch((error) => {
        console.error(error);
        return undefined! as News[];
      });

    return data;
  },
};
