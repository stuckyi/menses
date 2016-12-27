import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Index } from '../index.model';
// import { IndexList } from '../mock-indexlist';`
import { McDefinitionComponent } from './mc-definition/mc-definition.component';
import { McPrincipleComponent } from './mc-principle/mc-principle.component';
import { McProductComponent } from './mc-product/mc-product.component';
import { McUsageComponent } from './mc-usage/mc-usage.component';
import { McHistoryComponent } from './mc-history/mc-history.component';
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
            { id:0, name: '생리컵이란', name_eng: 'definition', endScroll: '#definition' },
            { id:1, name: '작동 원리', name_eng: 'principle', endScroll: '#principle' },
            { id:2, name: '사용법', name_eng: 'usage', endScroll: '#usage' },
            { id:3, name: '제품정보', name_eng: 'product', endScroll: '#product' },
            { id:4, name: '역사', name_eng: 'history', endScroll: '#history' },
            { id:5, name: '장단점', name_eng: 'proscons', endScroll: '#proscons' }
        ];
        
        
        constructor(private router: Router) { }

        ngOnInit(): void{
            this.selectedIndex = { id:0, name: '생리컵', name_eng: 'definition', endScroll: '#definition' };
        }
    
        onSelect(index):void {
            console.log(index);
            this.selectedIndex = index;
        }
    
        navigateDir(e: event) {
            console.log(e.target.id);
            let toId: number = (e.target.id === 'goToBefore') ? -1 : 1;
            let toIndex: number = (this.selectedIndex.id + toId);
            this.selectedIndex = this.IndexList.find(index => index.id === toIndex);            
        }
       
        

}