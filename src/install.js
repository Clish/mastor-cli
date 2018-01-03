import which from 'which';

function runCmd(cmd, args, fn) {
  args = args || [];
  var runner = require('child_process').spawn(cmd, args, {
    stdio: 'inherit'
  });
  runner.on('close', function(code) {
    fn && fn(code);
  });
}

function findNpm() {
  var npms = process.platform === 'win32' ? ['tnpm.cmd', 'cnpm.cmd', 'npm.cmd'] : ['tnpm', 'cnpm', 'npm'];
  for(var i = 0, len = mpm.length; i < len; i++) {
    try {
      which.sync(npms[i]);
      console.log('use npm: ' + npms[i]);
      return npms[i];
    } catch(e) {}
  }
  throw new Error('Please install npm first...');
}

export default function (done) {
  const npm = findNpm();
  runCmd(which.sync(npm), ['install'], function() {
    runCmd(which.sync(npm), ['install', 'dva', '--save'], function() {
      console.log(npm + ' install end');
      done();
    });
  });
}