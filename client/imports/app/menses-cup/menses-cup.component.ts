import { Component, OnInit } from '@angular/core';
import { Index } from '../index.model';
// import { IndexList } from '../mock-indexlist';`

import { McIntroComponent } from './mc-intro/mc-intro.component';
import { McShapeComponent } from './mc-shape/mc-shape.component';
import { McPrincipleComponent } from './mc-principle/mc-principle.component';
import { McUsageComponent } from './mc-usage/mc-usage.component';
import { McHistoryComponent } from './mc-history/mc-history.component';
import { McPurchasingComponent } from './mc-purchasing/mc-purchasing.component';
import { McProsConsComponent } from './mc-proscons/mc-proscons.component';



import template from './menses-cup.component.html';
import gridStyle from '../../../../public/typo.css';



@Component({
        selector: 'menses-cup',
        template,
        gridStyle
})

export class MensesCupComponent {
        currentSection: string = '생리컵';
        selectedIndex: Index;

        IndexList = [
            { name: '생리컵', name_eng: 'intro', endScroll: '#intro' },
            { name: '생리컵이란?', name_eng: 'intro', endScroll: '#intro' },
            { name: '제품정보', name_eng: 'info', endScroll: '#info' },
            { name: '역사', name_eng: 'history', endScroll: '#history' },
            { name: '장단점', name_eng: 'proscons', endScroll: '#proscons' },
            { name: '생김새', name_eng: 'shape', endScroll: '#shape' },
            { name: '사용법', name_eng: 'usage', endScroll: '#usage' }
        ];
        
        
        constructor() { }

        ngOnInit(): void{
            
            this.selectedIndex = { name: '생리컵', name_eng: 'intro', endScroll: '#intro' };
            
        }
    
        onSelect(index):void {
            console.log(index);
            this.selectedIndex = index;
        }
       
        

}