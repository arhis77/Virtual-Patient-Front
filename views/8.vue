<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" xl="12" class="white rounded-xl page_met__02 inner pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-16">
            <v-row class="mb-5">
                <v-col md="10" xl="6" class="blue_02 title_02">Справочник систем организма человека</v-col>
                <v-col md="2" xl="6" class="d-flex align-center justify-end">
                    <v-btn @click="backPage" text class="profile text--right rounded-lg">
                        <img src="../assets/arrow_left.svg" alt="" class="mr-2 mt-1" width="24">
                        <span>Назад</span>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col md="12">
                    <div class="blue_01 title_02">Введите искомое слово</div>
                </v-col>
            </v-row>

            <v-row>
                <v-col md="6" sm="12">
                    <v-form>
                        <v-text-field v-model="search" @input="searchArray" placeholder="Введите искомое слово" filled class="search_input"></v-text-field>
                    </v-form>
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
export default {
    data() {
        return {
            search: '',
            array :[
                {name: 'Дыхательная система'},
                {name: 'Пищеварительная система человека'},
                {name: 'Мочевыделительная система'},
                {name: 'Опорно-двигательный аппарат'},
                {name: 'Сердечно-сосудистая система'},
                {name: 'Нервная система и органы чувств'},
                {name: 'Эндокринная система'},
                {name: 'Органы кроветворения и иммунной системы'},
                {name: 'Кожа, подкожно-жировая клетчака'},
                {name: 'Репродуктивная система'}
            ],
            default_array :[
                {name: 'Дыхательная система'},
                {name: 'Пищеварительная система человека'},
                {name: 'Мочевыделительная система'},
                {name: 'Опорно-двигательный аппарат'},
                {name: 'Сердечно-сосудистая система'},
                {name: 'Нервная система и органы чувств'},
                {name: 'Эндокринная система'},
                {name: 'Органы кроветворения и иммунной системы'},
                {name: 'Кожа, подкожно-жировая клетчака'},
                {name: 'Репродуктивная система'}
            ],
        }
    },
    methods: {
        backPage() {
            this.$router.push('/guid')
        },
        searchArray(e) {
            if(e) this.array = this.array.filter(f=>f.name.toLowerCase().includes(e.toLowerCase()))
            else this.array = this.default_array
        }
    }
}
</script>