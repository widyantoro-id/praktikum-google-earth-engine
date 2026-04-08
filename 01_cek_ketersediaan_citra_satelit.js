// variabel geometry
var geometry = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[116.69331054687498, -0.9141536811985339],
          [116.69331054687498, -1.4029438566092867],
          [117.26459960937498, -1.4029438566092867],
          [117.26459960937498, -0.9141536811985339]]], null, false);

var lokasi = geometry

var citraSatelit = ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")
    
    .filterBounds(lokasi)
    
    .filterDate('2023-05-01', '2023-10-31')
    
    .filterMetadata('CLOUD_COVER', 'less_than', 30);

// menampilkan informasi hasil dari citra satelit yang difilter
print(citraSatelit);
