<template>
    <div id="page3">
    
        <p>{{title}}</p>
    
        <p>{{title+" hello!"}}</p>
    
        <p>{{computed_message}}</p>
    
        <p v-if='flag'>v-if 참이면 출력</p>
    
        <ul>
    
            <li v-for='data in datas'> name : {{data}}</li>
    
        </ul>
    
        <button v-on:click='alert_click'>event</button>
    
        <input v-model='title'>
    
    </div>
</template>

<script>
export default {
    name: 'page3',
    data() {
        return {
            title: 'page3',
            flag: 1,
            datas: ['qwer', 'asdf', 'zxcv']
        }
    },
    components: {},
    methods: {
        alert_click() {
            alert('hello');
        }
    },
    computed: {
        computed_message() {
            return (this.title + " hello").toString().split(' ');
        }

    },
    watch: {
        title: function(data) {
            console.log(data)
        }
    }
}
</script>


<style scoped>

</style>
