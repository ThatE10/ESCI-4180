/**
 * Train Line and Stations Mapping Tool
 * Click points on the map to add stations - they snap to the train line
 */

// 1. HARDCODED TRAIN LINE COORDINATES
var trainLineCoordinates = [
  [-80.7331961461113,35.31212335427029],
  [-80.73578179560165,35.31236411350776],
  [-80.73680639944534,35.31309951910447],
  [-80.73809922419052,35.3145878194957],
  [-80.73963881216507,35.3150605680063],
  [-80.7413017817543,35.314420387068886],
  [-80.74252806401012,35.31328842279484],
  [-80.74377797341106,35.3121327851255],
  [-80.74528537487743,35.310681902683896],
  [-80.74718437885997,35.30879516731754],
  [-80.74862717515101,35.30737058441641],
  [-80.74949621087184,35.30610979572598],
  [-80.75121045388114,35.30358815940058],
  [-80.75174689568412,35.302751974448476],
  [-80.75293779648673,35.30102140892469],
  [-80.75376391686332,35.29976611048627],
  [-80.75424135006797,35.298570876030574],
  [-80.75466300823703,35.2970674678974],
  [-80.75497414448276,35.296056083089184],
  [-80.7554140267612,35.29455015660447],
  [-80.75574662067905,35.293460907107715],
  [-80.75603629925266,35.29251515487944],
  [-80.7564761815311,35.29152998455781],
  [-80.75724478469625,35.290365642173796],
  [-80.75842495666281,35.28903015071946],
  [-80.75963395125332,35.28791723644999],
  [-80.76074975020352,35.286857570364965],
  [-80.76235722596084,35.285422891749626],
  [-80.7628722100917,35.2848974230374],
  [-80.7636285930339,35.28405228703876],
  [-80.76438137149782,35.28303312811625],
  [-80.76498218631716,35.28199967257277],
  [-80.76555352021495,35.28073898352907],
  [-80.765923665059,35.279639810666104],
  [-80.76631673697156,35.27784347906885],
  [-80.76656350020093,35.2766304034385],
  [-80.76695234813617,35.274534908207194],
  [-80.76714010276721,35.273527621427455],
  [-80.76757008649619,35.27137156831716],
  [-80.76799923993858,35.26922248023742],
  [-80.76852355079812,35.2672487241434],
  [-80.76914045887155,35.26599976594965],
  [-80.77007923202676,35.26470767277368],
  [-80.7710631150841,35.26373634954065],
  [-80.7720716256737,35.26281653081792],
  [-80.77254381166142,35.261900890423256],
  [-80.77276911721867,35.260083102179586],
  [-80.77289008720048,35.2593445636037],
  [-80.7730188332332,35.258853968330726],
  [-80.77370547874101,35.25819691643809],
  [-80.77562583408233,35.25673832901011],
  [-80.77683819255707,35.25581405036458],
  [-80.77950970993555,35.25426944969428],
  [-80.78279031444077,35.25302964180702],
  [-80.78468931842332,35.252587195660034],
  [-80.78873690894271,35.25198473975499],
  [-80.79162833026076,35.251610472106776],
  [-80.79351660540725,35.251352009235006],
  [-80.79648312857772,35.25091762055564],
  [-80.79722878268386,35.25076429391225],
  [-80.79834458163405,35.250348120132706],
  [-80.8013203409339,35.24987288579183],
  [-80.80571916371832,35.24925413486002],
  [-80.80708709031592,35.24891680894036],
  [-80.8088839853685,35.24833430284486],
  [-80.81052549728561,35.24764649914735],
  [-80.81143744835067,35.24675278371578],
  [-80.81219585281139,35.245394524929075],
  [-80.81328482967143,35.24457964450578],
  [-80.8147793111206,35.243512957040956],
  [-80.81623306840667,35.24247461613935],
  [-80.81769682050185,35.24129606120098],
  [-80.81957436681228,35.23977574384578],
  [-80.8216584301891,35.23816807114642],
  [-80.82359400744527,35.236683705599475],
  [-80.82432356829732,35.236157920760164],
  [-80.82572904582112,35.23578986934479],
  [-80.82770036352353,35.23504065511259],
  [-80.82945452821927,35.233813793668524],
  [-80.83083904789422,35.2328055924812],
  [-80.83259321258996,35.231504206567955],
  [-80.83379448296779,35.23054863173182],
  [-80.83662284106317,35.228415811283305],
  [-80.83782983511988,35.22754379403011],
  [-80.8403952199799,35.22577927921507],
  [-80.84227265997698,35.22431572642341],
  [-80.84409119768908,35.22304926243924],
  [-80.84624254065125,35.221784533515994],
  [-80.84806644278137,35.220824797394165],
  [-80.84953475051923,35.21969101274285],
  [-80.85114944034619,35.21862607190013],
  [-80.85392600306665,35.216762709055345],
  [-80.85599130400811,35.21524552575566],
  [-80.85747724780236,35.21395262371601],
  [-80.85836237677728,35.21288899515143],
  [-80.85923677691613,35.21185464514211],
  [-80.86041158446466,35.2103907543857],
  [-80.8620029973149,35.20846082516676],
  [-80.86331313988909,35.20686237752569],
  [-80.86460596463426,35.205275666634044],
  [-80.86581295869097,35.20372306883162],
  [-80.8668643846248,35.20245190017679],
  [-80.86823174082284,35.20077010293521],
  [-80.86932071768288,35.199476970388574],
  [-80.87039901129788,35.198071242559614],
  [-80.87188917096624,35.19622415339943],
  [-80.87239879067907,35.19552714042428],
  [-80.87299424108038,35.19438297408406],
  [-80.87387937005529,35.192866161680605],
  [-80.87488096081753,35.19105502360712],
  [-80.87558489503603,35.18980703009021],
  [-80.87625544728975,35.188640862595506],
  [-80.87738733949404,35.18664022698112],
  [-80.87803343263363,35.18536006140381],
  [-80.87851086583828,35.18405791482435],
  [-80.8788380953381,35.18277328512823],
  [-80.87912240949368,35.18130010116523],
  [-80.8794960055667,35.179203325091315],
  [-80.87952762062335,35.17789090921389],
  [-80.87936668808246,35.17679911165283],
  [-80.87912528927112,35.1759660032487],
  [-80.8788677802259,35.174706726098634],
  [-80.87842402636097,35.1728445200011],
  [-80.87822554289387,35.172037681167986],
  [-80.8778557692539,35.170170022440836],
  [-80.8777793353675,35.1685016748274],
  [-80.87769350467903,35.16751061220691],
  [-80.87756620329603,35.16572394196558],
  [-80.87750183027967,35.16487317847055],
  [-80.87755796977504,35.16277493897933],
  [-80.87757680403914,35.16114194320182],
  [-80.87760362612929,35.160067463378205],
  [-80.87726246097264,35.158691431922016],
  [-80.87701569774327,35.157831823302914],
  [-80.87696357496158,35.1563857248834],
  [-80.87706549890414,35.155337497734884],
  [-80.87725118523628,35.15410340877096],
  [-80.87753013497382,35.15279198945412],
  [-80.87782517796546,35.15123183823168],
  [-80.87823575144039,35.14943489597417],
  [-80.8783864223359,35.148710392363135],
  [-80.87860431209441,35.14731683702439],
  [-80.87864805271892,35.146345815446054],
  [-80.87782193234233,35.142476918167944],
  [-80.87633607515056,35.13544697077326],
  [-80.8758803122447,35.13321413718187],
  [-80.87575259506296,35.13203215031721],
  [-80.87583842575144,35.13121613224935],
  [-80.87652507125925,35.129468434607695],
  [-80.8773619204719,35.1278889876711],
  [-80.87875889361096,35.12548023808074],
  [-80.88017509997083,35.1228915572464],
  [-80.8819882732649,35.11953931270024],
  [-80.88315771639539,35.11741056924855],
  [-80.88368879378034,35.11579578412097],
  [-80.88379023507402,35.114033789588014],
  [-80.88376756993252,35.111860642875016],
  [-80.88339627683425,35.11040278871427],
  [-80.88310659826064,35.10872642674645],
  [-80.88303858632614,35.10793862338306],
  [-80.88295007342865,35.10715747203824],
  [-80.88269874377478,35.10552900734108]
];

