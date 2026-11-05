function addStudent() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name === "" || age === "") {
        alert("Please enter all details");
        return;
    }

    let studentList = document.getElementById("studentList");

    let li = document.createElement("li");

    li.textContent = "Name: " + name + " | Age: " + age;

    studentList.appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}