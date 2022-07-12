export default {
  name: 'MainHome',
  methods: {
    goMaginNav() {
      this.$router.push({ name: 'magicNav' });
    },
    goChgColor() {
      this.$router.push({ name: 'chageColor' });
    },
  },
};
