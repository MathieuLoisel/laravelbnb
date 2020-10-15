<template>
    <div class="template">
        <div v-if="loading">
            <p>Data is loading ...</p>
        </div>
        <div v-else>
            <div 
                class="row mb-4" 
                v-for="row in rows" 
                :key="'row' + row"
            >
                <div 
                    class="col d-flex align-items-stretch" 
                    v-for="(bookable, column) in bookablesInRow(row)"
                    :key ="'row' + row + column"
                >
                    <bookable-list-item 
                        class="text-justify"
                        v-bind="bookable"
                    ></bookable-list-item>
                </div>
                <div 
                    class="col" 
                    v-for="placeholder in placeholdersInRow(row)"
                    :key ="'placeholder' + row + placeholder"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import BookableListItem from './BookableListItemView'
export default {
    components: {
        BookableListItem
    },
    data(){
        return {
            bookables: null,
            loading: false,
            columns: 3
        };
    },
    computed: {
        rows(){
            return this.bookables === null 
            ? 0 
            : Math.ceil(this.bookables.length / this.columns);
        }
    },
    methods: {
        bookablesInRow(row){
            return  this.bookables.slice((row-1)*this.columns, row*this.columns);
        },
        placeholdersInRow(row){
            return this.columns - this.bookablesInRow(row).length;
        }
        
    },
    created() {
        this.loading = true;

        // const promise = new Promise((resolve, reject) => {
        //     console.log(resolve);
        //     console.log(reject);
        //     setTimeout(() => resolve("Hello"), 3000);
        // })
        // .then(result => console.log(`Success ${result}`))
        // .catch(result => console.log(`Error ${result}`));

        // console.log(promise);

        const req = axios
            .get("/api/bookables")
            .then(response => {
                this.bookables = response.data.data
                this.loading = false;
            });
    },
}
</script>