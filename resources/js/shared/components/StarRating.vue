<template>
    <div class="d-flex">
        <i 
            class="fas fa-star" 
            v-for="star in fullStars" 
            :key="'full' + star"
            @click="$emit('input', star)"
        ></i>
        <i 
            class="fas fa-star-half-alt" 
            v-if="halfStar"
        ></i>
        <i 
            class="far fa-star" 
            v-for="star in emptyStars" 
            :key="'empty' + star"
            @click="$emit('input', fullStars + star)"
        ></i>
    </div>
</template>

<script>
export default {
    props: {
        value: Number,
    },
    computed:{
        halfStar(){
            const fraction = Math.round((this.value - Math.floor(this.value)) * 10);
            return fraction > 0 && fraction <= 5;
        },
        fullStars(){
            const fraction = Math.round((this.value - Math.floor(this.value)) * 10);
            return fraction > 5 ? Math.round(this.value) : Math.floor(this.value);
        },
        emptyStars(){
            return 5 - Math.ceil(this.value);
        },
    },
    // created(){
    //     const number = [0.9, 4.0, 4.4, 4.5, 4.6, 4.9];

    //     number.forEach(n => {
    //         console.log(`round for ${n} is ${Math.round(n)}`);
    //         console.log(`ceil for ${n} is ${Math.ceil(n)}`);
    //         console.log(`floor for ${n} is ${Math.floor(n)}`);
    //         console.log("=====================================");
    //     })
    // }
}
</script>