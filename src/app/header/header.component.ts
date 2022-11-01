import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  navigation: EventEmitter<string> = new EventEmitter<string>();

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onNavClick(event: Event) {
    this.navigation.emit((event.target as HTMLElement).innerText.toLowerCase());
  }

}
