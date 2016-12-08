# Menstrual Cups
---





## Angular2 animations
- [angular.io animations page]()



- Example: Transitioning between two states.
- States and transitions.
- Example: Entering and leaving.
- Example: Entering and leaving from different states.
- Animatable properties and units.
- Automatic property calculation.
- Animation timing.
- Multi-step animations with keyframes.
- Parallel animation groups.
- Animation callbacks.

### dependencies 
- [web-animations github](https://github.com/web-animations/web-animations-js)
- [web-animations-js docs/example](https://github.com/web-animations/web-animations-js/blob/dev/docs/examples.md) 


- [sass]()
        - `scss`파일 트래킹해 `.css`로 자동 변환하기 :  프로젝트 경로로 이동 후, 터미널에서 `sass --watch style.scss:style.css`입력



### 추가기능 관련 라이브러리


#### 무한스크롤 <sub>ng2 inifinite-scrollazyloads</sub>
- [ng2, page-scroll ](https://www.npmjs.com/package/ng2-page-scroll)
        - Automatic
        - Target Scrolling
        - Nested Scrolling
        - Transforming Scrolling


```
yarn add ng2-page-scroll --save
```
app의 module에 (`AppModule`)  `imports`에 넣어준다.

```typescript
import {Ng2PageScrollModule} from 'ng2-page-scroll';

@NgModule({
    imports: [
        /* Other imports here */
        Ng2PageScrollModule.forRoot()
        ]
})
export class AppModule {
}
```

> `ng2-page-scroll` 라이브러리는, `SystemJS`기반 구동에서 돌아가지 않고, `RollupJS` 기반으로 돌아간다. 따라서 `SystemJS`기반일 경우, 위와같이 설정해줘도 SystemJS가 `ng-page-scroll`을 로드하지(찾지) 못했다는 에러메시지가 나타날 것이다. 이 경우, `systemjs.config.js`의 메타데이터 부분을 설정해준다.


```javascript
System.config({
    paths: {
        'npm:': 'node_modules/'
    },
    map: {
        app: 'app',

        '@angular/core'   : 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common' : 'npm:@angular/common/bundles/common.umd.js',
        // further angular bundles...

        //다른 건 제외하고, 바로 이 줄만 추가해주면 된다.
        'ng2-page-scroll/ng2-page-scroll':'npm:ng2-page-scroll/bundles/ng2-page-scroll.umd.js',

        rxjs: 'npm:rxjs',
    },
    packages: {
        app : {defaultExtension: 'js', main: './main.js'},
        rxjs: {defaultExtension: 'js'}
    }
});
```
여기까지하고나서 app을 확인해보면 정상작동하는 것을 볼 수 있다.


### Usage

#### Directive
- 이제 tmeplate에서, (동일한 페이지의)요소 중, `href` 속성(attribute)를 가지고있는 요소에 대해서 `pageScroll` 속성을 추가할 수 있다.
        - (e.g `#theid`)



```typescript
@Component({
   ...
   template: `...
        <a pageScroll href="#awesomePart">Take me to the awesomeness</a>
        <!-- Further content here -->
        <h2 id="awesomePart">This is where the awesome happens</h2>
   ...`,
})
export class MyComponent {
}
```

#### Service

- 이 모듈에서 제공하는 고급진(?) 스크롤 애니메이션을 `service`에서 활용할 수 있다.
- `service`를 활용하면, 모든 custom event나 복잡한 설정(complex configuration)에서도 scroll animation을 추가할 수 있다.
        - 콘텐츠 초기화 후 또는 서버 응답 등에 이 servie를 사용할 수 있다.


**직접 구성해보기**
- 먼저 `PageScrollService` 인스턴스를 당신의 component의 constructor로 추가하여 참조(reference)를 얻는다. (참조한다)
        - `PageScrollService`: `PageScrollInstance`를 트리거하는 `start()` 메서드를 제공한다.
        - `PageScrollInstance` : scroll animation 수행과 관련된 모든 정보를 **캡슐화**하는 객체다.

- 제공된(provided) 팩토리 메서드들을 사용하여 새로운 `PageScrollInstance`를 생성할 수 있다.
        - `PageScrollInstance#simpleInstance`
        - `PageScrollInstance#simpleInlineInstance`
        - `PageScrollInstance#advancedInstance`


```typescript
@Component({
    template: `
        <p>Main content</p>
        <!-- Further content here -->
        <h2 id="head2">Part in a container</h2>
        <div #container>
            <p>Container content</p>
            <h3 id="head3">Heading</h3>
        </div>`
})
export class MyComponent {

     @ViewChild('container')
     private container: ElementRef;

// 먼저 `PageScrollService` 인스턴스를 당신의 component의 constructor로 추가하여 참조(reference)를 얻는다. (참조한다)
     constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document) {
     }

     public goToHead2(): void {
         let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#head2');
         this.pageScrollService.start(pageScrollInstance);
     }; 

     public goToHeadingInContainer(): void {
         let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInlineInstance(this.document, '#head3', this.container.nativeElement);
         this.pageScrollService.start(pageScrollInstance);
     };
 }
```



## 일단 다른말은 생략하고, 단순히 이렇게 적용해도 된다.

```html
<a pageScroll href="#awesomePart">Take me to the awesomeness</a>
<!-- Further content here -->
<h2 id="awesomePart">This is where the awesome happens</h2>
```
- default로 설정된 animation 동작이 이루어진다.
- 세부적인 선택을 하려면 api를 자세히 까봐야할 듯!











- [ng2, angular2-infinite-scrolllazyloads](https://www.npmjs.com/package/angular2-infinite-scroll)
- 


# Design reference 
---


## Interaction

- [Material design, ripple, codepen](http://codepen.io/colony-tad/pen/GNyOJW)
- [Menu Icon transition](http://codepen.io/colony-tad/pen/MbrOwz)
- [Material Design Context Menu](http://codepen.io/iremlopsum/pen/VvVEwY) : 기본이 햄버근데, 클릭하면 왼쪽아래로 드롭다운 메뉴가 생기는 형태
- [Material Design Note Card](http://codepen.io/iremlopsum/pen/qOpmBw) : 타이핑 + 파일업로드 기능.
- [Motion Design Experiment with FAB](http://codepen.io/iremlopsum/pen/BNEgEo) : 깔끔한 색상과 모션그래픽
- [Material Design Radial Action, Nav](http://codepen.io/cristina-silva/pen/BsJFE)

- [Material Design Interactive Form Validation](http://codepen.io/iremlopsum/pen/BNEgEo)
- [Material Design Form](http://codepen.io/joshadamous/pen/yyyqJZ)

- [Material Design Animated Share Button](http://codepen.io/MartijnBrands/pen/VvmmNe)


- [Button Hover Effect](http://codepen.io/MartijnBrands/pen/VvmmNe)
- [Button Hover Effect by kyle brum](http://codepen.io/kjbrum/pen/wBBLXx) : 13 종류의 motion
- [Button Hover : States](http://codepen.io/thejamespower/pen/OVNYLL) : 11 종류의  motioon (based on state)
- [Button Hover : Direction aware (pure CSS)](http://codepen.io/FWeinb/pen/GrpqB)


- [Material Design Respons Table](http://codepen.io/zavoloklom/pen/IGkDz)
- [Material Design Tiles](http://codepen.io/zavoloklom/pen/wtApI)
- [Material Design Menu](http://codepen.io/arjancodes/pen/jErbyM) : 우측 햄버그에서 클릭하면 우측 사이드바로 변경



- [Material Design Modal](http://codepen.io/ettrics/pen/Jdjdzp)

- [Material Scroll Animation](http://codepen.io/balapa/pen/vLzmmM) : 아래 방향 버튼을 클릭하면, 약간의 애니메이션과함께 아래로 살짝이동 



## theme

- [Material Design collection](http://materialdesignblog.com/10-material-design-cards-for-web-in-css-html/)
        -  여러 material design 소스들을 모아둔 사이트.
        - 일단, 카드만 봐뒀다.

- [Material Design Layout Animation](http://codepen.io/Michiel/pen/EBtga) : 딱 레이아웃 코드를 보는 곳이 아니라, 반응형으로 작업할 경우, 대충 어떤 형태로 보이는지 가늠할 수 있다.


## navigation
---
![adidas](https://d13yacurqjgara.cloudfront.net/users/485207/screenshots/2623565/untitled-1.gif)






## langding page
---
![])https://d13yacurqjgara.cloudfront.net/users/228368/screenshots/1956902/studio.gif)




## form
---

### Multiple Depth,  One row input form

![Multiple Depth,  One row input form](https://d13yacurqjgara.cloudfront.net/users/141880/screenshots/2503006/dailyui-082.gif)

### One Depth, Multiple row input form
![One Depth, Multiple row input form](https://d13yacurqjgara.cloudfront.net/users/5745/screenshots/2509071/dailyui_082.gif)







## Contact us
---
![Material, darkblue](https://d13yacurqjgara.cloudfront.net/users/140123/screenshots/2529042/contact-us.png)


## Search


![Wide Search](https://d13yacurqjgara.cloudfront.net/users/912568/screenshots/2512249/dailyui_022---search.png)

큼직큼직해서 좋다.

![Minimal Search Bar w/ Select](https://d13yacurqjgara.cloudfront.net/users/147190/screenshots/1461780/searchbar-3.gif)

이건 [Codepen](http://codepen.io/hans/full/KtyCo)도 있다.



## 404 page
---
![cat](https://d13yacurqjgara.cloudfront.net/users/618734/screenshots/2484845/008.png)


## Font
![NotoSansKR-Hestia](http://theeluwin.github.io/NotoSansKR-Hestia/)


# 개인적인 스크랩 (겸사겸사)
---

## Ideation
![Colour bandal](https://ksr-ugc.imgix.net/assets/012/150/659/a8ca391c9498d6df3e92f82af1c51fb4_original.jpg?w=1024&h=576&fit=fill&bg=000000&v=1463738740&auto=format&q=92&s=fb41f688c19ec3ad4bc17d858038f5bc)

이런식으로 뭔가 페인트로 칠해버리면 좋겠다. (기존의 선입견들을)

![highlight](https://d13yacurqjgara.cloudfront.net/users/485207/screenshots/2028592/nycdrib_1x.jpg)

이런식으로 특정 부분에 대해서만 포인트를 주는 방법들도 좋다


## Profile
![Profile + dropdown](https://d13yacurqjgara.cloudfront.net/users/485207/screenshots/2379239/dropdown.jpg)

## mobile timeline

![new page](https://cdn-images-1.medium.com/max/1600/0*wKpGS4cKTncpvGQ_.gif)
![flip board interface](https://cdn-images-1.medium.com/max/1600/0*bHr6cP9i9VPIgW6r.gif)
![new portal](https://cdn-images-1.medium.com/max/1600/0*DktdqB4B_4eFLn5d.gif)
![yahoo news](https://cdn-images-1.medium.com/max/1600/0*BHFO0K_wtF7YDbX4.gif)
![Daily news interface](https://cdn-images-1.medium.com/max/1600/1*oSjbpNc-OPuO5M0PjZL9fw.gif)



## code reference
- [더보기추가참고](http://stove99.tistory.com/103)





# Angular QuickStart Source

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/angular/quickstart  my-proj
cd my-proj
```

We have no intention of updating the source on `angular/quickstart`.
Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

### Create a new git repo
You could [start writing code](#start-development) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

The QuickStart documentation doesn't discuss testing.
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Look for the example `app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `app` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart
