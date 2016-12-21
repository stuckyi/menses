import { Component } from '@angular/core';


import gridStyle from '../../../../public/typo.css';
import template from './tampon.component.html';

@Component({
        selector: 'app-tampon',
        template,
        gridStyle
})
export class TamponComponent {
        sectionTitle: string = '탐폰';
        

        transformLev = ['-350%', '-300%', '-250%', '-200%', '-150%', '-100%', '-50%', '0','50%', '100%', '150%', '200%', '250%', '300%', '350%'];
        currentIndex: number = 7; //0%
        

        //카드 슬라이드
        moveCard(dir: string): void {
                let usageCardElement = document.getElementsByClassName('usageCard');
                for (let usage of usageCardElement) {
                        usage.style.transform = 'translate(' + this.transformLev[this.currentIndex] + ')';
                }
                (dir === 'next') ? this.currentIndex += 1 : this.currentIndex -= 1;
        }

}