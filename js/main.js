// initialize and add the map
function initMap() {
    // Your location
    const loc = {
        lat: 37.541527,
        lng: -77.435312
    };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at  location
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}

//sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        this.document.querySelector('navbar').style.opacity = 1;
    }
});

//smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            },
            800
        );
    }
});