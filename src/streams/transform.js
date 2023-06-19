import { Transform } from 'stream'

class Stream extends Transform {
    constructor() {
      super();
    }

    _transform(data, encoding, callback) {
      const reversed = data.toString().split('').reverse().join('');
      callback(null, reversed);
    }
  }

  const transform = async () => {
    const stream = new Stream();
    stream.pipe(process.stdout);
    process.stdin.pipe(stream);
};

await transform();