// 2. Define the area and map
var roi = ee.Geometry.LineString(trainLineCoordinates).buffer(2000);
Map.centerObject(roi, 13);

// 3. Fetch Landsat 8 Image
var image = ee.Image("LANDSAT/LC08/C02/T1_L2/LC08_017036_20140828")
  .clip(roi);

var scaledImage = image.select('SR_B.*').multiply(0.0000275).add(-0.2);

// 4. Display Base Image
Map.addLayer(scaledImage.select(['SR_B4', 'SR_B3', 'SR_B2']), 
  {min: 0, max: 0.3, gamma: [1.3, 1.3, 1.3]}, 
  'Landsat 8 RGB');

// 5. Create and display train line geometry
var trainLineGeometry = ee.Geometry.LineString(trainLineCoordinates);
Map.addLayer(
  ee.FeatureCollection([ee.Feature(trainLineGeometry)]),
  {color: '#e74c3c', width: 4},
  'Train Line Route'
);

// 6. STATIONS STORAGE
var stationsData = [];
var stationsLayer = null;

// 7. INSTRUCTIONS PANEL
var instructionsPanel = ui.Panel({
  widgets: [
    ui.Label({
      value: 'Train Stations Tool',
      style: {fontSize: '16px', fontWeight: 'bold', margin: '0 0 10px 0'}
    }),
    ui.Label({
      value: 'Add stations by clicking on the map. Stations will snap to the red train line.',
      style: {fontSize: '12px', margin: '0 0 8px 0'}
    })
  ],
  style: {position: 'top-left', padding: '15px', width: '320px'}
});

