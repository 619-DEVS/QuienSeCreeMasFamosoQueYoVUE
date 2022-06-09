<template>
    <div style="background-color: red; width: 150px; heigth: 150px">
        <h1>{{igUser.username}}</h1>
    </div>
</template>

<script>
export default {
    name: 'cardIg',
    methods: {
        goToProfile() {

        },
    
    },
    data() {
        return {
        
        }
    },
    props: {
        igUser: {}
    },
    mounted() {
        console.log(this.igUser);
    }
}
</script>
<style scoped>

</style>