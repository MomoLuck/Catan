window.autoScroll = window.autoScroll || {
    scroller: function () {
        const current = window.scrollY;
        const body = document.body;
        const html = document.documentElement;

        // Ziel berechnen: höchste bekannte Scrollhöhe
        const maxScroll = Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight
        );
        const target = maxScroll + 1000;
        const distance = target - current;
        const duration = 15000;
        let startTime = null;

        function scrollAnimation(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const scrollTo = current + (distance * (progress / duration));
            window.scrollTo(0, scrollTo);

            if (progress < duration) {
                requestAnimationFrame(scrollAnimation);
            } else {
                window.scrollTo(0, target);
            }
        }

        requestAnimationFrame(scrollAnimation);
    }
};