// 8. STATION NAME INPUT
var stationNameInput = ui.Textbox({
  placeholder: 'Enter station name',
  onChange: function(value) {}
});

// 9. STATION MODE TOGGLE
var stationModeActive = false;
var stationModeButton = ui.Button({
  label: 'Enable Station Mode',
  onClick: function() {
    var name = stationNameInput.getValue();
    
    if (!name) {
      print('Error: Please enter a station name');
      return;
    }
    
    stationModeActive = true;
    stationModeButton.setLabel('Click on map: "' + name + '"');
    stationModeButton.style().set({backgroundColor: '#27ae60', color: 'white', fontWeight: 'bold'});
    print('✓ Station mode active for: "' + name + '"');
    print('  Click on the map to place the station');
    updateInfo('Click on map to place: "' + name + '"');
  },
  style: {margin: '8px 0'}
});

// 10. CANCEL STATION MODE BUTTON
var cancelStationButton = ui.Button({
  label: 'Cancel',
  onClick: function() {
    stationModeActive = false;
    stationModeButton.setLabel('Enable Station Mode');
    stationModeButton.style().set({backgroundColor: '', color: '', fontWeight: ''});
    stationNameInput.setValue('');
    updateInfo('Station mode cancelled');
  },
  style: {margin: '0 0 8px 0'}
});

// 11. CLEAR STATIONS BUTTON
var clearStationsButton = ui.Button({
  label: 'Clear All Stations',
  onClick: function() {
    stationsData = [];
    if (stationsLayer) Map.remove(stationsLayer);
    stationCountLabel.setValue('Stations: 0');
    updateInfo('All stations cleared');
    print('✓ All stations cleared');
  }
});

// 12. EXPORT BUTTON
var exportButton = ui.Button({
  label: 'Export Train Line & Stations',
  onClick: function() {
    exportTrainData();
  },
  style: {backgroundColor: '#2980b9', color: 'white', fontWeight: 'bold', margin: '10px 0'}
});

// 13. INFORMATION DISPLAY
var infoLabel = ui.Label({
  value: 'Ready to add stations...',
  style: {fontSize: '11px', color: '#7f8c8d', margin: '10px 0'}
});

var stationCountLabel = ui.Label({
  value: 'Stations: 0',
  style: {fontSize: '11px', fontWeight: 'bold', margin: '5px 0'}
});

