import { Component, Input, OnInit } from '@angular/core';;
import { SharedService } from '../SharedService/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  shoes:any;
  constructor(private s: SharedService) {}

  ngOnInit(): void {
    this.shoes = this.s.getFeaturedItems(); // will become more speicifc to featured items
  }

}
