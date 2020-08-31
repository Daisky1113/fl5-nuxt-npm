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
  data: function () {
    return {
      msg: `/author/_id.vueを表示`,
      userId: "hogehogefoobar",
      id: this.$route.params.id,
    };
  },
  validate({ params }) {
    return this.userId == params.id;
  },
};
</script>
