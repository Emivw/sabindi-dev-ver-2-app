<template>
  <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div id="add" class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Add
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <select name="entryType" id="entryType">
                <option value="Seller">Seller</option>
                <option value="Buyer">Buyer</option>
                <option value="Renting">Renting</option>
                <option value="Renting Out">Renting Out</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Name:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Lead Name" v-model="leadName" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Email:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="leadEmail" v-model="leadEmail" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Number:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="leadNumber"
                v-model="leadNumber" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Extra Number:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="leadExtraNumber"
                v-model="leadExtraNumber" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Area:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="leadArea" v-model="leadArea" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Address:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="leadAddress"
                v-model="leadAddress" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Lead Note:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="leadNote" v-model="leadNote" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">user ID:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="uID" v-model="uID" />
            </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="add" data-bs-dismiss="modal">
            ADD
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['lead'],
  data() {
    return {
      entryType: "",
      leadName: "",
      leadEmail: "",
      leadNumber: "",
      leadExtraNumber: "",
      leadArea: "",
      leadAddress: "",
      leadNote: "",
      uID: ""
    };
  },
  methods: {
    add() {
      let payload = {
        entryType: this.entryType,
        leadName: this.leadName,
        leadEmail: this.leadEmail,
        leadNumber: this.leadNumber,
        leadExtraNumber: this.leadExtraNumber,
        leadArea: this.leadArea,
        leadAddress: this.leadAddress,
        leadNote: this.leadNote,
        uID: this.uID
      }
      this.$store.dispatch("createLead", payload);
    }
  }
}
</script>

<style scoped>

</style>