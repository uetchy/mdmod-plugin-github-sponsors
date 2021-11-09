import githubToken from "@forbital/github-token";
import ApolloClient, { gql } from "apollo-boost";
import fetch from "cross-fetch";

export async function getSponsors(owner: string) {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
      authorization: `Bearer ${githubToken()}`,
    },
    fetch,
  });

  const query = gql`
    query ($owner: String!) {
      user(login: $owner) {
        sponsorshipsAsMaintainer(first: 100) {
          totalCount
          nodes {
            sponsorEntity {
              ... on User {
                login
                name
                websiteUrl
                avatarUrl
              }
            }
          }
        }
      }
    }
  `;

  const res = await client.query({ query, variables: { owner } });
  const sponsors = res.data.user.sponsorshipsAsMaintainer.nodes.map(
    (node: any) => node.sponsorEntity
  );
  return sponsors;
}
