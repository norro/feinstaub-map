import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import config from '../config'
console.log(config)
export default {
	template: require('./map.jade'),
	components: {},
	data() {
		return {
		}
	},
	methods: {

	},
	ready() {
		let map = leaflet.map(this.$el, {
			center: config.center,
			zoom: 13
		})
		leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 18,
			id: config.mapbox.id,
			accessToken: config.mapbox.accessToken
		}).addTo(map)
	}
}