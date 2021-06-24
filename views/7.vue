<template>
    <v-row class="d-flex mb-4">
        <v-col md="12" xl="12" class="white rounded-xl page_met__02 inner pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-16">
            <v-form class="form">
                <v-row class="mb-10">
                    <v-col md="6" xl="6" class="text_01 blue_02">Добавить факт</v-col>
                </v-row>

                <v-row>
                    <v-col md="5" xl="5">
                        <v-label>Система/Стадия приема</v-label>
                        <v-select :items="['Дыхательная система', 'Пищеварительная система человека', ' Мочевыделительная система', 'Опорно-двигательный аппарат', 'Сердечно-сосудистая система', 'Нервная система и органы чувств', 'Эндокринная система', 'Органы кроветворения и иммунной системы','Кожа, подкожно-жировая клетчака','Репродуктивная система']"  outlined placeholder="Выбрать систему..." />
                    </v-col>
                </v-row>
                
                <v-divider />

                <v-row class="pb-0">
                    <v-col class="pb-0">
                        <v-label class="mb-0">Уровень 1</v-label>
                    </v-col>
                </v-row>

                <v-row class="pt-0">
                    <v-col md="4" xl="4">
                        <v-select :items="['жалобы','осмотр','пальпация грудной клетки','сравнительная перкуссия легких','топографическая перкуссия легких','аускультация легких','семейный анамнез','Материально-бытовые условия и уход за ребенком (социальный анамнез)','Эпидемиологический анамнез','Профилактические прививки (вакцинация)','измерение артериального давления']"  outlined placeholder="Выбрать из списка уровня 1" />
                    </v-col>
                    <v-col md="4" xl="4">
                        <v-text-field placeholder="Ввести в ручную..."  outlined></v-text-field>
                    </v-col>
                </v-row>
                
                <v-divider />
                
                <v-row class="pb-0">
                    <v-col class="pb-0">
                        <v-label class="mb-0">Уровень 2</v-label>
                    </v-col>
                </v-row>

                <v-row class="pt-0">
                    <v-col md="4" xl="4" class="pb-md-0">
                        <v-select :items="['кашель','цвет кожных покровов','признаки хронической гипоксии','симметричность участия обеих половин грудной клетки в акте дыхания','втяжение уступчивых мест грудной клетки ','одышка','тип дыхания','частота дыхания','ритм дыхания','рост и развитие','костная система','кожный покров','отечный синдром','поясничная область','область мочевого пузыря']"  outlined placeholder="Выбрать из списка уровня 2" />
                    </v-col>
                    <v-col md="4" xl="4" class="pb-md-0">
                        <v-text-field placeholder="Ввести в ручную..."  outlined></v-text-field>
                    </v-col>
                    <v-col md="12" lg="4" class="mb-md-4">
                        <v-btn :disabled="level_2_check" color="primary" @click="scheme(2)" x-large class="white_btn white--text">
                            <img src="../assets/i_scheme__blue.svg" class="mr-2 img_1">
                            <img src="../assets/i_scheme.svg" class="mr-2 img_2">
                            <span>Указать локализацию на схеме</span>
                        </v-btn>
                    </v-col>
                </v-row>
                
                <v-divider />

                <v-row class="pb-0">
                    <v-col class="pb-0">
                        <v-label class="mb-0">Уровень 3</v-label>
                    </v-col>
                </v-row>

                <v-row class="pt-0">
                    <v-col md="4" xl="4" class="pb-md-0">
                        <v-select :filled="checkbox_miss" :disabled="checkbox_miss" v-model="level3.sel" :items="['жалоб нет','острые заболевания','хронические заболевания','хрипы','крепитация','шум трения плевры','бронхофония','звучность','ритмичность','ясность','локализация','цвет','сыпь','продолжительность','связь с тонами','эпицетр шума (punctum maximum, сила, тембр, форма, проводимость за пределы сердца, изменение при положении тела, нагрузке)']"  outlined placeholder="Выбрать из списка уровня 3"></v-select>
                    </v-col>
                    <v-col md="4" xl="4" class="pb-md-0">
                        <v-text-field :readonly="checkbox_miss" :filled="checkbox_miss" v-model="level3.text" placeholder="Ввести в ручную..."  outlined></v-text-field>
                    </v-col>
                    <v-col md="12" lg="4" class="mb-md-4">
                        <v-btn :disabled="level_3_check || checkbox_miss" color="primary" @click="scheme(3)" x-large class="white_btn white--text">
                            <img src="../assets/i_scheme__blue.svg" class="mr-2 img_1">
                            <img src="../assets/i_scheme.svg" class="mr-2 img_2">
                            <span>Указать локализацию на схеме</span>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col md="12" xl="12">
                        <v-checkbox v-model="checkbox_miss" label="Пропустить" color="primary" />
                    </v-col>
                </v-row>

                <v-divider />
                
                <v-row class="pb-0">
                    <v-col class="pb-0">
                        <v-label class="mb-0">Уровень 4</v-label>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-checkbox v-model="checkbox_4_level" label="Последний уровень" color="primary"></v-checkbox>
                    </v-col>
                </v-row>

                <v-row class="pt-0" v-for="(item, ind) in arr_level4" :key="ind">
                    <v-col md="4" xl="4">
                        <v-select v-model="item.sel" :items="['соответсвуют возрасту','задежка роста и развития','костная система без патологии','не кровоточат','кровоточат','бледно-розовый','бледный','цианоз носогубного треугольника','нет','отмечались','не отягощен','отягощен ','удовлетворительные','неудовлетворительные','не видимый','отсутствует']"  outlined placeholder="Выбрать из списка уровня 4"></v-select>
                    </v-col>
                    <v-col md="4" xl="4">
                        <v-text-field v-model="item.text" placeholder="Ввести вручную..."  outlined></v-text-field>
                    </v-col>
                    <v-col md="2" xl="2" class="pl-2">
                        <v-btn @click="add_obj_lev4" v-if="ind == arr_level4.length-1" x-large class="transparent_btn pl-0">
                            <img src="../assets/i_plus__green.svg" alt="" width="38">
                        </v-btn>

                        <v-btn @click="delete_obj_lev4(item)" v-else x-large class="transparent_btn pl-1">
                            <img src="../assets/i_delete.svg" alt="" width="30">
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row v-if="checkbox_4_level && !checkbox_5_level">
                    <v-col>
                        <v-radio-group
                            v-model="row"
                            row
                            class="mt-md-0"
                        >
                            <v-radio class="d-flex align-center mr-lg-16 mb-md-2 mt-xl-3 mt-lg-0"
                            label="Норма"
                            value="radio-1"
                            color="primary"
                            ></v-radio>
                            <v-radio
                            class="mb-md-2"
                            label="Патология"
                            value="radio-2"
                            color="primary"
                            ></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-btn color="primary" x-large class="standart_btn">
                            <img src="../assets/i_add_media.svg" alt="" class="mr-2">
                            <span class="blue_01">Загрузить медиа</span>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-divider />

                 <v-row class="pb-0 mt-5">
                    <v-col class="pb-0">
                        <v-label class="mb-0">Уровень 5</v-label>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col>
                        <v-checkbox :disabled="checkbox_4_level" v-model="checkbox_5_level" label="Последний уровень" color="primary"></v-checkbox>
                    </v-col>
                </v-row>

                <v-row class="pt-0" v-for="(item, ind) in arr_level5" :key="ind+21">
                    <v-col md="4" xl="4">
                        <v-select :disabled="checkbox_4_level" :filled="checkbox_4_level" v-model="item.sel" :items="['цилиндрическая форма','мягкая','плотная','гладкая','бугристая','подвижная','спаенная с окружающими тканями','нет','да','тупой звук','не определяется','определяется','отрицательный ','положительный','выступает','не выступает']"  outlined placeholder="Выбрать из списка уровня 5"></v-select>
                    </v-col>
                    <v-col md="4" xl="4">
                        <v-text-field :readonly="checkbox_4_level" :filled="checkbox_4_level" v-model="item.text" placeholder="Ввести вручную..."  outlined></v-text-field>
                    </v-col>
                    <v-col md="2" xl="2" class="pl-2">
                        <v-btn icon :disabled="checkbox_4_level" @click="add_obj_lev5" v-if="ind == arr_level5.length-1" x-large class="transparent_btn pl-0">
                            <img src="../assets/i_plus__green.svg" alt="" width="38">
                        </v-btn>

                        <v-btn @click="delete_obj_lev5(item)" v-else x-large class="transparent_btn pl-1">
                            <img src="../assets/i_delete.svg" alt="" width="30">
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row v-if="checkbox_5_level && !checkbox_4_level">
                    <v-col>
                        <v-radio-group
                            v-model="row"
                            row
                            class="mt-md-0"
                        >
                            <v-radio class="d-flex align-center mr-lg-16 mb-md-2 mt-xl-0 mt-lg-0"
                            label="Норма"
                            value="radio-1"
                            color="primary"
                            ></v-radio>
                            <v-radio
                            class="mb-md-2"
                            label="Патология"
                            value="radio-2"
                            color="primary"
                            ></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-btn :disabled="checkbox_4_level" color="primary" x-large class="standart_btn">
                            <img src="../assets/i_add_media.svg" alt="" class="mr-2">
                            <span class="blue_01">Загрузить медиа</span>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row class="mt-5">
                    <v-col>
                        <v-btn x-large
                            color="success"
                            class="mr-4 form_btn"
                        >
                            Сохранить
                        </v-btn>
                    
                        <v-btn @click="backPage" outlined   x-large class="mr-4 red--text form_btn">
                            <img src="../assets/i_close.svg" alt="" width="14" class="mr-2">
                            <span>Отменить</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>

        <v-dialog v-model="dialog" persistent max-width="450" >
            <v-card>
                <v-card-title> Локализация на схеме человека </v-card-title>
                <v-card-text>Выберите нужную локализацию на теле человека</v-card-text>
                
                <center>
                    <human-front :showName="true" :show="true" :viewText="false" :check="true" :level="level" v-show="human_view"/>
                    <human-rear :showName="true" :show="true" :viewText="false" :check="true" :level="level" v-show="!human_view" />
                </center>
                <center>
                    <v-btn @click="human_view=!human_view" text class="darken-3 white--text">
                        <img src="../assets/i_change_view.svg" width="50" class="mr-2">
                    </v-btn>
                </center>

                <v-card-actions>
                    <v-btn @click="save" color="success" class="mr-4 form_btn">
                        <img src="../assets/i_save.svg" alt="" width="14" class="mr-2">
                        <span>Сохранить</span>
                    </v-btn>
                    
                    <v-btn outlined   @click="close" class="mr-4 red--text form_btn" >
                        <img src="../assets/i_close.svg" alt="" width="14" class="mr-2">
                        <span>Отменить</span>
                    </v-btn>
                </v-card-actions>
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
            arr_level4: [
                {id:1, sel: '', text: ''}
            ],
            arr_level5: [
                {id:1, sel: '', text: ''}
            ],
            level3: {
                sel: '',
                text: ''
            },
            level: 2,
            skins_rear: skinRear,
            skins_front: skinFront,
            human_view: true,
            checkbox_4_level: null,
            checkbox_5_level: true,
            checkbox_miss: null,
            row: null,
            dialog: false,
        }
    },
    computed: {
        level_3_check() {
            console.log('3',this.skins_rear.find(f=>f.level2 == true)&&this.skins_rear.find(f=>f.level2 == true).level2 || this.skins_front.find(f=>f.level2 == true)&&this.skins_front.find(f=>f.level2 == true).level2)
            return this.skins_rear.find(f=>f.level2 == true)&&this.skins_rear.find(f=>f.level2 == true).level2 || this.skins_front.find(f=>f.level2 == true)&&this.skins_front.find(f=>f.level2 == true).level2
        },
        level_2_check() {
            console.log('2',this.skins_rear.find(f=>f.level3 == true)&&this.skins_rear.find(f=>f.level3 == true).level3 || this.skins_front.find(f=>f.level3 == true)&&this.skins_front.find(f=>f.level3 == true).level3)
            return this.skins_rear.find(f=>f.level3 == true)&&this.skins_rear.find(f=>f.level3 == true).level3 || this.skins_front.find(f=>f.level3 == true)&&this.skins_front.find(f=>f.level3 == true).level3
        }
    },
    watch: {
        checkbox_miss(val) {
            if(val) {
                this.level3.sel = ''
                this.level3.text = ''
            }
        },
        checkbox_4_level(val) {
            if(val) {
                this.checkbox_5_level = false
            }
        }
    },
    methods: {
        backPage() {
            this.$router.push('/6')
        },
        scheme(e) {
            this.dialog = true
            this.level = e
        },
        close() {
            this.skins_front.forEach(el => {el.class = 'origin', el.level2 = false; el.level3 = false})
            this.skins_rear.forEach(el => {el.class = 'origin', el.level2 = false; el.level3 = false})
            this.human_view = true
            this.dialog = false
        },
        save() {
            this.human_view = true
            this.dialog = false
        },
        add_obj_lev4() {
            this.arr_level4.push({sel: '', text: ''})
        },
        delete_obj_lev4(item) {
            const index = this.arr_level4.indexOf(item);
            if (confirm("Вы уверены, что хотите удалить строку?")) {
                this.arr_level4.splice(index, 1);
            }
        },
        add_obj_lev5() {
            this.arr_level5.push({sel: '', text: ''})
        },
        delete_obj_lev5(item) {
            const index = this.arr_level5.indexOf(item);
            if (confirm("Вы уверены, что хотите удалить строку?")) {
                this.arr_level5.splice(index, 1);
            }
        }
    }
}
</script>

<style lang="stylus">
    .v-input--checkbox .v-label {
        margin-bottom: 0;
    }
    #app .main_page_01 .page_met__02.inner {
        padding-bottom: 90px;
        margin-bottom: 30px;
    }
</style>