<template>
    <div>
        <div class="info-holder" v-for="lead in leads" :key="lead.lid">
            <h2 class="text-center">Lead Information</h2>
            <div class="seperator d-flex ">
                <div class="container-fluid">
                    <div class="row title">Lid</div>
                    <div class="row text">{{ lead.lid }}</div>
                    <div class="row title">Entry Type </div>
                    <div class="row text">{{ lead.entryType }}</div>
                    <div class="row title">Name </div>
                    <div class="row text">{{ lead.leadName }}</div>
                    <div class="row title">Email</div>
                    <div class="row text">{{ lead.leadEmail }}</div>
                    <div class="row title">Phone No</div>
                    <div class="row text">{{ lead.leadNumber }}</div>
                    <div class="row title">Additional Number</div>
                    <div class="row text">{{ lead.leadExtraNumber }}</div>
                    <div class="row title">Area of lead</div>
                    <div class="row text">{{ lead.leadArea }}</div>
                    <div class="row title">Address</div>
                    <div class="row text">{{ lead.leadAddress }}</div>
                </div>
            </div>
            <div class="a-notes">
                <h4 class="text-center">Additional notes</h4>
                <p class="text-center">{{ lead.leadNote }}</p>
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
                                <span class="text-h5">Edit Lead Information</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="leadName" placeholder="Lead Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-autocomplete
                                                :items="['Looking to rent', 'Looking to rent out', 'Selling', 'Buying', 'Brochure/Business Card', 'Maintenance/Construction']"
                                                v-model="entryType" placeholder="Entry Type"></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="leadEmail" placeholder="Lead Email"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="leadNumber" placeholder="Lead Number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="leadNote" placeholder="Lead Note"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="uID" placeholder="uID" type="number"></v-text-field>
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

    </div>
</template>
  
<script>
import router from "@/router";
export default {
    props: ['id'],
    data: () => ({
        dialog: false,
        entryType: "",
        leadName: "",
        leadEmail: "",
        leadNumber: "",
        leadNote: "",
        uID: ""
    }),
    mounted() {
        return this.$store.dispatch("getLead", this.id);
        // this.$store.dispatch("getSellers");
    },
    computed: {
        leads() {
            return this.$store.state.leads;
        },
    },
    methods: {
        update() {
            this.$store.dispatch("updateLead", {
                lid: this.id,
                entryType: this.entryType,
                leadName: this.leadName,
                leadEmail: this.leadEmail,
                leadNumber: this.leadNumber,
                leadNote: this.leadNote,
                uID: this.uID
            });
            // console.log(this.$store.state.lead)
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