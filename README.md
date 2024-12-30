# vue-example 
241230

## 확장프로그램
    vue-beautify : 줄정리 ctrl+shift+f

## 0. 시작
   npm create vue@latest

## 1. 뷰 인스턴스 : new Vue (export default)
    name        : <div id=""> </div>
    methods     : 함수 기능 등록
    computed    : 상태변화시 실시간 연산 (간단한 처리)
    watch       : 상태변화시 비동기 처리 (http요청같은)
    components  : 역할별 파트 지정
    data(){return{}}    : 사용하는 데이터
    props       : 상위에서 주는데이터 받기

## 2. 라이프 사이클 함수
   beforeCreated : data,method 정의 안된 init
   Created     : data,method 정의 이후 init
   mounted     : 화면요소 접근 가능 init
   updated     : 화면요소 변경 감지 시 호출

## 3. 컴포넌트
   웹의 모듈화가 가능하다.
   파일을 만들고 components에 넣으면 된다.
   import 사용할모듈명 from "@/components/filename.vue"

## 4. props
   하위(components안에 들어간것)로 값 전달
   v-bind:하위에서쓸변수명="상위에서주는변수명"
   props로 전달된다


## 5. emit
   상위로 값 전달
   v-on:이벤트명="상위함수명"
   this.$emit('이벤트명')


## 6. event-bus
   상하위 관계 없을때 전송, 보내기 번거로울때
   3 버전에서는 사라졌다고한다.
   mitt로 사용가능


## 7. 네스티드 라우터
   생성할때 라우터 옵션 체크
   views 페이지 추가. 
   views 페이지 파일 router/index.js에 등록


## 8. http api 요청
   npm install axios


## 9. template
    {{변수명}} : 출력, 자바스크립트도 붙일 수 있다.
    computed를 사용하는게 통일성 있을듯하다.
    v-bind:[id/class/style]=변수명 : html속성 
    v-if='flag': 참이면 출력 (v-show html으로는 보인다)
    v-for='data in list': 리스트 반복 출력
    v-on:eventname='functionname' : 이벤트로 함수 호출
    v-model : 입력창과 동기화

    computed
    watch : 변수명으로 등록
