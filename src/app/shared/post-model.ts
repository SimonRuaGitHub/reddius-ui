import { VoteType } from "../enums/VoteType";

export class PostModel {
    postId:number;
    userId:number;
	postName:string;
	url:string;
    description:string;
    subreddiusName:string;
    userName:string;
    voteCount:number;
    commentCount:number;
    duration:string;
    voteTypeOfUser:VoteType;
}