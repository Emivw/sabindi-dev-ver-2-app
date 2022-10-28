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
              <label for="recipient-name" class="col-form-label">conID</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="conID" v-model="conID" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Workers</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="workers" v-model="workers" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">EntryType</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Customer Name"
                v-model="entryType" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Customer Number:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Customer Number"
                v-model="jobCat" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Customer Address:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="cusAddress" v-model="mat" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Insurance Category:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="insCat" v-model="qteID" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Leak Detection Method:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="leakDetectMethod"
                v-model="poID" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Damage Location:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="dmgLocation" v-model="jobDesc" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Damage Status:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="dmgStatus" v-model="uID" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">RepRecom:</label>
              <select v-model="workStatus" class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1" >Pending</option>
                <option value="2">In Progress</option>
                <option value="3">Completed</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Quote Description:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="qtDesc" v-model="workerNote" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Summary:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="summary"
                v-model="workerTimeKeeping" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Job Category:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="jobCat" v-model="jobCat" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Quote Materials:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="qteMaterials"
                v-model="qteMaterials" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Scope:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="scope" v-model="scope" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Total:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="total" v-model="total" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Add notes:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="addNote" v-model="addNote" />
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
  props: ['wo'],
  data() {
    return {
      conID: "",
      workers: "",
      entryType: "",
      jobCat: "",
      mat: "",
      qteID: "",
      poID: "",
      jobDesc: "",
      uID: "",
      workStatus: "",
      workerNote: "",
      workerTimeKeeping: ""
    };
  },
  methods: {
    add() {
      let payload = {
        conID: this.conID,
        workers: this.workers,
        entryType: this.entryType,
        jobCat: this.jobCat,
        mat: this.mat,
        qteID: this.qteID,
        poID: this.poID,
        jobDesc: this.jobDesc,
        uID: this.uID,
        workStatus: this.workStatus,
        workerNote: this.workerNote,
        workerTimeKeeping: this.workerTimeKeeping
      }
      this.$store.dispatch("createWorkOrders", payload);
    }
  }
}
</script>

<style scoped>

</style>