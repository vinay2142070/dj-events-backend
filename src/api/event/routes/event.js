'use strict';

/**
 * event router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

//module.exports = createCoreRouter('api::event.event');
module.exports = {
    routes: [

        {
            method: "GET",
            path: "/events/me",
            handler: "event.me",
            config: {},
        },

        {
            "method": "GET",
            "path": "/events",
            "handler": "event.find",
            "config": {
                "policies": []
            }
        },
        {
            "method": "POST",
            "path": "/events",
            "handler": "event.create",
            "config": {
                "policies": []
            }
        },
        {
            "method": "PUT",
            "path": "/events/:id",
            "handler": "event.update",
            "config": {
                "policies": []
            }

        },
        {
            "method": "DELETE",
            "path": "/events/:id",
            "handler": "event.delete",
            "config": {
                "policies": []
            }
        }

    ],
};
