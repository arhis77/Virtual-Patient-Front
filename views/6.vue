<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" xl="12" class="white rounded-xl page_met__02 inner pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-16">
            <v-row class="mb-5">
                <v-col md="6" xl="6" class="text_01 red--text">Знания</v-col>
                <v-col md="6" xl="6" class="d-flex align-center justify-end">
                    <profile-btn />
                    <span>|</span>
                    <v-btn @click="backPage" text class="profile text--right rounded-lg">
                        <img src="../assets/arrow_left.svg" alt="" class="mr-2 mt-1" width="24">
                        <span>Назад</span>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row class="mb-5">
                <v-col md="12" xl="12">
                    <v-btn @click="route(1)" text class="text--right rounded-lg green pa-8 mr-6 btn_02">
                        <img src="../assets/i_plus.svg" alt="" class="mr-sm-3 mr-lg-6">
                        <span class="white--text">Добавить факт</span>
                    </v-btn>
                    <v-btn @click="route(2)" text class="text--right rounded-lg pa-8 standart_btn btn_02">
                        <img src="../assets/graph_01.svg" alt="" class="mr-sm-3 mr-lg-6" width="35">
                        <span class="green--text">Граф знаний</span>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col md="12" xl="12" class="text_01 blue_02">Таблица фактов</v-col>
            </v-row>

            <v-row>
                <v-col md="12" xl="12">
                    <v-form class="form">
                        <v-row>
                            <v-col md="6" xl="6">
                                <v-select @change="changeSel" v-model="sel" :items="listItems" item-text="name" item-value="id" outlined placeholder="Дыхательная система" />
                            </v-col>
                            <v-col md="6" xl="6">
                                <v-select v-model="sel2" @change="changeSel2" :items="['Бронхиальная астма','Здоровый ребенок']" outlined placeholder="Сценарии" />
                            </v-col>
                            <!-- <v-col md="2" xl="2">
                                <v-btn text class="profile text--right rounded-lg pa-7 standart_btn btn_02">
                                    <span class="green--text">Выбрать</span>
                                </v-btn>
                            </v-col> -->
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>

            <v-row>
                <v-col md="12" lg="12">
                     <v-simple-table id="table_01" class="table_01">
                         <thead>
                             <tr>
                                 <td class="">Уровень ветви</td>
                                 <td class="">Показатель</td>
                                 <td class="">Мальчик 5 лет, здоров</td>
                                 <td v-if="sel2"></td>
                             </tr>
                         </thead>
                        <tbody>
                            <tr v-for="row in table" :style="`background-color:${row.color}`">
                                <td style="color:black" class="rounded">{{row.level}}</td>
                                <td style="color:black" class="rounded">{{row.name}}</td>
                                <td style="color:black" class="rounded">{{row.value}}</td>
                                <td v-if="sel2">
                                    <v-checkbox v-if="row.level !== 1 && row.level !== 2" v-model="row.check" />
                                </td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-col>
            </v-row>

        </v-col>
    </v-row>

</template>

<script>
import profileBtn from '../components/profileBtn'
import tableList from '../components/table_list.json'

export default {
    components: {profileBtn},
    methods: {
        backPage() {
            this.$router.push('/1')
        },
        route(e) {
            if(e == 1) this.$router.push('/7')
            else this.$router.push('/graf')
        },
        changeSel(e) {
            // if(e == 1) {this.table = tableList.jalobi; this.value2 = false}
            if(e == 2) {this.table = tableList.antenatalniy_period; this.value2 = false}
            if(e == 3) {this.table = tableList.dih_sis; this.value2 = false}
            if(e == 4) {this.table = tableList.ser_sos_sis; this.value2 = false}
            if(e == 5) {this.table = tableList.pish_sis_chel; this.value2 = false}
            if(e == 6) {this.table = tableList.skin_lim; this.value2 = false}
            if(e == 7) {this.table = tableList.mvs; this.value2 = true}
        },
        changeSel2(e) {
            if(e == 'Бронхиальная астма') {
                tableList.dih_sis.forEach(el => { if(el.id) el.check = true })
                tableList.antenatalniy_period.forEach(el => { if(el.id) el.check = true })
            } else {
                tableList.dih_sis.forEach(el => { el.check = false })
                tableList.antenatalniy_period.forEach(el => { el.check = false })
            }
        }
    },
    data() {
        return {
            value2: false,
            sel: 2,
            sel2: null,
            table: tableList.antenatalniy_period,
            listItems: [
                {id:2, name: 'Анамнез жизни'},
                {id:3, name: 'Дыхательная система'},
                {id:4, name: 'Сердечно-сосудистая системы'},
                {id:5, name: 'Пищеварительная система человека'},
                {id:6, name: 'Кожа, подкожно-жировая клетчатка'},
                {id:7, name: 'Мочевыделительная система'}
            ]
        }
    }
}
</script>

<style lang="stylus">
    @import '../assets/_6.stylus'
</style>