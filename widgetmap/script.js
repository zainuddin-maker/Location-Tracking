// input\
var datalegend = [
    {
        text: "In Motion",
        status: "inmotion",
        color: "#00828c",
    },
    {
        text: "Idle",
        status: "idle",
        color: "#fed932",
    },
    {
        text: "Queeing",
        status: "1ueeing",
        color: "#fd6a03",
    },
    {
        text: "Parked",
        status: "parked",
        color: "#e1383f",
    },
];

var datatruck = [
    {
        status: "idle",
        position: "-6.10228,106.88023",
        id: 1,
        number: "05",
    },
    {
        status: "inmotion",
        position: "-6.10418,106.88023",
        id: 7,
        number: "07",
    },
    {
        status: "1ueeing",
        position: "-6.10218,106.88433",
        id: 8,
        number: "08",
    },
    {
        status: "parked",
        position: "-6.10228,106.88243",
        id: 7,
        number: "09",
    },

];

var data_tracking_truck = [
    {
        position: "-6.10579,106.88223",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10559,106.88223",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10539,106.88223",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10519,106.88223",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10499,106.88223",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10479,106.88223",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10459,106.88223",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10459,106.88203",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10459,106.88183",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10459,106.88163",
        status: "parked",
        id: 1,
        number: "08",
    },

    {
        position: "-6.104585,106.88143",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10458,106.88123",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10438,106.88123",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10418,106.88123",
        status: "parked",
        id: 1,
        number: "08",
    },
    {
        position: "-6.10388,106.88123",
        status: "parked",
        id: 1,
        number: "08",
    },
];

var booleanstay = false;

//batas input

var head_of_div = d3
    .select("body")
    .append("div")
    .attr("class", "header-continer");

var first_div_container = head_of_div
    .append("div")
    .attr("class", "first-div-container");
first_div_container
    .append("div")
    .attr("class", "big-text-tittle")
    .text("Location Tracking");
var second_div_child = first_div_container
    .append("div")
    .attr("class", "second-div-child");

datalegend.forEach((data, i) => {
    var legend_map = second_div_child.append("div").attr("class", "legend-map");
    legend_map
        .append("div")
        .attr("class", "circle-legend")
        .style("background-color", data.color);
    legend_map
        .append("div")
        .attr("class", "text-legend")
        .style("color", data.color)
        .text(data.text);
});

head_of_div.append("div").attr("id", "map");

var positron = L.tileLayer(
    "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    {
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        // maxNativeZoom: 18,
        // maxZoom: 24,
    }
);
// =

var yx = L.latLng;
function xy(x, y) {
    if (L.Util.isArray(x)) {
        // When doing xy([x, y]);
        return yx(x[1], x[0]);
    }
    return yx(x, y); // When doing xy(x, y);
}

var setviewmust = [-6.103115, 106.88272];
var map = L.map("map", {
    // center: [55, 10],
    // zoom: 5,
    layers: [positron],
    // worldCopyJump: true,
    rotate: true,
    // touchRotate: true,
    // rotateControl: {
    //     closeOnZeroBearing: false,
    // },

    maxBounds: [setviewmust, setviewmust],
    bearing: 88,
    minZoom: 17,
    maxZoom: 20,
    zoomSnap: 0.25,
}).setView(xy(setviewmust[0], setviewmust[1]), 17);

let firstTimeout;
let secondTimeout;
map.on("zoomend", function () {
    // //console.log("zoom")
    // //console.log(map.getZoom())
    if (map.getZoom() == 17) {
        //console.log("ini")
        //console.log(xy(setviewmust[0],setviewmust[1]))

        var latLngs = [xy(setviewmust[0], setviewmust[1])];
        //console.log(latLngs);
        var markerBounds = L.latLngBounds(latLngs);
        //console.log(markerBounds)
        map.setMaxBounds(markerBounds);
        // map.fitBounds(markerBounds);
        map.setView(L.latLng(latLngs[0].lat, latLngs[0].lng), 17);
        clearTimeout(firstTimeout);
        clearTimeout(secondTimeout);

        // map.setView(xy(setviewmust[0],setviewmust[1]), 17)
        // map.setMaxBounds(xy(setviewmust[0],setviewmust[1]));
        // //console.log(e.target.getLatLng())

        // let bnds = map.getBounds();
        // //console.log(bnds)
        // map.setMaxBounds(markerBounds);
        // // map.fitBounds(markerBounds);
        // map.setView(L.latLng(latLngs[0].lat, latLngs[0].lng), 18);
        // map.flyTo(xy(225, 150), 1, {
        // animate: true,
        // duration: 0.5
        //     });
    }
    // If the user zooms past 14, this will set them back to 14.
    // if (map.getZoom() > 14) {
    //     map.setZoom(14);
    // }
});

