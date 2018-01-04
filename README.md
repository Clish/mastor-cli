# mastor-cli(based on dva-cli)
[![NPM version](https://img.shields.io/npm/v/mastor-cli.svg?style=flat)](https://npmjs.org/package/mastor-cli)
[![NPM downloads](http://img.shields.io/npm/dm/mastor-cli.svg?style=flat)](https://npmjs.org/package/mastor-cli)

## Getting Satarted

Install, create and start.

```bash
# Install
$ npm install mastor-cli -g

# Create app
$ dva new myapp

# Start app
$ cd myapp
$ npm start
```

## Commands

We have 3 commands: `new`, `init` and `generate`(alias `g`).

### mastor new <appName> [options]

Create app with new directory.

#### Usage Examples

```bash
$ mastor new myapp
$ mastor new myapp --demo
$ mastor new myapp --no-install
```

#### options

* `--demo` -- Generate a dead simple project for quick prototype
* `--no-install` -- Disable npm install after files created

### mastor init [options]

Create app in current directory. It's options is the same as `mastor new`.

### mastor generate <type> <name> (short-cut alias: "g")

Generate route, model and component.

#### Usage Examples

```bash
$ mastor g route product-list
$ mastor g model products
$ mastor g component Editor
$ mastor g component Users/UserModal
$ mastor g component Header --no-css
```

## Generated File Tree

```bash
.
├── src                    # Source directory
    ├── assets             # Store images, icons, ...
    ├── components         # UI components
    ├── index.css          # CSS for entry file
    ├── index.html         # HTML for entry file
    ├── index.js           # Enry file
    ├── models             # Dva models
    ├── router.js          # Router configuration
    ├── routes             # Route components
    ├── services           # Used for communicate with server
    └── utils              # Utils
        └── request.js     # A util wrapped dva/fetch
├── .editorconfig          #
├── .eslintrc              # Eslint config
├── .gitignore             #
├── .roadhogrc             # Roadhog config
└── package.json           #
```

## License

[MIT](https://tldrlegal.com/license/mit-license)