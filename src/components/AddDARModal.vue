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
                    type="date"
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
                  <input
                    type="text"
                    class="form-control"
                    id="damage-type"
                    placeholder="Damage Type"
                    v-model="damageType"
                  />
                </div>
                <div class="mb-3">
                  <label for="facility" class="col-form-label"
                    >Facility:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="facility"
                    placeholder="Facility"
                    v-model="facility"
                  />
                </div>
                <div class="mb-3">
                  <label for="damage-severity" class="col-form-label"
                    >Damage Severity:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="damage-severity"
                    placeholder="Damage Severity"
                    v-model="damageSeverity"
                  />
                </div>
                <div class="mb-3">
                  <label for="inspection-category" class="col-form-label"
                    >Inspection Category:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inspection-category"
                    placeholder="Inspection Category"
                    v-model="inspectionCategory"
                  />
                </div>
                <div class="mb-3">
                  <label for="leak-detection-method" class="col-form-label"
                    >Leak Detection Method:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="leak-detection-method"
                    placeholder="Leak Detection Method"
                    v-model="leakDetectionMethod"
                  />
                </div>
                <div class="mb-3">
                  <label for="damage-location-internal" class="col-form-label"
                    >Damage Location Internal:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="damage-location-internal"
                    placeholder="Damage Location Internal"
                    v-model="damageLocationInternal"
                  />
                </div>
                <div class="mb-3">
                  <label for="damage-location-external" class="col-form-label"
                    >Damage Location External:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="damage-location-external"
                    placeholder="Damage Location External"
                    v-model="damageLocationExternal"
                  />
                </div>
                <div class="mb-3">
                  <label for="damage-status-concealed" class="col-form-label"
                    >Damage Status Concealed:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="damage-status-concealed"
                    placeholder="Damage Status Concealed"
                    v-model="damageStatusConcealed"
                  />
                </div>
                <div class="mb-3">
                  <label for="damage-status-not-concealed" class="col-form-label"
                    >Damage Status Not Concealed:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="damage-status-not-concealed"
                    placeholder="Damage Status Not Concealed"
                    v-model="damageStatusNotConcealed"
                  />
                </div>
                <div class="mb-3">
                  <label for="repair-action-recommendation" class="col-form-label"
                    >Repair Action Recommendation:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="repair-action-recommendation"
                    placeholder="Repair Action Recommendation"
                    v-model="repairActionRecommendation"
                  />
                </div>
                <div class="mb-3">
                  <label for="executive-summary" class="col-form-label"
                    >Executive Summary:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="executive-summary"
                    placeholder="Executive Summary"
                    v-model="executiveSummary"
                  />
                </div>
                <div class="mb-3">
                  <label for="authBy" class="col-form-label"
                    >Authorised By:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="authBy"
                    placeholder="Authorised By"
                    v-model="authBy"
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
  damageLocationExternal:"",
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
        damageLocationExternal: this.damageLocationExternal,
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