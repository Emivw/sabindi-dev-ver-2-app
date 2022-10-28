<template>
    <div>
        <div class="info-holder" v-for="material in material" :key="material.mid">
            <h2 class="text-center">Lead Information</h2>
            <div class="seperator d-flex ">
                <div class="info-title-holder col-5">
                    <div class="info-text">Material Name :</div>
                    <div class="info-text">Material Description :</div>
                    <div class="info-text">Material Dimensions :</div>
                    <div class="info-text">Material Category :</div>
                    <div class="info-text">Material sID :</div>
                </div>
                <div class="info-text-holder col-7">
                    <div class="info-text">{{ material.matName }}</div>
                    <div class="info-text">{{ lead.matDesc }}</div>
                    <div class="info-text">{{ material.MatDimensions }}</div>
                    <div class="info-text">{{ material.MatCat }}</div>
                    <div class="info-text">{{ material.sID }}</div>
                </div>
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
                                <span class="text-h5">Edit Material Information</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="lead.lid" type="number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="lead.leadName"></v-text-field>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6" md="4">
                                            <v-autocomplete
                                                :items="['Looking to rent', 'Looking to rent out', 'Selling', 'Buying', 'Brochure/Business Card', 'Maintenance/Construction']"
                                                v-model="lead.entryType"></v-autocomplete>
                                        </v-col> -->
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="lead.leadEmail"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="lead.leadNumber"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="lead.leadNote"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="lead.uID" type="number"></v-text-field>
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
            </template>
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
        return this.$store.dispatch("getMaterial", this.id);
        // this.$store.dispatch("getSellers");
    },
    computed: {
        material() {
            return this.$store.state.material;
        },
    },

    methods: {

        update() {
            this.$store.dispatch("updateMaterial", {
                lid: this.lead.lid,
                entryType: this.lead.entryType,
                leadName: this.lead.leadName,
                leadEmail: this.lead.leadEmail,
                leadNumber: this.lead.leadNumber,
                leadNote: this.lead.leadNote,
                uID: this.lead.uID
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