
<template>
  <div class="ceu">
    <div class="nuvem nuvem-esquerda"></div>
    <div class="nuvem nuvem-direita"></div>
    <div class="nuvem nuvem-baixo-esquerda"></div>
    <div class="nuvem nuvem-baixo-direita"></div>
  </div>
</template>

<style scoped>

.ceu {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;

  background: var(--background-sky);
}


.nuvem {
  position: absolute;
  width: 180px;
  height: 65px;
  border-radius: 60px;
  background: var(--color-surface);
  opacity: 0.9;
  filter: drop-shadow(0 4px 8px var(--color-cloud-shadow));
}

.nuvem::before,
.nuvem::after {
  content: '';
  position: absolute;
  bottom: 15px;
  border-radius: 50%;
  background: var(--color-surface);
}

.nuvem::before {
  left: 25px;
  width: 75px;
  height: 75px;
}

.nuvem::after {
  right: 20px;
  width: 60px;
  height: 60px;
}

.nuvem-esquerda {
  top: 20%;
  left: -100px;
}

.nuvem-direita {
  top: 35%;
  right: -110px;
  transform: scale(1.2);
}

.nuvem-baixo-esquerda {
  bottom: -35px;
  left: -45px;
  transform: scale(1.5);
}

.nuvem-baixo-direita {
  bottom: -40px;
  right: -50px;
  transform: scale(1.7);
}
</style>
