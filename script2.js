function showOption() {
    var dropdown = document.getElementById("dropdown");
    var dropdown1 = document.getElementById("dropdown1");
    var radioContainer1 = document.getElementById("radiooption2");
    var radioContainer2 = document.getElementById("radiooption3");

    // Hide all radio options containers initially
    dropdown1.style.display = "none";
    radioContainer1.style.display = "none";
    radioContainer2.style.display = "none";

    // Display the appropriate radio options container based on the selected dropdown option
    if (dropdown.value === "option1") {
        dropdown1.style.display = "block";
    } else if (dropdown.value === "option2") {
        radioContainer1.style.display = "block";
    } else if (dropdown.value === "option3") {
        radioContainer2.style.display = "block";
    }
}

function updateTable() {
    var sign = document.querySelector('input[name="sign"]:checked').value;

    if (sign === 'sign1') {
        document.addEventListener('DOMContentLoaded', 
        function () {
            var mathTable = document.getElementById('table1');
            var tableContent = `
                <tr>
                    <td>1</td>
                    <td>\\(\\frac{1}{2}\\)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>\\(\\frac{3}{4}\\)</td>
                </tr>
            `;
            mathTable.innerHTML = tableContent;
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, mathTable]);
        });
    } else if (sign === 'sign2') {
        cell1.innerHTML = '| <sup>1</sup>/<sub>x - 2</sub> | > 3';
        cell2.innerHTML = '| x | > a ↔ x < -a or  x > a';
    } else if (sign === 'sign3') {
        cell1.innerHTML = '| <sup>1</sup>/<sub>x - 2</sub> | ≤ 3';
        cell2.innerHTML = '| x | ≤ a ↔ -a ≤ x ≤ a';
    } else if (sign === 'sign4') {
        cell1.innerHTML = "\\(\\frac{1}{2}\\)";
        cell2.innerHTML = '| x | ≥ a ↔ x ≤ -a or x ≥ a';
    }
    
}

function updateTable2() {
    var type = document.querySelector('input[name="nomodulus"]:checked').value;

    // Update cell contents based on the selected option
    var cell1 = document.getElementById('example2');
    var cell2 = document.getElementById('tandf2');

    if (type === 'linear') {
        cell1.innerHTML = '<sup>3x</sup>/<sub>4</sub> ≥ <sup>x</sup>/<sub>4</sub> + 2';
        cell2.innerHTML = 'Solve directly';
    } else if (type === 'nonlinear') {
        cell1.innerHTML = '<sup>1</sup>/<sub>x + 2</sub> ≤ <sup>2</sup>/<sub>x - 3</sub>';
        cell2.innerHTML = 'Solve directly';
    } else if (type === 'combine1') {
        cell1.innerHTML = '-2 ≤ <sup>3 - 5m</sup>/<sub>4</sub> ≤ <sup>1</sup>/<sub>3</sub>';
        cell2.innerHTML = 'Solve directly';
    } else if (type === 'combine2') {
        cell1.innerHTML = 'x + 7 ≤ 2x + 5 < 7x + 3';
        cell2.innerHTML = 'Solve directly';
    }
}

function redirect(){
    var selectedOption = document.querySelector('input[name="sign"]:checked');
        if (selectedOption) {
            var directory = selectedOption.value;
            if (directory === 'sign1'){
                window.location.href = 'example2.html';
            } else if (directory === 'sign2'){
                window.location.href = 'example3.html';
            } else if (directory === 'sign3'){
                window.location.href = 'example4.html';
            } else if (directory === 'sign4'){
                window.location.href = 'example5.html';
            }
        } else {
            alert("Please select an option first.");
        }  
}

function redirect2(){
    var selectedOption = document.querySelector('input[name="nomodulus"]:checked');
        if (selectedOption) {
            var directory = selectedOption.value;
            if (directory === 'linear'){
                window.location.href = 'example6.html';
            } else if (directory === 'nonlinear'){
                window.location.href = 'example7.html';
            } else if (directory === 'combine1'){
                window.location.href = 'example8.html';
            } else if (directory === 'combine2'){
                window.location.href = 'example9.html';
            }
        } else {
            alert("Please select an option first.");
        }  
}