
document.getElementById('GetBtn').addEventListener('click', function() {
    fetch('https://api.quotable.io/random')
        .then(response => {  
            if (response.ok) {
                document.getElementById('status').textContent = `Status: ${response.status} - OK`;
            } else {
                document.getElementById('status').textContent = `Status: ${response.status} - Error`;
            }
            return response.json();
        })
        .then(data => {
            console.log('Quote:', data);
        })
        .catch(error => {
            document.getElementById('status').textContent = `Fetch Error: ${'Ошибка', error}`;
        });
});