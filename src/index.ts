import { Handler } from "mdmod";
import { getSponsors } from "./sponsors";

const handler: Handler = async ({ constants, args }) => {
  const owner = constants?.owner as string | undefined;
  if (!owner) {
    throw new Error("mdmod --define.owner <owner>");
  }
  const width = args?.width ?? 80;

  const sponsors = await getSponsors(owner);

  const table = sponsors
    .map((sponsor: any) => {
      return `[<img src="${sponsor.avatarUrl}" width="${width}" alt="${
        sponsor.name ?? sponsor.login
      }" />](${sponsor.websiteUrl ?? `https://github.com/${sponsor.login}`})`;
    })
    .join(" ");

  return table;
};

export default handler;
