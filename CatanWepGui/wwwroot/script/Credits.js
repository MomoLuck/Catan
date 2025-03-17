window.autoScroll = window.autoScroll || {
    scroller: function () {
        // Start- und Zielwerte für das Scrollen definieren
        const target = document.body.scrollHeight+1000;
        const current = window.scrollY;
        const distance = target - current;
        const duration = 15000; // Dauer der Animation in Millisekunden
        let startTime = null;

        // Funktion für das Scrollen
        function scrollAnimation(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const scrollTo = current + (distance * (progress / duration));

            window.scrollTo(0, scrollTo);

            // Solange weiter scrollen, bis die Dauer erreicht ist
            if (progress < duration) {
                requestAnimationFrame(scrollAnimation);
            } else {
                window.scrollTo(0, target); // Sicherstellen, dass das Ziel erreicht wird
            }
        }

        // Die Animation starten
        requestAnimationFrame(scrollAnimation);
    }
};
