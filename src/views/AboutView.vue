<template>
    <v-container class="grey lighten-5">
    <v-row class="mb-6">
    <v-col  v-for="tile in tiles" :key="tile.title">
      <v-card
    class="mx-auto card"
    max-width="344"
    color="black"
    :to="tile.to"
  >      <v-btn value="recent" color="orange">
      <v-icon>{{tile.icon}}</v-icon>
    </v-btn>
    <v-card-text>

      <p class="text-h4 text-center">
       {{tile.title}}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="orange accent-3"
      >
  
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>

    </v-row>  
    <BottomNav/>
  </v-container>
</template>

<script>
  import BottomNav from '../components/BottomNav'

  export default {
    components: {
      BottomNav,
    },
    name: 'Home',
    data: () => ({ 
      drawer: null,
      tiles: [
      {
        title: 'Leads',
        icon: 'mdi-home',
        text: 'Customer Relational Manager',
        category: [
          'admin'
        ],
        to: '/crm'
      },
      {
        title: 'SRM',
        icon: 'mdi-account-tie',
        text: 'Supplier Relational Manager',
        category: [
          'admin'
        ],
        to: '/srm'
      },
      {
        title: 'WO',
        icon: 'mdi-briefcase',
        text: 'Works Orders',
        category: [
          "admin"
        ],
        to: '/wo'
      },
      {
        title: 'Quotes',
        icon: 'mdi-format-quote-close ',
        text: 'Quote Generations System',
        category: [
          "admin"
        ],
        to: '/quotes'
      },
      {
        title: 'PO',
        icon: 'mdi-cart-arrow-down',
        text: 'Purchase Order',
        category: [
          "admin"
        ],
        to: '/po'
      },
      {
        title: 'Reports',
        icon: 'mdi-chart-box',
        text: '',
        category: [
          "admin"
        ],
        to: '/reports'
      },
      {
        title: 'Materials',
        icon: 'mdi-factory',
        text: '',
        category: [
          "admin"
        ],
        to: '/materials'
      },
      {
        title: 'Inventory',
        icon: 'mdi-store-edit-outline ',
        text: '',
        category: [
          "admin"
        ],
        to: '/inventory'
      },
      {
        title: 'Costs',
        icon: 'mdi-cash-multiple ',
        text: '',
        category: [
          "admin"
        ],
        to: '/costs'
      },
      {
        title: 'DAR',
        icon: 'mdi-cash-multiple ',
        text: '',
        category: [
          "admin"
        ],
        to: '/dar'
      }
    ],
    })
  }
</script>
<style scoped> 
.mdi{
  color: orange !important;
}
.v-application .text-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    color: white;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
}
.mb-6{
  margin-bottom: 3.5rem !important;
}

.account{
    color: orange !important;
}

.mdi-account-circle::before {
    content: "\F0009";
    color: black !important;
}

.v-application .primary--text {
    color: orange !important;
    caret-color: #1976d2 !important;
}

.mdi-microphone::before {
    content: "\F036C";
    color: orange !important;
}

.mdi:before, .mdi-set {
    display: inline-block;
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: inherit;
    color: white;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.card {
  width: 80vw;
  height: 14vh;

}
</style>