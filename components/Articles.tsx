import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ArticleColumns from "./ArticleColumns";

const urls = [
  "https://zenn.dev/topics/react/feed",
  "https://zenn.dev/topics/typescript/feed",
  "https://zenn.dev/topics/nextjs/feed",
  "http://qiita.com/tags/react/feed.atom",
  "http://qiita.com/tags/typescript/feed.atom",
];

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    (async () => {
      const url = "https://zenn.dev/topics/zenn/feed";
      const promises = urls.map(
        (url) =>
          new Promise(async (resolve) => {
            const feed = await fetch(`/api/rss?url=${url}`);
            const json = await feed.json();
            resolve(json);
          })
      );
      const feeds = await Promise.all(promises);
      console.log(feeds);
      setArticles(feeds);
    })();
  }, []);
  return (
    <div>
      <Content>
        {articles.map((article, i) => (
          <ContentItem key={i}>
            <ArticleColumns articles={article} />
          </ContentItem>
        ))}
      </Content>
    </div>
  );
};

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
