export interface ArticleType {
  id: string;
  url: string;
  title: string;
  img: string;
  date: string;
  key?: string;
}
export interface GetArticlesResponse {
  contents: Array<{
    id: string;
    url: string;
    title: string;
    img: {
      url: string;
      height: number;
      width: number;
    };
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  }>;
  totalCount: number;
  offset: number;
  limit: number;
}
