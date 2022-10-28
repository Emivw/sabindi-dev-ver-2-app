<template>
    <div>
        <div class="info-holder" v-for="lead in lead" :key="lead.lid">
            <h2 class="text-center">Lead Information</h2>
            <div class="seperator d-flex ">
                <div class="info-title-holder col-5">
                    <div class="info-text">Lid :</div>
                    <div class="info-text">Entry Type :</div>
                    <div class="info-text">Name :</div>
                    <div class="info-text">Email :</div>
                    <div class="info-text">Phone No :</div>
                </div>
                <div class="info-text-holder col-7">
                    <div class="info-text">{{ lead.lid }}</div>
                    <div class="info-text">{{ lead.entryType }}</div>
                    <div class="info-text">{{ lead.leadName }}</div>
                    <div class="info-text">{{ lead.leadEmail }}</div>
                    <div class="info-text">{{ lead.leadNumber }}</div>
                </div>
            </div>
            <div class="a-notes">
                <h4 class="text-center">Additional notes</h4>
                <p class="text-center">{{ lead.leadNote }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['id'],


    // data() {
    //     return {
    //         items: [
    //             { title: 'buyers' },
    //             { title: 'sellers' },
    //             { title: 'renting' },
    //             { title: 'maintenance' },
    //         ],
    //     }
    // },

    mounted() {
        console.log(this.id);
        return this.$store.dispatch("getLead", this.id);
        // this.$store.dispatch("getSellers");
    },
    computed: {
        lead() {
            return this.$store.state.lead;
        },
    },

    methods: {
        deletes(id) {
            this.$store.dispatch("deleteLead", id);
        },
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