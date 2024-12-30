# vue-example
# 241230

# 확장프로그램
# vue-beautify : 줄정리 # ctrl+shift+f


# 1. 뷰 인스턴스 : new Vue (export default)
#   name        : <div id=""> </div>
#   methods     : 함수 기능 등록
#   components  : 역할별 파트 지정
#   data(){return{}}    : 사용하는 데이터
#   props       : 상위에서 주는데이터 받기

# 2. 라이프 사이클 함수
#   beforeCreated : data,method 정의 안된 init
#   Created     : data,method 정의 이후 init
#   mounted     : 화면요소 접근 가능 init
#   updated     : 화면요소 변경 감지 시 호출

# 3. 컴포넌트
#   웹의 모듈화가 가능하다.
#   파일을 만들고 components에 넣으면 된다.
#   import 사용할모듈명 from "@/components/filename.vue"

# 4. props
#   하위(components안에 들어간것)로 값 전달
#   v-bind:하위에서쓸변수명="상위에서주는변수명"
#   props로 전달된다


# 5. emit
#   상위로 값 전달
#   v-on:이벤트명="상위함수명"
#   this.$emit('이벤트명')


# 6. event-bus
#   상하위 관계 없을때 전송, 보내기 번거로울때
#   3 버전에서는 사라졌다고한다.
#   mitt로 사용가능

