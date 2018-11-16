import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';

@Component({
  selector: 'app-article',
  host: {
    class: 'row'
  },
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  inputs: ['article']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor() { }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }


}
