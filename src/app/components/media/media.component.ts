import { FilmsInterface } from './../../models/mediaInterfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  @Input () public films!: FilmsInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
