<template>
    <div
        class="modal fade"
        id="add"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div id="add" class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >Entry Type:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="entryType"
                    v-model="entryType"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >Lead Name:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Lead Name"
                    v-model="leadName"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >lead Email:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="leadEmail"
                    v-model="leadEmail"
                    
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >lead Number:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="leadNumber"
                    v-model="leadNumber"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >lead Note:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="leadNote"
                    v-model="leadNote"
                    
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >user ID:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="uID"
                    v-model="uID"
                    
                  />
                </div>

              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" 
              class="btn btn-primary"
              @click="add" data-bs-dismiss="modal">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
props:['lead'],
data() {
return {
  entryType:"",
  leadName:"",
  leadEmail:"",
  leadNumber:"",
  leadNote:"",
  uID:""
};
}, 
methods:{
add() {
     let payload = {
            entryType: this.entryType,
            leadName: this.leadName,
            leadEmail: this.leadEmail,
            leadNumber: this.leadNumber,
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