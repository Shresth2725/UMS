let students = [];


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('students')) {
        students = JSON.parse(localStorage.getItem('students'));
        displayStudents();
    }
});

function addOrUpdateStudent() {
    const name = document.getElementById('name').value.trim();
    const roll = document.getElementById('roll').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    if (name === '' || roll === '' || email === '' || phone === '' || address === '') {
        alert('Please fill in all fields.');
        return;
    }

    const existingStudentIndex = students.findIndex(student => student.roll === roll);

    if (existingStudentIndex !== -1) {
        
        students[existingStudentIndex] = { name, roll, email, phone, address };
    } else {
       
        students.push({ name, roll, email, phone, address });
    }

    
    localStorage.setItem('students', JSON.stringify(students));

    displayStudents();
    clearForm();
}

function displayStudents() {
    const studentList = document.getElementById('students');
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})" class="delete-btn">Delete</button>
            </td>
        `;
        studentList.appendChild(row);
    });
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('roll').value = student.roll;
    document.getElementById('email').value = student.email;
    document.getElementById('phone').value = student.phone;
    document.getElementById('address').value = student.address;
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('roll').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
}
