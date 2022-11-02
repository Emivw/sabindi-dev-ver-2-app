<template>
    <v-card>
        <div id="box">
            <button type="button" data-bs-toggle="modal" data-bs-target="#add">
                ADD <i class="fa-solid fa-plus"></i>
            </button>
            <AddModal />

        </div>
        <input type="text" class="form-control" placeholder="Search..." v-model="search" />
        <select name="MatCat" v-model="MatCat">
            <option value="All" selected>All</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Construction">Construction</option>
            <option value="Insurance">Insurance</option>
        </select>
        <div class="card-holder" v-for="material in filteredMaterials" :key="material.mid">
            <div class="card">
                <router-link :to="{ name: 'SingleMaterial', params: { id: material.mid } }" class="router-link">
                    <div class="l_name">Material Name:{{ material.matName }}</div>
                    <div class="l_name">Material Category:{{ material.MatCat }}</div>
                </router-link>
            </div>
            <div class="delete col-5" @click="deleteMaterial(material.mid)">
                <i class="fa-solid fa-trash-can text-center"></i>
            </div>
        </div>
        <BottomNav />
    </v-card>
</template>

<script>
import BottomNav from "../components/BottomNav.vue"
import AddModal from "../components/Materials/AddModal.vue";
export default {
    props: ['material'],
    components: {
        BottomNav,
        AddModal
    },
    data() {
        return {
            search: "",
            MatCat: "All",
        };
    },
    mounted() {
        return this.$store.dispatch("getMaterials");
    },
    computed: {
        filteredMaterials() {
            return this.$store.state.materials?.filter((material) => {
                let isMatch = true;
                if (!material.matName?.toLowerCase().includes(this.search.toLowerCase()))
                    isMatch = false;
                if (this.MatCat !== "All" && material.MatCat !== this.MatCat)
                    isMatch = false;
                return isMatch;
            });
        }
    },
    methods: {
        deleteMaterial(id) {
            this.$store.dispatch("deleteMaterial", id);
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