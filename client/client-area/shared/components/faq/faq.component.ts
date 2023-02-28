import { Component } from '@angular/core';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FaqService } from '../../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  showAnswer: any[] = [];
  currentIndex = -1;
  Minus = faCircleMinus;
  Plus = faCirclePlus;

  constructor(private faqService: FaqService) {}

  ngOnInit() {
    this.getAllFaqs();
  }

  toggle(index: number) {
    if (this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
  }

  getAllFaqs() {
    this.faqService.getAllFaqs().subscribe((response) => {
      this.showAnswer = response;
    });
  }
}
