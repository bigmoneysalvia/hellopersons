var terminal = require('terminal');
var toolkit = require('hacker-toolkit');
var accounts = require('blackmarket-accounts');

var myArray = accounts;

let arrayPasses = myArray.map(e => e.split(':')[1]);
let arrayUsers = myArray.map(e => e.split(':')[0]);

let stringPasses = arrayPasses.toString();
var password = toolkit.rot13(stringPasses);
var desencryptedPass = password.split('(');

let merge = (a1, a2) => arrayUsers.map((n, i) => ({username: n, pasword: pwd[i]}));
var arrayMerged = merge(arrayUsers, desencryptedPass);

var rootPassword = "";

var bruteForcing = toolkit.bruteForce(terminal, arrayMerged, function(username, password){
    terminal.login(username, password);
    toolkit.spy(terminal, 'root', next);
}
);
var next = function(nextArg, root, pass) {
    if (nextArg.includes("password")) {
        rootPassword = nextArg.substring(20);
        terminal.logout();
        terminal.login('root', rootPassword)
        return terminal.printFile('/var/logs/ecorp.txt');
 }
}