import { NextApiRequest, NextApiResponse } from "next";
type ContactData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactData>
) {
  if (req.method === "POST") {
    //save to db
    console.log(req.body);
    res.json({ message: "okay" });
  }
}
