<template>
  <v-bottom-navigation fixed color="orange" v-model="value">
    <v-btn value="recent" v-for="item in items" :key="item.title" :to="item.to">
      <span>{{item.title}}</span>

      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
    export default {
      name: 'BottomNav',
      data: () => ({
        value: 'recent',
    items: [
      { title: 'Home', icon: ' mdi-home', to: "/about" },
      { title: 'PO', icon: ' mdi-cart-arrow-down', to: "/pos" },
      { title: 'DAR', icon: ' mdi-chart-box', to: "/dars" },
      { title: 'CRM', icon: ' mdi-briefcase', to: "/crm" },
    ],
  }),
    }
</script>

<style  scoped>
.v-bottom-navigation{
  background-color:black;
}

::before, ::after {
    text-decoration: inherit;
    color: white;
    vertical-align: inherit;
}
</style>