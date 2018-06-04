var time = require('os')
var colors = require('colors');

function getTime() {
	let uptime = Math.floor(time.uptime());
	let hours = Math.floor(uptime / 3600);
	let minutes = Math.floor((uptime / 60);
	return hours + ' hours ' + minutes + ' minutes ' + uptime + ' seconds'
}

exports.time = getTime;


function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}

	var release = os.release();
	var cpu = os.cpus()[0].model;
	var timeInfo = require('../modules/timeFormat.js');
	var userInfo = os.userInfo();


	console.log(colors.grey('System:', type));
	console.log(colors.red('Release:', release));
	console.log(colors.purple('CPU model:', cpu));
	console.log(colors.green('Uptime: ~ ', timeInfo.time()));
	console.log(colors.yellow('User name:', userInfo.username));
	console.log(colors.gray('Home dir:', userInfo.homedir));
}

exports.print = getOSinfo;