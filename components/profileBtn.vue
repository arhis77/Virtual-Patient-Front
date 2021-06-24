<template>
    <v-menu top offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-on="on" v-bind="attrs" text class="profile text--right rounded-lg">
            <img src="../assets/i_profile.svg" alt="" class="mr-3">
            <span>Профиль</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="test('info')">
            <img src="../assets/i_info.svg" width="26">
            <v-list-item-title class="ml-6">Помощь</v-list-item-title>
        </v-list-item>
        <v-list-item @click="test('setting')">
            <img src="../assets/i_settings.svg" width="26">
            <v-list-item-title class="ml-6">Настройка</v-list-item-title>
        </v-list-item>
        <v-list-item @click="test('out')">
            <img src="../assets/i_logout.svg" width="26">
            <v-list-item-title class="ml-6">Выход</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
    methods: {
        test(e) {
            if(e == 'out') this.$router.replace('/')
            console.log(e)
        }
    }
}
</script>