import { FC } from "react";
import NewsItem from "../components/newsItem";
import { News } from "../types";

interface Props {
  news?: News[];
}

const NewsPage: FC<Props> = (
  { news },
) => {
  return (
    <div className="page">
      <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
        <div className="space-y-16">
          {news && news.map(
            (newsItem) => <NewsItem {...newsItem} key={newsItem.id} />,
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
