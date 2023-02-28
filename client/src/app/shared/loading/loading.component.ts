import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {
  showSpinner = false;
  constructor(
    private loadingService: LoadingService // private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.loadingService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = status === 'start';
      // this.cdRef.detectChanges();
    });
  }
}
