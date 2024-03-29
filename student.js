
function sortStudents() {
    const sortBy = document.getElementById('sort').value;
    students.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'roll') {
            return a.roll - b.roll;
        }
    });
    displayStudents();
}


function searchStudents() {
    const searchText = document.getElementById('search').value.toLowerCase();
    const filteredStudents = students.filter(student => {
        return student.name.toLowerCase().includes(searchText) || student.roll.toString().includes(searchText);
    });
    displayFilteredStudents(filteredStudents);
}


function displayFilteredStudents(filteredStudents) {
    const studentList = document.getElementById('students');
    studentList.innerHTML = '';
    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>
                <button onclick="editStudent(${student.roll})">Edit</button>
                <button onclick="deleteStudent(${student.roll})" class="delete-btn">Delete</button>
            </td>
        `;
        studentList.appendChild(row);
    });
}


function clearSearch() {
    document.getElementById('search').value = '';
    displayStudents();
}
