const chalk = require('chalk'); //修改控制台中字符串的样式
const ora = require('ora'); //控制台loading
const rm = require('rimraf');
console.log(1);
console.log(chalk.yellow.bgCyan('hello world'));
console.log(chalk.cyan('  info.\n'));
const spinner = ora('this is a loading').start();
setTimeout(() => {
	spinner.succeed(chalk.green('seccessd'));
}, 2000);
setTimeout(() => {
	spinner.fail(chalk.red('faild'));
}, 2000);
