<template>
    <div class="d-flex justify-center mt-3">
        <input type="text" class="form-control" placeholder="Search for material..." v-model="search" />

        <BottomNav />
    </div>

    <!-- <v-tabs-items v-model="tabs">
            <v-tab-item v-for="item in items" :key="item">
            </v-tab-item>
        </v-tabs-items> -->

</template>

<script>
import BottomNav from '../components/BottomNav'
export default {
    components: {
        BottomNav,
    },

    // data() {
    //     return {
    //         search: "", 
    //     }
    // }

    // mounted() {
    //     this.$store.dispatch("getItems"); Must be changed to whatever we're getting
    // },

    // computed: {
    //     filteredItems() {
    //         return this.$store.state.items?.filter((item) => {
    //             let isMatch = true;
    //             if (!item.name?.toLowerCase().includes(this.search.toLowerCase()))
    //                 isMatch = false;
    //         }

    //         },
    // }
}
 // data() {
                //     return {
                //         dialog: false,
                //         plus: false,
                //         deletes: false,
                //         pencil: false,
                //         direction: 'left',
                //         fab: false,
                //         fling: true,
                //         hover: false,
                //         tabs: null,
                //         top: true,
                //         right: true,
                //         bottom: false,
                //         left: false,
                //         transition: 'scale-transition',
                //         tabs: null,
                //         items: [
                //             { title: 'buyers', },
                //             { title: 'sellers', },
                //             { title: 'renting', },
                //             { title: 'letting', }
                //         ],
                //         singleSelect: false,
                //         selected: [],
                //         headers: [
                //             {
                //                 text: 'Dessert (100g serving)',
                //                 align: 'start',
                //                 sortable: false,
                //                 value: 'name',
                //             },
                //             { text: 'Calories', value: 'calories' },
                //             { text: 'Fat (g)', value: 'fat' },
                //             { text: 'Carbs (g)', value: 'carbs' },
                //             { text: 'Protein (g)', value: 'protein' },
                //             { text: 'Iron (%)', value: 'iron' },
                //         ],
                //         desserts: [
                //             {
                //                 name: 'Frozen Yogurt',
                //                 calories: 159,
                //                 fat: 6.0,
                //                 carbs: 24,
                //                 protein: 4.0,
                //                 iron: '1%',
                //             },
                //             {
                //                 name: 'Ice cream sandwich',
                //                 calories: 237,
                //                 fat: 9.0,
                //                 carbs: 37,
                //                 protein: 4.3,
                //                 iron: '1%',
                //             },
                //             {
                //                 name: 'Eclair',
                //                 calories: 262,
                //                 fat: 16.0,
                //                 carbs: 23,
                //                 protein: 6.0,
                //                 iron: '7%',
                //             },
                //             {
                //                 name: 'Cupcake',
                //                 calories: 305,
                //                 fat: 3.7,
                //                 carbs: 67,
                //                 protein: 4.3,
                //                 iron: '8%',
                //             },
                //             {
                //                 name: 'Gingerbread',
                //                 calories: 356,
                //                 fat: 16.0,
                //                 carbs: 49,
                //                 protein: 3.9,
                //                 iron: '16%',
                //             },
                //             {
                //                 name: 'Jelly bean',
                //                 calories: 375,
                //                 fat: 0.0,
                //                 carbs: 94,
                //                 protein: 0.0,
                //                 iron: '0%',
                //             },
                //             {
                //                 name: 'Lollipop',
                //                 calories: 392,
                //                 fat: 0.2,
                //                 carbs: 98,
                //                 protein: 0,
                //                 iron: '2%',
                //             },
                //             {
                //                 name: 'Honeycomb',
                //                 calories: 408,
                //                 fat: 3.2,
                //                 carbs: 87,
                //                 protein: 6.5,
                //                 iron: '45%',
                //             },
                //             {
                //                 name: 'Donut',
                //                 calories: 452,
                //                 fat: 25.0,
                //                 carbs: 51,
                //                 protein: 4.9,
                //                 iron: '22%',
                //             },
                //             {
                //                 name: 'KitKat',
                //                 calories: 518,
                //                 fat: 26.0,
                //                 carbs: 65,
                //                 protein: 7,
                //                 iron: '6%',
                //             },
                //         ],

                //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                //     }

                // },
                // watch: {
                //     top(val) {
                //         this.bottom = !val
                //     },
                //     right(val) {
                //         this.left = !val
                //     },
                //     bottom(val) {
                //         this.top = !val
                //     },
                //     left(val) {
                //         this.right = !val
                //     },
                // },
                // methods: {
                //     clickIcon(results) {
                //         var icon = document.getElementById('change');
                //         if (results == "plus") {
                //             this.plus = true
                //             this.deletes = false
                //             this.pencil = false
                //             this.dialog = true
                //         }
                //         if (results == "pencil") {
                //             this.pencil = true
                //             this.plus = false
                //             this.dialog = true
                //         }
                //         if (results == "delete") {
                //             this.deletes = true
                //             this.plus = false
                //             this.pencil = false
                //         }
                //     }
                // }
</script>

<style scoped>
/* Helper classes */
/* This is for documentation purposes and will not be needed in your application */

.form-control {
    width: 30%;
    height: 50px;
}

#create .v-speed-dial {
    position: absolute;
}

#create .v-btn--floating {
    position: relative;
}

.overflow {
    position: static;
}

.container--fluid {
    max-width: 100%;
    display: none !important;
}


.account {
    color: orange !important;
}

.mdi-account-circle::before {
    content: "\F0009";
    color: black !important;
}

.v-application .primary--text {
    color: orange !important;
    caret-color: #1976d2 !important;
}

.mdi-microphone::before {
    content: "\F036C";
    color: orange !important;
}

.v-toolbar__content {
    background-color: black;
    color: white;
}
</style>