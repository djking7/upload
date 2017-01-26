function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


var width = "600px",
    height = "620px";

var path = d3.geo.path();

var svg = d3.select(".map").append("svg")
    .attr("width", width)
    .attr("height", height);


d3.json("https://gist.githubusercontent.com/mohamed-ali/856f17a3450fc93ffbc2/raw/fd14a58691b18354617667bbae7cbc6e257dd9f1/tunisia.json", function(error, topology) {
  console.log(topology.objects.governorates.geometries[0].properties, "asd")
  var featureCollection = topojson.feature(topology, topology.objects.governorates);
  var bounds = d3.geo.bounds(featureCollection);

  var centerX = d3.sum(bounds, function(d) {return d[0];}) / 2,
      centerY = d3.sum(bounds, function(d) {return d[1];}) / 2;

  var projection = d3.geo.mercator()
    .scale(3000)
    .center([centerX, centerY]);

  path.projection(projection);
 
  svg.selectAll("path")
      .data(featureCollection.features)
      .enter().append("path")
      .attr("d", path)
       .attr("gov",function(d) { 
            var tt = d.properties.gov_name_f
            if(d.properties.gov_name_f.substring(0, 3)=='Kas'){
              tt = 'Kasserine';
            }
            if(d.properties.gov_name_f.substring(0, 3)=='Gab'){
              tt = 'Gabes';
            }
            if(d.properties.gov_name_f.substring(d.properties.gov_name_f.length-4, d.properties.gov_name_f.length)=='nine'){
              tt = 'Medenine';
            }
            if(d.properties.gov_name_f.substring(d.properties.gov_name_f.length-2, d.properties.gov_name_f.length)=='ja'){
              tt = 'Beja';
            }
            return tt;
         }); 

    svg.selectAll(".place-label")
      .data( featureCollection.features)
    .enter().append("text")
      .attr("class", "place-label")
      .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
      .attr("dy", ".35em");


});

$('.container').eq(1).append('<div class="mp" style="margin-top:-540px;margin-left:79%;height:460px;"></div>');
$('.mp').append('<div class="juju"></div>');
$('.mp').append('<div class="form-group"><label for="sel1">Select Type (select one):</label><select class="form-control" id="sel1"><option value="cliniq">Clinique</option><option value="doc">Médecin</option><option value="pharma">Pharmacie</option><option value="amb">Ambulance</option><option value="opt">Opticien</option><option value="radio">Centre de Radiologie</option><option value="labo">Laboratoire</option></select></div>')
$('.mp').append('<br><br><a class="btn btn-primary sea hidden">Rechercher</a>');
var timer = setInterval(function(){
  if($('path').length != 0){
    
    $('path').click(function(){
      
      $('path').css('fill','');
      $('.juju').text($(this).attr('gov'));
      $(this).css('fill','blue');
      console.log($('path').index($(this)));
      setCookie('index',$('path').index($(this)));
      $('.sea').removeClass('hidden');

    });
    $('.sea').click(function(){
      var state = $('.juju').text();
      setCookie('select',$('select').val());
      location.href = '/formulaire/map/state/'+state+'/'+$('select').val();
    });
    if($('.juju').text().length==0){
      var ind = getCookie('index');
      $('path').eq(ind).css('fill','blue');
      $('.juju').text($('path').eq(ind).attr('gov'));
    }
    if(getCookie('select')!='0'){
      if($('select').val()!=getCookie('select')){
         $('select').val(getCookie('select'));
      }
    }
    $('select').on('change',function(){
      $('.sea').removeClass('hidden');
    })
    clearInterval(timer);
  }
},300);





$('.prev').click(function(){
  $.post('/formulaire/action/', { "cin" : 0100262533,'code_assure': "ATFP-9015" }, 
    function(returnedData){
         console.log(returnedData);
});

    
});