<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" xl="12" class="white rounded-xl page_met__02 inner pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-10">
            <v-row class="mb-2">
                <v-col md="10" xl="6" class="blue_02 title_02">Справочник частей тела</v-col>
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
                                    <v-btn @click="openDialog(item)" color="primary" class="view table_btn">
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

        <v-dialog v-model="dialog" persistent max-width="450" >
            <v-card>
                <v-card-title>
                    <span style="color:#1956D7">Схема частей человека</span>
                    <v-spacer />
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text style="color:#FF0606">{{info}}</v-card-text>
                
                <center>
                    <human-front :viewText="false" :show="true" :check="false" v-show="human_view"/>
                    <human-rear :viewText="false" :show="true" :check="false" v-show="!human_view" />
                </center>
                <center>
                    <v-btn @click="human_view=!human_view" text class="darken-3 white--text">
                        <img src="../assets/i_change_view.svg" width="50" class="mr-2">
                    </v-btn>
                </center>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import humanFront from '../components/humanFront'
import humanRear from '../components/humanRear'
import skinFront from '../components/skinFront.json'
import skinRear from '../components/skinRear.json'

export default {
    components: {humanFront, humanRear},
    data() {
        return {
            skins_rear: skinRear,
            skins_front: skinFront,
            human_view: true,
            info: '',
            dialog: false,
            search: '',
            array :[
                {id: 1,name: 'Голова',type: 'sp'},
                {id: 2,name: 'Шея',type: 'sp'},
                {id: 3,name: 'Грудная клетка',type: 'sp'},
                {id: 4,name: 'Плечо (правое и левое)',type: 'sp'},
                {id: 5,name: 'Предплечье (правое и левое)',type: 'sp'},
                {id: 6,name: 'Кисть (правая и левая)',type: 'sp'},
                {id: 7,name: 'Живот',type: 'sp'},
                {id: 8,name: 'Бедро (правое и левое)',type: 'sp'},
                {id: 9,name: 'Голень (правая и левая)',type: 'sp'},
                {id: 10,name: 'Стопа (правая и левая)',type: 'sp'},
                {id: 22,name: 'Паховая область',type: 'sp'},

                {id: 11,name: 'Голова сзади',type: 'sz'},
                {id: 12,name: 'Шея сзади',type: 'sz'},
                {id: 13,name: 'Спина',type: 'sz'},
                {id: 14,name: 'Поясничная область',type: 'sz'},
                {id: 15,name: 'Бедро сзади (правое и левое)',type: 'sz'},
                {id: 16,name: 'Голень сзади (правая и левая)',type: 'sz'},
                {id: 17,name: 'Стопа (правая и левая)',type: 'sz'},
                {id: 18,name: 'Плечо сзади (правое и левое)',type: 'sz'},
                {id: 19,name: 'Предплечье сзади (правое и левое)',type: 'sz'},
                {id: 20,name: 'Тыльная поверхность кисти (правая и левая)',type: 'sz'},
                {id: 21,name: 'Ягодицы',type: 'sz'}
            ],
            default_array :[
                {id: 1,name: 'Голова',type: 'sp'},
                {id: 2,name: 'Шея',type: 'sp'},
                {id: 3,name: 'Грудная клетка',type: 'sp'},
                {id: 4,name: 'Плечо (правое и левое)',type: 'sp'},
                {id: 5,name: 'Предплечье',type: 'sp'},
                {id: 6,name: 'Кисть (правая и левая)',type: 'sp'},
                {id: 7,name: 'Живот',type: 'sp'},
                {id: 8,name: 'Бедро (правое и левое)',type: 'sp'},
                {id: 9,name: 'Голень (правая и левая)',type: 'sp'},
                {id: 10,name: 'Стопа (правая и левая)',type: 'sp'},
                {id: 22,name: 'Паховая область',type: 'sp'},
                {id: 11,name: 'Голова сзади',type: 'sz'},
                {id: 12,name: 'Шея сзади',type: 'sz'},
                {id: 13,name: 'Спина',type: 'sz'},
                {id: 14,name: 'Поясничная область',type: 'sz'},
                {id: 15,name: 'Бедро сзади (правое и левое)',type: 'sz'},
                {id: 16,name: 'Голень сзади (правая и левая)',type: 'sz'},
                {id: 17,name: 'Стопа (правая и левая)',type: 'sz'},
                {id: 18,name: 'Плечо сзади (правое и левое)',type: 'sz'},
                {id: 19,name: 'Предплечье сзади (правое и левое)',type: 'sz'},
                {id: 20,name: 'Тыльная поверхность кисти (правая и левая)',type: 'sz'},
                {id: 21,name: 'Ягодицы',type: 'sz'}
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
        },
        openDialog(e) {
            this.human_view = e.type == 'sp' ? true : false
            this.dialog = true
            this.info = e.name
            if(e.type == 'sp') {
                this.skins_front.forEach(el => { 
                    if(el.id_check == e.id) {
                        el.class = 'check'
                    } else {
                        el.class = 'origin'
                    }
                })
            } else {
                this.skins_rear.forEach(el => { 
                    if(el.id_check == e.id) {
                        el.class = 'check'
                    } else {
                        el.class = 'origin'
                    }
                })
            }
        },
        close(){
            this.dialog = false
        }
    }
}
</script>

<style>
    .v-dialog.v-dialog--active.v-dialog--persistent {
        overflow: hidden;
    }
</style>