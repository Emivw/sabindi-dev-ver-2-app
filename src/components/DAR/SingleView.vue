<template>
    <div>
        <div class="info-holder" v-for="dar in dar" :key="dar.darid">
            <h2 class="text-center">Damage Assessment Report</h2>
            <div class="seperator">
                <div class="info-title-holder">
                    <div class="container-fluid">
                        <div class="row title">Claim Number</div>
                        <div class="row text">{{ dar.claimNumber }}</div>
                        <div class="row title">Client Name</div>
                        <div class="row text">{{ dar.clientName }}</div>
                        <div class="row title">Date</div>
                        <div class="row text">{{ dar.date }}</div>
                        <div class="row title">Report Number</div>
                        <div class="row text">{{ dar.reportNumber }}</div>
                        <div class="row title">Damage Type</div>
                        <div class="row text">{{ dar.damageType }}</div>
                        <div class="row title">Facility</div>
                        <div class="row text">{{ dar.facility }}</div>
                        <div class="row title">Damage Severity</div>
                        <div class="row text">{{ dar.damageSeverity }}</div>
                        <div class="row title">Inspection Category</div>
                        <div class="row text">{{ dar.inspectionCategory }}</div>
                        <div class="row title">Leak Detection Method</div>
                        <div class="row text">{{ dar.leakDetectionMethod }}</div>
                        <div class="row title">Damage Location Internal</div>
                        <div class="row text">{{ dar.damageLocationInternal }}</div>
                        <div class="row title">Damage Location External</div>
                        <div class="row text">{{ dar.damageLocationExternal }}</div>
                        <div class="row title">Damage Status Concealed</div>
                        <div class="row text">{{ dar.damageStatusConcealed }}</div>
                        <div class="row title">Damage Status Not Concealed</div>
                        <div class="row text">{{ dar.damageStatusNotConcealed }}</div>
                        <div class="row title">Repair Action Recommendation</div>
                        <div class="row text">{{ dar.repairActionRecommendation }}</div>
                        <div class="row title">Executive Summary</div>
                        <div class="row text">{{ dar.executiveSummary }}</div>
                        <div class="row title">Authorised By</div>
                        <div class="row text">{{ dar.authBy }}</div></div>
                    </div>
                </div>
            </div>
            <!-- <template>
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                Edit Information
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
                                            <v-text-field v-model="dar.claimNumber" type="number" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.clientName" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.date" placeholder=""></v-text-field>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-text-field v-model="dar.reportNumber" type="number" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.damageType" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.facility" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.damageSeverity" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.inspectionCategory" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.leakDetectionMethod" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.damageLocationInternal" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.damageLocationExternal" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.damageStatusConcealed" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.damageStatusNotConcealed" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.repairActionRecommendation" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.executiveSummary" placeholder=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="dar.authBy" placeholder=""></v-text-field>
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
export default {
    props: ['id'],


    data: () => ({
        dialog: false,

    }),

    mounted() {
        return this.$store.dispatch("getDAR", this.id);
    },
    computed: {
        dar() {
            return this.$store.state.dar;
        },
    },

    methods: {
        update() {
            this.$store.dispatch("updateDAR", {
                claimNumber: this.claimNumber,
                clientName: this.clientName,
                date: this.date,
                reportNumber: this.reportNumber,
                damageType: this.damageType,
                facility: this.facility,
                damageSeverity: this.damageSeverity,
                inspectionCategory: this.inspectionCategory,
                leakDetectionMethod: this.leakDetectionMethod,
                damageLocationInternal: this.damageLocationInternal,
                damageLocationExternal: this.damageLocationExternal,
                damageStatusConcealed: this.damageStatusConcealed,
                damageStatusNotConcealed: this.damageStatusNotConcealed,
                repairActionRecommendation: this.repairActionRecommendation,
                executiveSummary: this.executiveSummary,
                authBy: this.authBy,
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
        font-size: 2vh;
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