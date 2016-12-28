import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../interaction/modal/modal.component';

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
        selectedFold: string = '';
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
                //현재 선택한 fold 카드의 className을 가져온다.
                this.selectedFold =  e.target.className + ''; 
                this.modalState = true;
        }
        onMouseover(e): void {
                console.log(e);
        }

        
}