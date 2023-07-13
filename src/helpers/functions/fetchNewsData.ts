import textData from "../../../textData.json";
import { getNewsAPI } from "./getAPI";
import { ArticleData, FetchNewsData } from "../../interfaces";

export const fetchNewsData = async (props: FetchNewsData): Promise<void> => {
  const newsAPI: string = getNewsAPI();
  try {
    const response: Response = await fetch(newsAPI);
    const newsData: ArticleData = await response.json();

    props.setArticles(newsData.feed.slice(0, 3));

    if (newsData) {
      props.setIsNewsLoading(false);
    } else {
      console.log(textData.value.errorWithFetch);
    }
  } catch (error) {
    props.setFetchError(error);
  }
};
