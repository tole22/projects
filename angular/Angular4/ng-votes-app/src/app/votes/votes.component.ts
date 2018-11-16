import { Component, OnInit } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  title = 'Votes App';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular2', 'http://angular.io', 30),
      new Article('Fazt web', 'http://faztweb.com', 20),
      new Article('Google', 'http://google.com.ar', 10)
    ];
  }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Article Added ${title.value}, link ${link.value}`);
    this.articles.push(
      new Article(title.value, link.value)
    );
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }

}
