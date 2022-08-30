import ArticleItem from "./ArticleItem";
import { Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

const ArticleColumns = ({ articles }) => {
  return (
    <section className="article-columns">
      <Heading as="h2" size="md">
        {articles.title}
      </Heading>
      {articles.items.map((article, i) => (
        <ArticleItem key={i} article={article} />
      ))}
    </section>
  );
};

export default styled(ArticleColumns)`
  margin-left: 1rem;
`;
