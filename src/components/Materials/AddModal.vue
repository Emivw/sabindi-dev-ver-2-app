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
              <label for="recipient-name" class="col-form-label">Material Name:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="matName" v-model="matName" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Material Description :</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="matDesc" v-model="matDesc" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Material Dimensions:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="MatDimensions"
                v-model="MatDimensions" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Material Category :</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="MatCat" v-model="MatCat" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Supplier ID:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="sID" v-model="sID" />
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
      matName: "",
      matDesc: "",
      MatDimensions: "",
      MatCat: "",
      sID: "",
    };
  },
  methods: {
    add() {
      let payload = {
        matName: this.matName,
        matDesc: this.matDesc,
        MatDimensions: this.MatDimensions,
        MatCat: this.MatCat,
        sID: this.sID,
      }
      this.$store.dispatch("createMaterial", payload);
    }
  }
}
</script>

<style scoped>

</style>