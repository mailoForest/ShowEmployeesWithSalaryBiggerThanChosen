/**
 * Created by Dev-1 on 21.3.2017 г..
 */
function getEmployees() {
    var mediator = new XMLHttpRequest();

    var div = document.getElementById('showTheGuzary');
    div.innerHTML = '';
    var salary = document.getElementById('input').value;

    mediator.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            var jsonOutput = JSON.parse(this.responseText);
            var output = document.createElement('table');

            for (var i = 0; i < jsonOutput.length; i++){
                var tr = document.createElement('tr');
                for (var j = 0; j < jsonOutput[i].length; j++){
                    var td = document.createElement('td')
                    td.innerHTML = jsonOutput[i][j];
                    tr.appendChild(td);
                }
                output.appendChild(tr);
            }
            div.appendChild(output);
        }
    }
    mediator.open('GET', 'http://localhost/Season7/PHP-WEB-Development/ShowPeopleWithSalaries/findPeople.php?salary=' + salary, true);

    mediator.send(null);
}