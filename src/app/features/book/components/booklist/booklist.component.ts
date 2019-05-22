import { Component, OnInit, Input } from '@angular/core';
import { BookInfo } from '../../models';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  @Input() books: BookInfo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
