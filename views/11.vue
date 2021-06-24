<template class="student__main">

    <v-row class="d-flex mb-4">
        <v-col md="12" class="white rounded-xl inner pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-16 pb-4">
            <v-row>
                <div class="title_01 d-flex align-center justify-center">
                    <span class="text">Главная страница</span>
                </div>
            </v-row>
            <v-row>
                <v-col md="12" class="text_02 text-right mt-4">Вы: студент Александр Валерьевич Медяков</v-col>
            </v-row>
           
           <v-row class="mb-lg-2 mb-xl-4">
                <v-col md="12" xl="12" class="d-flex align-center justify-end">
                    <profile-btn />
                </v-col>
            </v-row>

            <v-row>
                <v-col md="12" xl="12" class="pl-0">
                    <v-simple-table class="table-standart">
                        <thead>
                            <tr>
                                <td class="align-center pl-0">
                                    <span @click="sorting('number')">Номер</span>
                                    <i v-show="propertyName === 'number'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0">
                                    <span @click="sorting('date')">Дата</span>
                                    <i v-show="propertyName === 'date'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0">
                                    <span @click="sorting('name_zad')">Название задания</span>
                                    <i v-show="propertyName === 'name_zad'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0">
                                    <span @click="sorting('status_zad')">Статус задания</span>
                                    <i v-show="propertyName === 'status_zad'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0">
                                    <span @click="sorting('srok')">Срок выполнения</span>
                                    <i v-show="propertyName === 'srok'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0">
                                    <span @click="sorting('ocenka')">Оценка</span>
                                    <i v-show="propertyName === 'ocenka'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row in sortingList(array)">
                                <td class="text-center" width="10">{{row.number}}</td>
                                <td>{{row.date}}</td>
                                <td>{{row.name_zad}}</td>
                                <td>{{row.status_zad}}</td>
                                <td>{{row.srok}}</td>
                                <td>{{row.ocenka}}</td>
                                <td class="pa-0">
                                    <v-btn v-if="row.number==1||row.number==3||row.number==4||row.number==5" :color="row.number == 1 ? 'primary' : ''" @click="dialogEvent(row.number)" class="view table_btn">
                                        <img src="../assets/i_view.svg" alt="" class="mr-xl-2 img_1">
                                        <img src="../assets/i_view_white.svg" alt="" class="mr-xl-2 img_2">
                                        <span class="d-none d-xl-inline">Просмотр</span>
                                    </v-btn>

                                    <v-btn color="primary" @click="dialog2=true" v-if="$route.query.success&&row.number == 2" class="view table_btn">
                                        <img src="../assets/i_view.svg" alt="" class="mr-xl-2 img_1">
                                        <img src="../assets/i_view_white.svg" alt="" class="mr-xl-2 img_2">
                                        <span class="d-none d-xl-inline">Просмотр</span>
                                    </v-btn>

                                    <v-btn v-if="row.number==2&&!$route.query.success" @click="route" class="table_btn green_btn justify-start">
                                        <img src="../assets/i_begin.svg" alt="" class="mr-xl-3 img_1">
                                        <img src="../assets/i_begin__green.svg" alt="" class="mr-xl-3 img_2">
                                        <span class="d-none d-xl-inline">Начать</span>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-col>
            </v-row>

            <v-dialog v-model="dialog" persistent max-width="1200" >
                <v-card>
                    <v-card-title>
                        <span style="color:#1956D7" class="text_01 blue_02 col-md-6 col-xl-6 col">Результаты обучения</span>
                        <v-spacer />
                        <v-btn color="white" @click="dialog = false" class="close">
                            <img src="../assets/i_close.svg" alt="">
                        </v-btn>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col md="12" class="pl-0">
                                <v-simple-table class="table-standart" style="background-color: transparent;">
                                    <thead>
                                        <tr>
                                            <td class="pl-0">Номер</td>
                                            <td class="pl-0">Дата назначения</td>
                                            <td class="pl-0">Дата прохождения</td>
                                            <td class="pl-0">Время прохождения (мин)</td>
                                            <td class="pl-0">Наименование задания</td>
                                            <td class="pl-0">Оценка</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td>11.02.2020</td>
                                            <td>12.02.2020</td>
                                            <td>60</td>
                                            <td>Мальчик, 5 лет, Здоров, АК №333"</td>
                                            <td>4</td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-title>
                        <span style="color:#1956D7" class="text_01 blue_02 col-md-6 col-xl-6 col">Реакция на полученную информацию</span>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col md="12" class="pl-0">
                                <v-simple-table class="table-standart" style="background-color: transparent;">
                                    <thead>
                                        <tr>
                                            <td class="pl-0"></td>
                                            <td class="pl-0">Информация</td>
                                            <td class="pl-0">Верно</td>
                                            <td class="pl-0">Неверно</td>
                                            <td class="pl-0">Пропущено</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="col-8">Цианоз носогубного треугольника</td>
                                            <td class="text-center">1</td>
                                            <td class="text-center"></td>
                                            <td class="text-center"></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">2</td>
                                            <td class="col-8">Характер пальцев “барабанные палочки”</td>
                                            <td class="text-center"></td>
                                            <td class="text-center"></td>
                                            <td class="text-center">-1</td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">3</td>
                                            <td class="col-8">Верхушечный толчок средней высоты</td>
                                            <td class="text-center">1</td>
                                            <td class="text-center"></td>
                                            <td class="text-center"></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">4</td>
                                            <td class="col-8">Щитовидная железа визуально не увеличена</td>
                                            <td class="text-center">1</td>
                                            <td class="text-center"></td>
                                            <td class="text-center"></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">5</td>
                                            <td class="col-8">В области запястий мелкоточесная сыпь</td>
                                            <td class="text-center">1</td>
                                            <td class="text-center"></td>
                                            <td class="text-center"></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">6</td>
                                            <td class="col-8">Притупления перкуторного звука над лоном нет</td>
                                            <td class="text-center">1</td>
                                            <td class="text-center"></td>
                                            <td class="text-center"></td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md="12" class="red--text text_01">
                                Итого набрано: 4 балла из 6
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-actions>
                        <v-row>
                            <v-col>
                                <v-btn color="white" @click="dialog = false" class="close_btn" height="50" width="190">
                                    <img src="../assets/i_close.svg" alt="" width="14" class="mr-2">
                                    <span class="red--text">Закрыть</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="dialog2" persistent max-width="1200" >
                <v-card>
                    <v-card-title>
                        <span style="color:#1956D7" class="text_01 blue_02 col-md-6 col-xl-6 col">Результаты обучения</span>
                        <v-spacer />
                        <v-btn color="white" @click="dialog2 = false" class="close">
                            <img src="../assets/i_close.svg" alt="">
                        </v-btn>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col md="12" class="pl-0">
                                <v-simple-table class="table-standart" style="background-color: transparent;">
                                    <thead>
                                        <tr>
                                            <td class="pl-0">Номер</td>
                                            <td class="pl-0">Дата назначения</td>
                                            <td class="pl-0">Дата прохождения</td>
                                            <td class="pl-0">Время прохождения (мин)</td>
                                            <td class="pl-0">Наименование задания</td>
                                            <td class="pl-0">Оценка</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">2</td>
                                            <td>12.02.2020</td>
                                            <td>13.02.2020</td>
                                            <td>30</td>
                                            <td>Мальчик, 5 лет, Бронхиальная астма, АК №234</td>
                                            <td>4</td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-title>
                        <span style="color:#1956D7" class="text_01 blue_02 col-md-6 col-xl-6 col">Реакция на полученную информацию</span>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col md="12" class="pl-0">
                                <v-simple-table class="table-standart" style="background-color: transparent;">
                                    <thead>
                                        <tr>
                                            <td class="pl-0"></td>
                                            <td class="pl-0">Информация</td>
                                            <td class="pl-0">Верно</td>
                                            <td class="pl-0">Неверно</td>
                                            <td class="pl-0">Пропущено</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, ind) in array_result">
                                            <td class="text-center">{{ind+1}}</td>
                                            <td class="col-8">{{row.name}}</td>
                                            <td class="text-center">{{row.val1}}</td>
                                            <td class="text-center">{{row.val2}}</td>
                                            <td class="text-center">{{row.val3}}</td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md="12" class="red--text text_01">
                                Итого набрано: 21 балла из 31
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-actions>
                        <v-row>
                            <v-col>
                                <v-btn color="white" @click="dialog2 = false" class="close_btn" height="50" width="190">
                                    <img src="../assets/i_close.svg" alt="" width="14" class="mr-2">
                                    <span class="red--text">Закрыть</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-col>
    </v-row>

