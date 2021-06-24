<template>
    <v-row class="d-flex mb-4">
        <v-col md="12" xl="12" class="white inner rounded-xl pb-10 pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-8">
            <v-row class="mb-4">
                <v-col md="6" xl="6" class="title_02 red--text">Задания</v-col>
                <v-col md="6" xl="6" class="d-flex align-center justify-end">
                    <profile-btn />
                    <span>|</span>
                    <v-btn @click="backPage" text class="profile text--right rounded-lg">
                        <img src="../assets/arrow_left.svg" alt="" class="mr-2 mt-1" width="24">
                        <span>Назад</span>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row class="mb-lg-2 mb-xl-4">
                <v-col md="12" xl="12">
                    <v-btn @click="create" text class="btn_02 text--right rounded-8 green px-6 py-8">
                        <img src="../assets/i_plus.svg" alt="" class="mr-3 i_plus"> 
                        <span class="white--text">Создать задание</span>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col md="12" xl="12" class="pb-0">
                    <span class="blue_02 title_02">Список заданий</span>
                </v-col>
            </v-row>

            <v-row>
                <v-col md="12" xl="12" class="pl-0">
                    <v-simple-table class="table-standart">
                        <tbody>
                            <tr v-for="(item, ind) in array" :key="ind">
                                <td class="col-10">{{item.name}}</td>
                                <td class="pa-0">
                                    <v-btn class="view table_btn">
                                        <img src="../assets/i_view.svg" alt="" class="mr-xl-2 img_1">
                                        <img src="../assets/i_view_white.svg" alt="" class="mr-xl-2 img_2">
                                        <span class="d-none d-xl-inline">Просмотр</span>
                                    </v-btn>
                                </td>
                                <td class="pa-0">
                                    <v-btn class="edit table_btn">
                                        <img src="../assets/i_edit.svg" alt="" class="mr-xl-2 img_1">
                                        <img src="../assets/i_edit__white.svg" alt="" class="mr-xl-2 img_2">
                                        <span class="d-none d-xl-flex align-center" style="height: 48px;">Редактировать</span>
                                    </v-btn>
                                </td>
                                  <td class="pa-0">
                                    <v-btn class="delete table_btn">
                                        <img src="../assets/i_delete.svg" alt="" class="img_1">
                                        <img src="../assets/i_delete__white.svg" alt="" class="img_2">
                                    </v-btn>
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

export default {
    data() {
        return {
            search: '',
            array :[
                {name: 'Мальчик, 5 лет, Здоров, АК №333'},
                {name: 'Мальчик, 5 лет, Бронхиальная астма, АК №234'},
                {name: 'Мальчик, 5 мес., Инвагинация, АК №666'},
            ],
            default_array :[
                {name: 'Мальчик, 5 лет, Здоров, АК №333'},
                {name: 'Мальчик, 5 лет, Бронхиальная астма, АК №234'},
                {name: 'Мальчик, 5 мес., Инвагинация, АК №666'},
            ],
        }
    },
    components: {profileBtn},
    methods: {
        backPage() {
            this.$router.push('/1')
        },
        create() {
            this.$router.push('/3')
        }
    }
}
</script>


<style lang="stylus">
	@import '../assets/_2.stylus'
</style>