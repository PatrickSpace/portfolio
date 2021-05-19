<template>
  <div id="upid" class="up">
    <img id="img-up" src="assets/img/iconos/new/cheveron-up.png" alt="" />
  </div>
</template>
<style>
.up {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.089);
  border-radius: 50%;
  box-shadow: -1px 1px 10px inset rgba(255, 255, 255, 0.089),
    -15px -15px 60px rgba(255, 255, 255, 0.199) inset;
  transform: translate(-50%, -50%);
  transition: 1s;
  opacity: 0;
  cursor: pointer;
}

.up-act {
  opacity: 1;
}

.up:hover {
  box-shadow: 1px 1px 10px inset rgba(255, 255, 255, 0.233),
    -1px -1px 20px rgba(255, 255, 255, 0.075) inset;
}

#img-up {
  margin: 0px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/************      BOTON UP RESPONSIVE      ************/

@media (max-width: 600px) {
  .up {
    width: 40px;
    height: 40px;
    bottom: 10px;
    right: 10px;
  }
}
</style>