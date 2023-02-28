import { Component } from '@angular/core';
import { HideService } from '../../services/hide.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public hide: HideService) {}
}
