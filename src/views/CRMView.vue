<template>
    <v-card>
        <div id="box">
            <button type="button" data-bs-toggle="modal" data-bs-target="#add">
                ADD <i class="fa-solid fa-plus"></i>
            </button>
            <AddModal />

        </div>
        <input type="text" class="form-control" placeholder="Search..." v-model="search" />
        <select name="entryType" v-model="entryType" class="options">
            <option value="All" selected>All</option>
            <option value="Seller">Seller</option>
            <option value="Buyer">Construction</option>
            <option value="Renting">Renting</option>
            <option value="Renting Out">Renting Out</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Other">Other</option>
        </select>

        <div class="card-holder" v-for="lead in leads" :key="lead.lid">
            <div class="card">
                <router-link :to="{ name: 'SingleCRM', params: { id: lead.lid } }" class="router-link">
                    <div class="l_name">
                        <p class="subtitle">Lead name:</p>
                        <p>{{ lead.leadName }}</p>
                    </div>
                    <div class="l_name">
                        <p class="subtitle">Lead email:</p>
                        <p>{{ lead.leadEmail }}</p>
                    </div>
                    <div class="l_name">
                        <p class="subtitle">Lead type:</p>
                        <p>{{ lead.entryType }}</p>
                    </div>
                </router-link>
            </div>
            <div class="delete col-5" @click="deletes(lead.lid)">
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

.router-link {
    width: 200px;
    /* display: flex;
    flex-direction: column; */
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

