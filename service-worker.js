self.addEventListener("push", function(event) {

    let data = {};

    try {
        data = event.data ? event.data.json() : {};
    } catch (e) {
        data = {};
    }

    const title =
        data.title || "MYSHOP 🔔";

    const options = {
        body:
            data.body ||
            "ඔබට අලුත් notification එකක් තියෙනවා.",
        icon:
            data.icon ||
            "/favicon.ico",
        badge:
            data.badge ||
            "/favicon.ico",
        data:
            data.url || "/"
    };

    event.waitUntil(
        self.registration.showNotification(
            title,
            options
        )
    );

});


self.addEventListener(
    "notificationclick",
    function(event) {

        event.notification.close();

        const url =
            event.notification.data ||
            "/";

        event.waitUntil(
            clients.openWindow(url)
        );

    }
);
