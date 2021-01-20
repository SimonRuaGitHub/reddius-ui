import Environment from './domain.json';
import Resources from './resource-paths.json';

export const URL_API_ENDPOINTS = {
       allSubreddiuses: Environment.dnsDev.concat(Resources.subreddius),
       createSubreddius: Environment.dnsDev.concat(Resources.subreddius),
       createPost: Environment.dnsDev.concat(Resources.createPost),
       createComment: Environment.dnsDev.concat(Resources.createComment),
       allCommentsByPost: Environment.dnsDev.concat(Resources.allCommentsByPost),
       logout: Environment.dnsDev.concat(Resources.logout),
       userPosts: Environment.dnsDev.concat(Resources.allUserPosts)
}


