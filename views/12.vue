<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" class="white rounded-xl inner pl-md-6 pr-md-6 pl-xl-14 pr-xl-14 pl-lg-6 pr-lg-8 pt-16">
            <v-row class="student__case">
                <v-col lg="2" sm="4" class="pt-0 pl-lg-0">
                    <div class="text-center mb-8">
                        <v-btn @click="isHidden = !isHidden" class="toggle_btn py-8" id="slider_toggle_btn">Список<br> пациентов <img src="../assets/arrows_top.svg" alt="" class="ml-2" v-if="isHidden"><img src="../assets/arrows_bottom.svg" alt="" class="ml-2" v-if="!isHidden"></v-btn>
                    </div>
                 
                        <transition name="fade">
                            <v-row v-if="isHidden" class="d-flex mb-4 slider" id="slider">
                                <v-col md="12" class="white rounded-xl inner pt-0">
                                    
                                    <button  @click.prevent="slidePrev" class="nav_btn">
                                        <img src="../assets/arrow_top.svg" alt="">
                                    </button>

                                    <hooper style="height: 830px" ref="carousel" :settings="hooperSettings">
                                        <slide>
                                            <img src="../assets/slide_01.svg" alt="">
                                            <p class="desc">Мальчик, 3 года</p>
                                        </slide>

                                        <slide>
                                            <img src="../assets/slide_02.svg" alt="">
                                            <p class="desc">Девочка, 8 лет</p>
                                        </slide>

                                        <slide>
                                            <img src="../assets/slide_03.svg" alt="">
                                            <p class="desc">Девочка, 10 лет</p>
                                        </slide>
                                        <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
                                    </hooper>
                                    
                                    <button @click.prevent="slideNext" class="nav_btn mt-3">
                                        <img src="../assets/arrow_bottom.svg" alt="">
                                    </button>
                                </v-col>
                            </v-row>
                        </transition>

                         
                </v-col>

                <v-col lg="4" sm="8" class="profile pa-0 mb-sm-6">
                    <div class="profile_picture">
                        <img src="../assets/patient.png">
                        <div class="profile_info d-flex justify-space-between px-5 py-3">
                            <div class="desc">Кейс 1 Осмотр мальчика 5 лет</div>
                            <div class="time px-2">
                                <span v-if="minuts<10">0</span>{{minuts}}:<span v-if="currentTime<10">0</span>{{currentTime}}
                            </div>
                        </div>
                    </div>
                    <div class="profile_card d-flex pa-1">
                        <div class="profile_card__left d-flex pr-6">
                            <img src="../assets/man_01.svg" class="mr-2">
                            <img src="../assets/man_02.svg">
                        </div>
                        <div class="profile_card__right pl-xl-3 pl-lg-2 pl-md-4 pl-sm-2">
                            <v-simple-table>
                                <tr>
                                    <td class="title">ФИО:</td>
                                    <td>Иванов И.</td>
                                </tr>
                                <tr>
                                    <td class="title">Возраст:</td>
                                    <td>5 лет</td>
                                </tr>
                                <tr>
                                    <td class="title">Поступил:</td>
                                    <td>12.10.20 в 11:00</td>
                                </tr>
                                <tr>
                                    <td class="title">Доставлен:</td>
                                    <td>машина СП</td>
                                </tr>
                                <!-- <tr>
                                    <td class="title">Жалобы:</td>
                                    <td>Кашель <br> Температура: 36,7 <br> АД: 100/60 мм.рт.ст <br> ЧСС: 90 в мин. <br> ЧДД: 30 в мин.</td>
                                </tr> -->
                                <tr>
                                    <td class="title">Жалобы:</td>
                                    <td>Кашель</td>
                                </tr>
                                <tr>
                                    <td class="title">Температура:</td>
                                    <td>36,7</td>
                                </tr>
                                <tr>
                                    <td class="title">АД:</td>
                                    <td class="transform">100/60 мм.рт.ст</td>
                                </tr>
                                <tr>
                                    <td class="title">ЧСС:</td>
                                    <td class="transform">90 в мин.</td>
                                </tr>
                                <tr>
                                    <td class="title">ЧДД:</td>
                                    <td class="transform">30 в мин.</td>
                                </tr>
                            </v-simple-table>
                        </div>
                    </div>
                </v-col>

                <v-col lg="2" sm="4" class="pt-0">
                    <div v-if="show_vib_posl" class="text-center mb-8">
                        <v-btn class="toggle_btn py-8 red--text" @click="dialog1=true" style="width: 100%;">Действия<br> врача</v-btn>
                        <v-dialog v-model="dialog1" persistent max-width="700" class="rounded-xl">
                            <v-card class="rounded-xl pl-5 pr-5">
                                <v-card-title class="d-flex justify-end">
                                    <v-btn icon @click="dialog1 = false">
                                        <!-- <v-icon>mdi-close</v-icon> -->
                                        <img src="../assets/i_close.svg" alt="" width="20">
                                    </v-btn>
                                </v-card-title>

                                <div class="pa-4 pb-0 mb-0 doctors_actions">
                                    <v-row>
                                        <v-col md="6">
                                            <v-btn @click="btnClick('btn1')" :class="{active:btn1}">
                                                <span v-if="btn1" :class="{number: btn1}">
                                                    {{array_btn.indexOf('btn1')+1}}
                                                </span>
                                                <img src="../assets/i_search_01.svg" alt="">
                                                <span>Осмотр</span>
                                            </v-btn>
                                        </v-col>
                                        <v-col md="6">
                                            <v-btn @click="btnClick('btn2')" :class="{active:btn2}">
                                                <span v-if="btn2" :class="{number: btn2}">
                                                    {{array_btn.indexOf('btn2')+1}}
                                                </span>
                                                <img src="../assets/i_list.svg" alt="">
                                                <span>Сбор жалоб <br>Анамнез</span>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col md="6">
                                            <v-btn @click="btnClick('btn3')" :class="{active:btn3}">
                                                <span v-if="btn3" :class="{number: btn3}">
                                                    {{array_btn.indexOf('btn3')+1}}
                                                </span>
                                                <img src="../assets/i_hands.svg" alt="">
                                                <span>Пальпация<br> Перкуссия</span>
                                            </v-btn>
                                        </v-col>
                                        <v-col md="6">
                                            <v-btn @click="btnClick('btn4')" :class="{active:btn4}">
                                                <span v-if="btn4" :class="{number: btn4}">
                                                    {{array_btn.indexOf('btn4')+1}}
                                                </span>
                                                <img src="../assets/i_stethoscope.svg" alt="">
                                                <span>Аускультация</span>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                                <v-row class="pt-4 pa-4">
                                    <v-col md="12">
                                        <v-btn @click="showVibPosl(false)" class="accept_btn" height="50" width="199">
                                            <span class="red--text">Применить</span>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-snackbar
                                v-model="snackbar2"
                                :color="snackbarColor2"
                                :timeout="3000"
                                top
                                >
                                    {{snackbarText2}}
                            </v-snackbar>
                        </v-dialog>
                    </div>
                    <div v-if="!show_vib_posl" class="mb-8 doctors_actions">
                        <v-btn @click="clickView(2, 'btn12')" :class="{btn_blue: btn12}" style="width: 100%;" class="text-left mb-2">
                            <img src="../assets/i_list.svg" alt="">Сбор жалоб<br> Анамнез
                        </v-btn>
                        <v-btn @click="clickView(1, 'btn11')" :class="{btn_blue: btn11}" style="width: 100%;" class="text-left mb-2">
                            <img src="../assets/i_search_01.svg" alt="">Осмотр
                        </v-btn>
                        <v-btn @click="clickView(3, 'btn13')" :class="{btn_blue: btn13}" style="width: 100%;" class="text-left mb-2">
                            <img src="../assets/i_hands.svg" alt="">Пальпация<br> Перкуссия
                        </v-btn>
                        <v-btn @click="clickView(4, 'btn14')" :class="{btn_blue: btn14}" style="width: 100%;" class="text-left mb-2">
                            <img src="../assets/i_stethoscope.svg" alt="">Аускультация
                        </v-btn>
                        <v-dialog v-model="dialog" persistent max-width="700" class="rounded-xl" style="border-radius: 24px !important;">
                            <v-card class="rounded-xl">
                                <v-card-title class="d-flex justify-end">
                                    <v-btn icon @click="dialog = false">
                                        <!-- <v-icon>mdi-close</v-icon> -->
                                        <img src="../assets/i_close.svg" alt="" width="20">
                                    </v-btn>
                                </v-card-title>

                                <div class="pa-4 doctors_actions">
                                    <v-row>
                                        <v-col md="6">
                                            <v-btn>
                                                <img src="../assets/i_search_01.svg" alt="">
                                                <span>Осмотр</span>
                                            </v-btn>
                                        </v-col>
                                        <v-col md="6">
                                            <v-btn>
                                                <img src="../assets/i_list.svg" alt="">
                                                <span>Сбор жалоб <br>Анамнез</span>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col md="6">
                                            <v-btn>
                                                <img src="../assets/i_hands.svg" alt="">
                                                <span>Пальпация<br> Перкуссия</span>
                                            </v-btn>
                                        </v-col>
                                        <v-col md="6">
                                            <v-btn>
                                                <img src="../assets/i_stethoscope.svg" alt="">
                                                <span>Аускультация</span>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row class="pt-4">
                                        <v-col md="12">
                                            <v-btn class="accept_btn" height="50" width="199">
                                                <span class="red--text">Применить</span>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-card>
                        </v-dialog>
                    </div>
               </v-col>

               <v-col sm="8" lg="4" class="symptoms">
                    <v-tabs v-model="tabs" class="d-flex justify-space-between">
                        <v-tab>
                            Симптомы
                        </v-tab>
                         <v-tab>
                            Заключение
                        </v-tab>
                    </v-tabs>
                
                    <v-tabs-items v-model="tabs" class="pt-4">
                        <v-tab-item class="first">
                            <div v-if="viewText" class="d-flex row">
                                <div style="text-align: center;" class="d-xl-flex align-xl-center flex-xl-column pl-xl-6">

                                    <human-front :viewText="viewText" :show="checkBtn" :version="showVersions" :check="checkBtn" :viewBox="'-80 0 450 650'" :height="'500'" :width="'303'" v-show="human_view"/>
                                    <human-rear :viewText="viewText" :show="checkBtn" :version="showVersions" :check="checkBtn" :viewBox="'-80 0 450 650'" :height="'500'" :width="'303'" v-show="!human_view" />
                                    
                                    <v-btn v-show="checkBtn" @click="human_view=!human_view" style="margin-left:20px" text class="darken-3 white--text">
                                        <img src="../assets/i_change_view.svg" width="120" class="mr-2">
                                    </v-btn>
                                    
                                </div>
                            </div>
                            <div class="info-view" v-else>
                                Выберите последовательность действий, для этого нажмите на кнопку “Действия врача”
                            </div>
                        </v-tab-item>
                        <v-tab-item class="second">
                            <v-card flat>
                               <v-form>
                                   <v-simple-table v-if="viewText" white>
                                        <thead>
                                            <tr>
                                                <td>Полученная информация</td>
                                                <td>Отметить патологию</td>
                                                <td>Системы</td>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="row in getArray">
                                                <td>{{row.info}}</td>
                                                <td>
                                                    <v-checkbox @change="check(row)" v-model="row.check"></v-checkbox>
                                                </td>
                                                <td>
                                                    <ul v-show="row.sis.length > 0" v-for="(it, ind) in row.sis">
                                                        <li>
                                                            {{it.name}}
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                </v-simple-table>
                                 <v-row class="pt-4">
                                        <v-col md="12">
                                            <v-btn @click="dialogout=true" class="red" height="50" width="199">
                                                <span class="white--text">Закончить задание</span>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                               </v-form>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
              </v-col>
          </v-row>
        </v-col>
        <v-dialog v-model="dialodzacl" persistent max-width="900" class="rounded-xl">
            <v-card class="rounded-xl pl-5 pr-5">
                <v-card-title class="d-flex">
                    <span style="color:#67687C; float:left">К каким системам организма относится патология?</span>
                    <v-spacer />
                    <v-btn icon @click="close(getListZacl)">
                        <img src="../assets/i_close.svg" alt="" width="20">
                    </v-btn>
                </v-card-title>

                <div class="pa-4 pb-0 mb-0 doctors_actions">
                    <v-row>
                        <v-col md="6">
                            <v-checkbox v-for="(item, ind) in getListZacl" v-show="ind <= 4" :label="item.name" v-model="item.val"/>
                        </v-col>
                        <v-col md="6">
                            <v-checkbox v-for="(item, ind) in getListZacl" v-show="ind > 4" :label="item.name" v-model="item.val"/>
                        </v-col>
                    </v-row>
                </div>
                <v-row class="pt-4 pa-4">
                    <v-col md="12">
                        <v-btn @click="saveZakl(getListZacl)" class="accept_btn" height="50" width="199">
                            <span class="red--text">Применить</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogout" persistent max-width="600" class="rounded-xl">
            <v-card class="rounded-xl pl-5 pr-5">
                <v-card-title class="d-flex">
                    <v-spacer />
                    <v-btn icon @click="dialogout = false">
                        <img src="../assets/i_close.svg" alt="" width="20">
                    </v-btn>
                </v-card-title>
                <div class="out-dialog-text">Вы уверены, что хотите закончить задание?</div>
                <v-row class="pt-4 pa-4">
                    <v-col md="12">
                        <center>
                        <v-btn @click="route" class="accept_btn" height="50" width="199">
                            <span class="green--text">Да</span>
                        </v-btn>
                        <v-btn @click="dialogout=false" class="accept_btn" height="50" width="199">
                            <span class="red--text">Нет</span>
                        </v-btn>
                        </center>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <v-snackbar
            v-model="snackbar"
            :color="snackbarColor"
            :timeout="6000"
            top
            >
                {{snackbarText}}
        </v-snackbar>
    </v-row>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import humanFront from '../components/humanFront'
