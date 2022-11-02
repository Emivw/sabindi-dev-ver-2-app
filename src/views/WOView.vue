<template>
    <v-card>
        <div id="box">
            <button type="button" data-bs-toggle="modal" data-bs-target="#add">
                ADD <i class="fa-solid fa-plus"></i>
            </button>
            <AddModal />

        </div>

        <div class="card-holder" v-for="wo in wos" :key="wo.woid">
            <div class="card">
                <router-link :to="{ name: 'SingleWO', params: { id: wo.woid }, }" class="router-link">
                    <div class="l_name">{{ wo.entryType }}</div>
                    <div class="l_name">{{ wo.jobCat }}</div>
                    <div class="l_email">{{ wo.workStatus }}</div>
                    <div class="l_type">{{ wo.qteID }}</div>
                </router-link>
            </div>
            <!-- <div class="delete col-5" @click="deletes(lead.lid)">
                <i class="fa-solid fa-trash-can text-center"></i>
            </div> -->
        </div>
        <BottomNav />
    </v-card>
</template>

<script>
import BottomNav from "../components/BottomNav.vue"
import AddModal from "../components/WO/AddModal.vue";


export default {
    props: ['wo'],
    components: {
        BottomNav,
        AddModal
    },

    mounted() {
        return this.$store.dispatch("getWOS");
        // this.$store.dispatch("getSellers");
    },
    computed: {
        wos() {
            return this.$store.state.wos;
        }
    },

    methods: {
        deletes(id) {
            this.$store.dispatch("deleteWO", id);
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
    .card-holder {
        margin-left: 5%;
        margin-bottom: 15px;
        border: 1px solid #333333;
        width: 90%;
        border-radius: 5px;
        padding: 5px;
    }

    .card {
        align-items: center;
        width: 200px;
        padding: 5px;
        margin-bottom: 10px;
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

