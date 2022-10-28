<template>
    <v-card>
        <div id="box">
            <button type="button" data-bs-toggle="modal" data-bs-target="#add">
                ADD <i class="fa-solid fa-plus"></i>
            </button>
            <AddModal />

        </div>

        <div class="card-holder" v-for="lead in leads" :key="lead.lid">
            <div class="card">
                <router-link :to="{ name: 'SingleCRM', params: { id: lead.lid } }" class="router-link">
                    <div class="l_name">{{ lead.leadName }}</div>
                    <div class="l_email">{{ lead.leadEmail }}</div>
                    <div class="l_type">{{ lead.entryType }}</div>
                </router-link>
            </div>
            <div class="f-holder d-flex align-items-center justify-content-around">
                <div class="delete col-5" @click="deletes(lead.lid)">
                    <i class="fa-solid fa-trash-can text-center"></i>
                </div>
            </div>
        </div>
        <BottomNav />
    </v-card>
</template>

<script>
import BottomNav from "../components/BottomNav.vue"
import AddModal from "../components/AddModal.vue";


export default {
    props: ['lead'],
    components: {
        BottomNav,
        AddModal
    },

    mounted() {
        return this.$store.dispatch("getLeads");
        // this.$store.dispatch("getSellers");
    },
    computed: {
        leads() {
            return this.$store.state.leads;
        }
    },

    methods: {
        deletes(id) {
            this.$store.dispatch("deleteLead", id);
        }
    },
}
</script>

<style scoped>
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
    .card {
        align-items: center;
        margin-bottom: 15px;
        width: 200px;
        padding: 5px;
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

