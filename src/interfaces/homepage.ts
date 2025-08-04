export interface HomepageData {
  cardSection: {
    cardOne: {
      title: string;
      description: string;
    };
    cardTwo: {
      title: string;
      description: string;
    };
    cardThree: {
      title: string;
      description: string;
    };
  };
  descriptionSection: Array<{
    title: string;
    text: string;
  }>;
}
