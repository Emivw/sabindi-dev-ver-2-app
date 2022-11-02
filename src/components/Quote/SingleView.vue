<template>
    <div>
        <div class="info-holder" v-for="quote in quote" :key="quote.qteid">
            <h2 class="text-center">Quote Information</h2> 
            <div class="seperator d-flex ">
                <div class="conatiner-fluid">
                    <div class="row title">Entry Type </div>
                    <div class="row text">{{ quote.entryType }}</div>
                    <div class="row title">uID</div>
                    <div class="row text">{{ quote.uID }}</div>
                    <div class="row title">Customer Name</div>
                    <div class="row text">{{ quote.cusName }}</div>
                    <div class="row title">Customer Number</div>
                    <div class="row text">{{ quote.cusNo }}</div>
                    <div class="row title">Customer Address</div>
                    <div class="row text">{{ quote.cusAddress }}</div>
                    <div class="row title">Damage Type</div>
                    <div class="row text">{{ quote.damageType }}</div>
                    <div class="row title">Insurance Category</div>
                    <div class="row text">{{ quote.insCat }}</div>
                    <div class="row title">Leak Detection Method</div>
                    <div class="row text">{{ quote.leakDetectMethod }}</div>
                    <div class="row title">Damage Location</div>
                    <div class="row text">{{ quote.dmgLocation }}</div>
                    <div class="row title">Damage Status</div>
                    <div class="row text">{{ quote.dmgStatus }}</div>
                    <div class="row title">RepRecom</div>
                    <div class="row text">{{ quote.RepRecom }}</div>
                    <div class="row title">Quote Description</div>
                    <div class="row text">{{ quote.qtDesc }}</div>
                    <div class="row title">Summary</div>
                    <div class="row text">{{ quote.summary }}</div>
                    <div class="row title">Job Category</div>
                    <div class="row text">{{ quote.jobCat }}</div>
                    <div class="row title">Quote Materials</div>
                    <div class="row title">{{ quote.qteMaterials }}</div>
                    <div class="row text">Scope </div>
                    <div class="row text">{{ quote.scope }}</div>
                    <div class="row title">Total</div>
                    <div class="row text">{{ quote.total }}</div>
                </div>
            </div>
            <div class="a-notes">
                <h4 class="text-center">Additional notes</h4>
                <p class="text-center">{{ quote.addNote }}</p>
            </div>
            <!-- <template>
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                Open Dialog
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Edit Quote Information</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.entryType"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.uID" type="number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-autocomplete
                                                :items="['Looking to rent', 'Looking to rent out', 'Selling', 'Buying', 'Brochure/Business Card', 'Maintenance/Construction']"
                                                v-model="quote.entryType"></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.cusName"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.cusNo" type="number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.cusAddress"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.damageType"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.insCat"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.leakDetectMethod"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.dmgLocation"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.dmgStatus"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.RepRecom"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.qtDesc"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.summary"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.jobCat"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.qteMaterials"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.scope"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.total" type="number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="quote.addNote"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false; update()">
                                    Finish
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </template> -->
        </div>
        <BottomNav />
    </div>
</template>
  
<script>
import BottomNav from "../BottomNav.vue"
export default {
    props: ['id'],
    components: { BottomNav },

    data: () => ({
        dialog: false,

    }),

    mounted() {

        return this.$store.dispatch("getQuote", this.id);
        // this.$store.dispatch("getSellers");
    },
    computed: {
        quote() {
            return this.$store.state.quote;
        },
    },

    methods: {
        update() {
            this.$store.dispatch("updateQuote", {
                entryType: this.entryType,
                uID: this.uID,
                cusName: this.cusName,
                cusNo: this.cusNo,
                cusAddress: this.cusAddress,
                damageType: this.damageType,
                insCat: this.insCat,
                leakDetectMethod: this.leakDetectMethod,
                dmgLocation: this.dmgLocation,
                dmgStatus: this.dmgStatus,
                RepRecom: this.RepRecom,
                qtDesc: this.qtDesc,
                summary: this.summary,
                jobCat: this.jobCat,
                qteMaterials: this.qteMaterials,
                scope: this.scope,
                total: this.total,
                addNote: this.addNote
            });
        }
        // update() {
        //     console.log("You clicked me!");
        // }
    },
}
</script>

<style scoped>
/* Small phones */
@media only screen and (max-width:576px) {
    .info-holder {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .seperator {
        margin: 15px 0px 15px 0px;

    }

    .info-title-holder>.info-text {
        font-weight: bold;
    }

    .info-text {
        word-break: break-all;

    }

    .v-card.v-sheet.theme--light {
        margin-top: 30px;
    }

    .container-fluid {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title {
         text-decoration: underline;
         margin: auto;
        text-align: center;
    }

    .text {
        padding-bottom: 15px;
        margin: auto;
        text-align: center;
    }

}


/* Bigger Phones */
@media only screen and (min-width:576px) {

    .info-holder {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .seperator {
        margin: 15px 0px 15px 0px;

    }

    .info-title-holder>.info-text {
        font-weight: bold;
    }

    .info-text {
        word-break: break-all;

    }
}

/* Tablets */
@media only screen and (min-width:768px) {}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>