var point3 = L.latLng(-6.10749, 106.88562),
    point1 = L.latLng(-6.10729, 106.87951),
    point2 = L.latLng(-6.09877, 106.87981);

// var marker1 = L.marker(point1, { draggable: true }).addTo(map),
//     marker2 = L.marker(point2, { draggable: true }).addTo(map),
//     marker3 = L.marker(point3, { draggable: true }).addTo(map);

var bounds = new L.LatLngBounds(point1, point2).extend(point3);

// map.fitBounds(bounds);

var overlay = L.imageOverlay.rotated("./mapblok3.png", point1, point2, point3, {
    opacity: 1,
    interactive: true,
    attribution:
        "Historical building plan &copy; <a href='http://www.ign.es'>Instituto Geográfico Nacional de España</a>",
});

map.addLayer(overlay);
L.control
    .zoom({
        position: "topright",
    })
    .addTo(map);

var datashapeMaintance = {
    status: {
        name: "status",
        description: "",
        baseType: "STRING",
        ordinal: 2,
        aspects: {
            isPrimaryKey: false,
        },
    },
    position: {
        name: "position",
        description: "",
        baseType: "STRING",
        ordinal: 3,
        aspects: {
            isPrimaryKey: false,
        },
    },
    id: {
        name: "id",
        description: "",
        baseType: "NUMBER",
        ordinal: 4,
        aspects: {
            isPrimaryKey: false,
        },
    },
    number: {
        name: "number",
        description: "",
        baseType: "STRING",
        ordinal: 5,
        aspects: {
            isPrimaryKey: false,
        },
    },
};

const markerOnClick = (e, datatruck) => {
    //console.log(e.target.getLatLng())
    var latLngs = [e.target.getLatLng()];

    //console.log(latLngs);
    var markerBounds = L.latLngBounds(latLngs);
    //console.log(markerBounds)
    // let bnds = map.getBounds();
    // //console.log(bnds)

    // map.fitBounds(markerBounds);
    // map.setMaxBounds(markerBounds);

    // map.setView(L.latLng(latLngs[0].lat, latLngs[0].lng), 18);

    function run2functions() {
        firstFunc(secondFunc);
    }

    function firstFunc(cb) {
        firstTimeout = setTimeout(() => {}, 300);
        cb();
        map.setMaxBounds(markerBounds);
    }

    function secondFunc() {
        secondTimeout = setTimeout(() => {
            map.setView(L.latLng(latLngs[0].lat, latLngs[0].lng), 18);
        }, 300);
    }

    run2functions();

    this.setProperty("DataClickLocationTracking", {
        dataShape: datashapeMaintance,
        rows: [datatruck],
    });
    this.jqElement.triggerHandler("clickTruck");
};

