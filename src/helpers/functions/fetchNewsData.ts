import textData from "../../../textData.json";
import { getNewsAPI } from "./getAPI";
import { ArticleData, FetchNewsData } from "../../interfaces";
import { setArticleData } from "./articleDataService";

export const fetchNewsData = async (props: FetchNewsData): Promise<void> => {
  const newsAPI: string = getNewsAPI();
  try {
    const response: Response = await fetch(newsAPI);
    const newsData: ArticleData = await response.json();

    let articleData: ArticleData[] = newsData.feed.slice(1, 7);

    props.setArticles(articleData);
    setArticleData(articleData);

    if (newsData) {
      props.setIsNewsLoading(false);
    } else {
      console.log(textData.value.errorWithFetch);
    }
  } catch (error) {
    props.setFetchError(error);
  }
};
