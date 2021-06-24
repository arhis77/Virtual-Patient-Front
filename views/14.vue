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

                                    <hooper style="height: 830px" ref="carousel" @slide="updateCarousel" :settings="hooperSettings">
                                        <slide>
                                            <img src="../assets/slide_01.svg" alt="">
                                            <p class="desc">мальчик 3 года боль в горле,тошнота</p>
                                        </slide>

                                        <slide>
                                            <img src="../assets/slide_02.svg" alt="">
                                            <p class="desc">девочка 8 лет, головные боли,рвота</p>
                                        </slide>

                                        <slide>
                                            <img src="../assets/slide_03.svg" alt="">
                                            <p class="desc">девочка 10 лет отек носа</p>
                                        </slide>

                                        <slide>
                                            <img src="../assets/slide_01.svg" alt="">
                                            <p class="desc">мальчик 3 года боль в горле,тошнота</p>
                                        </slide>

                                        <slide>
                                            <img src="../assets/slide_02.svg" alt="">
                                            <p class="desc">девочка 8 лет, головные боли,рвота</p>
                                        </slide>

                                        <slide>
                                            <img src="../assets/slide_03.svg" alt="">
                                            <p class="desc">мальчик 3 года боль в горле,тошнота</p>
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
                            <div class="time px-2">11:09</div>
                        </div>
                    </div>
                    <div class="profile_card d-flex pa-4">
                        <div class="profile_card__left d-flex pr-6">
                            <img src="../assets/man_01.svg" class="mr-2">
                            <img src="../assets/man_02.svg">
                        </div>
                        <div class="profile_card__right pl-xl-6 pl-lg-2 pl-md-4 pl-sm-2">
                            <v-simple-table>
                                <tr>
                                    <td class="title">ФИО:</td>
                                    <td>Иванов И. И.</td>
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
                                <tr>
                                    <td class="title">Жалобы:</td>
                                    <td>тошнота, рвота, судороги.</td>
                                </tr>
                            </v-simple-table>
                        </div>
                    </div>
                </v-col>

                <v-col sm="4" lg="2" class="pt-0">
                    <div class="mb-8 doctors_actions">
                        <v-btn style="width: 100%;" class="text-left btn_blue mb-2"><img src="../assets/i_list.svg" alt=""> Сбор жалоб<br> Анамнез</v-btn>
                        <v-btn style="width: 100%;" class="text-left btn_blue mb-2"><img src="../assets/i_search_01.svg" alt=""> Осмотр</v-btn>
                        <v-btn style="width: 100%;" class="text-left btn_blue mb-2"><img src="../assets/i_hands.svg" alt=""> Пальпация<br> Перкуссия</v-btn>
                        <v-btn style="width: 100%;" class="text-left btn_blue mb-2"><img src="../assets/i_stethoscope.svg" alt="">Аускультация</v-btn>
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
                            <div class="d-flex row">
                                <div style="text-align: center;" class="col-lg-6 d-xl-flex align-xl-center flex-xl-column">
                                    <img src="../assets/man_01.svg" alt="" width="293"><br>
                                    <img src="../assets/arrows.svg" alt="" width="78">
                                </div>
                                <div class="desc col-lg-6">
                                    <p><a href="#" class="link">Локтевой сустав припухший</a>, <a href="#" class="link">покраснение локтевого сустава</a></p>
                                </div>
                            </div>
                        </v-tab-item>
                        <v-tab-item class="second">
                            <v-card flat>
                               <v-form>
                                   <v-simple-table white>
                                    <thead>
                                        <tr>
                                            <td>Полученная информация</td>
                                            <td>Отметить патологию</td>
                                            <td>Системы</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Цианоз носогубного треугольника</td>
                                            <td>
                                                <v-checkbox></v-checkbox>
                                            </td>
                                            <td>Дыхательная, ССС, МВС</td>
                                        </tr>
                                        <tr>
                                            <td>Характер пальцев "барабанные палочки"</td>
                                            <td>
                                                <v-checkbox></v-checkbox>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Верхушечный толчок средней высоты</td>
                                            <td>
                                                <v-checkbox></v-checkbox>
                                            </td>
                                            <td>ССС</td>
                                        </tr>
                                        <tr>
                                            <td>Щитовидная железа визуально не увеличена</td>
                                            <td>
                                                <v-checkbox></v-checkbox>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>В области запястий мелкоточечная сыпь</td>
                                            <td>
                                                <v-checkbox></v-checkbox>
                                            </td>
                                            <td>Кожа, эндокринная, ЖКТ</td>
                                        </tr>
                                        <tr>
                                            <td>Притупления перкуторного звука над лоном нет</td>
                                            <td>
                                                <v-checkbox></v-checkbox>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                                 <v-row class="pt-4">
                                        <v-col md="12">
                                            <v-btn class="red" height="50" width="199">
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
    </v-row>
</template>

<script>
    import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
    export default {
        methods: {
            slidePrev() {
                this.$refs.carousel.slidePrev();
            },
            slideNext() {
                this.$refs.carousel.slideNext();
            },
            updateCarousel(payload) {
                this.myCarouselData = payload.currentSlide;
            }
        },
        components: {
            Hooper,
            Slide,
            HooperNavigation,
        },
        data() {
            return {
                isHidden: false,
                hooperSettings: {
                    itemsToShow: 3,
                    centerMode: "true",
                    vertical: "true",
                    infiniteScroll: "true",
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
        } 
    }
</script>

<style lang="stylus" scoped>
  @import '../assets/_12.stylus'
  @import '../assets/_12_carousel.css'

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>