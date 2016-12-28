import { Component, OnInit } from '@angular/core';
import template from './slider.component.html';
import interStyle from './slider.component.css';

@Component({
        selector: 'inter-slider',
        template,
        interStyle

})

export class SliderComponent {
        activeIndex: number = 0;
        
        currentDir: string;




        onForward() {
                this.activeIndex++;
         
        }
        onBackward() {
                this.activeIndex--;
                
                
        }

        NgOnInit() {
                
        }

}