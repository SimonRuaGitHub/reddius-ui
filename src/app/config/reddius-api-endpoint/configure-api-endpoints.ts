import { dom } from "@fortawesome/fontawesome-svg-core"
import { domain } from "process"
import Environment from './domain.json';
import Resources from './resource-paths.json';

export const URL_API_ENDPOINTS = {
       allSubreddiuses: Environment.dnsDev.concat(Resources.subreddius),
       createSubreddius: Environment.dnsDev.concat(Resources.subreddius),
       createPost: Environment.dnsDev.concat(Resources.createPost)
}


