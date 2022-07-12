<template>
  <div class="mainWrap">
    <h1>CSS & VUE PRACTICE</h1>
    <div class="boxWrap">
      <div class="goBox" @click="goMaginNav">Magic Nav</div>
      <div class="goBox" @click="goChgColor">Change Color</div>
      <div class="goBox" @click="goMaginNav">Magic Nav</div>
      <div class="goBox" @click="goMaginNav">Magic Nav</div>
    </div>
  </div>
</template>

<script src="./MainHome.js"></script>

<style scoped>
.mainWrap {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.boxWrap {
  border: 5px solid #fff;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  width: 310px;
  flex-wrap: wrap;
}

.goBox {
  width: 150px;
  height: 150px;
  border: 4px solid #fff;
  border-radius: 10px;
  line-height: 150px;
  box-sizing: border-box;
  font-weight: bold;
  transition: 0.5s;
  cursor: pointer;
}

.goBox:hover {
  color: #6ebbff;
  background-color: #fff;
}

.goBox:nth-child(2n) {
  margin-left: 10px;
}

.goBox:nth-child(3),
.goBox:nth-child(4) {
  margin-top: 10px;
}
</style>
