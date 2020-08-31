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
  head() {
    return { title: "authorのページ" };
  },
  data: function () {
    return {
      msg: `/author/_id.vueを表示`,
      id: this.$route.params.id,
    };
  },

  validate({ params, query, store }) {
    return new RegExp(store.state.userId).test(params.id);
  },
};
</script>
