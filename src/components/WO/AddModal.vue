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
                    >contractor ID:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="contractor ID"
                    v-model="conID"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >jobCat:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="jobCat"
                    v-model="jobCat"
                    
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >mat:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="mat"
                    v-model="mat"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >qte ID:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="qteID"
                    v-model="qteID"
                    
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >purchase order ID:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="poID"
                    v-model="poID"
                    
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >job Description:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="jobDesc"
                    v-model="jobDesc"
                    
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
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >work Status:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="workStatus"
                    v-model="workStatus"
                    
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >work notes:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="workNote"
                    v-model="workNote"
                    
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >worker Time Keeping:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="workerTimeKeeping"
                    v-model="workerTimeKeeping"
                    
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
props:['wo'],
data() {
return {
  entryType:"",
  conID:"",
  jobCat:"",
  mat:"",
  qteID:"",
  poID:"",
  jobDesc:"",
  uID:"",
  workStatus:"",
  workNote:"",
  workerTimeKeeping:"",
};
}, 
methods:{
add() {
     let payload = {
            entryType: this.entryType,
            conID: this.conID,
            jobCat: this.jobCat,
            mat: this.mat,
            qteID: this.qteID,
            poID: this.poID,
            jobDesc: this.jobDesc,
            workStatus: this.workStatus,
            workNote: this.workNote,
            workerTimeKeeping: this.workerTimeKeeping,
            uID: this.uID
     }
       this.$store.dispatch("createWO", payload);
    }
}
}
</script>

<style scoped>

</style>