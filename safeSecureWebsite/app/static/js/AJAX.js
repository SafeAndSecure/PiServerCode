/**
 * Created by josh on 7/08/17.
 */

var responseString = "";

function requestData() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(request.responseText);
            responseString = request.responseText;
            return(responseString);
        }
    };
    request.open("GET", "getData", false);
    request.send();
}

function displayData()
{
    var response = requestData();
    alert(responseString);
}