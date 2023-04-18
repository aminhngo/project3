function init() {
  //alert('it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(40.68940110167675, -74.04447842287736);
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
	title: "Click me"
    icon: 'images/flag.png'
  });
  
  var contentString = '<h1>Dragon Bridge at Da Nang, Vietnam</h1>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString;
  });
  
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
}

google.maps.event.addDomListener(window, 'load', init);