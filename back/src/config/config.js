'use strict'

const config = {
    application: {
        host: 'localhost',
        port: process.env.NODE_PORT || 8000,
        protocol: 'http'
    },
    client: {
        host: 'localhost',
        port: 3000,
        protocol: 'http'
    },
    database: {
        name: 'test_wisebatt',
        host: 'ds219879.mlab.com:19879'
    }
}

module.exports = config
