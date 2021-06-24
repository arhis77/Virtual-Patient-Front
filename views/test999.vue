<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" class="white rounded-xl inner pl-md-6 pr-md-6 pl-xl-14 pr-xl-14 pl-lg-6 pr-lg-8 pt-16">

            <v-row class="student__case">
                <v-col lg="2" sm="4" class="pt-0 pl-lg-0">
                    <div class="text-center mb-8">
                        <v-btn @click="isHidden = !isHidden" class="toggle_btn py-8" id="slider_toggle_btn">Список<br> пациентов <img src="../assets/arrows_top.svg" alt="" class="ml-2" v-if="isHidden"><img src="../assets/arrows_bottom.svg" alt="" class="ml-2" v-if="!isHidden"></v-btn>
                    </div>
                        <transition name="fade">
                            <div v-show="isHidden" class="slider">
                                <div class="slider__wrapper">
                                    <div class="slider__item">
                                        <img src="../assets/slide_01.svg" alt="">
                                        <p class="desc">мальчик 3 года боль в горле,тошнота</p>
                                    </div>
                                    <div class="slider__item">
                                        <img src="../assets/slide_02.svg" alt="">
                                        <p class="desc">девочка 8 лет, головные боли,рвота</p>
                                    </div>
                                    <div class="slider__item">
                                        <img src="../assets/slide_03.svg" alt="">
                                        <p class="desc">девочка 10 лет отек носа</p>
                                    </div>
                                    <div class="slider__item">
                                        <img src="../assets/slide_01.svg" alt="">
                                        <p class="desc">мальчик 3 года боль в горле,тошнота</p>
                                    </div>
                                    <div class="slider__item">
                                        <img src="../assets/slide_02.svg" alt="">
                                        <p class="desc">девочка 8 лет, головные боли,рвота</p>
                                    </div>
                                    <div class="slider__item">
                                        <img src="../assets/slide_03.svg" alt="">
                                        <p class="desc">девочка 10 лет отек носа</p>
                                    </div>
                                </div>
                                
                                <a class="slider__control slider__control_left" href="#" role="button"></a>
                                <a class="slider__control slider__control_right slider__control_show" href="#" role="button"></a>
                            </div>
                            
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
                    <div class="profile_card d-flex pa-4">
                        <div class="profile_card__left d-flex pr-6">
                            <img src="../assets/man_01.svg" class="mr-2">
                            <img src="../assets/man_02.svg">
                        </div>
                        <div class="profile_card__right pl-xl-3 pl-lg-2 pl-md-4 pl-sm-2">
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

                <v-col lg="2" sm="4" class="pt-0 actions">
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
                        </v-dialog>
                    </div>
                    <div v-if="!show_vib_posl" class="mb-8 doctors_actions">
                        <template v-for="item in array_btn">
                            <v-btn @click="clickView(1, 'btn11')" :class="{btn_blue: btn11}" v-if="item == 'btn1'" style="width: 100%;" class="text-left mb-2">
                                <img src="../assets/i_search_01.svg" alt="">Осмотр
                            </v-btn>
                            <v-btn @click="clickView(2, 'btn12')" :class="{btn_blue: btn12}" v-if="item == 'btn2'" style="width: 100%;" class="text-left mb-2">
                                <img src="../assets/i_list.svg" alt="">Сбор жалоб<br> Анамнез
                            </v-btn>
                            <v-btn @click="clickView(3, 'btn13')" :class="{btn_blue: btn13}" v-if="item == 'btn3'" style="width: 100%;" class="text-left mb-2">
                                <img src="../assets/i_hands.svg" alt="">Пальпация<br> Перкуссия
                            </v-btn>
                            <v-btn @click="clickView(4, 'btn14')" :class="{btn_blue: btn14}" v-if="item == 'btn4'" style="width: 100%;" class="text-left mb-2">
                                <img src="../assets/i_stethoscope.svg" alt="">Аускультация
                            </v-btn>
                        </template>
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
                
                    <v-tabs-items v-if="viewText" v-model="tabs" class="pt-4">
                        <v-tab-item class="first">
                            <div class="d-flex row">
                                <div style="text-align: center;" class="d-xl-flex align-xl-center flex-xl-column pl-xl-6">

                                    <human-front :viewText="viewText" :check="checkBtn" :viewBox="'-80 0 450 650'" :height="'500'" :width="'303'" v-show="human_view"/>
                                    <human-rear :viewText="viewText" :check="checkBtn" :viewBox="'-80 0 450 650'" :height="'500'" :width="'303'" v-show="!human_view" />
                                    
                                    <v-btn @click="human_view=!human_view" style="margin-left:20px" text class="darken-3 white--text">
                                        <img src="../assets/i_change_view.svg" width="120" class="mr-2">
                                    </v-btn>
                                    
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
                                            <v-btn @click="dialogout=true" v-if="getArray.length > 0" class="red" height="50" width="199">
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
                    <v-btn icon @click="dialodzacl = false">
                        <img src="../assets/i_close.svg" alt="" width="20">
                    </v-btn>
                </v-card-title>

                <div class="pa-4 pb-0 mb-0 doctors_actions">
                    <v-row>
                        <v-col md="6">
                            <v-checkbox v-for="(item, ind) in getListZacl" v-show="ind <= 5" :label="item.name" v-model="item.val"/>
                        </v-col>
                        <v-col md="6">
                            <v-checkbox v-for="(item, ind) in getListZacl" v-show="ind >= 6" :label="item.name" v-model="item.val"/>
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
    </v-row>
</template>

