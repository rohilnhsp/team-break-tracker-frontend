document.getElementById('status-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;

    // Send the data to the Flask backend API
    fetch('https://your-flask-app.onrender.com/update_status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, status })
    })
    .then(response => response.json())
    .then(data => {
        alert('Status updated');
        location.reload(); // Reload to reflect the changes
    });
});

// Fetch current status from the backend
window.onload = function () {
    fetch('https://your-flask-app.onrender.com/api/status')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('team-status');
            tableBody.innerHTML = ''; // Clear existing data
            for (let member in data) {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${member}</td><td>${data[member]}</td>`;
                tableBody.appendChild(row);
            }
        });
};
