import { sync as emptyDir } from 'empty-dir';
import { join, basename } from 'path';
import { renameSync } from 'fs';
import through from 'through2';
import leftPad from 'left-pad';
import vfs from 'vinyl-fs';
import chalk from 'chalk';

function info(type, message) {
  console.log(`${chalk.green.bold(leftPad(type, 12))}  ${message}`);
}

function error(message) {
  console.error(chalk.red(message));
}

function success(message) {
  console.error(chalk.green(message));
}

function init({ demo, install }) {
  const type = demo ? 'demo' : 'app';
  const cwd = join(__dirname, '../boilerplates', type);
  const dest = process.cwd();
  const projectName = basename(dest);

  if (!emptyDir(dest)) {
    error('Existing files here, please run init command in an empty folder!');
    process.exit(1);
  }

  console.log(`Creating a new mastor app in ${dest}.`);
  console.log();

  vfs.src(['**/*', '!node_modules/**/*'], { cwd: cwd, cwdbase: true, dot: true })
    .pipe(template(dest, cwd))
    .pipe(vfs.dest(dest))
    .on('end', function() {
      info('rename', 'gitignore -> .gitignore');
      renameSync(join(dest, 'gitignore'), join(dest, '.gitignore'));
      if (install) {
        info('run', 'npm install');
        require('./install')(printSuccess);
      } else printSuccess();
    })
    .resume();

  function printSuccess(){
    success(`
Successful installation!

We suggest that you begin by typing:
  cd ${dest}
  npm start

Happy for coding...`);
  }
}

function template(dest, cwd) {
  return through.obj(function (file, enc, cb) {
    if (!file.stat.isFile()) return cb();
    info('create', file.path.replace(cwd + '/', ''));
    this.push(file);
    cb();
  });
}

export default init;