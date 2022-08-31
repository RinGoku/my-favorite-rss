import { FC, memo, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ArticleColumns from "./ArticleColumns";
import { useQueries, useQuery } from "@tanstack/react-query";

const urls = [
  "https://zenn.dev/topics/react/feed",
  "https://zenn.dev/topics/typescript/feed",
  "https://zenn.dev/topics/nextjs/feed",
  "http://qiita.com/tags/react/feed.atom",
  "http://qiita.com/tags/typescript/feed.atom",
];

// eslint-disable-next-line react/display-name
const Articles: FC<unknown> = memo(() => {
  const resultQueries = useQueries({
    queries: urls.map((url) => ({
      queryKey: ["user", url],
      queryFn: () =>
        new Promise(async (resolve) => {
          const feed = await fetch(`/api/rss?url=${url}`);
          const json = await feed.json();
          resolve(json);
        }),
    })),
  });
  console.log(resultQueries);

  return (
    <div>
      <Content>
        {resultQueries.map((query, i) => (
          <ContentItem key={i}>
            <ArticleColumns articles={query.data} />
          </ContentItem>
        ))}
      </Content>
    </div>
  );
});

const Content = styled.div`
  display: flex;
`;

const ContentItem = styled.div`
  flex-shrink: 0;
  & + & {
    margin-left: 1rem;
  }
`;

export default Articles;
