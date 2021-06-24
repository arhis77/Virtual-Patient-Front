<template>

	<v-app id="">
		<div id="app" class="d-flex align-center justify-center">

			<!-- <div class="settings_window">
				<ul>
					<li>
						<img src="./assets/i_info.svg" alt="" width="26">
						<a href="#">Помощь</a>
					</li>
					<li>
						<img src="./assets/i_settings.svg" alt="">
						<a href="#">Настройка</a>
					</li>
					<li>
						<img src="./assets/i_logout.svg" alt="">
						<a href="#">Выход</a>
					</li>
				</ul>
			</div> -->

			<div class="bg_01"></div>
			<div class="bg_02"></div>
			<div class="bg_03"></div>
			<div class="bg_04"></div>

			<v-container class="main_page_01 mb-16">
				<v-row class="d-flex titles_top mt-7 mb-7">
					<v-col md="6" xl="6" class="white--text d-flex justify-end pr-6">Система-тренажер</v-col>
					<v-col md="6" xl="6" class="blue_03 pl-6">Виртуальный пациент</v-col>
				</v-row>

				<router-view />
			</v-container>
			
			<v-footer absolute class="d-flex align-end justify-between pb-5 pt-16">
				<v-col md="4" xl="4" class="pb-md-0 logo_footer__01">
					<img src="./assets/logo_01.png" alt="" class="mr-6">
				</v-col>
				<v-col md="4" xl="4" class="copyright text-center">(с) 2020 Все права защищены</v-col>
				<v-col md="4" xl="4" class="text-right mr-0 pb-md-0 logo_footer__02">
					<img src="./assets/logo_02.svg" alt="" class="mr-6" width="174">
				</v-col>
			</v-footer>
		</div>
	</v-app>
</template>

<style lang="stylus">
	@import './assets/_style.stylus'
	@import './assets/_app.stylus'
	@import './assets/arial_nova/_arial_nova.css'

		@media (max-width: 880px) {
			.logo_footer__01 {
				margin-right: 0 !important;
				img {
					width: 230px;
				}
			}
		}
</style>
