let date = new Date()
document.querySelector('#year').textContent = date.getFullYear();
document.querySelector('#datemod').textContent = `Last Changed: ${document.lastModified}`;