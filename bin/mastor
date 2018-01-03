#!/usr/bin/env node
'use strict';

const exists = require('fs').existsSync;
const program = require('commander');
const spawn = require('win-spawn');
const join = require('path').join;
const chalk = require('chalk');

if (process.argv.slice(2).join('') === '-v') {
  console.log('mastor-cli: ' + require('../package').version);
  return;
}

program
  .usage('<command> [options]')
  .on('--help', printHelp)
  .parse(process.argv);

const aliases = {
  g: 'generate',
};
const args = process.argv.slice(3);
let subcmd = program.args[0];
if (aliases[subcmd]) subcmd = aliases[subcmd];

if (!subcmd) {
  program.help();
} else {
  const bin = executable(subcmd);
  if (bin) {
    console.log(bin);
    wrap(spawn(bin, args, {stdio: 'inherit', customFds: [0, 1, 2]}));
  } else {
    program.help();
  }
}

function executable(subcmd) {
  var file = join(__dirname, 'mastor-' + subcmd);
  if (exists(file)) {
    return file;
  }
}

function wrap(sp) {
  sp.on('close', function(code) {
    process.exit(code);
  });
}

function printHelp() {
  console.log('  Commands:');
  console.log();
  console.log(chalk.green('    init           ') + 'Init a new dva application in the current folder');
  console.log(chalk.green('    new            ') + 'Creates a new application');
  console.log(chalk.green('    generate       ') + 'Generates new code (short-cut alias: "g")');
  console.log();
  console.log('  All commands can be run with -h (or --help) for more information.');
}
