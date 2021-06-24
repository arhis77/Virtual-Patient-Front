<template class="students_info">

    <v-row class="d-flex mb-4">
        <v-col md="12" class="white rounded-xl inner pt-16 pb-4">

           <v-row class="mb-2 pl-md-6 pr-md-6 pl-lg-14 pr-lg-14">
                <v-col md="10" xl="6" class="blue_02 title_02">Информация о студенте</v-col>
                <v-col md="2" xl="6" class="d-flex align-center justify-end">
                    <v-btn @click="backPage" text class="profile text--right rounded-lg">
                        <img src="../assets/arrow_left.svg" alt="" class="mr-2 mt-1" width="24">
                        <span>Назад</span>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row class="headers pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 mb-6">
               <v-col md="5" class="d-flex align-center">
                   <img src="../assets/i_univer.svg" width="42" class="mr-3">
                   <span class="grey--text text--darken-1 mt-1 mr-1 mr-sm-4">Институт:</span><span class="mt-1">КИДЗ</span>
               </v-col>
               <v-col md="2" class="d-flex align-center justify-sm-center">
                   <img src="../assets/i_book.svg" width="42" class="mr-3">
                   <span class="grey--text text--darken-1 mt-1 mr-1">Курс : 3</span>
               </v-col>
               <v-col md="5" class="d-flex align-center">
                   <img src="../assets/i_cap.svg" width="52" class="mr-3">
                   <span class="grey--text text--darken-1 mt-1 mr-1">ФИО студента:</span> <span class="mt-1">Иванова Анна Владимировна</span>
               </v-col>
            </v-row>  

            <v-row class="graph mb-4">
                <v-col sm="12" class="title_02 pl-md-6 pr-md-6 pl-lg-14 pr-lg-14">Эффективность обучения студента</v-col>
                <!-- <v-col sm="12 pl-md-6 pr-md-6 pl-lg-14 pr-lg-14"><img src="../assets/13_graph.svg" width="100%"></v-col> -->
                <v-row class="pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 px-sm-4">
                    <v-col md="6" sm="12" xs="12">
                        <p>Общая эффективность</p><br>
                        <v-row>
                            <v-col md="12">
                                <apexchart type="polarArea" :options="chartOptions" :series="series" />
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col md="6" sm="12" xs="12">
                        <p>Детализация эффективности по кейсу</p><br>
                        <v-row>
                            <v-col md="9" class="pl-md-0">
                                <!-- <img src="../assets/13_02.svg" alt="" width="100%"> -->
                                <apexchart type="bar" height="430" :options="chartOptions2" :series="series2" />
                            </v-col>
                            <v-col md="3" class="legend pt-6 pl-md-0">
                                <ul class="list">
                                    <li class="d-flex mb-4">
                                        <v-card class="green mr-3"></v-card>
                                        <span>верно</span>
                                    </li>

                                     <li class="d-flex mb-4">
                                        <v-card class="red mr-3"></v-card>
                                        <span>неверно</span>
                                    </li>

                                    <li class="d-flex mb-4">
                                        <v-card class="gray_dark mr-3"></v-card>
                                        <span>Не пройденные</span>
                                    </li>

                                    <li class="d-flex mb-4">
                                        <v-card class="black_dark mr-3"></v-card>
                                        <span>избыточные действия</span>
                                    </li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-row>
        
            <v-row class="pl-md-6 pr-md-6 pl-lg-14 pr-lg-14">
                <v-col md="12" xl="12" class="pl-0">
                    <v-simple-table class="table-standart">
                        <thead>
                            <tr>
                                <td class="pl-0">№</td>
                                <td class="pl-0">Дата назначения</td>
                                <td class="pl-0">Дата прохождения</td>
                                <td class="pl-0">Название кейса</td>
                                <td class="pl-0">Верно</td>
                                <td class="pl-0">Неверно</td>
                                <td class="pl-0">Из. действия</td>
                                <td class="pl-0">Время (мин)</td>
                                <td class="pl-0 red--text">Оценка</td>
                                <td class="pl-0"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>01.10.2020</td>
                                <td>02.10.2020</td>
                                <td>Мальчик, 5 лет, Бронхиальная астма, АК №234</td>
                                <td class="text-center">50</td>
                                <td class="text-center">15</td>
                                <td class="text-center">15</td>
                                <td class="text-center">30</td>
                                <td class="yellow lighten-4 text-center">3</td>
                                <td class="pa-0" width="10">
                                    <v-btn color="primary" class="view table_btn" @click="dialog = true">
                                        <img src="../assets/i_view.svg" alt="" class="mr-xl-2 img_1">
                                        <img src="../assets/i_view_white.svg" alt="" class="mr-xl-2 img_2">
                                        <span class="d-none d-xl-inline">Просмотр</span>
                                    </v-btn>
                                </td>
                            </tr>

                             <tr>
                                <td>2</td>
                                <td>01.10.2020</td>
                                <td>02.10.2020</td>
                                <td>Мальчик, 5 лет, Здоров, АК №333</td>
                                <td class="text-center">50</td>
                                <td class="text-center">15</td>
                                <td class="text-center">15</td>
                                <td class="text-center">30</td>
                                <td class="yellow lighten-4 text-center">3</td>
                                <td class="pa-0" width="10">
                                    <v-btn class="view table_btn">
                                        <img src="../assets/i_view.svg" alt="" class="mr-xl-2 img_1">
                                        <img src="../assets/i_view_white.svg" alt="" class="mr-xl-2 img_2">
                                        <span class="d-none d-xl-inline">Просмотр</span>
                                    </v-btn>
                                </td>
                            </tr>

                             <tr v-if="view3">
                                <td>3</td>
                                <td>01.11.2020</td>
                                <td>-</td>
                                <td>Мальчик, 5 мес., Инвагинация, АК №666</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="yellow lighten-4 text-center">-</td>
                                <td class="pa-0" width="10">
                                    <v-btn @click="del(3)" class="view table_btn delete">
                                        <img src="../assets/i_delete.svg" alt="" class="mr-xl-2 img_1">
                                        <img src="../assets/i_delete__white.svg" alt="" class="mr-xl-2 img_2">
                                        <span class="d-none d-xl-inline">Удалить</span>
                                    </v-btn>
                                </td>
                            </tr>

                             <tr v-if="view4">
                                <td>4</td>
                                <td>02.11.2020</td>
                                <td>-</td>
                                <td>Девочка, 8 лет, геморрагический васкулит, АК №543</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="yellow lighten-4 text-center">-</td>
                                <td class="pa-0" width="10">
                                    <v-btn @click="del(4)" class="view table_btn delete">
                                        <img src="../assets/i_delete.svg" alt="" class="mr-xl-2 img_1">
                                        <img src="../assets/i_delete__white.svg" alt="" class="mr-xl-2 img_2">
                                        <span class="d-none d-xl-inline">Удалить</span>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-col>
            </v-row>

            <v-dialog v-model="dialog" persistent max-width="1050" >
                <v-card>
                    <v-card-title>
                        <span style="color:#1956D7" class="text_01 blue_02 col-md-6 col-xl-6 col">Мальчик, 5 лет, Бронхиальная астма, АК №234</span>
                        <v-spacer />
                        <v-btn icon @click="dialog = false">
                            <v-icon style="color:#DD0726">mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col md="12">
                                <v-simple-table class="table-standart" style="background-color: transparent;">
                                    <thead>
                                        <tr>
                                            <td class="pl-0"></td>
                                            <td class="pl-0">Вопрос задания</td>
                                            <td class="pl-0">Верно</td>
                                            <td class="pl-0">Неверно</td>
                                            <td class="pl-0">Изб. действия</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td>Уровень резистентности организма ребенка определяется:</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">2</td>
                                            <td>К травматическим повреждениям нервной системы не относят:</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">3</td>
                                            <td>Клиническими проявлениями краснушной внутриутробной инфекции являются:</td>
                                            <td></td>
                                            <td></td>
                                            <td>-1</td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">4</td>
                                            <td>Укажите основные компоненты первичного туберкулезного комплекса</td>
                                            <td></td>
                                            <td>-1</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">5</td>
                                            <td>Этиологическим фактором фетального гепатита не может быть</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">6</td>
                                            <td>Основополагающим методом диагностики при ГБН является</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">7</td>
                                            <td>Основной причиной аспирации новорожденных является</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">8</td>
                                            <td>К транзиторным фетальным коммуникациям относят следующие, кроме</td>
                                            <td></td>
                                            <td></td>
                                            <td>-1</td>
                                        </tr>

                                        
                                    </tbody>
                                </v-simple-table>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="12" class="red--text text_01">
                                <h2>Итого набрано: 5 баллов из 8</h2>
                            </v-col>

                            <v-col md="12">
                                <v-btn style="padding:15px" @click="dialog=false" class="cancel_btn">
                                    <img src="../assets/i_close.svg" alt="" width="14" class="mr-2 img_1">
                                    <img src="../assets/i_close__white.svg" alt="" width="14" class="mr-2 img_2">
                                    <span>Закрыть</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>

                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<style lang="stylus" scoped>
    @import '../assets/_13.stylus'
