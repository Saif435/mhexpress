import { Component } from '@angular/core';
import { HideService } from '../../services/hide.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public hide: HideService) {}
}
