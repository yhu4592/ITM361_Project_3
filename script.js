$(document).ready(function(){
  $('.slider').bxSlider({
    captions: true
  });
});


function initMap() {
  let map;
  map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 41.87884, lng: -87.63596 },
  zoom: 20,
  });

  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: 41.87884, lng: -87.63596 },
    map,
    icon: image,
  });
}

