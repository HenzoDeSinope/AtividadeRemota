document.getElementById('userForm').addEventListener('submit', function(event) {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const tableBody = document.getElementById('userTableBody');
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    const emailCell = document.createElement('td');
    emailCell.textContent = email;

    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);

    tableBody.appendChild(newRow);

    document.getElementById('userForm').reset();
});
