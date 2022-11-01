<template>
    <div>
        <div class="info-holder" v-for="wo in wo" :key="wo.woid">
            <h2 class="text-center">wo Information</h2>
            <div class="seperator d-flex ">
                <div class="info-title-holder col-5">
                    <div class="info-text">woid :</div>
                    <div class="info-text">Workers :</div>
                    <div class="info-text">Entry Type :</div>
                    <div class="info-text">contractor ID :</div>
                    <div class="info-text">jobCat :</div>
                    <div class="info-text">mat :</div>
                    <div class="info-text">qte ID :</div>
                    <div class="info-text">purchase order ID :</div>
                    <div class="info-text">job Description :</div>
                    <div class="info-text">user ID :</div>
                    <div class="info-text">work Status :</div>
                    <div class="info-text">worker Time Keeping :</div>
                </div>
                <div class="info-text-holder col-7">
                    <div class="info-text">{{ wo.woid }}</div>
                    <div class="info-text">{{ wo.workers }}</div>
                    <div class="info-text">{{ wo.entryType }}</div>
                    <div class="info-text">{{ wo.conID }}</div>
                    <div class="info-text">{{ wo.jobCat }}</div>
                    <div class="info-text">{{ wo.mat }}</div>
                    <div class="info-text">{{ wo.qteID }}</div>
                    <div class="info-text">{{ wo.poID }}</div>
                    <div class="info-text">{{ wo.jobDesc }}</div>
                    <div class="info-text">{{ wo.uID }}</div>
                    <div class="info-text">{{ wo.workStatus }}</div>
                    <div class="info-text">{{ wo.workerTimeKeeping }}</div>
                </div>
            </div>
            <div class="a-notes">
                <h4 class="text-center">Additional notes</h4>
                <p class="text-center">{{ wo.workNote }}</p>
            </div>
            <template>
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                Open Dialog
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Edit wo Information</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="wo.woid" type="number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="wo.jobCat" ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-autocomplete
                                                :items="['residential', 'insurance', 'corporate']"
                                                v-model="wo.entryType"></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="wo.jobDesc"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="wo.workerNote"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="wo.qteID"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="wo.jobDesc"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="wo.workStatus"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="wo.poID" type="number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="wo.uID"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="wo.workerTimeKeeping"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="wo.mat" type="number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="wo.workers" type="number"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false, update(wo.woid)">
                                    Finish
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </template>
        </div>

    </div>
</template>
  
<script>
export default {
    props: ['id'],


    data: () => ({
        dialog: false,
                woid: '',
                workers: '',
                entryType: '',
                conID: '',
                jobCat: '',
                mat: '',
                qteID: '',
                poID: '',
                jobDesc: '',
                uID: '',
                workStatus: '',
                workerNote: '',
                workerTimeKeeping: ''

    }),

    mounted() {
        
        return this.$store.dispatch("getWO", this.id, console.log(this.id));
        // this.$store.dispatch("getSellers");
    },
    computed: {
        wo() {
            return this.$store.state.wo;
        },
    },

    methods: {
        deletes(id) {
            console.log(id);
            // this.$store.dispatch("deletewo", id);
        },
        update(id) {
            const payload= {
                woid: id,
                workers: this.wo.workers,
                entryType: this.wo.entryType,
                conID: this.wo.conID,
                jobCat: this.wo.jobCat,
                mat: this.wo.mat,
                qteID: this.wo.qteID,
                poID: this.wo.poID,
                jobDesc: this.wo.jobDesc,
                uID: this.wo.uID,
                workStatus: this.wo.workStatus,
                workerNote: this.wo.workerNote,
                workerTimeKeeping: this.wo.workerTimeKeeping
            };
            console.log(payload);
           this.$store.dispatch("updateWO", payload);
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