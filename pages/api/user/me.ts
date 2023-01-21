// const withAuth = () => {
//   //check auth
//   return (req, res) => {};
// };

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ data: { me: true } });
}