</style>


<script>
    export default {
        data: () => ({
            view3: true,
            view4: true,
            dialog: false,
            absolute: true,
            overlay: false,
            series2: [
                {
                    name: 'Верно',
                    data: [6, 12]
                }, {
                    name: 'Неверно',
                    data: [2, 2]
                }, {
                    name: 'Не пройденные',
                    data: [3, 1]
                }, {
                    name: 'Избыточные действия',
                    data: [1, 1]
                }
            ],
            chartOptions2: {
                chart: {
                    type: 'bar',
                    height: 230
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                legend: {
                    show: false,
                },
                colors: ['#1bb25d', '#dd0726', '#67687c', '#000000'],
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: false,
                    offsetX: -6,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 10,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ['Кейс 1', 'Кейс 2'],
                    // labels: {
                    //     formatter: function (val) {
                    //         return [1,2]
                    //     }
                    // }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + " задание"
                        }
                    }
                },
            },
            series: [50, 15, 20, 15],
            chartOptions: {
                chart: {
                    type: 'polarArea',
                    height: 400
                },
                labels: ['верно - 50%', 'неверно - 15%', 'не пройденные - 20%', 'избыточные действия - 15%'],

                colors: ['#1bb25d', '#dd0726', '#67687c', '#000000'],
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }
                ]
            }
        }),
        methods: {
            backPage(){
                this.$router.push('/10')
            },
            del(e) {
                if (confirm("Вы уверены, что хотите удалить запись?")) {
                    if(e == 3) this.view3 = false
                    if(e == 4) this.view4 = false
                }
            },
        },
        created() {
            // let a = document.getElementsByClassName('apexcharts-toolbar')
            // a.style.display = 'none'
        }
    }
</script>

<style lang="stylus">
.apexcharts-toolbar {
    display: none!important
}
</style>