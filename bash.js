process.stdout.write('prompt >')
process.stdin.on('data',(data)=>{
    const cmd = data.toString().trim()
    if (cmd === 'pwd'){
        const workingD = process.cwd()
        process.stdout.write(workingD)
    }
    else {process.stdout.write('You typed: '+cmd)}
    process.stdout.write('\nprompt >')
})