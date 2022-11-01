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
              <label for="recipient-name" class="col-form-label">What is the item</label>
              <input type="text" class="form-control" id="item-name" v-model="Equipment" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">How much of the item is there?</label>
              <input type="text" class="form-control" id="amount" v-model="Stock" />
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
  // props: ['lead'],
  data() {
    return {
      Equipment: "",
      Stock: "",
    };
  },
  methods: {
    add() {
      let payload = {
        Equipment: this.Equipment,
        Stock: this.Stock,
      }
      this.$store.dispatch("createItem", payload);
    }
  }
}
</script>

<style scoped>

</style>