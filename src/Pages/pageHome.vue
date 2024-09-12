<template>
    <div>
        <div class="container-fluid" style="background: rgba(217, 217, 217, 0.8);">
            <div class="row">                 
                <HeaderComumVue class="col-12"></HeaderComumVue>
            </div>
            <div>
                <b-row class="mt-4">
                    <b-col cols="3">
                        <b-card class="cardHome">
                        <span>Quantidade de vendas mensal</span>
                        <h3>35</h3>
                        </b-card>
                    </b-col>

                    <b-col col="3">
                        <b-card class="cardHome" style="margin-left: 10px">
                        <span>Meta de vendas mensal</span>
                        <h3>90</h3>
                    </b-card>
                    </b-col>

                    <b-col col="3">
                        <b-card class="cardHome" style="margin-left: 10px">
                        <span>Vendas</span>
                        <h3>2.500</h3>
                        </b-card>
                    </b-col>

                    <b-col col="3">
                        <b-card class="cardHome" style="margin-left: 10px">
                        <span>Meta vendas</span>
                        <h3>4.500</h3>
                        </b-card>  
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <b-card class="cardHome" style="max-height: 60vh;">  
                            <Doughnut :data="dataDoughnut" :options="optionsDoughnut" />
                        </b-card>
                    </b-col>

                    <b-col>
                        <b-card class="cardHome" style="max-height: 60vh; margin-left: 10px">
                            <Doughnut :data="dataDoughnut" :options="optionsDoughnut" />
                        </b-card>
                    </b-col>
                </b-row>  
            </div>
        </div>
    </div>
</template>

<script>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend)

import HeaderComumVue from '@/components/HeaderComum.vue'
export default {
    name:'pageHome',
    components:{
        HeaderComumVue,
        Doughnut
    }, 
    data() {
        return {
            dataDoughnut: {
                labels: ['Janeiro', 'Fevereiro'],
                datasets: [{
                    label: 'Meta Mensal',
                    data: [10, 20],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)'
                    ],
                }]
            },
            optionsDoughnut: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw;
                            }
                        }
                    }
                }
            },

            dataBar: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
                    'Novembro', 'Dezembro'
                ],
                datasets: [{
                    label: 'Vendas Anual',
                    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ]
                }]
            },
            optionsBar: {
                responsive: true,                
            }
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
.cardHome {
    border-radius: 10px; /* Altera o raio da borda dos cartões */
    background-color: rgb(0, 99, 108) ; /* Altera a cor de fundo dos cartões */
    color: rgb(219, 219, 219); /* Ajusta a cor do texto para garantir a legibilidade */
    padding: 20px; /* Adiciona algum preenchimento interno para o conteúdo do cartão */
}

/* Adiciona uma margem entre os cartões dentro de b-card-group */
.cardHome {
    margin: 10px;
}
</style>