if (booleanstay) {
    datatruck.forEach((datat, i) => {
        var find = datalegend.find((data) => data.status == datat.status);

        var color = "#000";
        if (find) {
            color = find.color;
        }
        var datanumber = datat.number;
        var icon = L.divIcon({
            className: "custom-div-icon",
            html:
                '<div style="background-color : ' +
                color +
                '" class="box-marker">' +
                '<div class="text-number-mark">' +
                datanumber +
                "</div>" +
                '<img  class="img-marker" style="width : 20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAQCAYAAAAFzx/vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgBxVXREYIwDE09/mUERmAE2IAN0AnUCcQJXAEmkA1kBJ1ARmADfJGcF3pF/Sj47t6V6wtJGppgeoD8IDXGNN+MAvII5J5hCR1Sh2Rq7wGBHZiArbUfIZlXBXwHZDRwnOoNBLtiObK2omVwAhMEThYJKJfpBuZzlDSWEtrgy7SZIyA7TqbEpb7h/wJySSvyg5jcTT+C8TjafgKfsJRnHkt3cA+eaci4VloHckMXYK7e04houDAHGqbNBWxITZ4APbLlBxw0kj12zKVplRaKM17XWtPgxpaAnZBRwbYkh3HWj5FpR5ZW0AS4B5XdQ5J9w1jGkWTY2r+aT5oreRqqUcO209oTIxKHwwVOo6MAAAAASUVORK5CYII="/>' +
                "</div>" +
                '<div style="border-top: solid 10px' +
                color +
                ';" class="box-marker-after" />',
            iconSize: [30, 42],
            iconAnchor: [15, 42],
        });

        // var moveicon = L.divIcon({
        //     className: "custom-div-icon",
        //     html: '<div style="background-color : #00828c" class="circle-move-truck"/>',
        //     iconSize: [30, 42],
        //     iconAnchor: [15, 42],
        // });

        var point4 = L.latLng(
            datat.position.split(",")[0],
            datat.position.split(",")[1]
        );

        var marker1 = L.marker(point4, { icon: icon })
            .addTo(map)
            .on("click", (e) => markerOnClick(e, datat))
            .on("mouseover", function (e) {
                // alert(this.getLatLng());
            });
    });
} else {
    data_tracking_truck.forEach((datat, i) => {
        var find = datalegend.find((data) => data.status == datat.status);

        var color = "#000";
        if (find) {
            color = find.color;
        }
        var datanumber = datat.number;

        var point4 = L.latLng(
            datat.position.split(",")[0],
            datat.position.split(",")[1]
        );

        if (i == data_tracking_truck.length - 1) {
            var icon = L.divIcon({
                className: "custom-div-icon",
                html:
                    '<div style="background-color : ' +
                    color +
                    '" class="box-marker">' +
                    '<div class="text-number-mark">' +
                    datanumber +
                    "</div>" +
                    '<img  class="img-marker" style="width : 20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAQCAYAAAAFzx/vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgBxVXREYIwDE09/mUERmAE2IAN0AnUCcQJXAEmkA1kBJ1ARmADfJGcF3pF/Sj47t6V6wtJGppgeoD8IDXGNN+MAvII5J5hCR1Sh2Rq7wGBHZiArbUfIZlXBXwHZDRwnOoNBLtiObK2omVwAhMEThYJKJfpBuZzlDSWEtrgy7SZIyA7TqbEpb7h/wJySSvyg5jcTT+C8TjafgKfsJRnHkt3cA+eaci4VloHckMXYK7e04houDAHGqbNBWxITZ4APbLlBxw0kj12zKVplRaKM17XWtPgxpaAnZBRwbYkh3HWj5FpR5ZW0AS4B5XdQ5J9w1jGkWTY2r+aT5oreRqqUcO209oTIxKHwwVOo6MAAAAASUVORK5CYII="/>' +
                    "</div>" +
                    '<div style="border-top: solid 10px' +
                    color +
                    ';" class="box-marker-after" />',
                iconSize: [30, 42],
                iconAnchor: [15, 42],
            });
            var marker1 = L.marker(point4, { icon: icon })
                .addTo(map)
                .on("click", (e) => markerOnClick(e, datat))
                .on("mouseover", function (e) {
                    // alert(this.getLatLng());
                });
        } else {
            var moveicon = L.divIcon({
                className: "custom-div-icon",
                html:
                    '<div style="background-color : ' +
                    color +
                    '" class="circle-move-truck"/>',
                iconSize: [30, 42],
                iconAnchor: [15, 42],
            });
            var marker1 = L.marker(point4, { icon: moveicon }).addTo(map);
            // .on("click", markerOnClick)
            // .on("mouseover", function (e) {
            //     // alert(this.getLatLng());
            // });
        }
    });
}
