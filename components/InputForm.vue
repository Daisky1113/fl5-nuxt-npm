<template>
  <v-card>
    <v-card-text>
      <v-text-field v-model="inputTex" id="titleInput" label="test1" outlined />
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "InputForm",
  data: () => ({
    inputTex: "",
  }),
  computed: {
    count() {
      return this.inputTex.length;
    },
    textsizeMin() {
      return this.count < 8 ? true : false;
    },
  },
  methods: {},
};
</script>
