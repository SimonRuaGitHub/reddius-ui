import { VoteType } from '../enums/VoteType';

export interface VoteModel{  
    voteType: VoteType;
    postid: number;
    userid: number; 
}