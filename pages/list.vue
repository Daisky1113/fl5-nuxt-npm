<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-card>
          <v-card-title>hogehoge</v-card-title>
          <v-card-text>
            <v-text-field v-model="inputTitle" label="title" outlined></v-text-field>
            <v-text-field v-model="inputText" label="text" outlined></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="addItem" outlined>Regist</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-list three-line>
            <v-list-item v-for="item in listItems" :key="item.id">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-btn @click="removeListItem(item.id)" outlined>delete</v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    inputTitle: "",
    inputText: "",
  }),
  beforeMount() {
    console.log(this.listItems);
  },
  computed: {
    ...mapState("list", ["listItems"]),
  },
  methods: {
    ...mapMutations("list", ["addListItem", "removeListItem"]),
    getRandomId() {
      return "abcdefghijklmnopqrstuvwxyz0123456789"
        .split("")
        .map((el, i, r) => r[Math.ceil(Math.random() * r.length)])
        .join("");
    },
    addItem() {
      this.addListItem({
        id: this.getRandomId(),
        title: this.inputTitle,
        text: this.inputText,
      });
    },
  },
  components: {},
};
</script>
