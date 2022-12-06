import { FC } from "react";
import { News } from "../types";

const NewsItem: FC<News> = (
  { datetime, description, title },
) => (
  <article className="relative group">
    <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl">
    </div>
    <svg
      viewBox="0 0 9 9"
      className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
    >
      <circle
        cx="4.5"
        cy="4.5"
        r="4.5"
        stroke="currentColor"
        className="fill-white dark:fill-slate-900"
        strokeWidth="2"
      >
      </circle>
    </svg>
    <h3 className="text-base font-semibold tracking-tight pt-8 lg:pt-0">
      {title}
    </h3>
    <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
      <p>
        {description}
      </p>
    </div>
    <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
      <dt className="sr-only">Date</dt>
      <dd className="whitespace-nowrap text-sm leading-6">
        <time dateTime={datetime}>
          {new Date(datetime).toISOString().slice(0, 10)}
        </time>
      </dd>
    </dl>
  </article>
);

export default NewsItem;
