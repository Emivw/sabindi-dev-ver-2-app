<template>
  <div class="modal fade" :id="'update' + lead.lid" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div id="update" class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Edit
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Entry Type:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="lead.entryType" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Name:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="lead.leadName" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Email:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="lead.leadEmail" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Number:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="lead.leadNumber" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Note:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="lead.leadNote" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Uid:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="lead.uID" />
            </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="update" data-bs-dismiss="modal">
            Update lead
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['lead'],
  methods: {
    update() {
      this.$store.dispatch("updateLead", {
        lid: this.lead.lid,
        entryType: this.lead.entryType,
        leadName: this.lead.leadName,
        leadEmail: this.lead.leadEmail,
        leadNumber: this.lead.leadNumber,
        leadNote: this.lead.leadNote,
        uID: this.lead.uID
      });
    }
  }
}
</script>

<style scoped>

</style>