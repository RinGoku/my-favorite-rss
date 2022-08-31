import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

export const ArticleItems: FC<any> = ({ article }) => {
  return (
    <a href={article.link} rel="noopener noreferrer" target="_blank">
      <Center py={6}>
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            {article.enclosure?.url && (
              <Image src={article.enclosure.url} layout={"fill"} alt="" />
            )}
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {article.title}
            </Heading>
            <Text color={"gray.500"}>{article.contentSnippet}</Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{article.creator}</Text>
              <Text color={"gray.500"}>{article.pubDate}</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </a>
  );
};

export default ArticleItems;
