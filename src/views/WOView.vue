<template>
    <v-card>
        <v-toolbar  dark flat prominent>
            <v-text-field append-icon="mdi-microphone"  color="orange" class="mx-4" flat hide-details label="Search"
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
                    <v-btn  v-model="fab" color="orange darken-2" class="overflow" dark fab>
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
                        <v-icon color="black" class="account" v-else-if="!dialog">
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
                    <template v-slot:activator="{ on, attrs }">
                        <!-- <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn> -->
                    </template>
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
            tabs: null,
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
    }
}
</script>

<style scoped>
/* Helper classes */
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
    position: absolute;
}

#create .v-btn--floating {
    position: relative;
}

.overflow{
  position: static;
}

.container--fluid {
    max-width: 100%;
    display: none !important;
}

.account{
    color: orange !important;
}

.mdi-account-circle::before {
    content: "\F0009";
    color: black !important;
}

.mdi-microphone::before {
    content: "\F036C";
    color: orange !important;
}


.account{
    color: orange !important;
}

.mdi-account-circle::before {
    content: "\F0009";
    color: black !important;
}


.mdi-microphone::before {
    content: "\F036C";
    color: orange !important;
}

.v-application .primary--text {
    color: orange !important;
    caret-color: #1976d2 !important;
}
</style>