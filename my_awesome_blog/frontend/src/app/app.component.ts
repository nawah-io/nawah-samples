import { Component, OnInit } from '@angular/core';
import { NawahService } from 'ng-nawah';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-awesome-blog';

  constructor(private nawah: NawahService) {}

  ngOnInit() {
    this.nawah.init({
      api: 'ws://localhost:8081/ws',
      anonToken: '__ANON_TOKEN_',
      authAttrs: ['email'],
      appId: 'APP_ID',
    });
  }
}
