fetch('https://your-backend-url.com/upload', {
    method: 'POST',
    body: videoFile
}).then(response => response.json())
  .then(data => console.log(data));
