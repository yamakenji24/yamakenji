export interface WorkType {
  id: string;
  github: string;
  link: string;
  img: string;
  title: string;
  skills: Array<{
    fieldId: string;
    skill: string;
  }>;
  body: string;
}

export interface GetWorksResponse {
  contents: Array<{
    id: string;
    github: string;
    link: string;
    title: string;
    skills: Array<{
      fieldId: string;
      skill: string;
    }>;
    body: string;
    img: {
      url: string;
      height: number;
      width: number;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  }>;
  totalCount: number;
  offset: number;
  limit: number;
}