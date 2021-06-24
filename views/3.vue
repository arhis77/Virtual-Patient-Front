<template>
    <v-row class="d-flex mb-4">
        <v-col md="12" xl="12" class="white rounded-xl page_met__02 inner pl-md-3 pr-md-3 pl-lg-14 pr-lg-14 pt-16">
            <v-form class="form">
                <v-row class="mb-14">
                    <v-col md="6" xl="6" class="text_01 blue_02">Создать задание</v-col>
                    <v-col md="6" xl="6" class="d-flex align-center justify-end">
                        <v-btn @click="backPage" text class="profile text--right rounded-lg">
                            <img src="../assets/arrow_left.svg" alt="" class="mr-2 mt-1" width="24">
                            <span>Назад</span>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col md="1" xl="1">
                        <v-label>Номер</v-label>
                        <v-text-field readonly value="1" outlined></v-text-field>
                    </v-col>

                    <v-col md="5" xl="5">
                        <v-label>Название задания</v-label>
                        <v-text-field placeholder="Введите наименование задания..."  outlined></v-text-field>
                    </v-col>
                    
                    <v-col md="3" xl="3">
                        <v-label>Порядок действий</v-label>
                        <v-select :items="['Плановый педиатрический прием', 'Плановый хирургический прием', 'Неотложная помощь']"  outlined></v-select>
                    </v-col>
                    
                    <v-col md="3" xl="3">
                        <v-label>Система</v-label>
                        <!-- <v-select multiple chips :items="sis"  outlined></v-select> -->
                        <!-- <v-autocomplete  outlined no-data-text="Поиск не дал результатов..." :items="sis" chips multiple/> -->
                        <v-select
                            v-model="valuesel2"
                            :items="sis"
                            multiple
                            outlined
                            >
                            <template v-slot:selection="{ item, index }">
                                <v-chip v-if="index === 0">
                                <span>{{ item }}</span>
                                </v-chip>
                                <span
                                v-if="index === 1"
                                class="grey--text caption"
                                >+{{ valuesel2.length - 1 }}</span>
                            </template>
                        </v-select>
                    </v-col>
                </v-row>

                <v-row class="mb-5">
                    <v-col md="12" xl="12" class="text_01 blue_02">Сведения о пациенте</v-col>
                </v-row>

                <v-row>
                    <v-col md="5" xl="5">
                        <v-label>ФИО</v-label>
                        <v-text-field placeholder="Введите ФИО..."  outlined></v-text-field>
                    </v-col>

                     <v-col md="5" xl="5">
                        <v-label>Пол</v-label>
                         <v-radio-group v-model="row" row class="mt-md-2 mt-lg-2 mt-xl-2 mt-sm-0">
                            <v-radio class="d-flex align-center mr-lg-16 mt-xl-0"
                            label="Мужской"
                            value="radio-1"
                            color="primary"
                            />
                            <v-radio
                            label="Женский"
                            value="radio-2"
                            color="primary"
                            />
                        </v-radio-group>
                    </v-col>

                    <v-col md="2" xl="2">
                        <v-label>Возраст</v-label>
                        <v-text-field value=""  outlined></v-text-field>
                    </v-col>
                </v-row>

                <v-row>  
                    <v-col md="2" xl="2" class="d-flex flex-column">
                        <v-label>Поступил</v-label>
                            <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    
                                    outlined
                                    class="date_field"
                                    v-model="dateFormatted"
                                    placeholder="Дата"
                                    persistent-hint
                                    v-bind="attrs"
                                    v-on="on"
                                />
                            </template>
                            <v-date-picker
                                :first-day-of-week="1"
                                locale="ru"
                                v-model="date"
                                no-title
                                :max="new Date().toISOString().substr(0, 10)"
                                @input="menu1 = false"
                            />
                        </v-menu>
                    </v-col>

                    <v-col md="3" xl="3" class="d-flex flex-column">
                        <v-label>Время</v-label>
                        <div class="d-flex justify-content-between">
                            <v-text-field placeholder="Часов"  outlined class="mr-8"></v-text-field>
                            <v-text-field placeholder="Минут"  outlined></v-text-field>
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col md="5" xl="5">
                        <v-label>Сценарии</v-label>
                        <v-select  outlined no-data-text="Поиск не дал результатов..." :items="complaints" placeholder="Сценарии" />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col md="12" xl="12" class="text_01 blue_02">Критерии оценки</v-col>
                </v-row>

                <v-row class="mb-4">
                    <v-col md="2" xl="2" class="label_small">
                        <v-label>Правильные ответы (баллы)</v-label>
                        <v-text-field value="1"  outlined></v-text-field>
                    </v-col>

                    <v-col md="2" xl="2" class="label_small">
                        <v-label>Неправильные ответы (баллы)</v-label>
                        <v-text-field value="-1"  outlined></v-text-field>
                    </v-col>

                    <v-col md="2" xl="2" class="label_small">
                        <v-label class="small">Избыточные действия</v-label>
                        <v-text-field value="-1"  outlined></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-btn x-large color="success" class="mr-4 form_btn">
                            Сохранить
                        </v-btn>
                    
                        <v-btn outlined   x-large @click="backPage" class="mr-4 red--text form_btn" >
                            <img src="../assets/i_close.svg" alt="" width="14" class="mr-2">
                            <span>Отменить</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
    </v-row>

</template>

<script>
export default {
    data() {
        return {
            valuesel2: [],
            row: null,
            menu1: false,
            date: null,
            dateFormatted: '',
            complaints: ['Здоровый ребенок','Бронхиальная астма'],
            sis: ['Дыхательная система','Пищеварительная система человека','Мочевыделительная система','Опорно-двигательный аппарат','Сердечно-сосудистая система','Нервная система и органы чувств','Эндокринная система','Органы кроветворения и иммунной системы', 'Кожа, подкожно-жировая клетчака', 'Репродуктивная система']
        }
    },
    methods: {
        backPage() {
            this.$router.push('/2')
        }
    },
    watch: {
        date(val) {
            if(val) this.dateFormatted = new Date(val).toLocaleDateString('ru-RU')
        }
    }
}
</script>

<style>
    @media (max-width: 959px) {
        .v-input--selection-controls {
            margin-top: 9px;
        }
    }
    @media (max-width: 850px) {
        .form label.v-label {
            font-size: 18px;
        }
        .v-input--selection-controls {
            margin-top: 0;
        }
        .form .v-radio .v-icon.v-icon {
            font-size: 25px;
        }
        
    }
</style>