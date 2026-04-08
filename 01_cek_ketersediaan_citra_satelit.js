var lokasi = geometry

var citraSatelit = ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")
    
    .filterBounds(lokasi)
    
    .filterDate('2023-05-01', '2023-10-31')
    
    .filterMetadata('CLOUD_COVER', 'less_than', 30);

// menampilkan informasi hasil dari citra satelit yang difilter
print(citraSatelit);
