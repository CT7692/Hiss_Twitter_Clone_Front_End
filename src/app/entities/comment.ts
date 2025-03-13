import { BehaviorSubject } from "rxjs";
import { User } from "./user";
import { Tweet } from "./tweet";

export class Comment{
    commentID?: number;
    content?: string;
    time?: Date;
    user?: User;
    tweet?: Tweet;
    likeCount?: number;
    likes?: BehaviorSubject<any>;
    likedByCurrentUser?: boolean;
    invisible: boolean = false;
    makeCommentInvisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.invisible);
}