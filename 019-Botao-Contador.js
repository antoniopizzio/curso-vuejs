export default {
  name: "BotaoContador",
  template: `<button @click="contador++">Contador {{ contador }}</button>`,
  data() {
    return {
      contador: 0,
    };
  },
};
