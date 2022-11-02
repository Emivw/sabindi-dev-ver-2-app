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
              <label for="recipient-name" class="col-form-label">Qoute ID:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="quote ID" v-model="qteID" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Materials:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="materials" v-model="mat" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">One Time Pin</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="One Time Pin"
                v-model="otp" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Supplier ID:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Supplier ID"
                v-model="sID" />
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
  props: ['po'],
  data() {
    return {
      qteID: "",
      mat: "",
      sID: "",
      otp: "",
    };
  },
  methods: {
    add() {
      let payload = {
      qteID: this.qteID,
      mat: this.mat,
      sID: this.sID,
      otp: this.otp,
      }
      this.$store.dispatch("createPO", payload);
    }
  }
}
</script>

<style scoped>

</style>