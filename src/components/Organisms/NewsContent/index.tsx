import { InfoOfApp } from "../../../components/Atoms/InfoOfApp";
import { NewsSlider } from "../../../components/Molecules/NewsSlider";
import { NewsScrollView } from "../../../components/Atoms/NewsScrollView";
import { NewsQuotes } from "../../../components/Atoms/NewsQuotes";
import { NewsSliderProps as NewsContentProps } from "../../../interfaces";
import { JSX } from "../../../types";

export const NewsContent = (props: NewsContentProps): JSX => {
  return (
    <NewsScrollView>
      <InfoOfApp />
      <NewsSlider
        isNewsLoading={props.isNewsLoading}
        fetchError={props.fetchError}
        data={props.data}
        renderItem={props.renderItem}
      />
      <NewsQuotes />
    </NewsScrollView>
  );
};
