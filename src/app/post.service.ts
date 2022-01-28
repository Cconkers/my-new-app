import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from './post';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  private url2: string = 'https://my-json-server.typicode.com/typicode/demo/db';


  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }

  public getTests(): Observable<Test[]> {
    return this.httpClient.get<Test[]>(this.url2).pipe(map(response => response));

  }
}
