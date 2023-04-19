function init() {
  //alert('it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(40.68940110167675, -74.04447842287736);
  var mapOptions = {
    center: myLocation,
	zoom: 18,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    draggable:true,
    title:"Drag me!",
    icon: 'images/flag.png'
  });
  
  var contentString = '<h1>Statue of Liberty</h1><p>The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.</p>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
	maxWidth: 250,
  });
  
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
}

google.maps.event.addDomListener(window, 'load', init);