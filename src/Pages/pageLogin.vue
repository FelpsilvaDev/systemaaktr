<template>
  <div>
    <!-- Carrossel de imagens em background -->
    <div class="background">
      <transition name="fade">
        <img :src="currentImage" alt="Slide de Imagem" class="carousel-image" :key="currentIndex" />
      </transition>
    </div>

    <!-- Conteúdo da página -->
    <div class="container-fluid">
      <!-- Formulário de Login -->
      <div class="row body">
        <div class="modalLogin-container">
          <div class="modalLogin shadow-lg border-0 rounded-lg p-4">
            <div class="modalHeader mb-4">
              <img
                src="@/assets/logoLogin.png"
                style="max-width: 200px; display: block; margin: 0 auto"
                alt="Aktr_Login"
              />
            </div>
            <div>
              <label for="Email">Email</label>
              <b-input id="Email" type="email" v-model="objLogin.user"></b-input>
              <label for="Senha">Senha</label>
              <b-input id="Senha" type="password" v-model="objLogin.senha"></b-input>
            </div>

            <div class="mt-4">
              <p><a href="">Esqueci a senha</a></p>
              <b-button block @click="entrar(objLogin)">Entrar</b-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Rodapé -->
      <div class="row footer">
        <div class="col-12">
          <span style="text-align: center">
            © COPYRIGHT MARCENARIA AKTR 2024. Versão 1.1
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import router from '@/config/router';

export default {
  name: "pageLogin",
  data() {
    return {
        objLogin:{
            user:'',
            senha:''
        },
      images: [
        require("../assets/Frente.jpg"),
        require("../assets/Lustre.jpg"),
        require("../assets/ArmarioCozinha.jpg"),
        require("../assets/ArmarioBanheiro.jpg"),
        require("../assets/GuardaRoupa.jpg"),
        require("../assets/CorSolida.jpg"),
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    // Inicia o carrossel automaticamente
    this.startCarousel();
  },
  methods: {
    entrar(){
        router.push('/home');
    },
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.nextImage();
      }, 8000); // Muda a imagem a cada 4 segundos
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
  beforeDestroy() {
    // Limpa o intervalo ao destruir o componente para evitar vazamentos de memória
    clearInterval(this.intervalId);
  },
};
</script>
  
  <style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Coloca o carrossel em background */
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modalHeader {
  text-align: center;
}
.body {
  height: 96vh;
}

.header {
  text-align: center;
  align-items: center;
  height: 8vh;
  background-color: rgba( 217, 217, 217, 0.6 ); /* Fundo translúcido para cabeçalho e rodapé */
  color: #245e69; /* Cor do texto */
}
.footer {
  height: 4vh;
  background-color: rgba(
    217,
    217,
    217,
    0.3
  ); /* Fundo translúcido para cabeçalho e rodapé */
  color: #245e69; /* Cor do texto */
  text-align: center;
}
.modalLogin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh; /* Ajuste conforme necessário para centralizar verticalmente */
}

.modalLogin {
  background: rgba(217, 217, 217, 0.6); /* Fundo translúcido para o modal */
  width: 400px; /* Largura máxima do modal */
  color: #245e69; /* Cor do texto */
  padding: 20px; /* Espaçamento interno */
  border-radius: 10px; /* Borda arredondada */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-enter-active {
  animation: fadeIn 1.3s cubic-bezier(0.42, 0, 0.58, 1) forwards;
}

</style>
  