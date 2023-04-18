function init() {
  //alert('it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.835117, -87.627130);
  var mapOption = {
    center: myLocation,
	zoom: 18,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLocation;
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
//    icon: ''
  });
  
  var contentString = '<h1>IIT PH</h1>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString;
  });
}

google.maps.event.addDomListener(window, 'load', init);