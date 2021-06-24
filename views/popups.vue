<template>

    <v-row class="d-flex mb-4">
        <v-col md="12" class="white rounded-xl inner pl-md-6 pr-md-6 pl-xl-14 pr-xl-14 pl-lg-6 pr-lg-8 pt-16">

            <!-- Успешно добавленный факт -->
            <v-row>
                <v-col sm="4" lg="12" class="pt-0">
                    <div class="mb-8">
                        <v-btn class="toggle_btn py-8 red--text" @click="dialog=true" style="width: auto;">Успешно добавленный факт</v-btn>
                        <v-dialog v-model="dialog" persistent max-width="700" class="rounded-xl" style="border-radius: 24px !important;">
                            <v-card class="rounded-xl py-8">
                                 <v-btn icon @click="dialog = false" style="position: absolute; right: 1rem; top: 1rem;">
                                    <img src="../assets/i_close.svg" alt="" width="20">
                                </v-btn>
                                <v-card-title class="popup--title">К каким системам организма относится патология?</v-card-title>

                                <v-form>
                                    <v-list two-line flat class="mb-2">
                                        <v-list-item-group
                                            v-model="settings"
                                            multiple
                                            class="d-flex flex-wrap"
                                        >
                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Лимфатическая система</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Сердечно-сосудистая система</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Пищеварительная система человека</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Эндокринная система</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Нервная система</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Сенсорная система</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Опорно-двигательный аппарат</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Органы кроветворения и иммунной системы</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Циркуляторная система</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Покровная система</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Дыхательная система</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        <v-list-item class="col-md-6">
                                            <template v-slot:default="{ active, }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="green"></v-checkbox>
                                                </v-list-item-action>
                                    
                                                <v-list-item-content>
                                                    <v-list-item-title>Мочевыделительная система</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>

                                        </v-list-item-group>
                                    </v-list>
                                    <v-btn class="ml-5 accept_btn" height="50" width="199">
                                        <span class="">Сохранить</span>
                                    </v-btn>
                                </v-form>
                            </v-card>
                        </v-dialog>
                    </div>
               </v-col>
          </v-row>

        <!-- Завершение задания -->
          <v-row>
                <v-col sm="4" lg="12" class="pt-0">
                    <div class="mb-8">
                        <v-btn class="toggle_btn py-8 red--text" @click="dialog1=true" style="width: auto;">Завершение задания</v-btn>
                        <v-dialog v-model="dialog1" persistent max-width="700" class="rounded-xl" style="border-radius: 24px !important;">
                            <v-card class="rounded-xl py-16 pb-16">
                                 <v-btn icon @click="dialog1 = false" style="position: absolute; right: 1rem; top: 1rem;">
                                    <img src="../assets/i_close.svg" alt="" width="20">
                                </v-btn>
                                <v-card-title class="popup--title text-center center justify-center ">Вы уверены, что хотите <br>закончить задание?</v-card-title>

                                <v-form class="text-center py-14">
                                    <v-btn class="ml-5 accept_btn" height="50" width="128">
                                        <span class="green--text">Да</span>
                                    </v-btn>
                                    <v-btn class="ml-5 accept_btn" height="50" width="128">
                                        <span class="red--text">Нет</span>
                                    </v-btn>
                                </v-form>
                            </v-card>
                        </v-dialog>
                    </div>
               </v-col>
          </v-row>

          <!-- Успешно добавленный факт -->
          <v-row>
                <v-col sm="4" lg="12" class="pt-0">
                    <div class="mb-8">
                        <v-btn class="toggle_btn py-8 red--text" @click="dialog2=true" style="width: auto;">Успешно добавленный факт</v-btn>
                        <v-dialog v-model="dialog2" persistent max-width="700" class="rounded-xl" style="border-radius: 24px !important;">
                            <v-card class="rounded-xl py-16 pb-16 text-center">
                                 <v-btn icon @click="dialog2 = false" style="position: absolute; right: 1rem; top: 1rem;">
                                    <img src="../assets/i_close.svg" alt="" width="20">
                                </v-btn>
                                <img src="../assets/i_check__green.svg">

                                <v-card-title class="popup--title text-center center justify-center green--text">Порядок действий выбран <br>верно</v-card-title>

                            </v-card>
                        </v-dialog>
                    </div>
               </v-col>
          </v-row>

          <!-- Ошибка -->
          <v-row>
                <v-col sm="4" lg="12" class="pt-0">
                    <div class="mb-8">
                        <v-btn class="toggle_btn py-8 red--text" @click="dialog3=true" style="width: auto;">Успешно добавленный факт</v-btn>
                        <v-dialog v-model="dialog3" persistent max-width="700" class="rounded-xl" style="border-radius: 24px !important;">
                            <v-card class="rounded-xl py-16 pb-16 text-center">
                                 <v-btn icon @click="dialog3 = false" style="position: absolute; right: 1rem; top: 1rem;">
                                    <img src="../assets/i_close.svg" alt="" width="20">
                                </v-btn>
                                <img src="../assets/i_attention.svg">

                                <v-card-title class="popup--title text-center center justify-center green--text">Порядок действий выбран <br>неправильно</v-card-title>

                            </v-card>
                        </v-dialog>
                    </div>
               </v-col>
          </v-row>

        </v-col>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                dialog1: false,
                dialog2: false,
                dialog3: false,
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../assets/_popups.stylus'
</style>