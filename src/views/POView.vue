<template>
    <v-card>
        <div id="box">
            <button type="button" data-bs-toggle="modal" data-bs-target="#add">
                ADD <i class="fa-solid fa-plus"></i>
            </button>
            <AddModal />

        </div>

        <div class="card-holder" v-for="po in pos" :key="po.poid">
            <div class="card">
                <router-link :to="{ name: 'SinglePO', params: { id: po.poid } }" class="router-link">
                    <div class="l_name">
                        <p class="subtitle">Purchase Order ID:</p>
                        <p>{{ po.poid }}</p>
                    </div>
                    <div class="l_name">
                        <p class="subtitle">Quote ID:</p>
                        <p>{{ po.qteID }}</p>
                    </div>
                    <div class="l_name">
                        <p class="subtitle">Material:</p>
                        <p>{{ po.mat }}</p>
                    </div>
                </router-link>
            </div>
            <div class="delete col-5" @click="deletes(po.poid)">
                <i class="fa-solid fa-trash-can text-center"></i>
            </div>
        </div>
        <BottomNav />
    </v-card>
</template>

<script>
import BottomNav from "../components/BottomNav.vue"
import AddModal from "../components/Lead/AddModal.vue";


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

    .l_name {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .subtitle {
        font-weight: bold;
        text-decoration: underline;
    }

    .column {
        padding-right: 10px;
    }

    .form-control {
        width: 90%;
        margin: auto;
    }

    .options {
        border-radius: 3px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 15px;
        padding: 3px;
        border: 1px solid #ced4da;
    }
}

/* Bigger Phones */
@media only screen and (min-width:576px) {
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

    .l_name {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .subtitle {
        font-weight: bold;
        text-decoration: underline;
    }

    .column {
        padding-right: 10px;
    }

    .form-control {
        width: 90%;
        margin: auto;
    }
}

/* Tablets */
@media only screen and (min-width:768px) {}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>

