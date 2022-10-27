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
      { title: 'Todo', icon: ' mdi-domain', to: "/" },
      { title: 'about', icon: ' mdi-message-text', to: "/about" },
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