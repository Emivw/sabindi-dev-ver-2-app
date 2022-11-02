<template>
    <div>
        <div class="info-holder" v-if="material" :key="material.mid">
            <h2 class="text-center">material Information</h2>
            <div class="seperator d-flex ">
                <div class="container-fluid">
                    <div class="row title">Material Name</div>
                    <div class="row text">{{ material.matName }}</div>
                    <div class="row title">Material Description</div>
                    <div class="row text">{{ material.matDesc }}</div>
                    <div class="row title">Material Dimensions</div>
                    <div class="row text">{{ material.MatDimensions }}</div>
                    <div class="row title">Material Category</div>
                    <div class="row text">{{ material.MatCat }}</div>
                    <div class="row title">Material Cost</div>
                    <div class="row text">R{{ material.cost }}</div>
                    <div class="row title">Material sID</div>
                    <div class="row text">{{ material.sID }}</div>
                </div>
            </div>
            <template>
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                Open Dialog
                            </v-btn>
                            <v-btn color="primary" @click="addMat">
                                Add Material
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
                                            <v-text-field v-model="material[0].lid" type="number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="material[0].materialName"></v-text-field>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6" md="4">
                                            <v-autocomplete
                                                :items="['Looking to rent', 'Looking to rent out', 'Selling', 'Buying', 'Brochure/Business Card', 'Maintenance/Construction']"
                                                v-model="material.entryType"></v-autocomplete>
                                        </v-col> -->
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="material[0].materialEmail"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="material[0].materialNumber"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="material[0].materialNote"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="material[0].uID" type="number"></v-text-field>
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
                lid: this.material[0].lid,
                entryType: this.material[0].entryType,
                materialName: this.material[0].materialName,
                materialEmail: this.material[0].materialEmail,
                materialNumber: this.material[0].materialNumber,
                materialNote: this.material[0].materialNote,
                uID: this.material[0].uID
            });
        },
 addMat(){
    const payload = {
        mid: this.material[0].mid,
        matName: this.material[0].matName,
        matDesc: this.material[0].matDesc,
        matSpecs: this.material[0].matDesc,
        matCat: this.material[0].matCat,
        cost: this.material[0].cost,
        matUnit: this.material[0].matUnit,
        sID:this.material[0].sID
    }
    this.$store.dispatch('addMat',payload)
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