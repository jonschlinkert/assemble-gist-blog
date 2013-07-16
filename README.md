# assemble-gist-blog

> Assemble a blog from gists.

It's hard to believe when you see how fast the pages render, but all of the content in the [example pages](http://assemble.github.io/assemble-gist-blog) is from Gists.


## Getting Started

Download this project:

```bash
git clone https://github.com/assemble/boilerplate-gist-blog.git
```

Install the necessary dependencies to run the build:

```bash
npm i
```
Once dependencies are installed, you may build the project by running `grunt` or `grunt assemble`.

### Styles

Currently the `assemble.css` stylesheet is used in the examples, but the project is already setup to use Bootstrap if you want to edit the styles.

To do so, from the root of the project `git clone` Bootstrap:

```bash
git clone -b 3.0.0-wip https://github.com/twitter/bootstrap.git "vendor/bootstrap"
```
(the "less" task is currently configured to use the `vendor` directory)

In `./src/layouts/default.hbs`, change this:

```html
<link rel="stylesheet" href="{{assets}}/assemble.css">
```
to this:

```html
<link rel="stylesheet" href="{{assets}}/bootstrap.css">
```

Then run `grunt less` to compile.


## Related Projects

### [Assemble's documentation](https://assemble.io) →
### [assemble-boilerplates](https://github.com/assemble/assemble-boilerplates) →
### [grunt-init-assemble](https://github.com/assemble/grunt-init-assemble-helper) →
### [grunt-init-assemble-helper](https://github.com/assemble/grunt-init-assemble-helper) →


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com).


## Authors

**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)

**Brian Woodward**

+ [http://twitter.com/doowb](http://twitter.com/doowb)
+ [http://github.com/doowb](http://github.com/doowb)


## Copyright and license
Copyright 2013 Assemble

[MIT License](LICENSE-MIT)