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
  methods: {},
};
</script>
