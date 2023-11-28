var data = [
    {
        id: 0,
        name: "Janu",
        English: 50,
        Maths: 86,
        Science: 77,
        SocialScience: 88
    },
    {
        id: 1,
        name: "Thanu",
        English: 75,
        Maths: 96,
        Science: 67,
        SocialScience: 91
    },
    {
        id: 2,
        name: "Tara",
        English: 90,
        Maths: 35,
        Science: 86,
        SocialScience: 100
    },
    {
        id: 3,
        name: "Glen",
        English: 79,
        Maths: 68,
        Science: 77,
        SocialScience: 78
    },
    {
        id: 4,
        name: "Zara",
        English: 80,
        Maths: 85,
        Science: 96,
        SocialScience: 68
    }
  ];
  
  function onPageLoad() {
    displayTable();
  }
  
  function displayTable() {
    var tableBody = document.getElementById("studentData");
    tableBody.innerHTML = "";
  
    for (var i = 0; i < data.length; i++) {
        var row = tableBody.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
  
        cell1.innerHTML = data[i].id + 1;
        cell2.innerHTML = data[i].name;
        cell3.innerHTML = data[i].English;
        cell4.innerHTML = data[i].Maths;
        cell5.innerHTML = data[i].Science;
        cell6.innerHTML = data[i].SocialScience;
    }
  }
  
  function filterBy() {
    var betweenLabel = document.getElementById("to");
    var maxMarkInput = document.getElementById("maxMark");
  
    if (document.getElementById("between").checked) {
        betweenLabel.style.display = "inline";
        maxMarkInput.style.display = "inline";
    } else {
        betweenLabel.style.display = "none";
        maxMarkInput.style.display = "none";
    }
  }
  
  function Clear() {
    document.getElementById("subjects").selectedIndex = 0;
    document.getElementById("above").checked = true;
    document.getElementById("mark").value = "";
    document.getElementById("maxMark").value = "";
  
    displayTable();
  }
  
  function filterClick() {
    var subject = document.getElementById("subjects").value;
    var filterMode = document.querySelector('input[name="mode"]:checked').value;
    var mark = parseFloat(document.getElementById("mark").value);
    var maxMark = parseFloat(document.getElementById("maxMark").value);
  
    var filteredData = data;
  
    if (subject !== "") {
        filteredData = filteredData.filter(function (student) {
            return student[subject] !== undefined;
        });
    }
  
    switch (filterMode) {
        case "above":
            filteredData = filteredData.filter(function (student) {
                return student[subject] > mark;
            });
            break;
        case "below":
            filteredData = filteredData.filter(function (student) {
                return student[subject] < mark;
            });
            break;
        case "between":
            filteredData = filteredData.filter(function (student) {
                return student[subject] >= mark && student[subject] <= maxMark;
            });
            break;
        default:
            break;
    }
  
    displayFilteredData(filteredData);
  }
  
  
  
  function displayFilteredData(filteredData) {
    var tableBody = document.getElementById("studentData");
    tableBody.innerHTML = "";
  
    for (var i = 0; i < filteredData.length; i++) {
        var row = tableBody.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
  
        cell1.innerHTML = filteredData[i].id + 1;
        cell2.innerHTML = filteredData[i].name;
        cell3.innerHTML = filteredData[i].English;
        cell4.innerHTML = filteredData[i].Maths;
        cell5.innerHTML = filteredData[i].Science;
        cell6.innerHTML = filteredData[i].SocialScience;
    }
  }
  