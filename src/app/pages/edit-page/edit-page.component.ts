import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../../services/jwt.service';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../../entities/tweet';
import { Location } from '@angular/common';
import { Comment } from '../../entities/comment';


@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {
  tweetID: any;
  commentID: any;
  currentUsername?: string;
  message?: string;
  alertClass?: string;
  tweetForm: FormGroup;
  commentForm: FormGroup;
  tweetPostObject: any;
  commentPostObject: any;
  currentPath: any;
  tweetContent: any;
  commentContent: any;

  constructor(private fb: FormBuilder, 
    private dataService: DataService,
    private jwtService: JwtService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {

    this.tweetForm = this.fb.group({
      tContent: [null, [Validators.required]]
    });

    this.commentForm = this.fb.group({
      cContent: [null, [Validators.required]]
    });

    this.currentPath = this.location.path();

    if(!this.currentPath.includes("comment")){
      this.tweetID = this.activatedRoute.snapshot.paramMap.get('tweetID');
      this.dataService.getTweetByID(this.tweetID).subscribe((data: Tweet) => {
        this.tweetContent = data.content;
      });
    }

    if(this.currentPath.includes("comment")){
      this.commentID = this.activatedRoute.snapshot.paramMap.get('commentID');
      this.dataService.getCommentByID(this.commentID).subscribe((data: Comment) => {
        this.commentContent = data.content;
      });
    }
  }

  get tContent(){
    return this.tweetForm.get("tContent");
  }

  get cContent(){
    return this.commentForm.get("cContent");
  }

  editTweet() {
    this.tweetPostObject = {}
    this.tweetID = this.activatedRoute.snapshot.paramMap.get('tweetID');
    this.currentUsername = this.jwtService.decodeToken().sub;
    this.tweetPostObject.name = this.currentUsername;
    this.tweetPostObject.content = this.tweetForm.value.tContent;

    this.dataService.editTweet(this.tweetID, this.tweetPostObject).subscribe((data: any) => {
      this.message = "Hiss updated!"
      this.alertClass = "alert alert-success";
    }, (error: any) => {
      console.log(error);
      this.message = "Error occurred editing hiss.";
      this.alertClass = "alert alert-danger";
    });
  }

  editComment(){
    this.commentPostObject = {};
    this.tweetID = this.activatedRoute.snapshot.paramMap.get('tweetID');
    this.commentID = this.activatedRoute.snapshot.paramMap.get('commentID');
    this.currentUsername = this.jwtService.decodeToken().sub;
    this.commentPostObject.name = this.currentUsername;
    this.commentPostObject.content = this.commentForm.value.cContent;

    this.dataService.editComment(this.commentID, this.commentPostObject).subscribe((data: any) => {
      this.message = "Comment updated!";
      this.alertClass = "alert alert-success";

    }, (error: any) => {
      console.log(error);
      this.message = "Error occurred editing comment.";
      this.alertClass = "alert alert-danger";
    });
  }
}
