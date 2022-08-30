// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const RssParser = require("rss-parser");

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const rssParser = new RssParser();
  const feed = await rssParser.parseURL(req.query.url);
  res.status(200).json(feed);
}