</template>

<script>
import profileBtn from '../components/profileBtn'
import orderBy from 'lodash.orderby'

export default {
    components: {profileBtn},
    data: () => ({
        array_result: [
            {name: 'Приступы сухого кашля, затрудненного дыхания, больше затруднен выдох. ', val1: '1', val2: '', val3: ''},
            {name: 'Приступы повторяются второй год в мае, так же отмечаются эпизоды отека губ при употреблении в пищу сырых яблок', val1: '1', val2: '', val3: ''},
            {name: 'У отца - бронхиальная астма, поллиноз', val1: '', val2: '', val3: '-1'},
            {name: 'Сенсибилизация к пыльце березы, в мае - приступы бронхиальной обструкции, эпизоды отека губ при употреблении в пищу сырых яблок', val1: '1', val2: '', val3: ''},
            {name: 'Первая беременность, протекала физиологически, во время беременности заболеваний не отмечалось, мать не курила, алкоголь и наркотических веществ не употребляла', val1: '1', val2: '', val3: ''},
            {name: 'Роды самостоятелные, на сроке 38 недель, осложнений не было, закричал сразу', val1: '1', val2: '', val3: ''},
            {name: 'кожный покров бледно-розовый', val1: '', val2: '-1', val3: ''},
            {name: 'цианоз носогубного треугольника', val1: '', val2: '', val3: '-1'},
            {name: 'кашель сухой приступообразный', val1: '1', val2: '', val3: ''},
            {name: 'экспираторная одышка', val1: '1', val2: '', val3: ''},
            {name: 'выделений нет', val1: '1', val2: '', val3: ''},
            {name: 'носовое дыхание сохранено', val1: '1', val2: '', val3: ''},
            {name: 'признаков хронической гипоксии нет', val1: '1', val2: '', val3: ''},
            {name: 'обе половины грудной клетки участвуют в акте дыхания симметрично', val1: '1', val2: '', val3: ''},
            {name: 'втяжения уступчивых мест грудной клетки нет', val1: '1', val2: '', val3: ''},
            {name: 'тип дыхания - брюшной', val1: '1', val2: '', val3: ''},
            {name: 'частота дыхания 30 в минуту', val1: '', val2: '', val3: '-1'},
            {name: 'ритм дыхания правильный', val1: '1', val2: '', val3: ''},
            {name: 'пальпация грудной клетки безболезненна', val1: '1', val2: '', val3: ''},
            {name: 'эластичность грудной клетки сохранена', val1: '1', val2: '', val3: ''},
            {name: 'голосовое дрожание равномерно ослаблено над симметричными участками грудной клетки ', val1: '', val2: '-1', val3: ''},
            {name: 'при сравнительной перкусии над симметричными участками грудной клетки перкуторный звук коробочный', val1: '1', val2: '', val3: ''},
            {name: 'перкуторный звук симметричен', val1: '1', val2: '', val3: ''},
            {name: 'высота стояния верхушек легких - не определяется', val1: '1', val2: '', val3: ''},
            {name: 'при аускультации легких дыхание жесткое бронхиальное', val1: '1', val2: '', val3: ''},
            {name: 'дыхание нормальной звучности', val1: '1', val2: '', val3: ''},
            {name: 'проводится симметрично', val1: '1', val2: '', val3: ''},
            {name: 'выслушиваются дополнительные дыхательные шумы: рассеянные сухие свистящие хрипы', val1: '1', val2: '', val3: ''},
            {name: 'крепитации нет', val1: '1', val2: '', val3: ''},
            {name: 'шума трения плевры нет', val1: '1', val2: '', val3: ''},
            {name: 'бронхофония не изменена', val1: '1', val2: '', val3: ''}
        ],
        array: [
            {date: '11.02.20', number: 1, name_zad: 'Мальчик, 5 лет, Здоров, АК №333', status_zad: 'завершен успешно', srok: '12.02.20', ocenka: 4},
            {date: '12.02.20', number: 2, name_zad: 'Мальчик, 5 лет, Бронхиальная астма, АК №234', status_zad: 'новый', srok: '13.02.20', ocenka: null},
            {date: '13.02.20', number: 3, name_zad: 'Мальчик, 5 мес., Ивагинация, АК №666', status_zad: 'завершен успешно', srok: '13.02.20', ocenka: 5}
        ],
        dialog: false,
        dialog2: false,
        propertyName: 'number',
        reverse: false,
        sortDirection: 'asc'
    }),
    methods: {
        route() {
            this.$router.push('/12')
        },
        sorting(name) {
            this.propertyName = name;
            this.sortDirection = this.reverse === false ? 'asc' : 'desc';
            this.reverse = !this.reverse;
        },
        sortingList(data){
            return orderBy(data, this.propertyName, this.sortDirection )
        },
        dialogEvent(id) {
            if(id == 1) this.dialog = true
        }
    },
    created() {
        if(this.$route.query.success == 'true') {
            this.dialog2 = true
            this.array.forEach(el => {
                if(el.number == 2) {
                    el.status_zad = 'завершен успешно'
                    el.ocenka = 4
                }
            })
        }
    }
}
</script>

<style lang="stylus">
@import '../assets/_11.stylus'
.student__main {
    .table-standart {
        .table_btn {
            .v-btn__content {
                justify-content: start !important;
            }
        }
    }
}
</style>

