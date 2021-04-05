export default {
  name: "TempoHoje",
  template: `<p>Tempo do dia: {{ tempoHoje }}</p>`,
  data() {
    return {
      tempoHoje: "",
    };
  },
  methods: {
    async getTempo() {
      const response = await fetch(
        "https://www.metaweather.com/api/location/455825/"
      );
      const data = await response.json();
      this.tempoHoje = data.consolidated_weather[0].max_temp;
    },
  },
  created() {
    this.getTempo();
  },
};
