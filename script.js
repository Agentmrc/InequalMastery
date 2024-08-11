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
        dropdown1.style.marginLeft = "auto";
        dropdown1.style.marginRight = "auto";
    } else if (dropdown.value === "option2") {
        radioContainer1.style.display = "block";
    } else if (dropdown.value === "option3") {
        radioContainer2.style.display = "block";
    }
}

function updateTable() {
    var sign = document.querySelector('input[name="sign"]:checked').value;

    // Update cell contents based on the selected option
    var cell1 = document.getElementById('example1');
    var cell2 = document.getElementById('tandf1');

    if (sign === 'sign1') {
        cell1.innerHTML = '\\(|\\frac{1}{x - 2}| < 3\\)';
        cell2.innerHTML = '\\(| x | < a ↔ -a < x < a\\)';
    } else if (sign === 'sign2') {
        cell1.innerHTML = '\\(|\\frac{1}{x - 2}| > 3\\)';
        cell2.innerHTML = '\\(| x | > a ↔ x < -a\\) or \\(x > a\\)';
    } else if (sign === 'sign3') {
        cell1.innerHTML = '\\(|\\frac{1}{x - 2}| ≤ 3\\)';
        cell2.innerHTML = '\\(| x | ≤ a ↔ -a ≤ x ≤ a\\)';
    } else if (sign === 'sign4') {
        cell1.innerHTML = '\\(|\\frac{1}{x - 2}| ≥ 3\\)';
        cell2.innerHTML = '\\(| x | ≥ a ↔ x ≤ -a\\) or \\(x ≥ a\\)';
    }
    MathJax.typeset();
    
}

function updateTable2() {
    var type = document.querySelector('input[name="nomodulus"]:checked').value;

    // Update cell contents based on the selected option
    var cell1 = document.getElementById('example2');
    var cell2 = document.getElementById('tandf2');

    if (type === 'linear') {
        cell1.innerHTML = '\\(\\frac{3x}{4} ≥ \\frac{x}{4} + 2\\)';
        cell2.innerHTML = 'Solve directly';
    } else if (type === 'nonlinear') {
        cell1.innerHTML = '\\(\\frac{1}{x + 2} ≤ \\frac{2}{x - 3}\\)';
        cell2.innerHTML = 'Solve directly';
    } else if (type === 'combine1') {
        cell1.innerHTML = '\\(-2 ≤ \\frac{3 - 5m}{4} ≤ \\frac{1}{3}\\)';
        cell2.innerHTML = 'Solve directly';
    } else if (type === 'combine2') {
        cell1.innerHTML = '\\(x + 7 ≤ 2x + 5 < 7x + 3\\)';
        cell2.innerHTML = 'Solve directly';
    }
    MathJax.typeset();
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