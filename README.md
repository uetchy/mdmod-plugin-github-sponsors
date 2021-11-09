# mdmod-plugin-github-sponsors

[![npm](https://flat.badgen.net/npm/v/mdmod-plugin-github-sponsors)][npm-url]
[![npm: total downloads](https://flat.badgen.net/npm/dt/mdmod-plugin-github-sponsors)][npm-url]

[npm-url]: https://npmjs.org/package/mdmod-plugin-github-sponsors

[mdmod](https://github.com/uetchy/mdmod) plugin for updating sponsors list in README.

## Install

```bash
npm i -g mdmod mdmod-plugin-github-sponsors
# or `npm i mdmod mdmod-plugin-github-sponsors` to use it locally
```

## Use

```bash
mdmod README.md --define.owner <githubUser>
```

It will generate a list of GitHub sponsors:

```md
<!-- START mdmod {use: 'github-sponsors'} -->

[<img src="https://avatars.githubusercontent.com/u/6936373?u=4edd14e6636c45d10ac6a3eecb4b3ffa6cc2bf5c&v=4" width="80" alt="Jesse Katsumata" />](https://naturalclar.dev) [<img src="https://avatars.githubusercontent.com/u/79023920?v=4" width="80" alt="Lierin8oracle" />](https://github.com/Lierin8oracle)

<!-- END mdmod -->
```

<!-- START mdmod {use: 'github-sponsors'} -->

[<img src="https://avatars.githubusercontent.com/u/6936373?u=4edd14e6636c45d10ac6a3eecb4b3ffa6cc2bf5c&v=4" width="80" alt="Jesse Katsumata" />](https://naturalclar.dev) [<img src="https://avatars.githubusercontent.com/u/79023920?v=4" width="80" alt="Lierin8oracle" />](https://github.com/Lierin8oracle)

<!-- END mdmod -->

```md
<!-- START mdmod {use: ['github-sponsors', {width: 50}]} -->

[<img src="https://avatars.githubusercontent.com/u/6936373?u=4edd14e6636c45d10ac6a3eecb4b3ffa6cc2bf5c&v=4" width="50" alt="Jesse Katsumata" />](https://naturalclar.dev) [<img src="https://avatars.githubusercontent.com/u/79023920?v=4" width="50" alt="Lierin8oracle" />](https://github.com/Lierin8oracle)

<!-- END mdmod -->
```

<!-- START mdmod {use: ['github-sponsors', {width: 50}]} -->

[<img src="https://avatars.githubusercontent.com/u/6936373?u=4edd14e6636c45d10ac6a3eecb4b3ffa6cc2bf5c&v=4" width="50" alt="Jesse Katsumata" />](https://naturalclar.dev) [<img src="https://avatars.githubusercontent.com/u/79023920?v=4" width="50" alt="Lierin8oracle" />](https://github.com/Lierin8oracle)

<!-- END mdmod -->
