const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if ( khr.readyState == 4 && xhr.status == 200) {
        let jsonData = xhr.responseText;
        let data = JSON.parse(jsonData);
        let name = data.name;
        document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
    }
}