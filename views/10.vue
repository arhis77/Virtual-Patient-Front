<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" class="white rounded-xl inner pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-16 pb-4">

            <v-row>
                <div class="title_01 d-flex align-center justify-center">
                    <span class="text">Главная страница</span>
                </div>
            </v-row>
            <v-row class="mb-4">
                <v-col md="12" class="text_02 text-right mt-4">Вы: преподаватель Ирина Викторовна Смирнова</v-col>
            </v-row>
           
           <v-row class="mb-lg-2 mb-xl-4">
                <v-col md="6" xl="6">
                    <v-btn @click="dialog=true" text class="btn text--right rounded-lg green px-6 py-8">
                        <img src="../assets/i_add.svg" alt="" class="mr-3" width="28">
                        <span class="white--text">Назначить задание</span>
                    </v-btn>
                </v-col>

                <v-col md="6" xl="6" class="d-flex align-center justify-end">
                    <profile-btn />
                    <!-- <span>|</span> -->
                    <!-- <v-btn @click="route(2)" text class="profile text--right rounded-lg">
                        <img src="../assets/i_logout.svg" class="mr-2 mt-1" width="26">
                        <span>Выход</span>
                    </v-btn> -->
                </v-col>
            </v-row>

            <v-row>
                <v-col md="12" xl="12" class="pl-0">
                    <v-simple-table class="table-standart">
                        <thead>
                            <tr>
                                <td class="pl-0">
                                    <span @click="sorting('univer')">Институт</span>
                                    <i v-show="propertyName === 'univer'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0">
                                    <span @click="sorting('course')">Курс</span>
                                    <i v-show="propertyName === 'course'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0">
                                    <span @click="sorting('group')">Группа</span>
                                    <i v-show="propertyName === 'group'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0">
                                    <span @click="sorting('fio')" >ФИО студента</span>
                                    <i v-show="propertyName === 'fio'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0">
                                    <span @click="sorting('tasks_assigned')">Назначено заданий</span>
                                    <i v-show="propertyName === 'tasks_assigned'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                                <td class="pl-0">
                                    <span @click="sorting('completed_tasks')">Пройдено заданий</span>
                                    <i v-show="propertyName === 'completed_tasks'" :class="{sorted: !reverse, sorted_revers: reverse}"/>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,ind) in sortingList(array)" :key="ind">
                                <td class="">
                                    <span class="col-md-12">{{item.univer}}</span>
                                </td>
                                <td class="text-center" width="10">
                                    {{item.course}}
                                </td>
                                <td width="">
                                    <span class="">{{item.group}}</span>
                                </td>
                                <td class="" width="">
                                    <span class="">{{item.fio}}</span>
                                </td>
                                 <td class="text-center"  width="10">
                                    {{item.tasks_assigned}}
                                </td>
                                 <td class="text-center"  width="10">
                                    {{item.completed_tasks}}
                                </td>
                                <td class="pa-0" width="10">
                                    <v-btn class="edit table_btn" @click="dialogSTUDAdd(item)">
                                        <img src="../assets/i_add_green.svg" alt="" class="mr-xl-2 img_1">
                                        <img src="../assets/i_add.svg" alt="" class="mr-xl-2 img_2">
                                        <span class="d-none d-xl-flex align-center" style="height: 48px;">Назначить задание</span>
                                    </v-btn>
                                </td>
                                <td class="pa-0" width="10">
                                    <v-btn @click="route(item)" :color="item.id == 1 ? 'primary' : ''" class="view table_btn">
                                        <img src="../assets/i_view.svg" alt="" class="mr-xl-2 img_1">
                                        <img src="../assets/i_view_white.svg" alt="" class="mr-xl-2 img_2">
                                        <span class="d-none d-xl-inline">Просмотр</span>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-col>
            </v-row>

            <!-- ADD TASK FOR GROUP -->
            <v-dialog v-model="dialog" persistent max-width="1050" >
                <v-card>
                    <v-card-title>
                        <span style="color:#1956D7" class="text_01 blue_02 col-md-6 col-xl-6 col">Назначить задание</span>
                        <v-spacer />
                        <v-btn icon @click="cancel">
                            <v-icon style="color:#DD0726">mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col md="12">
                                <v-form>
                                    <v-row>
                                        <v-col sm="3">
                                            <v-label>Институт</v-label>
                                        </v-col>
                                        <v-col sm="2">
                                            <v-label>Курс</v-label>
                                        </v-col>
                                        <v-col sm="2">
                                            <v-label>Группа</v-label>
                                        </v-col>
                                        <v-col sm="3">
                                            <v-label>Название задания</v-label>
                                        </v-col>
                                        <v-col sm="2">
                                            <v-label>Срок сдачи</v-label>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col sm="3">
                                            <v-select v-model="dialogObj.univer" :items="['Все', 'КИДЗ']" placeholder="Выбрать..." outlined></v-select>
                                        </v-col>
                                        <v-col sm="2">
                                            <v-select v-model="dialogObj.course" :items="['Все', '1', '2', '3', '4']" placeholder="Выбрать..." outlined></v-select>
                                        </v-col>
                                        <v-col sm="2">
                                            <v-select v-model="dialogObj.group" :items="['Все', '02-01','02-02','02-03','02-04']" placeholder="Выбрать..." outlined></v-select>
                                        </v-col>
                                        <v-col sm="3">
                                            <v-select v-model="dialogObj.tasks_assigned" :items="['Все', 'Мальчик, 5 лет, Здоров, АК №333', 'Мальчик, 5 лет, Бронхиальная астма, АК №234', 'Мальчик, 5 мес., Ивагинация, АК №666']" placeholder="Выбрать..." outlined></v-select>
                                        </v-col>
                                        <v-col sm="2">
                                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="dateFormated"
                                                        label="Выберите дату"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        class="date_input mt-0"
                                                    />
                                                </template>
                                                <v-date-picker :min="new Date().toISOString().substr(0, 10)" locale="ru" outlined v-model="date" scrollable>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="modal = false"> Отмена </v-btn>
                                                    <v-btn text color="primary" @click="$refs.dialog.save(date)">
                                                    ВЫБРАТЬ
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-actions>
                        <v-row>
                            <v-col>
                                <v-btn @click="saveTask(dialogObj, 1)" class="add_btn mr-4" height="50" style="height: 50px !important;">
                                    <img src="../assets/i_add_green.svg" alt="" class="mr-2 img_1">
                                    <img src="../assets/i_add.svg" alt="" class="mr-2 img_2">
                                    <span class="align-center">Назначить задание</span>
                                </v-btn>
                            
                                <v-btn @click="cancel" class="cancel_btn">
                                    <img src="../assets/i_close.svg" alt="" width="14" class="mr-2 img_1">
                                    <img src="../assets/i_close__white.svg" alt="" width="14" class="mr-2 img_2">
                                    <span>Отменить</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
                <v-snackbar
                    v-model="snackbar"
                    :color="snackbarColor"
                    :timeout="6000"
                    top
                    >
                        {{snackbarText}}
                </v-snackbar>
            </v-dialog>

            <!-- ADD TASK FOR STUDENT -->
            <v-dialog v-model="dialogSTUD" persistent max-width="1050" >
                <v-card>
                    <v-card-title>
                        <span style="color:#1956D7" class="text_01 blue_02 col-md-6 col-xl-6 col">Назначить задание студенту</span>
                        <v-spacer />
                        <v-btn icon @click="cancel">
                            <v-icon style="color:#DD0726">mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col md="12">
                                <v-form>
                                    <v-row>
                                        <v-col sm="4">
                                            <v-label>ФИО студента</v-label>
                                        </v-col>
                                        <v-col sm="4">
                                            <v-label>Название задания</v-label>
                                        </v-col>
                                        <v-col sm="3">
                                            <v-label>Срок сдачи</v-label>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col sm="4">
                                            <v-select disabled v-model="dialogStudObj.fio" :items="array" item-text="fio" placeholder="Выбрать..." outlined></v-select>
                                        </v-col>
                                        <v-col sm="4">
                                            <v-select v-model="dialogStudObj.tasks_assigned" :items="['Мальчик, 5 лет, Здоров, АК №333', 'Мальчик, 5 лет, Бронхиальная астма, АК №234', 'Мальчик, 5 мес., Инвагинация, АК №666']" placeholder="Выбрать..." outlined></v-select>
                                        </v-col>
                                        <v-col sm="3">
                                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="dateFormated"
                                                        label="Выберите дату"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        class="date_input mt-0"
                                                    />
                                                </template>
                                                <v-date-picker :min="new Date().toISOString().substr(0, 10)" locale="ru" outlined v-model="date" scrollable>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="modal = false"> Отмена </v-btn>
                                                    <v-btn text color="primary" @click="$refs.dialog.save(date)">
                                                    ВЫБРАТЬ
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-actions>
                        <v-row>
                            <v-col>
                                <v-btn @click="saveTask(dialogStudObj, 2)" class="add_btn mr-4" height="50" style="height: 50px !important;">
                                    <img src="../assets/i_add_green.svg" alt="" class="mr-2 img_1">
                                    <img src="../assets/i_add.svg" alt="" class="mr-2 img_2">
                                    <span class="align-center">Назначить задание</span>
                                </v-btn>
                            
                                <v-btn @click="cancel" class="cancel_btn">
                                    <img src="../assets/i_close.svg" alt="" width="14" class="mr-2 img_1">
                                    <img src="../assets/i_close__white.svg" alt="" width="14" class="mr-2 img_2">
                                    <span>Отменить</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
                <v-snackbar
                    v-model="snackbar"
                    :color="snackbarColor"
                    :timeout="6000"
                    top
                    >
                        {{snackbarText}}
                </v-snackbar>
            </v-dialog>


        </v-col>

        <v-snackbar
            v-model="snackbar2"
            :color="snackbarColor2"
            :timeout="6000"
            top
            >
                {{snackbarText2}}
        </v-snackbar>
    </v-row>