// 14. MAP CLICK HANDLER
Map.onClick(function(coords) {
  if (!stationModeActive) return;
  
  var clickPoint = [coords.lon, coords.lat];
  var stationName = stationNameInput.getValue();
  
  // Find closest point on train line
  var result = findClosestPointOnLine(trainLineCoordinates, clickPoint);
  
  addStation(stationName, result.snappedCoord, result.t, result.distanceToLine);
  
  // Reset mode
  stationModeActive = false;
  stationModeButton.setLabel('Enable Station Mode');
  stationModeButton.style().set({backgroundColor: '', color: '', fontWeight: ''});
  stationNameInput.setValue('');
});

// 15. FUNCTION: Find closest point on line and calculate t parameter
function findClosestPointOnLine(lineCoords, point) {
  var minDist = Infinity;
  var closestPoint = null;
  var closestSegmentIndex = 0;
  var closestT = 0;
  var distanceToClosest = 0;
  
  // Calculate total line length
  var segmentDistances = [0];
  var totalLineLength = 0;
  for (var i = 0; i < lineCoords.length - 1; i++) {
    var dist = haversineDistance(lineCoords[i], lineCoords[i + 1]);
    totalLineLength += dist;
    segmentDistances.push(totalLineLength);
  }
  
  // Find closest point on each segment
  for (var i = 0; i < lineCoords.length - 1; i++) {
    var coord1 = lineCoords[i];
    var coord2 = lineCoords[i + 1];
    
    var result = findClosestPointOnSegment(coord1, coord2, point);
    
    if (result.distance < minDist) {
      minDist = result.distance;
      closestPoint = result.point;
      closestSegmentIndex = i;
      closestT = result.t;
      
      // Calculate cumulative distance to this point
      var segmentLength = haversineDistance(coord1, coord2);
      distanceToClosest = segmentDistances[i] + (closestT * segmentLength);
    }
  }
  
  // Calculate overall t parameter [0, 1] along entire line
  var overallT = totalLineLength > 0 ? distanceToClosest / totalLineLength : 0;
  
  return {
    snappedCoord: closestPoint,
    t: overallT,
    distanceToLine: minDist,
    segmentIndex: closestSegmentIndex
  };
}

// 16. FUNCTION: Find closest point on a line segment
function findClosestPointOnSegment(p1, p2, point) {
  var lat1 = p1[1] * Math.PI / 180;
  var lat2 = p2[1] * Math.PI / 180;
  var lon1 = p1[0] * Math.PI / 180;
  var lon2 = p2[0] * Math.PI / 180;
  var pLat = point[1] * Math.PI / 180;
  var pLon = point[0] * Math.PI / 180;
  
  var x1 = (lon1) * 111320 * Math.cos(lat1);
  var y1 = lat1 * 110540;
  var x2 = (lon2) * 111320 * Math.cos(lat2);
  var y2 = lat2 * 110540;
  var px = (pLon) * 111320 * Math.cos(pLat);
  var py = pLat * 110540;
  
  var dx = x2 - x1;
  var dy = y2 - y1;
  var lengthSq = dx * dx + dy * dy;
  
  var t = 0;
  if (lengthSq > 0) {
    t = ((px - x1) * dx + (py - y1) * dy) / lengthSq;
    t = Math.max(0, Math.min(1, t));
  }
  
  var closestX = x1 + t * dx;
  var closestY = y1 + t * dy;
  
  var closestLon = (closestX / (111320 * Math.cos(closestY / 110540))) * 180 / Math.PI;
  var closestLat = (closestY / 110540) * 180 / Math.PI;
  
  var distance = Math.sqrt(
    Math.pow(px - closestX, 2) + Math.pow(py - closestY, 2)
  );
  
  return {
    point: [closestLon, closestLat],
    distance: distance,
    t: t
  };
}

// 17. FUNCTION: Calculate Haversine distance
function haversineDistance(coord1, coord2) {
  var lat1 = coord1[1] * Math.PI / 180;
  var lat2 = coord2[1] * Math.PI / 180;
  var dLat = lat2 - lat1;
  var dLon = (coord2[0] - coord1[0]) * Math.PI / 180;
  
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1) * Math.cos(lat2) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return 6371000 * c;
}

