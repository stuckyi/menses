import { Component, Input, OnInit, OnChanges } from '@angular/core';
import template from './modal.component.html';
@Component({
        selector: 'modal',
        template  
})
export class ModalComponent implements OnChanges {
        
        @Input() selectedFold;
        text: string = 'none';
        foldName: string;
        
}