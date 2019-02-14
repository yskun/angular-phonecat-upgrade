import { Component, AfterViewInit } from '@angular/core'
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
  }

  title = 'seed'
}
