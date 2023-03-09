function initMap() {
  // The location of Uluru
  const sanFrancisco = { lat: 37.78533131504486, lng: -122.40357624941201 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    mapId: '45e6069b743e9903',
    center: sanFrancisco,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: sanFrancisco,
    map: map,
    // icon: 'assets/img/marker.png',
    title: 'Find us here!',
  });
}
