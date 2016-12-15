import { Component } from '@angular/core';
import styles from '../../../../../public/menses-cup.component.css';
import template from './mc-proscons.component.html';

@Component({
        selector: 'mc-proscons',
        template,
        styles
})
export class McProsConsComponent {
        itemTitle: string = "장단점";

}