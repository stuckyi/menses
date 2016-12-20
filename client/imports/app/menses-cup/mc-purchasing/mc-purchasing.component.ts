import { Component } from '@angular/core';
import template from './mc-purchasing.component.html';
import gridStyles from '../../../../../public/typo.css';

@Component({
        selector: 'mc-purchasing',
        template,
        gridStyles
})
export class McPurchasingComponent {
        itemTitle: string = '생리컵을 구입하는 방법';

}