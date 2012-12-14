// ./ means a local module
/*
var seq = require('./localModule/fibonacci');

console.log(seq.data);
*/


// read from command line

/*
var argv = require('optimist').argv;

for(var i=0;i<argv.times;i++){
    console.log(argv._[0] + ' on loop number ' + (i+1));
}
*/


//read line from console

/*
var rl = require('readline');

var prompts = rl.createInterface(process.stdin,process.stdout);


prompts.question("how many service of fruits and vegi do you eat each day?",function(servings){

    var message = "";

    if(servings>5){
        message = "eat some fish";
    }else{
        message = "eat some more vegi";
    }

    console.log(message);
    //end of the process
    process.exit();
});

*/


var argv = require('optimist').argv,
    $ = require('jquery'),
    fs = require('fs');

var file = argv._[0];

var html = fs.readFileSync(file,'UTF-8');

$(html).find('div').each(function(index){
    var content = $(this).html();
    console.log("div"+index+" "+content);
});









