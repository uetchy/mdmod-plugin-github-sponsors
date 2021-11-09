import execa from "execa";

async function run(...flags: string[]) {
  const { stdout } = await execa("mdmod", flags, {
    cwd: __dirname,
  });
  return stdout;
}

function strip(str: string): string {
  return str.replace(/\n?<!--[\w\W]+?-->\n?/g, "");
}

it("replace", async () => {
  const out = await run("input.md", "--dry-run", "--define.owner", "uetchy");
  expect(strip(out)).toBe(
    `[<img src="https://avatars.githubusercontent.com/u/6936373?u=4edd14e6636c45d10ac6a3eecb4b3ffa6cc2bf5c&v=4" width="35" />](https://github.com/Naturalclar) [<img src="https://avatars.githubusercontent.com/u/79023920?v=4" width="35" />](https://github.com/Lierin8oracle)`
  );
});
