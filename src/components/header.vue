<template>
  <div class="menu-wrapper">
    <header class="header">
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/areaMenu">Trafiknytt</router-link></li>
        <li><router-link to="/pandemikollen">Pandemikollen</router-link></li>
        <li><router-link to="/songMenu">Låttoppen</router-link></li>
        <li><router-link to="/about">Om oss</router-link></li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
.header {
  background-color: #414141;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
.header li a {
  display: block;
  color: #359ab8;
  padding: 20px 20px;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: rgba(42, 173, 38, 0.1);
}
.header .logo {
  color: #fff;
  display: block;
  float: left;
  font-size: 1.5em;
  padding: 12px 20px;
  text-decoration: none;
}
.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: left;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #fff;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #fff;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 340px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}
@media only screen and (max-width: 768px) {
  .header ul {
    background-color: #fff;
  }
  .header li a {
    padding: 15px;
    border-bottom: 1px dotted #ddd;
  }
}

@media only screen and (min-width: 768px) {
  .menu-wrapper {
    background: #414141;
    height: 55px;
    line-height: 55px;
    width: 100%;
  }
  .header li {
    float: left;
  }
  .header .logo {
    line-height: 1;
  }
  .header li a {
    color: #fff;
    padding: 0px 30px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
  .header .menu {
    clear: none;
    float: left;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
</style>
