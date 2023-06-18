import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const getDirname=(path)=>{
const __dirname = dirname(fileURLToPath(path));
return __dirname
}