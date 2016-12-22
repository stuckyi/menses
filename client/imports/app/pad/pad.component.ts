import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PadIntroComponent } from './pad-intro/pad-intro.component';

import gridStyle from '../../../../public/typo.css';
import template from './pad.component.html';



@Component({
        selector: 'app-pad',
        template,
        gridStyle,
        directives:[PadIntroComponent]
})
export class PadComponent {
        currentSection: string = '생리컵';
        selectedIndex: Index;

        IndexList = [
            { id:0, name: '생리컵', name_eng: 'intro', endScroll: '#intro' },
            { id:1, name: '생리컵이란?', name_eng: 'intro', endScroll: '#intro' },
            { id:2, name: '제품정보', name_eng: 'purchasing', endScroll: '#purchasing' },
            { id:3, name: '역사', name_eng: 'history', endScroll: '#history' },
            { id:4, name: '장단점', name_eng: 'proscons', endScroll: '#proscons' },
            { id:5, name: '생김새', name_eng: 'shape', endScroll: '#shape' },
            { id:6, name: '사용법', name_eng: 'usage', endScroll: '#usage' }
        ];
        
        
        constructor(private router: Router) { }

        ngOnInit(): void{
            this.selectedIndex = { id:0, name: '생리컵', name_eng: 'intro', endScroll: '#intro' };
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