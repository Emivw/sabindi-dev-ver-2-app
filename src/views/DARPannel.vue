<template>
    <div>

        <table class="table">
            <tr>
                <th class="table__heading">Claim Number</th>
                <th class="table__heading">Client Name</th>
                <th class="table__heading">Damage Type</th>
            </tr>
            <tr class="table__row" v-for="dar in dars" :key="dar.claimNumber">
                <td class="table__content" data-heading="Claim Number">
                    {{ dar.claimNumber}}
                </td>
                <td class="table__content" data-heading="Client Name">{{ dar.clientName }}</td>
                <td class="table__content" data-heading="Lead Name">
                    {{ lead.damageType }}
                </td>
                <!-- <td class="table__content" data-heading="">
                    <i class="fa-solid fa-trash-can" @click="deletes(lead.lid)"></i>
                    <i class="fa-solid fa-pen-to-square" type="button" data-bs-toggle="modal"
                        :data-bs-target="'#update' + lead.lid"></i>
                </td> -->
                <!-- <EditModal :lead="lead" /> -->
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    mounted() {
       return this.$store.dispatch("getDars");
    },
    computed: {
        leads() {
            return this.$store.state.dars;
        }
    }
}
</script>

<style scoped>

</style>