<template>
    <div>
        <div class="info-holder" v-for="po in pos" :key="po.poid">
            <h2 class="text-center">po Information</h2>
            <div class="seperator d-flex ">
                <div class="container-fluid">
                    <div class="row title">poid</div>
                    <div class="row text">{{ id }}</div>
                    <div class="row title">Materials</div>
                    <div class="row text">{{ po.mat }}</div>
                    <div class="row title">One time Pin</div>
                    <div class="row text">{{ po.otp }}</div>
                    <div class="row title">Supplier ID</div>
                    <div class="row text">{{ po.sID }}</div>
                    <div class="row title">quote ID</div>
                    <div class="row text">{{ po.qteID }}</div>
                </div>
            </div>
            <div class="a-notes">
                <h4 class="text-center">Additional notes</h4>
                <p class="text-center"></p>
            </div>
            <!-- <template>
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                Open Dialog`
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Edit po Information</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="id" type="number" :placeholder="id"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="qteID"   :placeholder="po.qteID"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-autocomplete
                                                :items="['Looking to rent', 'Looking to rent out', 'Selling', 'Buying', 'Brochure/Business Card', 'Maintenance/Construction']"
                                                v-model="po.entryType"></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="mat" :placeholder="po.mat"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="sID" :placeholder="po.sID"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="otp" :placeholder="po.otp"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false; update(id)">
                                    Finish
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </template> -->
        </div>

    </div>
</template>
  
<script>
export default {
    props: ['id'],


    data: () => ({
        dialog: false,

    }),

    mounted() {
        return this.$store.dispatch("getPO", this.id);
        // this.$store.dispatch("getSellers");
    },
    computed: {
        pos() {
            return this.$store.state.po;
        },
    },

    methods: {
        deletes(id) {
            console.log(id);
            // this.$store.dispatch("deletepo", id);
        },
        update(id) {
            this.$store.dispatch("updatePO", {
                poid: id,
                qteID: this.qteID,
                otp: this.otp,
                sID: this.sID,
                mat: this.mat,
            });
        }
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