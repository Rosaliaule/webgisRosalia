var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Ortoimagen_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_1, 0]);
var format_Municipios_2 = new ol.format.GeoJSON();
var features_Municipios_2 = format_Municipios_2.readFeatures(json_Municipios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_2.addFeatures(features_Municipios_2);
var lyr_Municipios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_2, 
                style: style_Municipios_2,
                interactive: true,
                title: '<img src="styles/legend/Municipios_2.png" /> Municipios'
            });
var lyr_MicologaCyLzonasreguladas_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://idecyl.jcyl.es/geoserver/am/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "mico_cyl_zonas_reguladas",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Micología CyL: zonas reguladas",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MicologaCyLzonasreguladas_3, 0]);
var format_Cotos_Micocyl_4 = new ol.format.GeoJSON();
var features_Cotos_Micocyl_4 = format_Cotos_Micocyl_4.readFeatures(json_Cotos_Micocyl_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cotos_Micocyl_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cotos_Micocyl_4.addFeatures(features_Cotos_Micocyl_4);
var lyr_Cotos_Micocyl_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cotos_Micocyl_4, 
                style: style_Cotos_Micocyl_4,
                interactive: true,
                title: '<img src="styles/legend/Cotos_Micocyl_4.png" /> Cotos_Micocyl'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Ortoimagen_1.setVisible(false);lyr_Municipios_2.setVisible(true);lyr_MicologaCyLzonasreguladas_3.setVisible(true);lyr_Cotos_Micocyl_4.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Ortoimagen_1,lyr_Municipios_2,lyr_MicologaCyLzonasreguladas_3,lyr_Cotos_Micocyl_4];
lyr_Municipios_2.set('fieldAliases', {'Codigo': 'Codigo', 'Texto': 'Texto', 'Cod_Prov': 'Cod_Prov', 'Provincia': 'Provincia', 'Cod_CCAA': 'Cod_CCAA', 'ComAutonom': 'ComAutonom', });
lyr_Cotos_Micocyl_4.set('fieldAliases', {'fid': 'fid', 'clave': 'clave', 'tipo': 'tipo', 'estado': 'estado', });
lyr_Municipios_2.set('fieldImages', {'Codigo': 'Hidden', 'Texto': 'TextEdit', 'Cod_Prov': 'Hidden', 'Provincia': 'Hidden', 'Cod_CCAA': 'Hidden', 'ComAutonom': 'Hidden', });
lyr_Cotos_Micocyl_4.set('fieldImages', {'fid': 'Hidden', 'clave': 'TextEdit', 'tipo': 'Hidden', 'estado': 'Hidden', });
lyr_Municipios_2.set('fieldLabels', {'Texto': 'inline label', });
lyr_Cotos_Micocyl_4.set('fieldLabels', {'clave': 'inline label', });
lyr_Cotos_Micocyl_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});