import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { Test } from './test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';

  posts1 = new Array<Post>();
  posts = new Array<Test["posts"]>();
  comments = new Array<Test["comments"]>();
  profile = new Array<Test["profile"]>();

  constructor(private service: PostService) { }

  ngOnInit() {
    // this.service.getPosts().subscribe(response => {
    //   this.posts = response.map(item => {
    //     return new Post(
    //       item.body,
    //       item.id,
    //       item.title,
    //       item.userId
    //     );
    //   });
    // });

    this.service.getTests().subscribe(o =>
      this.posts = o.map((item: Test["posts"]) => {
        return new Test["posts"](
          [{item}]
        )
      })
    )





  }
}

