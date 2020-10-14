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
                    class="col" 
                    v-for="(bookable, column) in bookablesInRow(row)"
                    :key ="'row' + row + column"
                >
                    <bookable-list-item 
                        :item-title="bookable.title" 
                        :item-content="bookable.content" 
                        :price="1000"
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
        setTimeout(() =>{
            this.bookables = [
                {
                    id: 1,
                    title: "Cheap villa !!!",
                    content: "A very cheap villa"
                },
                {
                    id: 2,
                    title: "Cheap villa 2",
                    content: "A very cheap villa 2"
                },
                {
                    id: 3,
                    title: "Cheap villa 3",
                    content: "A very cheap villa 2"
                },
                {
                    id: 4,
                    title: "Cheap villa 4",
                    content: "A very cheap villa 2"
                },
                {
                    id: 5,
                    title: "Cheap villa 5",
                    content: "A very cheap villa 2"
                },
                {
                    id: 6,
                    title: "Cheap villa 6",
                    content: "A very cheap villa 2"
                },
                {
                    id: 7,
                    title: "Cheap villa 7",
                    content: "A very cheap villa 2"
                },
            ];
            this.loading = false;
        }, 100);    

        // setTimeout(() => {
        //     console.log("first change");
        //     this.bookable1.title = "You'll see this !";
        // }, 8000)
    },
}
</script>