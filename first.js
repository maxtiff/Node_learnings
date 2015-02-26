var readline = require("readline");
		rl 			 = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt(">>");
rl.prompt();

var toDoList = [];

//Declare object of possible functions to pass to prompt
var commands = {
	ls:function() {
		console.log(toDoList);
	},
	add:function(item) {
		toDoList.push(item);
	},
	rm:function(item) {
		console.log("Removing", item,".");
		var index = toDoList.indexOf(item);
		toDoList.splice(index,1);
	}
};

rl.on('line', function(line) {
	var words 	= line.split(' '),
			command = words.shift();
			argsStr = words.join(' ');

	commands[command] (argsStr);

	rl.prompt();
});
