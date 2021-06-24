<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" xl="12" class="white rounded-xl page_met__02 inner pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-16">
            <v-row class="mb-5">
                <v-col md="6" xl="6" class="text_01 red--text">Порядок действий</v-col>
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
                    <v-btn text class="btn text--right rounded-lg green px-6 py-8">
                        <img src="../assets/i_add.svg" alt="" class="mr-3" width="28">
                        <span class="white--text">Добавить порядок действий</span>
                    </v-btn>
                </v-col>
            </v-row>

           <v-row>
                <v-col md="12" xl="12" class="pl-0">
                    <v-simple-table class="table-standart">
                        <tbody>
                            <tr v-for="(item, ind) in array" :key="ind">
                                <td class="col-10">{{item.name}}</td>
                                <td class="pa-0">
                                    <v-btn @click="route(item.id)" :color="item.id ? 'primary' : ''" class="view table_btn">
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
                {id: 1,name: 'Плановый педиатрический прием'},
                {name: 'Плановый хирургический прием'},
                {name: 'Неотложная помощь'},
            ],
            default_array :[
                {id: 1,name: 'Плановый педиатрический прием'},
                {name: 'Плановый хирургический прием'},
                {name: 'Неотложная помощь'},
            ],
        }
    },
    components: {profileBtn},
    methods: {
        backPage() {
            this.$router.push('/1')
        },
        route(id) {
            if(id) this.$router.push('/5')
        }
    }
}
</script>