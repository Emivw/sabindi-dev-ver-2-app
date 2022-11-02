<template>
    <v-card>
        <div id="box">
            <button type="button" data-bs-toggle="modal" data-bs-target="#add">
                ADD <i class="fa-solid fa-plus"></i>
            </button>
            <AddModal />

        </div>

        <div class="card-holder" v-for="dar in dars" :key="dar.darid">
            <div class="card">
                <router-link :to="{ name: 'SingleDAR', params: { id: dar.darid }, }" class="router-link">
                    <div class="l_name">
                        <p></p>Claim Number:{{ dar.claimNumber }}
                    </div>
                    <div class="l_name">
                        <p></p>Client Name:{{ dar.clientName }}
                    </div>
                    <div class="l_name">
                        <p></p>Damage Type:{{ dar.damageType }}
                    </div>
                </router-link>
            </div>
            <div class="delete col-5" @click="deletes(dar.darid)">
                <i class="fa-solid fa-trash-can text-center"></i>
            </div>
        </div>
        <BottomNav />
    </v-card>
</template>

<script>
import BottomNav from "../components/BottomNav.vue"
import AddModal from "../components/DAR/AddModal.vue";


export default {
    props: ['dar'],
    components: {
        BottomNav,
        AddModal
    },
    mounted() {
        return this.$store.dispatch("getDARS");
    },
    computed: {
        dars() {
            return this.$store.state.dars
        }
    },
    methods: {
        deletes(id) {
            this.$store.dispatch("deleteDAR", id);
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
