import { Component } from '@angular/core';
import styles from '../../../../../public/menses-cup.component.css';
import template from './mc-purchasing.component.html';

@Component({
        selector: 'mc-purchasing',
        template,
        styles
})
export class McPurchasingComponent {
        itemTitle: string = '생리컵을 구입하는 방법';

}