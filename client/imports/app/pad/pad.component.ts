import { Component } from '@angular/core';
import styles from '../../../../public/menses-cup.component.css';
import template from './pad.component.html';

@Component({
        selector: 'app-pad',
        template,
        styles
})
export class PadComponent {
        sectionTitle: string = '일회용 패드';
}