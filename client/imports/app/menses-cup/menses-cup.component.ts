import { Component, OnInit } from '@angular/core';
import { Index } from '../index.model';
import { IndexList } from '../mock-indexlist';

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
        indexData: any;
        selectedIndex: Index;
        
        
        constructor() { }

        ngOnInit(): void{
            
            this.selectedIndex = { name: '인트로', name_eng: 'intro', endScroll: '#intro' };
            
        }
       
        

}