/*
 *  Push Worker for WebPush
 *  http://notifica.re
 *
 *  @author Joel Oliveira joel@notifica.re
 *  @author Joris Verbogt joris@notifica.re
 *  copyright 2017 Notificare
 */

self.addEventListener('push', function (event) {

    try {

        var payload = event.data.json();

        if (payload["x-sender"] && payload["x-sender"] === 'notificare') {

            if (payload.alert) {
                if (payload.actions) {
                    var actions = [];
                    payload.actions.forEach(function (a) {
                        actions.push({
                            title: a.label,
                            action: a.label
                        });
                    });
                }

                self.clients.matchAll().then(function(clients) {
                    clients.forEach(function(client) {
                        client.postMessage(JSON.stringify({cmd: 'notificationreceive', message: payload.id}));
                    });
                });

                event.waitUntil(self.registration.showNotification(payload.application, {
                    body: payload.alert,
                    icon: payload.icon,
                    tag: payload.id,
                    actions: actions,
                    data: payload,
                    image: (payload.attachment) ? payload.attachment.uri : null, //Chrome on Android accepts lock screen media,
                    sound: (payload.sound) ? payload.sound : null //Chrome on Android accepts sound when receiving a notification, you need to provide the full path to your sound resources
                }));
            } else {

                if (payload.system) {
                    event.waitUntil(
                        self.clients.matchAll().then(function(clients) {
                            clients.forEach(function(client) {
                                client.postMessage(JSON.stringify({cmd: 'system', message: payload}));
                            });
                        })
                    );
                } else {
                    event.waitUntil(
                        self.clients.matchAll().then(function(clients) {
                            clients.forEach(function(client) {
                                client.postMessage(JSON.stringify({cmd: 'notificationreceive', message: payload.id}));
                            });
                        })
                    );
                }

            }

        } else {
            event.waitUntil(
                self.clients.matchAll().then(function(clients) {
                    clients.forEach(function(client) {
                        client.postMessage(JSON.stringify({cmd: 'unknownpush', message: payload}));
                    });
                })
            );
        }

    } catch(e) {
        event.waitUntil(
            self.clients.matchAll().then(function(clients) {
                clients.forEach(function(client) {
                    client.postMessage(JSON.stringify({cmd: 'workerpush', message: payload}));
                });
            })
        );
    }

});


self.addEventListener('notificationclick', function (event) {

    event.notification.close();

    event.waitUntil(

        clients.matchAll({
            type: "window"
        })
        .then(function(clientList) {

            if (clientList.length == 0) {

                var url = event.notification.data.urlFormatString.replace("%@", event.notification.tag);

                if (event.action) {

                    setTimeout(function(){

                        clients.matchAll().then(function(clients) {
                            clients.forEach(function(client) {
                                client.postMessage(JSON.stringify({cmd: 'notificationreply', message: event.notification.tag, action: event.action, bg: true}));
                            });
                        });

                    }, 2000);

                }

                return clients.openWindow(url);

            } else {

                var client = clientList[0];
                if (client  && 'focus' in client){

                    if (event.action) {

                        self.clients.matchAll().then(function(clients) {
                            clients.forEach(function(client) {
                                client.postMessage(JSON.stringify({cmd: 'notificationreply', message: event.notification.tag, action: event.action, bg: false}));
                            });
                        });

                    } else {

                        client.postMessage(JSON.stringify({cmd: 'notificationclick', message: event.notification.tag}));

                    }

                    return client.focus();
                }

            }

        })

    );

});

//Set the callback for the activate step
self.addEventListener('activate', function (event) {
    clients.claim();
    clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
            client.postMessage(JSON.stringify({cmd: 'activate'}));
        });
    });
});

//Set the callback for the activate step
self.addEventListener('pushsubscriptionchange', function (event) {
    clients.claim();
    clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
            client.postMessage(JSON.stringify({cmd: 'pushsubscriptionchange'}));
        });
    });
});

// Set the callback for the install step
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(self.skipWaiting());
});

self.addEventListener("message", function(e) {

    var data = JSON.parse(e.data);

    switch(data.action) {
        case 'init':
            break;
        default:
            console.log(e);
            break;
    }
});
