import { Component } from '@angular/core';
import styles from '../../../../../public/menses-cup.component.css';
import template from './mc-history.component.html';

@Component({
        selector: 'mc-history',
        template,
        styles
})
export class McHistoryComponent {
        itemTitle: string = '역사';

}