<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" class="white rounded-xl inner pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-16">

            <v-row>
                <div class="title_01 d-flex align-center justify-center">
                    <span class="text">Главная страница</span>
                </div>
            </v-row>
            <v-row class="mb-4">
                <v-col md="12" class="text_02 text-right mt-4">Вы: методист Владимир Иванович Рыков</v-col>
            </v-row>
            <v-row class="mb-8">
                <v-col md="6" xl="6" class="text_01">Выберите нужный раздел</v-col>
                <v-col md="6" xl="6" class="d-flex align-center justify-end">
                    <profile-btn />
                </v-col>
            </v-row>
            <v-row class="pb-16 buttons_main">
                <v-col md="3" xl="3">
                    <v-btn @click="route(1)" class="btn_01 pa-4 blue large darken-4 rounded-md white--text d-flex align-center justify-center">
                        <img src="../assets/main_01_icon.svg" alt="" class="mr-sm-3 mr-lg-6 icon_01">
                        <span>Порядок<br> действий</span>
                    </v-btn>
                </v-col>
                <v-col md="3" xl="3">
                    <v-btn @click="route(2)" class="btn_01 pa-4 blue large darken-4 rounded-md white--text d-flex align-center justify-center">
                        <img src="../assets/main_02_icon.svg" alt="" class="mr-sm-3 mr-lg-6 icon_02">
                        <span>Задания</span>
                    </v-btn>
                </v-col>
                <v-col md="3" xl="3">
                    <v-btn @click="route(3)" class="btn_01 pa-4 blue large darken-4 rounded-md white--text d-flex align-center justify-center">
                        <img src="../assets/main_03_icon.svg" alt="" class="mr-sm-3 mr-lg-6 icon_03">
                        <span>Справочники</span>
                    </v-btn>
                </v-col>
                <v-col md="3" xl="3">
                    <v-btn @click="route(4)" class="btn_01 pa-4 blue large darken-4 rounded-md white--text d-flex align-center justify-center">
                        <img src="../assets/main_04_icon.svg" alt="" class="mr-sm-3 mr-lg-6 icon_04">
                        <span>Знания</span>
                    </v-btn>
                </v-col>
            </v-row>

        </v-col>
    </v-row>

</template>

<script>
import profileBtn from '../components/profileBtn'

export default {
    components: {profileBtn},
    methods: {
        route(e) {
            if(e == 1) this.$router.push('/4')
            else if(e == 2) this.$router.push('/2')
            else if(e == 3) this.$router.push('/guid')
            else this.$router.push('/6')
        }
    }
}
</script>

<style lang="stylus">
    @import '../assets/_1.stylus'
</style>