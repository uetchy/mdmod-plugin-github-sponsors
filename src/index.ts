import { Handler } from "mdmod";
import { getSponsors } from "./sponsors";

const handler: Handler = async ({ cwd, constants }) => {
  const owner = constants?.owner;
  if (!owner) {
    throw new Error("mdmod --define.owner <owner>");
  }
  const sponsors = await getSponsors(owner);

  const table = sponsors
    .map((sponsor: any) => {
      return `[<img src="${sponsor.avatarUrl}" width="35" />](https://github.com/${sponsor.login})`;
    })
    .join(" ");

  return table;
};

export default handler;
