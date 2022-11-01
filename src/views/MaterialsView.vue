<template>
    <v-card>
        <v-toolbar color="orange" dark flat prominent>
            <v-text-field append-icon="mdi-microphone"  color="black" class="mx-4" flat hide-details label="Search"
                prepend-inner-icon="mdi-magnify" solo-inverted></v-text-field>

            <!-- <template v-slot:extension>
                <v-tabs v-model="tabs" centered>
                    <v-tab v-for="item in items" :key="item">
                        {{ item.title }}
                    </v-tab>
                </v-tabs>
            </template> -->
        </v-toolbar>
        <v-card id="create">
            <v-container fluid>
            </v-container>

            <v-speed-dial v-model="fab" :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction"
                :open-on-hover="hover" :transition="transition">
                <template v-slot:activator>
                    <v-btn  v-model="fab" color="black darken-2" class="overflow" dark fab>
                        <v-icon v-if="fab">
                            mdi-close
                        </v-icon>
                        <v-icon v-else-if="plus">
                        mdi-plus
                        </v-icon>
                        <v-icon v-else-if="pencil">
                        mdi-pencil
                        </v-icon>
                        <v-icon v-else-if="deletes">
                        mdi-delete
                        </v-icon>
                        <v-icon color="" v-else-if="!dialog">
                            mdi-account-circle
                        </v-icon>
                    </v-btn>
                </template>
                <v-btn fab dark small color="green" @click="clickIcon('pencil')">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn fab dark small color="indigo" @click="clickIcon('plus')">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-dialog v-model="dialog" persistent max-width="600px">
                   
                        <!-- <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn> -->
                   
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">User Profile</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Legal first name*" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Legal middle name"
                                            hint="example of helper text only on focus"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                            persistent-hint required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Email*" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Password*" type="password" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required>
                                        </v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-autocomplete
                                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                            label="Interests" multiple></v-autocomplete>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="orange darken-1" text @click="dialog = false">
                                Close
                            </v-btn>
                            <v-btn color="orange darken-1" text @click="dialog = false">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-btn fab dark small color="red" @click="clickIcon('delete')">

                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-speed-dial>
        </v-card>
                <v-card flat>
                    <v-data-table v-model="selected" :headers="headers" :items="desserts" :single-select="singleSelect"
                        item-key="name" show-select class="elevation-1">
                        <template v-slot:top>
                            <v-switch v-model="singleSelect"  label="Single select" class="pa-3"></v-switch>
                        </template>
                    </v-data-table>
                    <BottomNav/>
                </v-card>

        <!-- <v-tabs-items v-model="tabs">
            <v-tab-item v-for="item in items" :key="item">
            </v-tab-item>
        </v-tabs-items> -->
     
    </v-card>
</template>

<script>
import BottomNav from '../components/BottomNav'
export default {
    components: {
      BottomNav,
    },
    data() {
        return {
            dialog: false,
            plus: false,
            deletes:false,
            pencil:false,
            direction: 'left',
            fab: false,
            fling: true,
            hover: false,
            tabs: null,
            top: true,
            right: true,
            bottom: false,
            left: false,
            transition: 'scale-transition',
            items: [
                { title: 'buyers', },
                { title: 'sellers', },
                { title: 'renting', },
                { title: 'letting', }
            ],
            singleSelect: false,
            selected: [],
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%',
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%',
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%',
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%',
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%',
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%',
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%',
                },
                {
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%',
                },
                {
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%',
                },
            ],

            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }

    },
    watch: {
        top(val) {
            this.bottom = !val
        },
        right(val) {
            this.left = !val
        },
        bottom(val) {
            this.top = !val
        },
        left(val) {
            this.right = !val
        },
    },
    methods: {
        clickIcon(results){
            var icon = document.getElementById('change');
            if(results == "plus" ){
                this.plus = true
                this.deletes =false
                this.pencil = false
                this.dialog = true
            }
            if(results == "pencil"){
                 this.pencil = true
                 this.plus = false
                 this.dialog = true
            }
             if(results == "delete"){
                 this.deletes = true
                 this.plus = false
                 this.pencil = false
            }
        }
    }}
</script>
<style  scoped>
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

.v-toolbar__content{
  background-color:black;
  color:white;
}
.card-holder {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}


.f-holder {
    width: 100%;
    margin-bottom: 15px;
}

.edit,
.delete {
    border: 1px solid #A5A5A5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 5px;
}

.fa-solid {
    text-align: center;
}



/* Small phones */
@media only screen and (max-width:576px) {
    .card-holder {
        margin-left: 5%;
        margin-bottom: 15px;
        border: 1px solid #333333;
        width: 90%;
        border-radius: 5px;
        padding: 5px;
    }

    .card {
        align-items: center;
        width: 200px;
        padding: 5px;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    .column {
        padding-right: 10px;
    }

}

/* Bigger Phones */
@media only screen and (min-width:576px) {}

/* Tablets */
@media only screen and (min-width:768px) {}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>

