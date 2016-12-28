import { Component } from '@angular/core';
import { SliderComponent } from '../interaction/slider/slider.component';
import styles from '../../../../public/typo.css';
import template from './cotton-pad.component.html';

@Component({
        selector: 'app-cotton-pad',
        template,
        styles
})
export class CottonPadComponent {
        selectedIndex = { name: '천생리대', name_eng: 'cottonPad' };

        IndexList = [
            { id:0, name: '천생리대 란', name_eng: 'definition', endScroll: '#definition' },
            { id:1, name: '작동 원리', name_eng: 'principle', endScroll: '#principle' },
            { id:2, name: '사용법', name_eng: 'usage', endScroll: '#usage' },
            { id:3, name: '제품정보', name_eng: 'product', endScroll: '#product' },
            { id:4, name: '역사', name_eng: 'history', endScroll: '#history' },
            { id:5, name: '장단점', name_eng: 'proscons', endScroll: '#proscons' }
        ];
        
        
}