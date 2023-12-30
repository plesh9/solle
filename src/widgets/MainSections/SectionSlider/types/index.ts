export interface ISlideItem {
  title: string;
  text: string;
}

export interface ISlide {
  title: {
    text: string,
    strong: string
  };
  subtitle: string;
  imageUrl: string;
  items: ISlideItem[];
}
