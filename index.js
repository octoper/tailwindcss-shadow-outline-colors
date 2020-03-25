const _ = require('lodash');
const color = require('color');
const flattenColorPalette = require('./utils/flattenColorPalette')


module.exports = function () {
    return function ({ addUtilities, e, theme, variants }) {
        const colors = flattenColorPalette(theme('shadowOutlineColors') ? theme('shadowOutlineColors') : theme('colors'))
        const shadowConf = theme('shadowOutline.shadow') ? theme('shadowOutline.shadow') : '0 0 0 0.125em'
        const alphaConf = theme('shadowOutline.alpha') ? theme('shadowOutline.alpha') : '0.25'

        const utilities = _.fromPairs(
            _.map(_.omit(colors, 'default'), (value, modifier) => {
                return [
                    `.${e(`shadow-outline-${modifier}`)}`,
                    {
                        'box-shadow': `${shadowConf} ${color(value).alpha(alphaConf).rgb().string()}`,
                    },
                ]
            })
        )

        addUtilities(utilities, variants('shadowOutline'))
    }
}
