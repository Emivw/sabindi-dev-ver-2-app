<template>
    <v-data-table :headers="headers" :items="inventory" :items-per-page="5" class="elevation-1"></v-data-table>
</template>
<script>
export default {
    data() {
        return {
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Total amount', value: 'total' },
                { text: 'Amount Available', value: 'avail' },

            ],
            inventory: [
                { name: "Bakkie", total: "2", avail: "1", },
                { name: "Jared", total: "1", avail: "0", },
                { name: "Clayton", total: "1", avail: "0", },
                { name: "Mika", total: "1", avail: "0", },
                { name: "Emile", total: "1", avail: "0", },
                { name: "Enosh", total: "1", avail: "0", },
            ],
        }
    },
}
</script>