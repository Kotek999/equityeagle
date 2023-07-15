import { ArticleData } from "../../interfaces";
import { ArticleDataType } from "../../types";

let articleData: ArticleDataType;

export const setArticleData = (newArticleData: ArticleData[]): void => {
  articleData = newArticleData;
};

export const getArticleData = (): ArticleDataType => {
  return articleData;
};
