<template>
    <div id="router-test">
        <p>{{title}}</p>
        <button v-on:click="request_test">request</button>
        <p>{{httpResult}}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'router-test',
    data() {
        return {
            title: '라우터테스트',
            httpResult: '',
            idx: 1,
        }
    },
    components: {},
    methods: {
        request_test() {
            console.log("http test");
            axios.get('https://jsonplaceholder.typicode.com/todos/'+this.idx.toString())
                .then((result) => {
                    console.log("http test");
                    console.log(result.data);
                    this.httpResult = result.data['title']
                    this.idx += 1
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log("finally");
                });
        }

    },
}
</script>


<style scoped>

</style>
