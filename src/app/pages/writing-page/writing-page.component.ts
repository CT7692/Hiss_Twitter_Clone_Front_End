import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtService } from '../../services/jwt.service';
import { DataService } from '../../services/data.service';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TweetPostObject } from '../../entities/tweetPostObject';
import { CommentPostObject } from '../../entities/commentPostObject';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-writing-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './writing-page.component.html',
  styleUrl: './writing-page.component.css'
})
export class WritingPageComponent {
  currentPath: any;
  currentUsername?: string;
  message?: string;
  alertClass?: string;
  tweetForm: FormGroup;
  tweetData: TweetPostObject = {};
  commentForm: FormGroup;
  commentData: CommentPostObject = {};
  tweetID?: any;

  constructor(private fb: FormBuilder, private dataService: DataService,
    private jwtService: JwtService, private location: Location, private route: ActivatedRoute) {

    this.currentPath = location.path();
    
    this.tweetForm = this.fb.group({
      tweetContent: [null, [Validators.required]]
    });

    this.commentForm = this.fb.group({
      commentContent: [null, [Validators.required]]
    });
  }

  get tweetContent(){
    return this.tweetForm.get("tweetContent");
  }

  get commentContent(){
    return this.commentForm.get("commentContent");
  }

  createTweet() {
    this.currentUsername = this.jwtService.decodeToken().sub;
    this.tweetData.name = this.currentUsername;
    this.tweetData.content = this.tweetForm.value.tweetContent;

    this.dataService.createTweet(this.tweetData).subscribe((data: any) => {
      this.message = "Hiss posted!"
      this.alertClass = "alert alert-success";
    }, (error: any) => {
      console.log(error);
      this.message = "Error occurred making the hiss.";
      this.alertClass = "alert alert-danger";
    });
  }

  createComment(){
    this.currentUsername = this.jwtService.decodeToken().sub;
    this.commentData.name = this.currentUsername;
    this.commentData.content = this.commentForm.value.commentContent;

    const tweetID = this.route.snapshot.paramMap.get("tweetID");

    this.dataService.createComment(this.commentData, tweetID).subscribe((data: any) =>{
      this.message = "Comment posted!";
      this.alertClass = "alert alert-success";
    }, (error: any) => {
      console.log(error);
      this.message = "Error occurred making the comment.";
      this.alertClass = "alert alert-danger";
    });
  }

}
