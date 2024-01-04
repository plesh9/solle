export interface ISlideItem {
  title: string;
  text: string;
}

export interface ISlide {
  key: string;
  title: {
    text: string;
    strong: string;
  };
  subtitle: string;
  imageUrl: string;
  items: ISlideItem[];
}
