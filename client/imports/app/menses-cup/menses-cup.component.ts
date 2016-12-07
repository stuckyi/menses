import { Component } from '@angular/core';
import { Index } from '../index.model';
import { INDEXLIST } from '../mock-indexlist';

import template from './menses-cup.component.html';
import styles from './menses-cup.component.css';


@Component({
        selector:'menses-cup',
        template,
        styles
})

export class MensesCupComponent {
        selectedIndex: Index;
        indexList: Index[] = [
        { name: '인트로', name_eng : 'intro' , endScroll: '#intro' },
        { name: '생김새', name_eng : 'shape' , endScroll: '#shape' },
        { name: '동작원리', name_eng : 'principle' , endScroll: '#principle' },
        { name: '사용법', name_eng : 'usage' , endScroll: '#usage' },
        { name: '마켓', name_eng : 'market' , endScroll: '#market' },
        { name: '트렌드', name_eng : 'trend' , endScroll: '#trend' },
        { name: '역사', name_eng: 'trend' , endScroll: '#trend' },
        { name: '구매처 및 가격', name_eng: 'purchasing' , endScroll: '#purchasing' },
        { name: '손잡이 길이', name_eng: 'handle' , endScroll: '#handle' },
        { name: '크기', name_eng: 'size' , endScroll: '#size' },
        { name: '탄력', name_eng: 'elasticty' , endScroll: '#elasticty' },
        { name: '소재', name_eng: 'material' , endScroll: '#material' },
        { name: '장점', name_eng: 'pros' , endScroll: '#pros' },
        { name: '단점', name_eng : 'cons' , endScroll: '#cons' }
];
        

        constructor() {
                
        }
       
        
        onSelect(index:Index): void {
                console.log(index);
                this.selectedIndex = index;
        }

}