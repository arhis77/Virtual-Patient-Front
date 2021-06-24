<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" xl="12" class="white rounded-xl page_met__02 inner pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-16">
            <v-row class="mb-5">
                <v-col md="6" xl="6" class="text_01 red--text">Справочники</v-col>
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
                    <v-btn @click="route(1)" text class="text--right rounded-lg standart_btn pa-8 mr-6 btn_02">
                        <img src="../assets/i_guid_v1.svg" alt="" class="mr-sm-3 mr-lg-6">
                        <span class="green--text">Справочник систем организма человека</span>
                    </v-btn>
                    <v-btn @click="route(2)" text class="text--right rounded-lg pa-8 standart_btn btn_02">
                        <img src="../assets/i_guid_v2.svg" alt="" class="mr-sm-3 mr-lg-6" width="35">
                        <span class="green--text">Справочник частей тела</span>
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
        backPage() {
            this.$router.push('/1')
        },
        route(e) {
            if(e == 1) this.$router.push('/8')
            else this.$router.push('/9')
        }
    }
}
</script>