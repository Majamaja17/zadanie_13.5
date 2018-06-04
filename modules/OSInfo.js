var time = require('os')

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

	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	console.log('Uptime: ~ ', timeInfo.time());
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;