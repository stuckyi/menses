import { Component } from '@angular/core';
import template from './mc-proscons.component.html';
import gridStyles from '../../../../../public/typo.css';
@Component({
        selector: 'mc-proscons',
        template,
        gridStyles
})
export class McProsConsComponent {
        itemTitle: string = "장단점";

}