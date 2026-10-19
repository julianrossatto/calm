<template>
  <main class="pagina-sobre">
    <section class="apresentacao">
      <span class="etiqueta">UM PROJETO DE EXPLORAÇÃO EDUCACIONAL</span>

      <h1>
        Descobrir caminhos começa com boas perguntas.
      </h1>

      <p class="introducao">
        O Horizonte é uma plataforma educacional que incentiva você a explorar
        seus interesses e conhecer possibilidades profissionais, com calma e
        autonomia.
      </p>
    </section>

    <section class="proposito" aria-labelledby="titulo-proposito">
      <div class="simbolo" aria-hidden="true">✦</div>

      <div>
        <span class="sobretitulo">NOSSA PROPOSTA</span>
        <h2 id="titulo-proposito">Ajudar é abrir caminhos, não escolher por você.</h2>
        <p>
          As atividades, perguntas e informações do Horizonte servem como ponto
          de partida para pensar. Elas podem ajudar você a perceber o que chama
          sua atenção e conhecer novas opções, mas não entregam uma resposta
          pronta nem definem qual profissão seguir.
        </p>
        <p>
          A decisão continua sendo sua. Você pode aproveitar o que fizer sentido,
          conversar com pessoas de confiança e mudar de ideia enquanto aprende
          mais sobre si e sobre o mundo do trabalho.
        </p>
      </div>
    </section>

    <section class="exploracao" aria-labelledby="titulo-exploracao">
      <div class="titulo-secao">
        <span class="sobretitulo">UM CONVITE PARA EXPLORAR</span>
        <h2 id="titulo-exploracao">Pequenos passos, novas perspectivas.</h2>
      </div>

      <div class="grade">
        <article class="card">
          <span class="numero">01</span>
          <h3>Conheça</h3>
          <p>
            Veja áreas e profissões diferentes para ampliar seu repertório e
            descobrir o que desperta curiosidade.
          </p>
        </article>

        <article class="card">
          <span class="numero">02</span>
          <h3>Reflita</h3>
          <p>
            Perceba seus interesses, habilidades e valores sem transformar isso
            em uma lista de respostas certas ou erradas.
          </p>
        </article>

        <article class="card">
          <span class="numero">03</span>
          <h3>Continue no seu ritmo</h3>
          <p>
            Explore uma possibilidade de cada vez. Seu caminho pode mudar junto
            com as experiências e os aprendizados.
          </p>
        </article>
      </div>
    </section>

    <section class="convite">
      <p>Você não precisa ter todas as respostas agora.</p>
      <RouterLink to="/questionario" class="botao">
        Começar a explorar <span aria-hidden="true">➤</span>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.pagina-sobre {
  min-height: 100vh;
  padding: 70px 24px 86px;
  background: var(--color-canvas-alt);
  color: var(--color-brand-dark);
}

.apresentacao,
.exploracao,
.convite {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.apresentacao {
  max-width: 850px;
  text-align: center;
}

.etiqueta {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 30px;
  background: var(--color-sky-150);
  color: var(--color-brand);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.3px;
}

h1 {
  margin: 22px 0 16px;
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1.12;
  letter-spacing: -1.7px;
}

.introducao {
  max-width: 700px;
  margin: 0 auto;
  color: var(--color-text-muted);
  font-size: 17px;
  line-height: 1.8;
}

.proposito {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 24px;
  max-width: 900px;
  margin: 48px auto 64px;
  padding: 34px;
  border: 1px solid var(--color-border);
  border-radius: 24px;
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
}

.simbolo {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border-radius: 16px;
  background: var(--color-sky-150);
  color: var(--color-brand);
  font-size: 26px;
}

.sobretitulo {
  color: var(--color-brand);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.4px;
}

.proposito h2,
.titulo-secao h2 {
  margin: 9px 0 14px;
  font-size: clamp(23px, 3vw, 30px);
  line-height: 1.3;
}

.proposito p,
.card p {
  color: var(--color-text-muted);
  font-size: 15px;
  line-height: 1.8;
}

.proposito p:last-child {
  margin-bottom: 0;
}

.titulo-secao {
  margin-bottom: 22px;
  text-align: center;
}

.titulo-secao h2 {
  margin-bottom: 0;
}

.grade {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.card {
  min-height: 210px;
  padding: 24px;
  border: 1px solid var(--color-border);
  border-radius: 18px;
  background: var(--color-surface);
}

.numero {
  color: var(--color-brand);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
}

.card h3 {
  margin: 14px 0 8px;
  font-size: 19px;
}

.card p {
  margin: 0;
  font-size: 14px;
}

.convite {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 32px;
  padding: 26px 30px;
  border: 1px solid var(--color-border-blue);
  border-radius: 20px;
  background: var(--color-surface-gradient);
}

.convite p {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
}

.botao {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 13px 18px;
  border-radius: var(--button-radius);
  background: var(--color-brand);
  color: var(--color-surface);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s, transform 0.2s;
}

.botao:hover {
  background: var(--color-brand-dark);
  transform: translateY(-2px);
}

.botao:focus-visible {
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 3px;
}

@media (max-width: 700px) {
  .pagina-sobre {
    padding: 52px 18px 64px;
  }

  .proposito {
    margin: 36px auto 48px;
    padding: 25px;
  }

  .grade {
    grid-template-columns: 1fr;
  }

  .card {
    min-height: 0;
  }

  .convite {
    align-items: flex-start;
    flex-direction: column;
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .proposito {
    grid-template-columns: 1fr;
    gap: 16px;
    border-radius: 20px;
  }

  .introducao {
    font-size: 15px;
  }

  .botao {
    width: 100%;
  }
}
</style>
