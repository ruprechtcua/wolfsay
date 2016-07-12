# wolfsay [![Build Status](https://travis-ci.org/yeoman/wolfsay.svg?branch=master)](https://travis-ci.org/yeoman/wolfsay)

> Tell Yeoman what to say

Like [cowsay](http://en.wikipedia.org/wiki/Cowsay), but less cow.

![](screenshot.png)


## Install

```
$ npm install --save wolfsay
```


## Usage

```js
const wolfsay = require('wolfsay');

console.log(wolfsay('Hello, and welcome to my fantastic generator full of whimsy and bubble gum!'));

/*
     _-----_     ╭──────────────────────────╮
    |       |    │ Hello, and welcome to my │
    |--(o)--|    │ fantastic generator full │
   `---------´   │   of whimsy and bubble   │
    ( _´U`_ )    │           gum!           │
    /___A___\   /╰──────────────────────────╯
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `
 */
```

*You can style your text with [chalk](https://github.com/sindresorhus/chalk) before passing it to `wolfsay`.*


## CLI

```
$ npm install --global wolfsay
```

```
$ wolfsay --help

  Usage
    wolfsay <string>
    wolfsay <string> --maxLength 8
    echo <string> | wolfsay

  Example
    wolfsay 'Sindre is a horse'

     _-----_
    |       |
    |--(o)--|    ╭──────────────────────────╮
   `---------´   │     Sindre is a horse    │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `
```


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
Copyright (c) Google
