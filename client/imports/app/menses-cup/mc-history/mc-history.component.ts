import { Component } from '@angular/core';

import template from './mc-history.component.html';
import gridStyle from '../../../../../public/typo.css';

@Component({
        selector: 'mc-history',
        template,
        gridStyle
})
export class McHistoryComponent {
        itemTitle: string = '역사';
}