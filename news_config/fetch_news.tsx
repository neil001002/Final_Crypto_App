//news fetching functionality
import { articles_url, _api_key } from "./rest_config";

export async function getArticles(q = "crypto", sortBy = "publishedAt") {
  try {
    let articles = await fetch(
      `${articles_url}everything?q=${q}&sortBy=${sortBy}&language=en`,
      {
        headers: {
          "X-API-KEY": _api_key,
        },
      }
    );

    let result = await articles.json();
    articles = null;

    return result.articles;
  } catch (error) {
    throw error;
  }
}
