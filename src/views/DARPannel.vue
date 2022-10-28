<template>
    <div>
        <div id="box">
      <button type="button" data-bs-toggle="modal" data-bs-target="#addDar">
        ADD <i class="fa-solid fa-plus"></i>
      </button>
      <AddDARModal/>
    </div>


        <table class="table">
            <tr>
                <th class="table__heading">Claim Number</th>
                <th class="table__heading">Client Name</th>
                <th class="table__heading">Damage Type</th>
            </tr>
            <tr class="table__row" v-for="dar in dars" :key="dar.darid">
                <td class="table__content" data-heading="Claim Number">
                    {{ dar.claimNumber}}
                </td>
                <td class="table__content" data-heading="Client Name">{{ dar.clientName }}</td>
                <td class="table__content" data-heading="Lead Name">
                    {{ dar.damageType }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import AddDARModal from "../components/AddDARModal.vue";

export default {
    components: { AddDARModal },
    mounted() {
        return this.$store.dispatch("getDars");
    },
    computed: {
        dars() {
            return this.$store.state.dars;
        }
    },
    methods: {
        deletes(id){
        this.$store.dispatch("deleteDar", id);
      }
    }
}
</script>

<style scoped>
</style>