<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <p>{{ msg }}</p>
        <p>{{ id }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    msg: `/author/_id.vueを表示`,
    id: this.$route.params.id,
  }),
};
</script>
