<template>
  <div class="allWrap" :style="backgroundColor">
    <div class="colorText">{{ selectColor }}</div>

    <div class="selectBox">
      <select v-model="selectColor" @change="selectBg">
        >
        <option v-for="color in colors" :key="color">
          {{ color }}
        </option>
      </select>
    </div>
    <div class="iconWrap" :style="heartColor">
      <span><font-awesome-icon icon="heart" /></span>
      <span><font-awesome-icon icon="heart" /></span>
      <span><font-awesome-icon icon="heart" /></span>
    </div>
  </div>
</template>

<script src="./ChangeColor.js"></script>

<style scoped>
.allWrap {
  background-color: #6ebbff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.colorText {
  position: absolute;
  font-size: 200px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-weight: bold;
  top: 15%;
}

.selectBox {
  padding-bottom: 50px;
  width: 100%;
  position: relative;
  z-index: 999;
}

.selectBox select {
  width: 250px;
  height: 50px;
  border: none;
  border-right: 15px solid #fff;
  background-color: white;
  border-radius: 5px;
  padding: 0 10px;
}

.selectBox select:focus {
  outline: none;
}

.iconWrap {
  color: #fff;
  font-size: 50px;
  outline: none;
}

.iconWrap span {
  margin-left: 10px;
}

.iconWrap span:nth-child(1) {
  margin-left: 0;
}
</style>
