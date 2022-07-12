export default {
  name: 'ChangeColor',
  data() {
    return {
      colors: ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'SKYBLUE', 'PURPLE', 'PINK'],
      selectColor: 'SKYBLUE',
      backgroundColor: '',
      heartColor: '',
    };
  },
  methods: {
    selectBg() {
      if (this.selectColor === 'RED') {
        this.backgroundColor = `background-color: #ff4545`;
        this.heartColor = `color: #ffe0e0`;
      } else if (this.selectColor === 'ORANGE') {
        this.backgroundColor = `background-color: #ffaf40`;
        this.heartColor = `color: #ffdcab`;
      } else if (this.selectColor === 'YELLOW') {
        this.backgroundColor = `background-color: #ffe30f`;
        this.heartColor = `color: #fff5ab`;
      } else if (this.selectColor === 'GREEN') {
        this.backgroundColor = `background-color: #4be000`;
        this.heartColor = `color: #caffb0`;
      } else if (this.selectColor === 'SKYBLUE') {
        this.backgroundColor = `background-color: #6ebbff`;
        this.heartColor = `color: #bdebff`;
      } else if (this.selectColor === 'PURPLE') {
        this.backgroundColor = `background-color: #954fdb`;
        this.heartColor = `color: #e6c9ff`;
      } else if (this.selectColor === 'PINK') {
        this.backgroundColor = `background-color: #fc79d9`;
        this.heartColor = `color: #ffc7f0`;
      }
    },
  },
};
