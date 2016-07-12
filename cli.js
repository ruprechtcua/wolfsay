#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var wolfsay = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(wolfsay(input, options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    wolfsay <string>',
      '    wolfsay <string> --maxLength 8',
      '    echo <string> | wolfsay',
      '',
      '  Example',
      '    wolfsay "Winter is coming!"',
      wolfsay('Winter is coming!')
    ].join('\n'));
  },
  version: pkg.version
});
