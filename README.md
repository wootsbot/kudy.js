# KudyJS

A simple library to generate inspirational phrases.

Where each action returns a random object selected from a list:

```js
{
  phrase: "La innovación distingue a los líderes de los seguidores.",
  author: "Steve Jobs",
  tags: ["negocio", "tecnología"],
  source: ""
}
```

## How

Install the package in your project directory with:

```sh
// with yarn
yarn add kudyjs

// with npm
npm install --save kudyjs
```

## General Usage

```jsx
import Kudy from "kudyjs";

Kudy.make();

// returns something like
{
  phrase: "Sólo hay una forma de comenzar a construir tu sueño: dejando de hablar y comenzando a hacer.",
  author: "Walt Disney",
  tags: ["negocio", "tecnología"],
  source: ""
}
```

Or

```js
const Kudy = require("kudyjs");

Kudy.make();

// returns something like
{
  phrase: "Sólo hay una forma de comenzar a construir tu sueño: dejando de hablar y comenzando a hacer.",
  author: "Walt Disney",
  tags: ["negocio", "tecnología"],
  source: ""
}
```

Here are all of the options, described in detail below.

```js
const Kudy = require("kudyjs");

Kudy.configure({
  // the list of phrases to use. kudy provides its own if you don't have one!
  phrases: [],

  // The length of the random number. You use the result of phrases. length!
  numberRandom: 4
});

Kudy.make();
```

## License

This project is licensed under the MIT license, Copyright (c) 2019 Jorge Luis Calleja Alvarado. For more information see [project license](./LICENSE).
