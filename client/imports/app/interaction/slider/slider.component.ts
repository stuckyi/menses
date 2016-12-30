import { Component, OnInit } from '@angular/core';
import template from './slider.component.html';
import interStyle from './slider.component.css';

@Component({
        selector: 'inter-slider',
        template,
        interStyle

})

export class SliderComponent {
        activeIndex: number = 0;
        dirChange: any;
        currentIndex: number = 0;


        //사용자가 선택한 방향 판단 및 현재 기준점 업데이트
        setDirType(dir: string) {
                
                if (dir === 'left') {
                        let toIndex_left = this.currentIndex - 1;
                        let toIndex_left_string = toIndex_left.toString();
                        
                        this.dirChange = this.currentIndex + 'to' + toIndex_left;
                        this.currentIndex = this.currentIndex - 1;
                        
                } else if (dir === 'right') {
                        let toIndex_right = this.currentIndex + 1;
                        let toIndex_right_string = toIndex_right.toString();

                        this.dirChange = this.currentIndex + 'to' + toIndex_right;
                        this.currentIndex = this.currentIndex+1;
                } else {
                        console.log('setDirType error');
                }

                console.log('dir', dir);
                console.log('dirChange', this.dirChange);
                
        }

        //현재 active 카드 설정하는 NgClass 함수
        setClasses(index:number) {
                
                let slideIndex = index;
                let classes = {
                        activeCard: (this.activeIndex === slideIndex),
                        inactiveCard: (this.activeIndex > slideIndex)
                };

                return classes;
        }
        //slider-row의 class를 변경해주는 함수
        setSliderRowClasses() {
                let classes_row = {
                        step6_from_right: (this.dirChange === '7to6'),
                        step5_from_right: (this.dirChange === '6to5'),
                        step4_from_right: (this.dirChange === '5to4'),
                        step3_from_right: (this.dirChange === '4to3'),
                        step2_from_right: (this.dirChange === '3to2'),
                        step1_from_right: (this.dirChange === '2to1'),
                        step0_from_right: (this.dirChange === '1to0'),
                        stepN1_from_right: (this.dirChange === '0to-1'),
                        stepN2_from_right: (this.dirChange === '-1to-2'),
                        stepN3_from_right: (this.dirChange === '-2to-3'),
                        stepN4_from_right: (this.dirChange === '-3to-4'),
                        stepN5_from_right: (this.dirChange === '-4to-5'),
                        stepN6_from_right: (this.dirChange === '-5to-6'),
                        step6_from_left: (this.dirChange === '5to6'),
                        step5_from_left: (this.dirChange === '4to5'),
                        step4_from_left: (this.dirChange === '3to4'),
                        step3_from_left: (this.dirChange === '2to3'),
                        step2_from_left: (this.dirChange === '1to2'),
                        step1_from_left: (this.dirChange === '0to1'),
                        step0_from_left: (this.dirChange === '-1to0'),
                        stepN1_from_left: (this.dirChange === '-2to-1'),
                        stepN2_from_left: (this.dirChange === '-3to-2'),
                        stepN3_from_left: (this.dirChange === '-4to-3'),
                        stepN4_from_left: (this.dirChange === '-5to-4'),
                        stepN5_from_left: (this.dirChange === '-6to-5'),
                        stepN6_from_left: (this.dirChange === '-7to-6')
                }
                return classes_row;
        }


}