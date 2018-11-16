import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';

@Component({
  selector: 'app-article',
  host: {
    class: 'row'
  },
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor() { }

  ngOnInit() {
  }

  voteUp() {
    this.article.voteUp();
  }
  voteDown() {
    this.article.voteDown();
  }

}
