<template>
    <div id="comp-test">
        <p>{{title}}</p>
        <p>{{propsdata}}</p>
        <button v-on:click="send_event">send</button>
    </div>
</template>

<script>
export default {
    name: 'comp-test',
    data() {
        return {
            title: '컴포넌트테스트',
        }
    },
    props: ['propsdata'],
    components: {},
    methods: {
        send_event() {
            this.$emit('recv-event', 100);
        },
    },
}
</script>


<style scoped>

</style>