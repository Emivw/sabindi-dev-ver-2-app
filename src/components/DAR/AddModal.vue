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
              <label for="recipient-name" class="col-form-label">Entry Type</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="entryType" v-model="entryType" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">uid:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="uid" v-model="uid" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Customer Name</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Customer Name"
                v-model="cusName" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Customer Number:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Customer Number"
                v-model="cusNo" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Customer Address:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="cusAddress"
                v-model="cusAddress" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Insurance Category:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="insCat" v-model="insCat" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Leak Detection Method:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="leakDetectMethod"
                v-model="leakDetectMethod" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Damage Location:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="dmgLocation"
                v-model="dmgLocation" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Damage Status:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="dmgStatus" v-model="dmgStatus" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">RepRecom:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="RepRecom" v-model="RepRecom" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Quote Description:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="qtDesc" v-model="qtDesc" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Summary:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="summary" v-model="summary" />
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
          <button id="move" type="button" class="btn btn-primary" @click="add" data-bs-dismiss="modal">
            ADD
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quote'],
  data() {
    return {
      entryType: "",
      uid: "",
      cusName: "",
      cusNo: "",
      cusAddress: "",
      damageType: "",
      insCat: "",
      leakDetectMethod: "",
      dmgLocation: "",
      dmgStatus: "",
      RepRecom: "",
      qtDesc: "",
      summary: "",
      jobCat: "",
      qteMaterials: "",
      scope: "",
      total: "",
      addNote: ""
    };
  },
  methods: {
    add() {
      let payload = {
        entryType: this.entryType,
        uid: this.uid,
        cusName: this.cusName,
        cusNo: this.cusNo,
        cusAddress: this.cusAddress,
        damageType: this.damageType,
        insCat: this.insCat,
        leakDetectMethod: this.leakDetectMethod,
        dmgLocation: this.dmgLocation,
        dmgStatus: this.dmgStatus,
        RepRecom: this.RepRecom,
        qtDesc: this.qtDesc,
        summary: this.summary,
        jobCat: this.jobCat,
        qteMaterials: this.qteMaterials,
        scope: this.scope,
        total: this.total,
        addNote: this.addNote,
      }
      this.$store.dispatch("createQuote", payload);
    }
  }
}
</script>

<style scoped>
</style>