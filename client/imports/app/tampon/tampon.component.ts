import { Component } from '@angular/core';


import {
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';



import gridStyle from '../../../../public/typo.css';
import template from './tampon.component.html';

@Component({
        selector: 'app-tampon',
        template,
        gridStyle
})
export class TamponComponent {
        sectionTitle: string = '탐폰';
        cardState: string = 'next';
        
        transformLev = { before: 0, current: 100 };

        currentIndex: number = 7;

        

        

        onNext(): void {
                let usageCardElement = document.getElementsByClassName('usageCard');
                
                let fromX = 'translateX(' + this.transformLev.before + 'px)';
                let toX = 'translateX(' + this.transformLev.current + 'px)';
                
                
                for (let usage of usageCardElement) {
                        
                        usage.animate([
                                // keyframes
                                { transform: fromX }, 
                                { transform: toX }
                        ], { 
                                // timing options
                                duration: 500
                                // iterations: Infinity
                        });
                }
                this.currentIndex += 1;

        }
        onPrev(): void{
                let usageCardElement = document.getElementsByClassName('usageCard');
                for (let usage of usageCardElement) {
                        usage.style.background = 'red'; //for test
                        usage.style.transform = 'translate(' + this.transformLev[this.currentIndex] + ')';
                        console.log('translate(' + this.transformLev[this.currentIndex] + ')');
                }
                this.currentIndex -= 1;
        }

        checkAttr(e: event): void {
                


                let usageCardElement = document.getElementsByClassName('usageCard');
                for (let usage of usageCardElement) {
                        usage.style.background = 'red';
                        usage.style.transform = 'translate(-100%)';
                        
                }
                
                console.log(usageCardElement);
        }
}