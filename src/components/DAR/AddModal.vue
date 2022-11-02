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
              <label for="recipient-name" class="col-form-label">Claim Number:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Claim Number" v-model="claimNumber" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Client Name:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Client Name" v-model="clientName" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Date:</label>
              <input type="date" class="form-control" id="recipient-name" placeholder="Date"
                v-model="date" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Report Number:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Report Number"
                v-model="reportNumber" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Damage Type:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Damage Type"
                v-model="damageType" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Facility:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Facility" v-model="facility" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Damage Severity:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Damage Severity"
                v-model="damageSeverity" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Inspection Category:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Inspection Category"
                v-model="inspectionCategory" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Leak Detection Method:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Leak Detection Method" v-model="leakDetectionMethod" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Damage Location Internal:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Damage Location Internal" v-model="damageLocationInternal" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Damage Location External:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Damage Location External" v-model="damageLocationExternal" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Damage Status Concealed:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Damage Status Concealed" v-model="damageStatusConcealed" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Damage Status Not Concealed:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Damage Status Not Concealed" v-model="damageStatusNotConcealed" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Repair Action Recommendation:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Repair Action Recommendation"
                v-model="repairActionRecommendation" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Executive Summary:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Executive Summary" v-model="executiveSummary" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Authorised By:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Authorised By" v-model="authBy" />
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
  props: ['dar'],
  data() {
    return {
      claimNumber: "",
      clientName: "",
      date: "",
      reportNumber: "",
      damageType: "",
      facility: "",
      damageSeverity: "",
      inspectionCategory: "",
      leakDetectionMethod: "",
      damageLocationInternal: "",
      damageLocationExternal: "",
      damageStatusConcealed: "",
      damageStatusNotConcealed: "",
      repairActionRecommendation: "",
      executiveSummary: "",
      authBy: "",
    };
  },
  methods: {
    add() {
      let payload = {
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
        authBy: this.authBy,
      }
      this.$store.dispatch("createDAR", payload);
    }
  }
}
</script>

<style scoped>

</style>