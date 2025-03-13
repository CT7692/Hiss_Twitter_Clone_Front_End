import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../entities/tweet';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { User } from '../entities/user';
import { AuthServiceService } from './auth-service.service';
import { FormGroup } from '@angular/forms';
import { TweetPostObject } from '../entities/tweetPostObject';
import { TweetStatPostObject } from '../entities/tweetStatPostObject';
import { CommentPostObject } from '../entities/commentPostObject';
import { CommentStatPostObject } from '../entities/commentStatPostObject';
import { Comment } from '../entities/comment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers = () =>{
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return headers;
  }

  constructor(private http: HttpClient, 
    private authService: AuthServiceService) {}

// ####################################### USER SERVICES #######################################

getCredentials(): any {
  const token = localStorage.getItem("token");
  const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
  return headers;
}

  getCurrentUserInfo(): Observable<User>{
    const headers = this.getCredentials();
    return this.http.get<User>("http://localhost:9009/user_info", {headers});
  }

  getUsers(): Observable<User[]>{
    const headers = this.getCredentials();
    return this.http.get<User[]>("http://localhost:9009/users", {headers});
  }

  getUserByName(name: any): Observable<User>{
    const headers = this.getCredentials();
    return this.http.get<User>("http://localhost:9009/user/" + name, {headers});
  }

  updatePassword(passwordForm: FormGroup): Observable<any> {
    const headers = this.getCredentials();
    return this.http.post<any>(
      "http://localhost:9009/update_password", passwordForm, {headers});
  }

  updatePicture(imageData: FormGroup): Observable<any> {
    const headers = this.getCredentials();
    return this.http.post<any>("http://localhost:9009/update_pic", imageData, {headers});
  }

// ####################################### COMMENT SERVICES #######################################

  getComments(tweetID: any): Observable<Comment[]>{
    const headers = this.getCredentials();
    return this.http.get<Comment[]>(`http://localhost:9009/tweet/${tweetID}/comments`, {headers});
  }

  createComment(commentData: CommentPostObject, tweetID: any): Observable<CommentPostObject>{
    const headers = this.getCredentials();
    return this.http.post<CommentPostObject>(`http://localhost:9009/tweet/${tweetID}/comment`, commentData ,{headers});
  }

  editComment(commentID: any, commentData: CommentPostObject): Observable<CommentPostObject>{
    const headers = this.getCredentials();
    return this.http.post<CommentPostObject>(`http://localhost:9009/comment/${commentID}/edit`, commentData, {headers});
  }

  deleteComment(commentID: any): Observable<Comment>{
    const headers = this.getCredentials();
    return this.http.delete<Comment>(`http://localhost:9009/delete_comment/${commentID}`, {headers});
  }

  likeComment(commentID: any, commentData: CommentStatPostObject): Observable<any>{
    const headers = this.getCredentials();
    return this.http.post<any>(`http://localhost:9009/comment/${commentID}/like`, commentData, {headers});
  }

  getCommentByID(commentID: number): Observable<Comment>{
    const headers = this.getCredentials();
    return this.http.get<Comment>(`http://localhost:9009/comment/${commentID}`, {headers});
  }

// ####################################### TWEET SERVICES #######################################

  getTweets(): Observable<Tweet[]>{
    const headers = this.getCredentials();
    return this.http.get<Tweet[]>("http://localhost:9009/tweets", {headers});
  }

  getTweetsByName(name: any): Observable<Tweet[]>{
    const headers = this.getCredentials();
    return this.http.get<Tweet[]>("http://localhost:9009/tweets/" + name, {headers});
  }

  createTweet(tweetData: TweetPostObject): Observable<TweetPostObject>{
    const headers = this.getCredentials();
    return this.http.post<TweetPostObject>("http://localhost:9009/tweet", tweetData, {headers});
  }

  editTweet(id: number, tweetData: TweetPostObject): Observable<TweetPostObject>{
    const headers = this.getCredentials();
    return this.http.post<TweetPostObject>(`http://localhost:9009/edit_tweet/${id}`, tweetData, {headers});
  }

  getTweetByID(id: number): Observable<Tweet>{
    const headers = this.getCredentials();
    return this.http.get<Tweet>(`http://localhost:9009/tweet/${id}`, {headers});
  }

  deleteTweet(id: number): Observable<Tweet>{
    const headers = this.getCredentials();
    return this.http.delete<Tweet>(`http://localhost:9009/delete_tweet/${id}`, {headers});
  }

  likeTweet(id: number, tweetStatData: TweetStatPostObject): Observable<any>{
    const headers = this.getCredentials();
    return this.http.post<any>(`http://localhost:9009/tweet/${id}/like`, tweetStatData, {headers});
  }

  getTweetLikes(id: number): Observable<number>{
    const headers = this.getCredentials();
    return this.http.get<number>(`http://localhost:9009/tweet/${id}/likes`, {headers});
  }

}
