<template>
  <b-navbar style="background-color: rgba(145, 145, 152, 0.6); border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;">
    <!-- Ícone à esquerda -->
    <b-navbar-brand href="#" style="margin-left: 150px">
      <img src="@/assets/logoLogin.png" alt="Logo" style="max-height: 45px" />
    </b-navbar-brand>

    <!-- Logo centralizado -->
    <div class="navbar-logo" style="margin-left: 150px; color: #245E69; ">
      <b-navbar-nav>
        <b-nav-item-dropdown>
          <template #button-content>
            <div class="d-flex flex-column align-items-center">
              <b-icon  icon="calculator" font-scale="1"></b-icon>
            </div>
            <span class="mt-1">Orçamento</span>
          </template>
          <b-dropdown-item href="#">Visão Geral</b-dropdown-item>
          <b-dropdown-item href="#" @click="entrarCotacoes()">Cotação</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav style="margin-left: 15px;">
        <b-nav-item-dropdown>
          <template #button-content>
            <div class="d-flex flex-column align-items-center">
              <b-icon icon="card-text" font-scale="1"></b-icon>
            </div>
            <span>Processo</span>
          </template>
          <b-dropdown-item href="#">Visão Geral</b-dropdown-item>
          <b-dropdown-item href="#">Ordem de Serviço</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav  style="margin-left: 15px;">
        <b-nav-item-dropdown>
          <template #button-content>
            <div class="d-flex flex-column align-items-center">
              <b-icon icon="person-plus" font-scale="1"></b-icon>
            </div>
            <span>Cadastro</span>
          </template>
          <b-dropdown-item href="#">Cliente</b-dropdown-item>
          <b-dropdown-item href="#">Fornecedor</b-dropdown-item>
          <b-dropdown-item href="#">Ambiente</b-dropdown-item>
          <b-dropdown-item href="#">Forma de Pagamento</b-dropdown-item>
          <b-dropdown-item href="#">Materiais</b-dropdown-item>
          <b-dropdown-item href="#">Motivo</b-dropdown-item>
          <b-dropdown-item href="#">Montador</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav  style="margin-left: 15px;">
        <b-nav-item-dropdown>
          <template #button-content>
            <div class="d-flex flex-column align-items-center">
              <b-icon icon="person-circle" font-scale="1"></b-icon>
            </div>
            <span>Minha Conta</span>
          </template>
          <b-dropdown-item href="#">Sair</b-dropdown-item>
        </b-nav-item-dropdown>

        <div class="input-group mt-2" style="margin-left: 25px;">
            <b-form-input class="inputProcurar" type='text' name='pesquisa'></b-form-input>
            <b-button class="buttonProcurar"  type='submit'><b-icon icon="search"></b-icon></b-button>
        </div>

    </b-navbar-nav>
    </div>
  </b-navbar>
</template>
  
  <script>
import router from '@/config/router';
export default {
  name: "headerComum",
  data() {
    return {
      procurar: "", // Modelo para o campo de pesquisa
    };
  },
  methods: {
    home() {
      // Implemente a função para redirecionar para a página inicial
    },
    entrarCotacoes(){
      router.push('/Cotacoes');
    },
    pesquisar() {
      // Implemente a função para realizar a pesquisa
      console.log("Pesquisar:", this.procurar);
    },
    sair() {
      // Implemente a função para sair
      console.log("Sair");
    },
  },
};
</script>
  
  <style scoped>
.navbar-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1; /* Para ocupar o espaço restante */
}

.inputProcurar{
    border: none; 
    border-radius: 20px 0 0 20px; 
    border-right: 0;
    height: 38px;
    background: rgba(221, 221, 221, 0.8);
    margin-top: 5px;
}
.buttonProcurar{
    border: none;
    border-radius: 0 20px 20px 0;
    border-left: 0;
    height: 38px;
    background: rgba(221, 221, 221, 0.8);
    margin-top: 5px;
    padding-right: 15px ;
    color: black;
}
.b-icon{
  color: #245E69;
  font-size: 16px
}
span{
  color: #245E69;
  font-size: 16px
}
</style>
  