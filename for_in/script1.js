function arranca(rangeData) {

    //let xhr = new XMLHttpRequest();
    //let url =  + rangeData;
    //xhr.open("GET", url);
    //xhr.onreadystatechange = function () {
    //    if (xhr.readyState === 4 && xhr.status === 200) {
    //        let dates = JSON.parse(xhr.response).date;
    //        pedirFechas(dates);
    //        showDate(dates.explanation);
    //    }
    //    else if (xhr.readyState === 4 && xhr.status === 400) {
    //        document.getElementById("info").innerHTML = "fecha incorrecta";
    //    }
    //};

    //function pedirFechas(dates) {
        let index = 0;
        let xhrDates = new XMLHttpRequest();
        xhrDates.open("GET", "https://api.nasa.gov/planetary/apod?api_key=2uaBh52XsqEIyC5HRTv9BWTyV3TYqH8vTQvYPgvV&date=" + dates[index]);
        xhr.onreadystatechange = function () {
            if (xhrDates.readyState === 4 && xhrDates.status === 200) {
                index++;
                if (index < 15) {
                    xhrDates.open("GET", dates[index]);
                    xhrDates.send();
                }
            }
        };
        //xhrDates.send();
    }

    //xhr.addEventListener("load", function () {
    //    let responseObject = JSON.parse(xhr.response);
    //    showDate(responseObject.date, responseObject.explanation, responseObject.title, responseObject.url);
    //});
    //xhr.addEventListener("error", function () {
    //    console.log("error");
    //});

    xhr.send();

}

//function showDate(date, explanation, title, image_url) {
//        let result = "<p>" + date + "</p>";
//        result += "<p>" + explanation + "</p>";
//        result += "<p>" + title + "</p>";
//        result += "<img src='" + image_url + "'/>";
//        document.getElementById("info").innerHTML = result;
//}

function crearF() {
    //let year = document.getElementById("year").value;
    //let month = document.getElementById("month").value;
    //let day = document.getElementById("day").value;
    let data;
    data = document.getElementById("fecha").value;
    let rangeData = [];
    for (let i = 0; i < 15; i++) {
        rangeData.push(data = data - 1);
    }
    //document.getElementById("date").innerHTML = data;
    arranca(rangeData);
}

//document.getElementById("boton_prueba").addEventListener("click", probar);
//function probar() {
//    alert("ha sido probado");
//}

//let dateObj =
//    dateObj.detDate(dateObj.getDate() - 1);

//let fecha = new Date.now();
//fecha.getYear();

//function crearF() {
//    let data;
//    data = document.getElementById("fecha").value;
//    //let day;
//    //day = fecha.getDay();
//    for (let i = data; i > (data.getDate() - 14); i--) {
//        arranca(data);
//    }
//}






    function showDate(explanation) {
        let result = "<p>" + explanation + "</p>";
        document.getElementById("info").innerHTML = result;
    }

