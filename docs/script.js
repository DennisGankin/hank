
/*var btn = document.getElementById("myBtn");

btn.addEventListener("click", alertMe);

function alertMe(){

alert("The button has been clicked!");
var myModalEl = document.getElementById('myModal');
var myModal = bootstrap.Modal.getInstance(myModalEl);
myModal.show();
*/

document.addEventListener("DOMContentLoaded", function() {
    const form  = document.getElementById('price');

    form.addEventListener('click', function() {
        // stop form submission
        // var gas = parseFloat(document.getElementById("gasPrice").value);
        var gas_per_km = parseFloat(document.getElementById("verbrauch").value);
        var dist = parseFloat(document.getElementById("distance").value);
        var train = parseFloat(document.getElementById("trainPrice").value);
        /** 
         * gas_per_km * gas  * (dist * 2) == train
         * gas = train /((dist*2)*gas_per_km)
         */
        var total = gas+train+dist
        var gas_liters = (gas_per_km /100.0) * (dist * 2.0)
        var gas = train / gas_liters 
        //alert(gas.toFixed(3));
        document.getElementById("result").innerHTML = "Break even gas price at " + gas.toFixed(3) + "€. If the gas price is below that value. Taking the car is cheaper.";
    });
});


/*document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("myBtn");

    btn.addEventListener("click", function() {
        var myModal = new bootstrap.Modal(document.getElementById("myModal"));
        myModal.show();
    });
});*/


