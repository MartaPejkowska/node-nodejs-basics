const parseArgs = () => {

    const args= process.argv.slice(2)
    for (let i=0;i<args.length;i=i+2){
        if (i===args.length-2){
            process.stdout.write(`${args[i]} is ${args[i+1]}`)
        }
       else process.stdout.write(`${args[i]} is ${args[i+1]}, `)
    }
}
parseArgs();