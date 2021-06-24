export default {
	namespaced: true,
	state: {
		array_list: [],
		list_zacl: [
			{name: 'Кожа, подкожно-жировая клетчака', abbr_name: '1', val: false},
			{name: 'Пищеварительная система человека', abbr_name: 'ПСЧ', val: false},
			{name: 'Нервная система и органы чувств', abbr_name: 'НС', val: false},
			{name: 'Опорно-двигательный аппарат', abbr_name: 'ОДА', val: false},
			{name: 'Дыхательная система', abbr_name: 'ДС', val: false},
			{name: 'Сердечно-сосудистая система', abbr_name: 'ССС', val: false},
			{name: 'Эндокринная система', abbr_name: 'ЭС', val: false},
			{name: 'Органы кроветворения и иммунной системы', abbr_name: 'ОКИС', val: false},
			{name: 'Мочевыделительная система', abbr_name: 'МС', val: false},
			{name: 'Репродуктивная система', abbr_name: 'МС', val: false},
		]
	},
	getters: {
		getArray: state => state.array_list,
		getListZacl: state => state.list_zacl
	},
	mutations: {
		changeArray(state, payload) {
			if(state.array_list.findIndex(f => f.info == payload.info) !== -1) {
				const index = state.array_list.findIndex(f => f.info === payload.info)
				state.array_list.splice(index, 1);
			} else {
				state.array_list.push(payload)
			}
		},
		mutationAddInSis(state, obj) {
      if(obj.arr.length > 0) {
        state.array_list.find(f=> f.info == obj.name).sis = obj.arr
      } else {
        state.array_list.find(f=> f.info == obj.name).check = false
      }
			setTimeout(() => { state.list_zacl.forEach(el => {el.val = false}) }, 1000);
		}
	},
	actions: {
		
	},
};
