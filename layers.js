var wms_layers = [];


        var lyr_DarkMatter_0 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ComunidadesAutonomas_2 = new ol.format.GeoJSON();
var features_ComunidadesAutonomas_2 = format_ComunidadesAutonomas_2.readFeatures(json_ComunidadesAutonomas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesAutonomas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesAutonomas_2.addFeatures(features_ComunidadesAutonomas_2);
var lyr_ComunidadesAutonomas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesAutonomas_2, 
                style: style_ComunidadesAutonomas_2,
                popuplayertitle: "Comunidades Autonomas",
                interactive: true,
                title: '<img src="styles/legend/ComunidadesAutonomas_2.png" /> Comunidades Autonomas'
            });
var format_ParquesNacionales_3 = new ol.format.GeoJSON();
var features_ParquesNacionales_3 = format_ParquesNacionales_3.readFeatures(json_ParquesNacionales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquesNacionales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquesNacionales_3.addFeatures(features_ParquesNacionales_3);
var lyr_ParquesNacionales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquesNacionales_3, 
                style: style_ParquesNacionales_3,
                popuplayertitle: "Parques Nacionales",
                interactive: true,
                title: '<img src="styles/legend/ParquesNacionales_3.png" /> Parques Nacionales'
            });
var format_RiosPrincipales_4 = new ol.format.GeoJSON();
var features_RiosPrincipales_4 = format_RiosPrincipales_4.readFeatures(json_RiosPrincipales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosPrincipales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosPrincipales_4.addFeatures(features_RiosPrincipales_4);
var lyr_RiosPrincipales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosPrincipales_4, 
                style: style_RiosPrincipales_4,
                popuplayertitle: "Rios Principales",
                interactive: true,
                title: '<img src="styles/legend/RiosPrincipales_4.png" /> Rios Principales'
            });

lyr_DarkMatter_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ComunidadesAutonomas_2.setVisible(true);lyr_ParquesNacionales_3.setVisible(true);lyr_RiosPrincipales_4.setVisible(true);
var layersList = [lyr_DarkMatter_0,lyr_OSMStandard_1,lyr_ComunidadesAutonomas_2,lyr_ParquesNacionales_3,lyr_RiosPrincipales_4];
lyr_ComunidadesAutonomas_2.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'ETIQUETA', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', 'area': 'Área (hectáreas)', });
lyr_ParquesNacionales_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', });
lyr_RiosPrincipales_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', });
lyr_ComunidadesAutonomas_2.set('fieldImages', {'ID': 'TextEdit', 'TIPO_0101': 'TextEdit', 'CODIGO_INE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'COD_INE': 'Range', 'TOT_FOR': 'TextEdit', 'ARB': 'TextEdit', 'NO_ARB': 'TextEdit', 'area': 'TextEdit', });
lyr_ParquesNacionales_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Declaracio': 'TextEdit', 'Reclasific': 'TextEdit', 'Ampliacion': 'TextEdit', 'Fecha de d': 'TextEdit', 'Modificaci': 'TextEdit', });
lyr_RiosPrincipales_4.set('fieldImages', {'OBJECTID': 'Range', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'ExternalResource', 'Shape_Leng': 'TextEdit', });
lyr_ComunidadesAutonomas_2.set('fieldLabels', {'ID': 'no label', 'TIPO_0101': 'no label', 'CODIGO_INE': 'no label', 'ETIQUETA': 'no label', 'COD_INE': 'no label', 'TOT_FOR': 'no label', 'ARB': 'header label - always visible', 'NO_ARB': 'no label', 'area': 'no label', });
lyr_ParquesNacionales_3.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Declaracio': 'no label', 'Reclasific': 'no label', 'Ampliacion': 'no label', 'Fecha de d': 'no label', 'Modificaci': 'no label', });
lyr_RiosPrincipales_4.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'header label - always visible', 'Longitud': 'no label', 'Categoria': 'no label', 'Imagen': 'no label', 'Shape_Leng': 'no label', });
lyr_RiosPrincipales_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});