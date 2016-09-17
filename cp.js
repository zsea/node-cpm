var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var child = spawn('node', ['test.js'],{stdio:'inherit'});
/*var child = exec('node test.js', function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});*/
//child.stdout.pipe(process.stdout);
//process.stdin.pipe(child.stdin);
/*child.stdout.on('data', function (data) {
    console.log(data);
});*/
child.on('exit', function () {
    console.log('exit.');
});
setTimeout(function () {
    console.log('send SIGINT');
    child.kill('SIGINT')
    //child.stdin.write(2);
    setInterval(function () {
        //process.pid;
        console.log(process.pid);
    }, 1000)
}, 10000);