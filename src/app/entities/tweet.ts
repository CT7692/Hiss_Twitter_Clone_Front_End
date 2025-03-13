import { BehaviorSubject } from "rxjs";
import { User } from "./user";
import { Comment } from "./comment";

export class Tweet{
    tweetID?: number
    content?: string;
    time?: Date;
    user?: User;
    likeCount?: number;
    likes?: BehaviorSubject<any>;
    likedByCurrentUser?: boolean;
    invisible: boolean = false;
    makeTweetInvisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.invisible);
    comments?: Comment[];
}