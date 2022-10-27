<template>
    <v-card>
        <div id="box">
            <button type="button" data-bs-toggle="modal" data-bs-target="#add">
                ADD <i class="fa-solid fa-plus"></i>
            </button>
            <AddModal />

        </div>
        <table class="table">
            <thead>
                <tr>
                    <th class="table__heading">lid</th>
                    <th class="table__heading">Entry Type</th>
                    <th class="table__heading">Lead Name</th>
                    <th class="table__heading">Edit or Delete</th>

                </tr>
            </thead>
            <tbody v-for="lead in leads" :key="lead.lid">
                <tr class="table__row">
                    <td class="table__content" data-heading="lid">
                        {{ lead.lid }}
                    </td>
                    <td class="table__content" data-heading="Entry Type">{{ lead.entryType }}</td>
                    <td class="table__content" data-heading="Lead Name">
                        {{ lead.leadName }}
                    </td>
                    <td class="table__content" data-heading="">
          <i class="fa-solid fa-trash-can mx-5" @click="deletes(lead.lid)"></i>
          <i class="fa-solid fa-pen-to-square mx-5" type="button" data-bs-toggle="modal"
            :data-bs-target="'#update' + lead.lid"></i>
                <router-link :to="{ name: 'SingleCRM', params: { id: lead.lid } }" class="router-link">
            <i class="fa-solid fa-info mx-5" type="button" ></i>
            </router-link>
        </td>
        <EditModal :lead="lead" />
      </tr>
            </tbody>
        </table>

        <!-- <div class="card-holder" v-for="lead in leads" :key="lead.lid">
    
                <div class="card">
                    <div class="l_name">{{ lead.leadName }}</div>
                    <div class="l_email">{{ lead.leadEmail }}</div>
                    <div class="l_type">{{ lead.entryType }}</div>
                </div>
        </div> -->
        <BottomNav />
    </v-card>
</template>

<script>
import EditModal from "../components/EditModal.vue";
import AddModal from "../components/AddModal.vue";
import BottomNav from "@/components/BottomNav.vue";

export default {
  components: { EditModal, AddModal, BottomNav },

  data() {
    return {
      items: [
        { title: 'buyers' },
        { title: 'sellers' },
        { title: 'renting' },
        { title: 'maintenance' },
      ],
    }
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
  }
}
</script>


<style scoped>
.card-holder {
    display: flex;
    justify-content: center;
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

