export interface ExperienceType {
  id: string;
  during: string;
  title: string;
  body: string;
}

export interface SkillType {
  id: string;
  name: string;
  img: string;
}

export interface OGPDataType {
  url: string;
  title: string;
  image: OpenGraphImage;
}

interface OpenGraphImage {
  height: string;
  type: string;
  url: string;
  width: string;
}

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