// 18. FUNCTION: Add Station
function addStation(name, snappedCoord, t, distanceToLine) {
  stationsData.push({
    name: name,
    lat: snappedCoord[1],
    lon: snappedCoord[0],
    t: t,
    originalClickDist: distanceToLine
  });
  
  visualizeStations();
  stationCountLabel.setValue('Stations: ' + stationsData.length);
  updateInfo('Station "' + name + '" added at t=' + t.toFixed(3));
  print('✓ Station "' + name + '" added');
  print('  Parameter t = ' + t.toFixed(4) + ' (0=start, 1=end)');
  print('  Snapped coordinates: [' + snappedCoord[0].toFixed(6) + ', ' + snappedCoord[1].toFixed(6) + ']');
  print('  Distance from click: ' + (distanceToLine / 1000).toFixed(3) + ' km');
}

// 19. FUNCTION: Visualize Stations on Map
function visualizeStations() {
  if (stationsLayer) Map.remove(stationsLayer);
  
  var stationFeatures = stationsData.map(function(station, idx) {
    return ee.Feature(
      ee.Geometry.Point([station.lon, station.lat]),
      {
        name: station.name,
        index: idx,
        t: station.t,
        latitude: station.lat,
        longitude: station.lon
      }
    );
  });
  
  if (stationFeatures.length > 0) {
    stationsLayer = Map.addLayer(
      ee.FeatureCollection(stationFeatures),
      {color: '#27ae60', pointSize: 10, pointShape: 'circle'},
      'Stations'
    );
  }
}

// 20. FUNCTION: Export Data
function exportTrainData() {
  if (stationsData.length === 0) {
    print('Error: No stations to export');
    return;
  }
  
  // Create feature with train line
  var trainLineFeature = ee.Feature(trainLineGeometry, {
    type: 'train_line',
    name: 'Charlotte Light Rail',
    station_count: stationsData.length,
    vertex_count: trainLineCoordinates.length
  });
  
  // Create features for each station
  var stationFeatures = stationsData.map(function(station) {
    return ee.Feature(
      ee.Geometry.Point([station.lon, station.lat]),
      {
        type: 'station',
        name: station.name,
        t: station.t,
        latitude: station.lat,
        longitude: station.lon
      }
    );
  });
  
  // Combine into one collection
  var allFeatures = ee.FeatureCollection([trainLineFeature]).merge(
    ee.FeatureCollection(stationFeatures)
  );
  
  // Export to Google Drive
  Export.table.toDrive({
    collection: allFeatures,
    description: 'Charlotte_Light_Rail_with_Stations',
    fileFormat: 'GeoJSON'
  });
  
  print('✓ Export started');
  print('  Train line with ' + stationsData.length + ' stations');
  print('  File: Charlotte_Light_Rail_with_Stations.geojson');
}

// 21. FUNCTION: Update Information Label
function updateInfo(message) {
  infoLabel.setValue(message);
}

// 22. BUILD UI PANEL
instructionsPanel.add(ui.Label({value: '', style: {margin: '5px 0'}}));

instructionsPanel.add(ui.Label({
  value: 'Add Stations',
  style: {fontSize: '12px', fontWeight: 'bold', margin: '12px 0 6px 0', color: '#27ae60'}
}));

instructionsPanel.add(ui.Label({
  value: 'Station name:',
  style: {fontSize: '11px', fontWeight: 'bold', margin: '6px 0 4px 0'}
}));
instructionsPanel.add(stationNameInput);
instructionsPanel.add(stationModeButton);
instructionsPanel.add(cancelStationButton);

instructionsPanel.add(ui.Label({value: '', style: {margin: '8px 0'}}));
instructionsPanel.add(stationCountLabel);
instructionsPanel.add(clearStationsButton);

instructionsPanel.add(ui.Label({value: '', style: {margin: '8px 0'}}));
instructionsPanel.add(exportButton);
instructionsPanel.add(infoLabel);

Map.add(instructionsPanel);

print('✓ Train Line and Stations tool ready!');
print('The train line is loaded with 162 vertices');
print('Enter a station name and click "Enable Station Mode", then click on the map');
