
<script setup>
import CloudBackground from '../components/CloudBackground.vue'
</script>

<template>
  <main class="inicio">
    <CloudBackground />

    <section class="conteudo">
      <span class="etiqueta">O PRÓXIMO CAPÍTULO DA SUA HISTÓRIA COMEÇA AQUI</span>

      <h1>
        Descubra seu caminho.
        <span>No seu tempo.</span>
      </h1>

      <p>
        Um espaço para explorar profissões, descobrir interesses
        e conhecer novas possibilidades para o seu futuro.
      </p>

<div class="acoes-inicio">
  <RouterLink to="/questionario" class="botao">
    Explorar possibilidades
    <span aria-hidden="true">→</span>
  </RouterLink>

  <RouterLink to="/profissoes" class="botao-secundario">
    Conhecer profissões
  </RouterLink>
</div>

      
    </section>
    
<section class="sobre-inicio">
  <span class="etiqueta-sobre">UM ESPAÇO PARA VOCÊ</span>

  <h2>Seu futuro não precisa estar decidido.</h2>

  <p>
    A Calm ajuda você a refletir sobre seus interesses,
    conhecer diferentes profissões e descobrir novas possibilidades,
    sem pressão para escolher agora.
  </p>

  <RouterLink to="/questionario" class="link-explorar">
    Comece a explorar <span aria-hidden="true">→</span>
  </RouterLink>
</section>
</main>

</template>

<style scoped>

.inicio {
  position: relative;
  isolation: isolate;
  min-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
  background: #dcecf7;
}

.acoes-inicio {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 18px;
}

.acoes-inicio .botao {
  margin-top: 0;
}

.botao-secundario {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border: 1px solid #4389cc;
  border-radius: 12px;
  background: #ffffffd9;
  color: #357bb5;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.botao-secundario:hover {
  background: #ffffff;
  transform: translateY(-2px);
}




.conteudo {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  padding: 90px 32px 75px;
}


.etiqueta {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 30px;
  background: #ffffffd9;
  color: #526777;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

h1 {
  max-width: 680px;
  margin: 24px 0 18px;
  color: #315c83;
  font-size: clamp(38px, 6vw, 64px);
  line-height: 1.1;
  letter-spacing: -2px;
}

h1 span {
  display: block;
  color: #4389cc;
}

.conteudo p {
  max-width: 500px;
  color: #526777;
  font-size: 17px;
  line-height: 1.8;
}

.botao {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-top: 18px;
  padding: 15px 22px;
  border-radius: 12px;
  background: #4389cc;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.botao:hover {
  background: #315c83;
  transform: translateY(-2px);
}



.sobre-inicio {
  position: relative;
  z-index: 1;
  width: calc(100% - 64px);
  max-width: 900px;
  margin: 0 auto 64px;
  padding: 42px 32px;
  border: 1px solid #ffffff;
  border-radius: 24px;
  background: rgba(248, 251, 255, 0.94);
  box-shadow: 0 12px 35px rgba(49, 92, 131, 0.10);
  text-align: center;
}


.etiqueta-sobre {
  color: #4389cc;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.sobre-inicio h2 {
  margin: 16px auto;
  color: #315c83;
  font-size: clamp(25px, 4vw, 36px);
}

.sobre-inicio p {
  max-width: 620px;
  margin: 0 auto;
  color: #526777;
  font-size: 16px;
  line-height: 1.8;
}

.link-explorar {
  display: inline-flex;
  gap: 10px;
  margin-top: 22px;
  color: #357bb5;
  font-weight: 700;
  text-decoration: none;
}

.link-explorar:hover {
  color: #315c83;
}


@media (max-width: 600px) {
  .inicio {
    min-height: 580px;
  }

  .conteudo {
    padding: 65px 24px;
  }

  h1 {
    letter-spacing: -1px;
  }

  .conteudo p {
    font-size: 15px;
  }

  .sobre-inicio {
  width: calc(100% - 32px);
  margin-bottom: 36px;
  padding: 32px 22px;
  border-radius: 20px;
  }
}


</style>
