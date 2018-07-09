export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }
	updateMarkers(benches) {
    console.log('time to update');
		benches.forEach((bench) => {
			this.markers[bench.id] = new google.maps.Marker({
				position: {lat: bench.lat, lng: bench.lng},
				map: this.map,
			});
		});
  }

	createMarkerFromBench(bench) {
		this.markers[bench.id] = new google.maps.Marker({
			position: {lat: bench.lat, lng: bench.lng},
			map: this.map,
		});
	}
}
