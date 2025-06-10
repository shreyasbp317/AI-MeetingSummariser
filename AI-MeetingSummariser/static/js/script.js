document.getElementById('pptForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById('pptFile');
    const statusDiv = document.getElementById('status');
    const outputDiv = document.getElementById('output');

    statusDiv.textContent = 'Starting upload...';
    outputDiv.textContent = '';

    if (!fileInput.files.length) {
        statusDiv.textContent = 'No file selected!';
        return;
    }

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        statusDiv.textContent = 'Uploading and processing...';

        const response = await fetch('/summarize-ppt', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Server error');
        }

        statusDiv.textContent = 'Summary generated!';
        outputDiv.innerHTML = `<h3>Summary:</h3><p>${data.summary}</p>`;

    } catch (error) {
        console.error('Error:', error);
        statusDiv.textContent = `Error: ${error.message}`;
        outputDiv.textContent = '';
    }
});