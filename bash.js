process.stdout.write('prompt > ')
process.stdin.on('data',(data)=>{
    const cmd = data.toString().trim()
    if (cmd === 'pwd'){
        const pwd = require('./pwd');
        pwd();
    }
    else if(cmd === 'ls'){
        const ls = require('./ls')
        ls();
    }
    else if(cmd.split(' ')[0] === 'cat'){
        const cat = require('./cat.js');
        cat(cmd.split(' ')[1]);
    }
    else {process.stdout.write('You typed: '+cmd)}
    process.stdout.write('\nprompt > ')
})
