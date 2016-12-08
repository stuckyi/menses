import { Component } from '@angular/core';
import { Index } from '../index.model';
import { INDEXLIST } from '../mock-indexlist';
import {NgSwitch, NgSwitchWhen, NgSwitchDefault} from '@angular/common';

import {
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';


import template from './menses-cup.component.html';
import styles from './menses-cup.component.css';


@Component({
        selector:'menses-cup',
        template,
        styles,
        animations: [
            trigger('moreviewState', [
              state('inactive', style({
                backgroundColor: '#E8EAF6',
                transform: 'scale(1)'
              })),
              state('active',   style({
                backgroundColor: '#3F51B5',
                transform: 'scale(1.1)'
              })),
              transition('inactive => active', animate('100ms ease-in')),
              transition('active => inactive', animate('100ms ease-out'))
            ])
        ],
        directives:[NgSwitch, NgSwitchWhen, NgSwitchDefault]
})

export class MensesCupComponent {
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
        

        public state: string = 'inactive';



        

        constructor() {
                
        }

        ngOnInit(): void{
                this.indexList = [
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
        }
       
        
        onSelect(index:Index): void {
                console.log(index);
                this.selectedIndex = index;
        }

        toggleState(e: any):void{
                this.state = (this.state === 'inactive' ? 'active' :'inactive');
                // console.log(this.state);
                let targetid = e.target.id + '';

                this.detailstate[targetid] = (this.detailstate[targetid] === false ? true : false);


                
                
                /*
                if(e.target.id === 'usage-1'){ console.log("생리컵 접는 방법 자세히 보기"); }

                */
        }

}