import { Component, Directive, OnInit } from '@angular/core';
import { ProductModel } from './model/product.model';

import gridStyle from '../../../../../public/typo.css';
import filterableProductTableStyle from './mc-product.component.css';
import template from './mc-product.component.html';

@Component({
        selector: 'mc-product',
        template,
        styleUrls:[gridStyle, filterableProductTableStyle]
})
export class McProductComponent {

        itemTitle: string = "제품정보";
        productData: any;
        
        //필터링 옵션목록
        colors = ['All', 'red', 'green', 'blue', 'magenta', 'pupple'];
        prices = ['All', '100', '200', '300', '400', '500', '600', '700'];
        productLenths = ['All', 'length1', 'length2', 'length3', 'length4', 'length5'];
        handTypes = ['All', 'Atype', 'Btype', 'Ctype', 'Dtype', 'Etype'];
        softTypes = ['All', 'soft1', 'soft2', 'soft3', 'soft4', 'soft5'];
        materialTypes = ['All', 'm1', 'm2', 'm3', 'm4', 'm5'];
        productSizes = ['All', 'size1', 'size2', 'size3', 'size4', 'size5'];
        
        //검색 객체
        searchTerms = {
                color: 'All',
                price: 'All',
                productLength: 'All',
                handType: 'All',
                softType: 'All',
                materialType: 'All',
                productSize: 'All'
        };
        
        //선택한 option value로 searchTerm을 변경한다.
        changeOptions(CategoryName, selectedValue) {
                switch (CategoryName) {
                        case 'color': this.searchTerms.color = selectedValue; break;
                        case 'price': this.searchTerms.price = selectedValue; break;
                        case 'productLength': this.searchTerms.productLength = selectedValue; break;     
                        case 'handType': this.searchTerms.handType = selectedValue; break;
                        case 'softType': this.searchTerms.softType = selectedValue; break;
                        case 'materialType': this.searchTerms.materialType = selectedValue; break;
                        case 'productSize': this.searchTerms.productSize = selectedValue; break;
                        default:
                                console.log("selectOption value is undefined");        
                }
        }
        //searchTerms로 data를 필터링한다.
        onSearch() {
                console.log(this.searchTerms);
                this.filteringData();
                
        }
        //searchTerms값을 초기값으로 돌린다.
        onReset() {
                this.searchTerms = {
                        color: 'All',
                        price: 'All',
                        productLength: 'All',
                        handType: 'All',
                        softType: 'All',
                        materialType: 'All',
                        productSize: 'All'
                };
                
        }

        

        
        filteringData() {
                console.log('filteringData start.');
                this.getData(); //검색전에 항상 데이터를 초기화한다.
                
                if (this.searchTerms.color !== 'All') {
                        this.productData = this.productData.filter((product: any) => {
                                return this.searchTerms.color === product.color;
                        });
                }

                if (this.searchTerms.price !== 'All') {
                        this.productData = this.productData.filter((product: any) => {
                                return this.searchTerms.price === product.price;
                        });
                }

                if (this.searchTerms.productLength !== 'All') {
                        this.productData = this.productData.filter((product: any) => {
                                return this.searchTerms.productLength === product.productLength;
                        });
                }


                if (this.searchTerms.handType !== 'All') {
                        this.productData = this.productData.filter((product: any) => {
                                return this.searchTerms.handType === product.handType;
                        });
                }

                if (this.searchTerms.softType !== 'All') {
                        this.productData = this.productData.filter((product: any) => {
                                return this.searchTerms.softType === product.softType;
                        });
                }

                if (this.searchTerms.materialType !== 'All') {
                        this.productData = this.productData.filter((product: any) => {
                                return this.searchTerms.materialType === product.materialType;
                        });
                }

                if (this.searchTerms.productSize !== 'All') {
                        this.productData = this.productData.filter((product: any) => {
                                return this.searchTerms.productSize === product.productSize;
                        });
                }
                console.log('filteringData end');
                console.log(this.productData);

        }
        getData() {
                console.log("getData");

                this.productData =  [
                        {
                                name: '루나컵',
                                name_eng: 'runa cup',
                                price: 83,
                                color: 'red',
                                productLength: 2.3,
                                handType: 'Atype',
                                softType: 'soft1',
                                materialType: 'm1',
                                productSize:'size1',
                                summary: '루나컵은 일반적으로 많이 사용합니다.',
                                imgUrl:'mensescup_2.png'
                                
                        },
                        {
                                name: '룬컵',
                                name_eng: 'roon cup',
                                price: 103,
                                color: 'pupple',
                                productLength: 4.3,
                                handType: 'Btype',
                                softType: 'soft2',
                                materialType: 'm1',
                                productSize:'size1',
                                summary: '룬컵은 국내 생산 제품입니다.',
                                imgUrl:'mensescup_3.png'
                                
                        },
                        {
                                name: 'no-name1',
                                name_eng: 'runa cup',
                                price: 133,
                                color: 'blue',
                                productLength: 3.3,
                                handType: 'Ctype',
                                softType: 'soft3',
                                materialType: 'm3',
                                productSize:'size3',
                                summary: 'no-name1no-name1no-name1',
                                imgUrl:'mensescup_4.png'
                                
                        },
                        {
                                name: '빅마마',
                                name_eng: 'roon cup',
                                price: 230,
                                color: 'green',
                                productLength: 5.3,
                                handType: 'Atype',
                                softType: 'soft1',
                                materialType: 'm1',
                                productSize:'size1',
                                summary: '브뤡어웨이!.',
                                imgUrl:'mensescup_5.png'
                                
                        },
                        {
                                name: '이은미',
                                name_eng: 'leeeunmi cup',
                                price: 330,
                                productLength: 4.3,
                                handType: 'Ctype',
                                softType: 'soft1',
                                materialType: 'm3',
                                productSize:'size3',
                                summary: '보란듯이 살거야 나약해지면안돼 그사람보다더 행복해져야해',
                                imgUrl:'mensescup_6.png'
                                
                        }

                ];
        }

        ngOnInit() {
                console.log("this.productData.length");
                this.getData();
                console.log(this.productData.length);
                
        }

}