import { terminal } from './services/terminal';
import { IError } from './interfaces/IError';
import 'dotenv';


const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_SECRET = process.env.GITHUB_SECRET;



export {
  GITHUB_CLIENT_ID,
  GITHUB_SECRET,
}; 
