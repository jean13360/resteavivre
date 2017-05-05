import { Component ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  value = 0;
  selectedValue;
  
  @Output() nbJourTravaille = new EventEmitter<any>();;

  change(event) {
    this.selectedValue = event.value;

    this.nbJourTravaille.emit(event.value);
  }
  
}

