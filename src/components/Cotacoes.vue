<template>
  <div class="row p-0 m-0" style="min-height: calc(100vh - 11vh)">

    <div class="col-12 mt-3">
      <b-table outlined hover :items="itemsTstesBtable">

      </b-table>
    </div>
    

    <div class="col-12" style="background-color: rgba(145, 145, 152, 0.6)">
      <b-card>
        <b-form class="row">
          <b-form-group class="col-3" label="Código" label-for="input-1">
            <b-form-input
              id="input-1"
              type="text"
              v-model="codigo"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-6" label="Obra*" label-for="input-2">
            <b-form-input
              id="input-2"
              type="text"
              v-model="obra"
              required
            ></b-form-input>
          </b-form-group>          

          <b-form-group class="col-3" label="Status" label-for="input-3">
            <b-form-input id="input-3" v-model="dataSolicitacao"></b-form-input>
          </b-form-group>
          
          <b-form-group
            class="col-2"
            label="Data da Solicitação"
            label-for="input-3"
          >
            <b-form-datepicker
              id="input-3"
              v-model="dataSolicitacao"
            ></b-form-datepicker>
          </b-form-group>

          <b-form-group class="col-3" label="Tipo de Obra" label-for="select-1">
            <b-form-select id="select-1" v-model="tipoObra">
              <option value="">Selecione uma opção</option>
              <option
                v-for="opcao in opcoesTipoObra"
                :key="opcao.value"
                :value="opcao.value"
              >
                {{ opcao.text }}
              </option>
            </b-form-select>
          </b-form-group>

          <b-form-group
            class="col-3"
            label="Onde nos encontrou?"
            label-for="select-1"
          >
            <b-form-select id="select-1" v-model="tipoObra">
              <option value="">Selecione uma opção</option>
              <option
                v-for="opcao in opcoesTipoObra"
                :key="opcao.value"
                :value="opcao.value"
              >
                {{ opcao.text }}
              </option>
            </b-form-select>
          </b-form-group>

          <b-form-group class="col-4" label="Indicado por" label-for="input-3">
            <b-form-input id="input-3" v-model="dataSolicitacao"></b-form-input>
          </b-form-group>

          <b-form-group class="col-3" label="Orçado por" label-for="select-1">
            <b-form-select id="select-1" v-model="tipoObra">
              <option value="">Selecione uma opção</option>
              <option
                v-for="opcao in opcoesTipoObra"
                :key="opcao.value"
                :value="opcao.value"
              >
                {{ opcao.text }}
              </option>
            </b-form-select>
          </b-form-group>

        </b-form>
        <b-table selectable simple responsive striped class="col-12 p-0">
          <!-- Table content goes here -->
        </b-table>
      </b-card>
    </div>

  </div>
</template>

<script>
export default {
  name: "CotacoesVue",
  data() {
    return {
      mostrarNewCotação:false,
      itemsTstesBtable: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
      opcoesTipoObra: [
        { value: "Apartamento", text: "Apartamento" },
        { Value: "Casa", text: "Casa" },
        { Value: "Empresa", text: "Empresa" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
/* Your styles here */
</style>
