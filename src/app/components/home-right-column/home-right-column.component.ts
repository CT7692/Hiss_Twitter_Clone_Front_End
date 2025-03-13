import { Component } from '@angular/core';
import { TweetComponent } from '../tweet/tweet.component';
import { Tweet } from '../../entities/tweet';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { JwtService } from '../../services/jwt.service';
import { RouterModule } from '@angular/router';
import { TweetStatPostObject } from '../../entities/tweetStatPostObject';
import { BehaviorSubject } from 'rxjs';
import { Comment } from '../../entities/comment';
import { CommentStatPostObject } from '../../entities/commentStatPostObject';

@Component({
  selector: 'app-home-right-column',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-right-column.component.html',
  styleUrl: './home-right-column.component.css'
})
export class HomeRightColumnComponent {

  tweets: Tweet[] = [];
  tweet?: Tweet;
  currentUsername: any;
  message: any;
  alertClass: any;
  tweetStatData: TweetStatPostObject = {};
  commentStatData: CommentStatPostObject = {};

  constructor(private dataService: DataService, 
      private jwtService: JwtService) {

    this.currentUsername = this.jwtService.decodeToken().sub;

    this.dataService.getTweets().subscribe((response: Tweet[]) => {
      this.tweets = response;

      for(let tweet of this.tweets){
        this.dataService.getComments(tweet.tweetID).subscribe((response: Comment[]) => {
          tweet.comments = response;
        });
      }
    });
  }

  onDeleteTweet(tweetID: any, tweet: Tweet) {
    tweet.invisible = true;
    this.dataService.deleteTweet(tweetID).subscribe(
      () => {
        this.message = "Hiss deleted.";
        this.alertClass = "alert alert-success";
      }, (error) => {
        this.message = "Error deleting hiss.";
        this.alertClass = "alert alert-danger";
      });
  }

  onLikeTweet(tweetID: any, tweet: any) {
    tweet.likes = new BehaviorSubject<number>(tweet.likeCount);
    if(tweet.likedByCurrentUser) {
      tweet.likedByCurrentUser = false;
      tweet.likeCount -= 1;
    } else {
      tweet.likedByCurrentUser = true;
      tweet.likeCount += 1;
    }

    this.tweetStatData.likeCount = tweet.likeCount;
    this.tweetStatData.likedByCurrentUser = tweet.likedByCurrentUser;
    this.tweetStatData.id = tweetID;
    
    this.dataService.likeTweet(tweetID, this.tweetStatData).subscribe(
      () => {
        console.log(this.tweetStatData);
      }, (error) => {
        console.log("Error");
    });
  }

  onLikeComment(commentID: any, comment: any){
    comment.likes = new BehaviorSubject<number>(comment.likeCount);

    if(comment.likedByCurrentUser){
      comment.likedByCurrentUser = false;
      comment.likeCount -= 1;
    } else{
      comment.likedByCurrentUser = true;
      comment.likeCount += 1;
    }
    this.commentStatData.likeCount = comment.likeCount;
    this.commentStatData.likedByCurrentUser = comment.likedByCurrentUser;
    this.commentStatData.id = commentID;

    this.dataService.likeComment(commentID, this.commentStatData).subscribe(
      () => {
        console.log(this.commentStatData);
      }, (error) => {
        console.log("Error");
      });
  }

  onDeleteComment(commentID: any, comment: Comment){
    comment.invisible = true;
    this.dataService.deleteComment(commentID).subscribe(
      () => {
        this.message = "Comment deleted.";
        this.alertClass = "alert alert-success";
      }, (error) => {
        this.message = "Error deleting comment.";
        this.alertClass = "alert alert-danger";
      });
  }
}
