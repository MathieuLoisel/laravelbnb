<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link class="navbar-brand mr-auto" v-bind:to="{name: 'home'}">LaravelBnb</router-link>
        </nav>
        <div class="container my-4 px-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            lastSearch: this.$store.state.lastSearch
        };
    },
    computed:{
        ...mapState({
        lastSearchComputed: 'lastSearch'
    }),
    somethingElse(){
        return 1+2;
    }
}
    }
</script>