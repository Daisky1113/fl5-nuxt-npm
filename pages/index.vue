<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title>{{msg}}</v-card-title>
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
  async asyncData({ $axios }) {
    const msg = await $axios.$get("/api/hoge/");
    return msg;
  },
  async mounted() {
    // const { msg } = await this.$axios.$get("/api/hoge/");
    // this.msgFromApi = msg;
  },
  data: () => ({
    msgFromApi: "",
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
