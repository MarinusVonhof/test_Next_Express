// next-pwa initialiseert de PWA-configs (service-worker, ...)

const withPwa = require('next-pwa')

module.exports = withPwa({

    pwa: {
        dest: 'public'
    }
})