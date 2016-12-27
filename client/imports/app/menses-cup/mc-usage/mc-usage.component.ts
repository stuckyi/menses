import { Component, OnInit } from '@angular/core';

import gridStyles from '../../../../../public/typo.css';
import template from './mc-usage.component.html';

@Component({
        selector: 'mc-usage',
        template,
        gridStyles
})
export class McUsageComponent {
        title: string = '생리컵 사용법';
        modalState: boolean = false;
        modalTest: string = 'tadkim';
        cardModel: any;
        fold1_mouseover: boolean = true;


        onChangeState(e) {
                console.log(e);
                this.fold1_mouseover = (this.fold1_mouseover !== true) ? true : false;
        }

        onOpen(): void{
                this.modalState = true;
        }
        onClose(): void {
                this.modalState = false;
        }

        onCard(e): void{
                console.log(e);
                this.modalTest = 'yumm';
                this.modalState = true;
        }
        onMouseover(e): void {
                
                
                console.log(e);
                
        }
        
        ngOnInit(): void {
               
                
        }
        

}