function myFunction()
{
    var id = document.getElementById('pid').value;
    var name = document.getElementById('pname').value;
    var price = document.getElementById('pprice').value;

    console.log(id);
    console.log(name);
    console.log(price);

    const obj = {PID: id, PNAME: name, PPRICE: price};
const myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;

const myArray = JSON.parse(myJSON);
	buildTable(myArray)

	function buildTable(data){
		document.getElementById("td1").innerHTML = myArray.PID;
        document.getElementById("td2").innerHTML = myArray.PNAME;
        document.getElementById("td3").innerHTML = myArray.PPRICE;

		
	}


    var alerts = [ 
        {num : 1, app:'helloworld',message:'message'},
        {num : 2, app:'helloagain',message:'another message'} 
    ]
    alerts.push({num : 3, app:'helloagain_again',message:'yet another message'});
    document.getElementById("demo").innerHTML = typeof(alerts);
    const myArray2 = JSON.parse(alerts);
    document.getElementById("demo").innerHTML = typeof(myArray2);
    document.getElementById("demo").innerHTML = myArray.num[myArray2.length-1];



}