<script>
'use strict';
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
            this.viewText = true
            this.show_vib_posl = e
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
        }
    },
    components: {
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
        })
    },
    mounted() {
        this.startTimer()

        var multiItemSlider = (function () {
            return function (selector, config) {
                console.log(selector)
                var
                _mainElement = document.querySelector(selector), // основный элемент блока
                _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
                _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
                _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
                _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
                _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
                _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
                _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
                _positionLeftItem = 0, // позиция левого активного элемента
                _transform = 0, // значение транфсофрмации .slider_wrapper
                _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
                _items = []; // массив элементов
                // наполнение массива _items
                _sliderItems.forEach(function (item, index) {
                _items.push({ item: item, position: index, transform: 0 });
                });

                var position = {
                getMin: 0,
                getMax: _items.length - 1,
                }

                var _transformItem = function (direction) {
                if (direction === 'right') {
                    if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
                    return;
                    }
                    if (!_sliderControlLeft.classList.contains('slider__control_show')) {
                    _sliderControlLeft.classList.add('slider__control_show');
                    }
                    if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
                    _sliderControlRight.classList.remove('slider__control_show');
                    }
                    _positionLeftItem++;
                    _transform -= _step;
                }
                if (direction === 'left') {
                    if (_positionLeftItem <= position.getMin) {
                    return;
                    }
                    if (!_sliderControlRight.classList.contains('slider__control_show')) {
                    _sliderControlRight.classList.add('slider__control_show');
                    }
                    if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
                    _sliderControlLeft.classList.remove('slider__control_show');
                    }
                    _positionLeftItem--;
                    _transform += _step;
                }
                _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
                }

                // обработчик события click для кнопок "назад" и "вперед"
                var _controlClick = function (e) {
                if (e.target.classList.contains('slider__control')) {
                    e.preventDefault();
                    var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
                    _transformItem(direction);
                }
                };

                var _setUpListeners = function () {
                // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
                _sliderControls.forEach(function (item) {
                    item.addEventListener('click', _controlClick);
                });
                }

                // инициализация
                _setUpListeners();

                return {
                right: function () { // метод right
                    _transformItem('right');
                },
                left: function () { // метод left
                    _transformItem('left');
                }
                }

            }
            }());
            var slider = multiItemSlider('.slider')
    },
    destroyed() {
        this.stopTimer()
    },
}
</script>


<style lang="stylus" scoped>
  @import '../assets/_12.stylus'
//   @import '../assets/_12_carousel.css'

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

.slider {
      position: relative;
      overflow: hidden;
    }

    .slider__wrapper {
      display: flex;
      transition: transform 0.6s ease;
      width: 100%;
    }

    .slider__item {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .slider__control {
      position: absolute;
      top: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      width: 40px;
      color: #fff;
      text-align: center;
      opacity: 0.5;
      height: 50px;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, .5);
    }

    .slider__control_show {
      display: flex;
    }

    .slider__control:hover,
    .slider__control:focus {
      color: #fff;
      text-decoration: none;
      outline: 0;
      opacity: .9;
    }

    .slider__control_left {
      left: 0;
    }

    .slider__control_right {
      right: 0;
    }

    .slider__control::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: transparent no-repeat center center;
      background-size: 100% 100%;
    }

    .slider__control_left::before {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
    //   background-image: url('../assets/arrow_slider_top.svg');
    //   transform: rotate(-90deg);
    }

    .slider__control_right::before {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
    //   background-image: url('../assets/arrow_slider_top.svg');
    //   transform: rotate(90deg);
    }

    .slider__item>div {
    //   line-height: 250px;
      font-size: 100px;
      text-align: center;
    }

    .slider {
    transform: rotate(90deg) !important;
        /* max-height: 26.666667% !important; */
        transform: rotate(90deg) !important;
        max-height: 177px;
        width: 525px;
        left: 8px;
        position: relative;
        margin-left: -179px;
        margin-top: 205px;
    }
    .slider__item {
           transform: rotate(-90deg) !important;
    flex: 0 0 100%;
    max-width: 177px;
    width: 100%;
    /* left: -26px; */
    bottom: 0;
    position: relative;
    }
    .slider__item img {
        width: 100%;
        max-width: 100%;
    }
    .slider__item .desc {
           position: absolute;
    font-size: 18px;
    color: #04d2ff;
    padding: 11px;
    background: rgba(0,0,0,0.65);
    line-height: 1.1;
    bottom: 7px;
    margin-bottom: 0;
    width: 100%;
    }
    @media (max-width: 1263px) {
        .slider {
           transform: rotate(90deg) !important;
    /* max-height: 26.666667% !important; */
    transform: rotate(90deg) !important;
    max-height: 311px;
    width: 802px;
    left: -86px;
    position: relative;
    margin-left: -179px;
    margin-top: 294px;
        }
        .slider__item {
            max-width: 265px;
        }
         .slider__item  .desc {
             padding-left: 21px; 
         }
         .actions {
             margin-top: 45px;
         }
    }

    @media (min-width: 1904px) {
        .white.rounded-xl.inner.pl-md-6.pr-md-6.pl-xl-14.pr-xl-14.pl-lg-6.pr-lg-8.pt-16.col-md-12.col {
            padding-bottom: 136px;
        }
        .slider {
            transform: rotate(90deg) !important;
            transform: rotate(90deg) !important;
            max-height: 275px;
            width: 851px;
            left: -110px;
            position: relative;
            margin-left: -179px;
            margin-top: 312px;
        }
        .slider__item {
            transform: rotate(-90deg) !important;
            flex: 0 0 100%;
            max-width: 280px;
            width: 100%;
            bottom: 0;
            position: relative;
        }
        .slider__item .desc {
            padding-left: 35px;
        }
    }

    @media (max-width: 1903px) {
        .slider__item .desc {
            font-size: 14px;
        }
    }
</style>
