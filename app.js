var mapbox = new L.TileLayer('https://a.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidGF0aWFuYSIsImEiOiJjaW9nNWc2enkwMWk0dWRtM3Qwd3J5dHo2In0.42pdJNpJD8BAalQ3nM8KQg', {
    id: 'mapbox.Street',
});
var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {});
var mapquest = new L.TileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    subdomains: '1234'
});
var mapquestsat = new L.TileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    subdomains: '1234'
});
var tianditu = new L.TileLayer('http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}', {
    subdomains: '01234567'
});
var tianditusat = new L.TileLayer('http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}', {
    subdomains: '01234567'
});
var tianditusurface = new L.TileLayer('http://t{s}.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}', {
    subdomains: '01234567'
});
var gaode = new L.TileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z=d{z}', {
    subdomains: '1234'
});
var gaode1 = new L.TileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z=d{z}', {
    subdomains: '1234'
});
var gaodesat = new L.TileLayer('http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
    subdomains: '1234'
});
var tuba = new L.TileLayer('http://emap{s}.mapabc.com/mapabc/maptile?&x={x}&y={y}&z={z}', {
    subdomains: '0123'
});
var geoqBlue = new L.TileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}', {});
var geoqCommunity = new L.TileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}', {});
var geoqGray = new L.TileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}', {});
var geoColor = new L.TileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}', {});
var geoqWarm = new L.TileLayer(' http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}', {});
var geoqBound = new L.TileLayer('http://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/administrative_division_boundaryandlabel/MapServer/tile/{z}/{y}/{x}', {});
var geoqBoundonly = new L.TileLayer('http://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/administrative_division_boundary/MapServer/tile/{z}/{y}/{x}', {});
var geoqWater = new L.TileLayer('http://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}', {});
var geoqRailway = new L.TileLayer('http://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/Subway/MapServer/tile/{z}/{y}/{x}', {});
var StamenToner = new L.TileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {});
var StamenWaterColor = new L.TileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {});
var OpenTopoMap = new L.TileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {});
// var atlaslight = new L.TileLayer('http://42.120.180.211:8080/mapservice?t=1&c={variant}&x={x}&y={y}&z={z}&size=1&v=light',{})
var esrisat = new L.TileLayer('http://server.arcgisonline.com/arcgis/rest/services/world_imagery/mapserver/tile/{z}/{y}/{x}', {});
var google = new L.TileLayer('http://khm0.googleapis.com/kh?v=203&hl=zh-CN&&x={x}&y={y}&z={z}', {});
var map = new L.Map('map', {
    center: new L.LatLng(26.33280692289788, 114.78515624999999),
    zoom: 7
});
L.control.layers({
    "高德影像": gaodesat.addTo(map),
    "天地图影像": tianditusat,
    "esrisat": esrisat,
    "MapQuest影像": mapquestsat,
    "谷歌影像":google,
    "Mapbox": mapbox,
    "osm": osm,
    "MapQuest": mapquest,
    "天地图": tianditu,
    "天地图地形": tianditusurface,
    "图吧": tuba,
    "geoqBlue": geoqBlue,
    "geoqCommunity": geoqCommunity,
    "geoqGray": geoqGray,
    "geoColor": geoColor,
    "geoqWarm": geoqWarm,
    "geoqBound": geoqBound,
    "geoqBoundonly": geoqBoundonly,
    "geoqWater": geoqWater,
    "geoqRailway": geoqRailway,
    "StamenToner": StamenToner,
    "StamenWaterColor": StamenWaterColor,
    "OpenTopoMap": OpenTopoMap,
}, {}, {
    collapsed: false
}).addTo(map);
var marker;
map.on('click', function(e) {
    if (map.hasLayer(marker)) {
        map.removeLayer(marker);
    }
    var latlng = e.latlng;
    var gcj = coordtransform.wgs84togcj02(latlng.lng, latlng.lat);
    var baidu = coordtransform.gcj02tobd09(gcj[0], gcj[1]);
    var html = "";
    html += "<p>谷歌地球: <strong>" + latlng.lat + "," + latlng.lng + "</strong></p>";
    html += "<p>高德腾讯: <strong>" + gcj[1] + "," + gcj[0] + "</strong></p>";
    html += "<p>百度地图: <strong>" + baidu[1] + "," + baidu[0] + "</strong></p>";
    marker = L.marker(latlng).addTo(map).bindPopup(html).openPopup();
});