import humanRear from '../components/humanRear'
import skinFront from '../components/skinFront.json'
import skinRear from '../components/skinRear.json'
import {mapGetters, mapMutations} from 'vuex'
 

export default {
    methods: {
        ...mapMutations({
            mutationAddInSis: 'stor/mutationAddInSis'
        }),
        updateWidth() {
            this.$refs.carousel.updateWidth();
        },
        slidePrev() {
            this.$refs.carousel.slidePrev();
        },
        slideNext() {
            this.$refs.carousel.slideNext();
        },
        updateCarousel(payload) {
            this.myCarouselData = payload.currentSlide;
        },
        btnClick(name) {
            this[name] = !this[name]
            if(this[name] == true) {
                this.array_btn.push(name)
            } else if(this[name] == false){
                const index = this.array_btn.indexOf(name);
                this.array_btn.splice(index, 1);
            }
        },
        clickView(id, btn) {
            this.skins_front.forEach(el => { el.class = 'origin' })
            this.skins_rear.forEach(el => { el.class = 'origin' })
            this.human_view = true

            if(id == 1) {
                this.checkBtn = true
                this.btn11 = true
                this.btn12 = false
                this.btn13 = false
                this.btn14 = false
            } else if(id == 2) {
                this.checkBtn = false
                this.btn12 = true
                this.btn11 = false
                this.btn13 = false
                this.btn14 = false
            } else if(id == 3) {
                this.checkBtn = true
                this.btn13 = true
                this.btn11 = false
                this.btn12 = false
                this.btn14 = false
            } else if(id == 4) {
                this.checkBtn = true
                this.btn14 = true
                this.btn11 = false
                this.btn13 = false
                this.btn12 = false
            }
            
        },
        showVibPosl(e) {
            if(this.array_btn.length == 4) {
                if(this.array_btn.indexOf('btn2') == 0 && this.array_btn.indexOf('btn1') == 1 && this.array_btn.indexOf('btn3') == 2 && this.array_btn.indexOf('btn4') == 3) {
                    this.snackbar = true
                    this.snackbarText = 'Порядок действий выбран правильно'
                    this.snackbarColor = 'success'
                } else {
                    this.snackbar = true
                    this.snackbarText = 'Порядок действий выбран неправильно'
                    this.snackbarColor = 'error'
                }
                this.viewText = true
                this.show_vib_posl = e
            } else {
                this.snackbar2 = true
                this.snackbarText2 = 'Порядок должен быть выбран полностью'
                this.snackbarColor2 = 'error'
            }
            
        },
        startTimer() {
            this.timer = setInterval(() => {
                this.currentTime++
            }, 1000)
        },
        stopTimer() {
            clearTimeout(this.timer)
        },
        check(row) {
            this.name_zakl = row.info
            if(row.check) {
                this.dialodzacl = true
            } else {
                row.sis = []
            }
        },
        saveZakl(list) {
            let arr = [];
            this.getListZacl.forEach(el => {
                if(el.val) arr.push(el)
            })
            this.mutationAddInSis({arr: arr, name: this.name_zakl})
            this.dialodzacl = false
        },
        route() {
            this.$router.push('/11?success=true')
        },
        close() {
            this.mutationAddInSis({arr: [], name: this.name_zakl})
            this.dialodzacl = false
        }
    },
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        humanFront,
        humanRear,
    },
    watch: {
        currentTime(time) {
            if (time === 59) {
                // this.stopTimer()
                this.minuts++
                this.currentTime = 0
            }
        }
    },
    data() {
        return {
            text1: '100/60 мм.рт.ст',
            snackbar: false,
            snackbarText: '',
            snackbarColor: '',
            snackbar2: false,
            snackbarText2: '',
            snackbarColor2: '',
            dialogout: false,
            name_zakl: '',
            dialodzacl: false,
            minuts: 0,
            currentTime: 0,
            timer: null,
            viewText: false,
            skins_rear: skinRear,
            skins_front: skinFront,
            checkBtn: false,
            show_vib_posl: true,
            human_view: true,
            array_btn: [],
            btn11: false,
            btn12: true,
            btn13: false,
            btn14: false,
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: false,
            isHidden: true,
            hooperSettings: {
                itemsToShow: 3,
                centerMode: "false",
                vertical: "true",
                infiniteScroll: "false",
                updateWidth: 'true',
                breakpoints: {
                    1904: {
                        itemsToShow: 3,
                        centerMode: "true",
                    }
                },
            },
            dialog: false,
            dialog1: false,
            value: 1,
            active: false,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
            model: 0,
            tabs: null,
        }
    },
    computed: {
        ...mapGetters({
            getArray: 'stor/getArray',
            getListZacl: 'stor/getListZacl'
        }),
        showVersions() {
            let res = 'info'
            if(this.btn11) res = 'o'
            if(this.btn12) res = 'info'
            if(this.btn13) res = 'p'
            if(this.btn14) res = 'a'
            return res
        }
    },
    mounted() {
        this.startTimer()
    },
    destroyed() {
        this.stopTimer()
    },
}
</script>


<style lang="stylus" scoped>
  @import '../assets/_12.stylus'
  @import '../assets/_12_carousel.css'

.transform {
    text-transform: lowercase;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
.out-dialog-text {
    position: static;
    width: 438px;
    height: 88px;
    left: 0px;
    top: 0px;

    /* заголовок */

    font-family: Arial Nova;
    font-style: normal;
    font-weight: normal;
    font-size: 31px;
    line-height: 37px;
    display: flex;
    align-items: center;
    text-align: center;

    /* текст на странице студента */

    color: #67687C;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 62px;
}
.info-view {

    font-family: Arial Nova;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 45px;
    /* or 187% */

    display: flex;
    align-items: center;

    /* заливка иконок профиля */

    color: #1956D7;
}
</style>
