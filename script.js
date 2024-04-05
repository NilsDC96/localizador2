function updateTime() {
    const now = new Date();

    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const dateString = `${day}/${month}/${year}`;

    clockElement.textContent = timeString;
    dateElement.textContent = dateString;

    setTimeout(updateTime, 1000);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const locationElement = document.getElementById('location');
            const latitude = position.coords.latitude.toFixed(6);
            const longitude = position.coords.longitude.toFixed(6);
            locationElement.textContent = `Latitud: ${latitude}, Longitud: ${longitude}`;
        }, error => {
            console.error('Error al obtener la ubicación:', error);
        });
    } else {
        console.error('Geolocalización no es soportada por este navegador.');
    }
}

updateTime();
getLocation();
