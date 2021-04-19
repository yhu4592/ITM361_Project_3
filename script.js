$(document).ready(function(){
  $('.slider').bxSlider({
    captions: true
  });
});

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 41.87884, lng: -87.63596 },
  zoom: 20,
  });

  const image = {
      url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-512.png",
      scaledSize : new google.maps.Size(50,50)
  };
    
  const beachMarker = new google.maps.Marker({
    position: { lat: 41.87884, lng: -87.63596 },
    map,
    icon: image,
    animation: google.maps.Animation.DROP,
    title: "Willis Tower",
  });

  const content = '<div><h1>Willis Tower</h1><p>Formerly known as the Sears Tower, is a skyscraper located in downtown Chicago as one of its most populat tourist attractions. Within it houses multiple corporate businesses and companies as well as a Skydeck for tourists to look over the city!</p><footer>More information can be found at <a href="https://en.wikipedia.org/wiki/Willis_Tower">https://en.wikipedia.org/wiki/Willis_Tower</a></footer></div>';
  const contentWindow = new google.maps.InfoWindow({
      content: content,
  })

  beachMarker.addListener("click", () => {
      contentWindow.open(map, beachMarker);
      beachMarker.setAnimation(google.maps.Animation.BOUNCE);
  })
}


