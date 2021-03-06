# flexout

Flexout is a minimal set of React components designed for quick prototyping of layouts using CSS flexbox model.

## Example

Create layout like this...

![Layout](docs/example-layout.jpg)

with a simple piece of code like this...

![Code](docs/code-example.png)

> Note: Border in this example is added by `panel` class.

## Installation

`yarn add flexout` or `npm install flexout`

## API

The library exports 3 React components: `Flex`, `Col` and `Row`.
`Flex` is just a `div` with `display: flex`. `Col` and `Row` have their `flex-direction` set accordingly.

You can set any [Flexbox CSS Property](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout#reference) as a prop. All `flex-` prefixed properties have also unprefixed alias, so you can use either `flexGrow={1}` or simply `grow={1}`.

For further convenience, 2 most common alignment properties have their aliases: `align` is the same as `alignItems` and `justify` is the same as `justifyContent`.

Moreover, you can use `width`, `height`, `margin` and `padding`. All of these accepts standard CSS properties. For `margin` and `padding`, you can also use more specific form - an object with optional properties `top`, `bottom`, `left` and `right`.

Besides these props, you can pass all props valid for `div` tag, including react `ref`.

The package is written in TypeScript, so all interfaces are typed properly, you can't go wrong there.