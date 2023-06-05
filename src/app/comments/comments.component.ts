import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  postId: number;
  comments: any[];

  constructor( private route: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = + params['id'];
      this.loadComments();
    });
  }
  loadComments() {
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`)
      .subscribe(comments => {
        this.comments = comments;
      });
  }
}
