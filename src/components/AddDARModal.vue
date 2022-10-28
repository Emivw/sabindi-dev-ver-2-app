<template>
    <div
        class="modal fade"
        id="addDar"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div id="addDar" class="modal-dialog">
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
                  <label for="claim-number" class="col-form-label"
                    >Claim Number:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="claim-number"
                    placeholder="claimNumber"
                    v-model="claimNumber"
                  />
                </div>
                <div class="mb-3">
                  <label for="client-name" class="col-form-label"
                    >Client Name:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="client-name"
                    placeholder="Client Name"
                    v-model="clientName"
                  />
                </div>
                <div class="mb-3">
                  <label for="date" class="col-form-label"
                    >Date:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="date"
                    placeholder="yyyy-mm-dd"
                    v-model="date"
                    
                  />
                </div>
                <div class="mb-3">
                  <label for="report-number" class="col-form-label"
                    >Reort Number:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="report-number"
                    placeholder="Example Report Number - DAR/ddmmqm(report of the month)/yyyy"
                    v-model="reportNumber"
                  />
                </div>
                <div class="mb-3">
                  <label for="damage-type" class="col-form-label"
                    >Damage type:</label
                  >
                  <v-select
                    :items="items"
                  label="Outlined style"
                      dense
                      outlined
                     ></v-select>
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
props:['dar'],
data() {
   
return {
  claimNumber:"",
  clientName:"",
  date:"",
  reportNumber:"",
  damageType:"",
  facility:"",
  damageSeverity:"",
  inspectionCategory:"",
  leakDetectionMethod:"",
  damageLocationInternal:"",
  damageLocationexternal:"",
  damageStatusConcealed:"",
  damageStatusNotConcealed:"",
  repairActionRecommendation:"",
  executiveSummary:"",
  authBy:"",
  items: ['Foo', 'Bar', 'Fizz', 'Buzz']
};
}, 
methods:{
add() {
       this.$store.dispatch("createDar", {
        claimNumber: this.claimNumber,
        clientName: this.clientName,
        date: this.date,
        reportNumber: this.reportNumber,
        damageType: this.damageType,
        facility: this.facility,
        damageSeverity: this.damageSeverity,
        inspectionCategory: this.inspectionCategory,
        leakDetectionMethod: this.leakDetectionMethod,
        damageLocationInternal: this.damageLocationInternal,
        damageLocationexternal: this.damageLocationexternal,
        damageStatusConcealed: this.damageStatusConcealed,
        damageStatusNotConcealed: this.damageStatusNotConcealed,
        repairActionRecommendation: this.repairActionRecommendation,
        executiveSummary: this.executiveSummary,
        authBy: this.authBy
        });
    }
}
}
</script>

<style scoped>

</style>