import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../WindowRef';

import gridStyles from '../../../../../public/typo.css';
import template from './mc-usage.component.html';

@Component({
        selector: 'mc-usage',
        template,
        gridStyles
})
export class McUsageComponent {
        modal: any = {};
        windowObj: Object;


        constructor(private windowref: WindowRef) {
                console.log('windowRef is', windowref.nativeWindow);
         }
        
        // 이벤트 리스너를 추가하는 핼퍼 함수
        addEvent (el, event, callback) {
          if ('addEventListener' in el) {                  // addEventListener 메서드가 지원되면
            el.addEventListener(event, callback, false);   // 그대로 사용한다
          } else {                                         // 그렇지 않으면
            el['e' + event + callback] = callback;         // IE용 대체 코드를 작성한다
            el[event + callback] = function () {
              el['e' + event + callback](window.event);
            };
            el.attachEvent('on' + event, el[event + callback]);
          }
        }

        
        // 이벤트 리스너를 제거하는 핼퍼 함수
        removeEvent (el, event, callback) {
          if ('removeEventListener' in el) {                      
            el.removeEventListener(event, callback, false);       // removeEventListener 메서드가 지원되면 그대로 사용한다
          } else {                                                // 그렇지 않으면
            el.detachEvent('on' + event, el[event + callback]);   // IE용 대체 코드를 작성한다
            el[event + callback] = null;
            el['e' + event + callback] = null;
          }
        }
        
        //modal init
        initModal(): void{
                

                //모달창을 열기위한 클릭이벤트
                let openModal = document.getElementById('share');
        
                this.addEvent(openModal, 'click', function (e) {
                        console.log('click in openModal!');
                });
        }
        basicModal(): void {
                let $window = this.windowObj;
                let $modal = document.createElement('div');
                let $content = document.createElement('div');
                let $close = document.createElement('button');


                //class, attribute 설정
                $modal.className = "modal";
                $content.className = "modal-content";
                $close.className = "modal-close";
                $close.setAttribute("role", "button");
                

                //modal 요소하위에 content, close 요소 추가
                $modal.appendChild($content);
                $modal.appendChild($close);

                
                this.modal = function () {
                       

                        this.addEvent($close, 'on', function (e) {
                                console.log('close event!');
                                e.preventDefault();
                                // this.modal.close();
                        });
                        console.log("$window.height()");
                        console.log($window);
/*

                        return {
                                center(): void {
                                        let top = Math.max($window.height() - $modal.outer)
                                }
                        }

*/                        

                        
                }; //modal end
        }
        ngOnInit(): void {
                this.windowObj = this.windowref.nativeWindow; //Window객체를 변수에 할당
                this.initModal();
                this.basicModal();
                this.modal();

                
        }
        

}