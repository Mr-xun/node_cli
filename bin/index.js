const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
function downTemplate(name) {
	let demopath = './project';
	let targetpath = './' + name;
	let ob = []; //[ 'dir', './src' ], [ 'file', 'app.js' ]
	const spinner = ora(chalk.cyan('下载中'));
	function downcallback() {
		ob.shift();
		if (ob.length == 0) {
			spinner.stop();
		}
	}
	fs.mkdir(targetpath, function() {
		pusharr(demopath);
		for (var i = 0; i < ob.length; i++) {
			if (ob[i][0] == 'file') {
				var data = fs.readFileSync(ob[i][1]);
				fs.writeFileSync(targetpath + '/' + ob[i][1].replace('./project', '.'), data);
			} else {
				fs.mkdirSync(targetpath + '/' + ob[i][1].replace('./project', '.'), downcallback);
			}
		}
	});
	function pusharr(path) {
		let files = fs.readdirSync(path);
		files.forEach((item) => {
			let nowpath = path + '/' + item;
			let stat = fs.statSync(nowpath);
			if (stat.isDirectory()) {
				ob.push([ 'dir', nowpath ]);
				pusharr(nowpath);
			} else {
				ob.push([ 'file', nowpath ]);
			}
		});
	}
}
module.exports = downTemplate;
