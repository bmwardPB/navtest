import { Component, ViewChild } from '@angular/core';
import { SubcompaComponent } from './subcompa/subcompa.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tabtest';
  activeId = 1;
  ids: number[] = [1, 2, 3, 4];

  step2Disabled: boolean = true;
  step3Disabled: boolean = true;
  step4Disabled: boolean = true;


  @ViewChild(SubcompaComponent, {static: false}) applicantInformationComponent;

  next(): void {
    console.log('A COMPLETE: ', this.applicantInformationComponent.completed);
    if(this.applicantInformationComponent.completed && this.activeId == 1) {
      this.activeId++; 
      this.step2Disabled = false;
    }

  }

  back(): void {
    if(this.activeId > 1) this.activeId--;
  }
}
