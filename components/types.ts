export interface TechCard {
  title: string | undefined;
  samples: string[];
  description?: string;
  picture: any;
  article?: {
    title: string;
    featuredImage: string;
    content: ArticleContent[];
  };
}

export interface ArticleContent {
  title: string;
  body: string;
  featuredImage?: string;
}
