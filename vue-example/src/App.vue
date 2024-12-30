<template>
    <div id="App">
        <p>{{title}}</p>
    </div>
    <compTest v-bind:propsdata="propdata" v-on:recv-event="recv_event"></compTest>
    <eventBus v-on:recv-event="recv_eventbus"></eventBus>
</template>

<script>
import compTest from "@/components/comp_test.vue"


export default {
    name: 'App',
    data() {
        return {
            title: 'hello vue.js!',
            propdata: '하위컴포넌트메세지전달',
        }
    },
    components: {
        compTest,
    },
    methods: {
        recv_event(value) {
            this.propdata = value.toString() + '을 받았습니다';
        },
    },
}
</script>


<style>

</style>
