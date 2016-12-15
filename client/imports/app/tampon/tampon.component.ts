import { Component } from '@angular/core';
import styles from '../../../../public/menses-cup.component.css';
import template from './tampon.component.html';

@Component({
        selector: 'app-tampon',
        template,
        styles
})
export class TamponComponent {
        sectionTitle: string = '탐폰';
}