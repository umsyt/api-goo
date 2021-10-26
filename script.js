
/*
function initMap(){
  

 
  var map = new google.maps.Map(
    document.getElementById("map"),
    {
      center: {lat: 0, lng: 0},
      zoom: 7,
      fullscreenControl: true
      // mapTypeId: google.maps.MapTypeId.SATELLITE
    }
  )

/*
  var marked = new google.maps.Marker({
    map: map,
    position: {lat: 0, lng: 0}
  });

}*/
function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 47.6562, lng: -122.3021},
      zoom: 11,
      fullscreenControl: false
    });
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({"address":"University of Washington"},
    function(results, status){
      var locationMarker = new google.maps.Marker({
      map: map,
      position: results[0].geometry.location
    });
    })

    
}
