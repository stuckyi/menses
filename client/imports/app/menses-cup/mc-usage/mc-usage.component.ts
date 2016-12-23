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
        cardModel: any;
        fold1_mouseover: boolean = true;


        onChangeState(e) {
                console.log(e);
                this.fold1_mouseover = (this.fold1_mouseover !== true) ? true : false;
        }

        questionList = ['난이도', '평가항목2', '평가항목3', '평가항목4', '평가항목5'];

        getCardData(): any {
                return [
                        { index:0, name: 'c자형 접기', imgUrl: '#' }

                ];
        }
        onOpen(): void{
                this.modalState = true;
        }
        onClose(): void {
                this.modalState = false;
        }

        onCard(e): void{
                console.log(e);
                this.modalState = true;
        }
        onMouseover(e): void {
                
                
                console.log(e);
                
        }
        
        ngOnInit(): void {
               
                
        }
        

}