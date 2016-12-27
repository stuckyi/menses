import { Component } from '@angular/core';
import gridStyle from '../../../../../public/typo.css';
import template from './mc-product.component.html';

@Component({
        selector: 'mc-product',
        template,
        gridStyle
})
export class McProductComponent {
        itemTitle: string = "제품정보";
}