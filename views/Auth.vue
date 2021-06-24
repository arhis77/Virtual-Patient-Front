<template>
    <v-row class="d-flex mb-4">
        <v-col md="6" xl="6" class="white rounded-xl inner pl-md-3 pr-md-3 pl-lg-14 pr-lg-14 pt-10 pb-8 offset-md-3 offset-xl-3">
             <v-row>
               <v-col class="red--text text_01 text-center mb-4">
                   Авторизация
               </v-col>
            </v-row>

            <v-row>
                <v-col md="12" lg="12">
                    <v-form class="form">
                        <v-text-field :error="errorBtn" :error-messages="errorMessages" v-model="login" label="Имя" filled outlined />
                        
                        <v-text-field
                            :error="errorBtn"
                            :error-messages="errorMessages"
                            v-model="password"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            name="input-10-1"
                            label="Пароль"
                            @click:append="show = !show"
                            filled
                            outlined
                            class="mb-6"
                        />
                        <v-btn :loading="loading" x-large class="mr-4 form_btn auth__btn" @click="auth">
                            Войти в систему
                        </v-btn>
                    
                    </v-form>
                </v-col>
            </v-row>
        </v-col>
        <v-snackbar
        v-model="snackbar"
        color="error"
        :timeout="6000"
        top
        >
            Ошибка авторизации, попробуйте снова!!!
        </v-snackbar>
    </v-row>
</template>

<script>
export default {
    name: 'Home',
    data:() => ({
        errorBtn: false,
        errorMessages: '',
        login: 'Metodist',
        password: '123456',
        show: false,
        loading: false,
        snackbar: false
    }),
    methods: {
        auth() {
            if(this.login == 'Metodist' && this.password == '123456'){
                this.loading = true
                
                setTimeout(() => {
                    this.loading = false
                    this.$router.push('/1')

                    this.errorBtn = false
                    this.errorMessages = ''
                }, 2000);
            } else if(this.login == 'Teacher' && this.password == '123456') {
                this.loading = true
                
                setTimeout(() => {
                    this.loading = false
                    this.$router.push('/10')

                    this.errorBtn = false
                    this.errorMessages = ''
                }, 2000);
            } else if(this.login == 'Student' && this.password == '123456') {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    this.$router.push('/11')

                    this.errorBtn = false
                    this.errorMessages = ''
                }, 2000);
            } else {
                this.loading = true

                setTimeout(() => {
                    this.errorBtn = true
                    this.errorMessages = 'Неверный логин/пароль, повторите попытку...'
                    this.loading = false
                    this.snackbar = true
                }, 1000);
            }
        }
    }
}
</script>

<style scoped lang="stylus">
    #app .auth__btn {
        background-color: #324979;
        box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        color: white;
        font-weight: normal;
    }
</style>