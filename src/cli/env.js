const parseEnv = () => {

    const filterEnv=Object.entries(process.env).filter(([key])=>key.startsWith('RSS_'))

    filterEnv.map(([key,value])=>(console.log(`${key}=${value}`)))

    };

    parseEnv();
