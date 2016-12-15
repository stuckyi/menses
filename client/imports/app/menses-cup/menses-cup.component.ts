import { Component, OnInit } from '@angular/core';
import { Index } from '../index.model';
import { INDEXLIST } from '../mock-indexlist';

import { McIntroComponent } from './mc-intro/mc-intro.component';
import { McShapeComponent } from './mc-shape/mc-shape.component';
import { McPrincipleComponent } from './mc-principle/mc-principle.component';
import { McUsageComponent } from './mc-usage/mc-usage.component';
import { McHistoryComponent } from './mc-history/mc-history.component';
import { McPurchasingComponent } from './mc-purchasing/mc-purchasing.component';
import { McProsConsComponent } from './mc-proscons/mc-proscons.component';



import template from './menses-cup.component.html';
import styles from '../../../../public/menses-cup.component.css';

@Component({
        selector:'menses-cup',
        template,
        styles
})

export class MensesCupComponent {
        currentSection: string = '생리컵';

        selectedIndex: Index;
        indexList: Index[];
        
        detailstate:any =  {
                'usage1'  :  false, 
                'usage2'  :  false,
                'usage3'  :  false,
                'usage4'  :  false,
                'usage5'  :  false,
                'usage6'  :  false
        };

        detailMessage: string = '자세히보기';

        usageItem_1_1: boolean = false;
        

        public state: string = 'inactive';

        constructor() {
                
        }

        ngOnInit(): void{
                this.selectedIndex = { name: '인트로', name_eng: 'intro', endScroll: '#intro' };
                this.indexList = [
                        { name: '인트로', name_eng : 'intro' , endScroll: '#intro' },
                        { name: '생김새', name_eng : 'shape' , endScroll: '#shape' },
                        { name: '동작원리', name_eng : 'principle' , endScroll: '#principle' },
                        { name: '사용법', name_eng : 'usage' , endScroll: '#usage' },
                        { name: '역사', name_eng: 'history' , endScroll: '#history' },
                        { name: '구매처 및 가격', name_eng: 'purchasing' , endScroll: '#purchasing' },
                        { name: '장단점', name_eng: 'proscons' , endScroll: '#proscons' }
                ];
        }
       
        
        onSelect(index: Index): void {
                this.selectedIndex = index;
        }

        toggleState(e: any):void{
                
                this.state = (this.state === 'inactive' ? 'active' : 'inactive');

                this.detailMessage = (this.detailMessage === '자세히보기'
                        ? '닫아두기'
                        : '자세히보기'
                );
                
                let targetid = e.target.id + '';
                this.detailstate[targetid] = (this.detailstate[targetid] === false
                        ? true
                        : false
                );
        }

        checkValue(e: any): void{
                let targetId = e.target.id;
        }

}