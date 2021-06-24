<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" xl="12" class="white rounded-xl page_met__02 inner pl-md-6 pr-md-6 pl-lg-14 pr-lg-14 pt-16">
            
            <v-row class="mb-5">
                <v-col md="6" xl="6" class="text_01 blue_02">Плановый педиатрический прием</v-col>
                <v-col md="6" xl="6" class="d-flex align-center justify-end">
                    <v-btn @click="backPage" text class="profile text--right rounded-lg">
                        <img src="../assets/arrow_left.svg" alt="" class="mr-2 mt-1" width="24">
                        <span>Назад</span>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col md="12">
                    <img src="../assets/shema2.svg" alt="" class="shema">
                </v-col>
            </v-row>
            
        </v-col>
    </v-row>

</template>

<script>
export default {
    methods: {
        backPage() {
            this.$router.push('/4')
        }
    }
}
</script>

<style lang="stylus">
    .shema {
        width: 100%;
    }
</style>