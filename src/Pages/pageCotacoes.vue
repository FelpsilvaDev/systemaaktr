<template>
    <div style="background: rgba(217, 217, 217, 0.8);">

        <div>
          <HeaderComumVue />
        </div>

        <div >        
          <CotacoesVue />
        </div>

    </div>
  </template>
  
  <script>
  import HeaderComumVue from '@/components/HeaderComum.vue';
  import CotacoesVue from '@/components/Cotacoes.vue';
  
  export default {
    name: 'PageCotacoes',
    components: {
      HeaderComumVue,
      CotacoesVue
    }
  };
  </script>
  
  <style>
  /* Your styles here */
  </style>
  