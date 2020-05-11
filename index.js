#! /usr/bin/env node
//指定运行环境
const cm = require('commander'); //定义命令
const inquirer = require('inquirer'); //用户交互
const chalk = require('chalk');
const ora = require('ora');
// const spinner = ora('start choose your config').start();
cm.version('1.0.0', '-v --version');
cm.option('-a,  --atest', 'this is clitest');
cm.command('init <name>').description('init clitest').action((name) => {
	console.log(name);
	inquirer
		.prompt([
			{
				type: 'confirm',
				name: 'confirm_test',
				message: 'please sure',
				default: true
			},
			{
				type: 'input',
				name: 'input_test',
				message: 'pleate input username',
				default: 'test'
			},
			{
				type: 'password',
				name: 'password_test',
				message: 'please input password'
			},
			{
				type: 'checkbox',
				choices: [ '1', { value: '2', checked: true }, '3' ],
				name: 'choices_test',
				message: 'please choose a number'
			}
		])
		.then((answers) => {
			console.log(answers);
			require('./bin')(answers.input_test);
			// spinner.stop();
		});
});
cm.parse(process.argv);