</template>

<script>
import profileBtn from '../components/profileBtn'
import orderBy from 'lodash.orderby'

export default {
    components: {profileBtn},
    data: () => ({
        sortDirection: 'asc',
        dialogSTUD: false,
        snackbar: false,
        snackbar2: false,
        snackbarColor: '',
        snackbarText: '',
        snackbarColor2: '',
        snackbarText2: '',
        dialogStudObj: {
            id: null,
            fio: '',
            tasks_assigned: '',
        },
        dialogObj: {
            univer: '',
            course: '',
            tasks_assigned: '',
            group: ''
        },
        dateFormated: null,
        reverse: false,
        propertyName: 'univer',
        dialog: false,
        date: null,
        modal: false,
        overlay: false,
        array: [
            {id: 1, sorted: 'asc', univer: 'КИДЗ', course: '3', group: '02-02', fio: 'Иванова Анна Владимировна', tasks_assigned: 4, completed_tasks: 2 },
            {id: 2, sorted: 'asc', univer: 'КИДЗ', course: '3', group: '02-02', fio: 'Федорова Инна Юрьевна', tasks_assigned: 4, completed_tasks: 2 },
            {id: 3, sorted: 'asc', univer: 'КИДЗ', course: '3', group: '02-02', fio: 'Светлаков Игорь Николаевич', tasks_assigned: 4, completed_tasks: 2 }
        ]
    }),
    watch: {
        date(val) {
            if(val) this.dateFormated = new Date(val).toLocaleDateString()
        }
    },
    methods: {
        sorting(name) {
            this.propertyName = name;
            this.sortDirection = this.reverse === false ? 'asc' : 'desc';
            this.reverse = !this.reverse;
        },
        sortingList(data){
            return orderBy(data, this.propertyName, this.sortDirection )
        },
        route(item) {
            if(item.id == 1) this.$router.push('/13')
            if(item == 2) this.$router.push('/')
        },
        dialogSTUDAdd(row) {
            Object.assign(this.dialogStudObj, row)
            this.dialogSTUD = true
        },
        saveTask(obj, ind) {
            if(ind == 1) {
                if(obj.univer == '' || obj.course == '' || obj.tasks_assigned == '' || obj.group == '' || this.date == null) {
                    this.snackbar = true
                    this.snackbarText = 'Заполните все поля для назначения задания!!!'
                    this.snackbarColor = 'error'
                } else {
                    
                    this.array.push({
                        id: 4,
                        sorted: 'asc',
                        univer: this.dialogObj.univer,
                        course: this.dialogObj.course,
                        group: this.dialogObj.group,
                        fio: 'Иванов Иван Иванович',
                        tasks_assigned: 1,
                        completed_tasks: 0
                    })

                    this.snackbar2 = true
                    this.snackbarText2 = 'Задание назначено группе'
                    this.snackbarColor2 = 'success'
                    this.dialog = false
                    this.cancel()
                }
            } else {
                if(obj.fio == '' || obj.tasks_assigned == '' || this.date == null) {
                    this.snackbar = true
                    this.snackbarText = 'Заполните все поля для назначения задания студенту!!!'
                    this.snackbarColor = 'error'
                } else {
                    this.array.find(f=> f.id == obj.id).tasks_assigned++
                    this.snackbar2 = true
                    this.snackbarText2 = 'Задание успешно назначено cтуденту!'
                    this.snackbarColor2 = 'success'
                    this.dialog = false
                    this.cancel()
                }
            }
            
        },
        cancel() {
            this.snackbarText = ''
            this.snackbarColor = ''
            this.dialogObj = {
                univer: '',
                course: '',
                tasks_assigned: '',
                group: ''
            }
            this.dialogStudObj = {
                fio: '',
                tasks_assigned: ''
            },
            this.date = null
            this.dateFormated = ''
            this.dialog = false
            this.dialogSTUD = false
        }
    }
}
</script>

<style lang="stylus">
    table thead td {
        border: none !important;
    }
</style>