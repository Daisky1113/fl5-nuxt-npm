<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title>{{message}}</v-card-title>
          <v-card-text>
            <v-text-field @input="changeMessage" label="Outlined" outlined></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  layout: "simple",
  data: () => ({
    msg: "Hello World is mine",
  }),
  computed: {
    ...mapState(["message"]),
  },
  methods: {
    ...mapMutations(["changeMessage"]),
  },
  components: {},
};
</script>
