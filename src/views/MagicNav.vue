<template>
  <div class="navigation">
    <ul>
      <li class="list active">
        <a href="#">
          <span class="icon">
            <font-awesome-icon icon="home" />
          </span>
          <span class="text">Home</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <font-awesome-icon icon="user" />
          </span>
          <span class="text">Profile</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <font-awesome-icon icon="comment" />
          </span>
          <span class="text">message</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <font-awesome-icon icon="camera" />
          </span>
          <span class="text">Photos</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <font-awesome-icon icon="gear" />
          </span>
          <span class="text">Settings</span>
        </a>
      </li>
      <div class="indicator"></div>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
.navigation {
  width: 400px;
  height: 70px;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.navigation ul {
  display: flex;
  width: 350px;
  padding: 0;
}

.navigation ul li {
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
}

.navigation ul li a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

.icon {
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  color: var(--clr);
}

.navigation ul li.active a .icon {
  transform: translateY(-35px);
}

.text {
  position: absolute;
  color: var(--clr);
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
}

.navigation ul li.active a .text {
  opacity: 1;
  transform: translateY(10px);
}

.indicator {
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background-color: #33e7ff;
  border-radius: 50%;
  box-sizing: border-box;
  border: 6px solid var(--clr);
  transition: 0.5s;
}

.indicator::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: -22px;
  background: #fff;
  border-top-right-radius: 20px;
  box-shadow: 0px -10px 0 0 var(--clr);
}

.indicator::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  right: -22px;
  background: #fff;
  border-top-left-radius: 20px;
  box-shadow: 0px -10px 0 0 var(--clr);
}
</style>
