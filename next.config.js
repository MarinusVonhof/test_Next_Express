// next-pwa initialiseert de PWA-configs (service-worker, ...)

const next_pwa = require('next-pwa')

module.exports = next_pwa({

    pwa: {
        dest: 'public'
    }
})