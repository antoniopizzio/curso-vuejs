export default {
  name: "AcaoApple",
  template: "<p>Valor: {{ valor | numeroPreco }}</p>",
  data() {
    return {
      valor: 0,
    };
  },
  methods: {
    async getAcao() {
      const response = await fetch("https://api.origamid.dev/stock/aapl/quote");
      const data = await response.json();
      this.valor = data.latestPrice;
    },
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  created() {
    this.getAcao();
  },
};
