setInterval(function () {
    console.log(Date.now()+':'+process.pid);
}, 1000)
/*var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('SIGINT', function () {
    console.log('SIGINT');
})*/
process.on('SIGINT', function () {
    console.log('收到 SIGINT 信号。  退出请使用 Ctrl + D ');
});
