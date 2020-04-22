const _ = require('lodash');
const Color = require('color');
const flattenColorPalette = require('./utils/flattenColorPalette')


module.exports = function () {
    return function ({
        addUtilities,
        e,
        theme,
        variants
    }) {
        const colors = flattenColorPalette(theme('shadowOutlineColors') ? theme('shadowOutlineColors') : theme('colors'))
        const shadowConf = theme('shadowOutline.shadow') ? theme('shadowOutline.shadow') : '0 0 0 0.125em'
        const alphaConf = theme('shadowOutline.alpha') ? theme('shadowOutline.alpha') : '0.25'

        const utilities = _.fromPairs(
            _.map(_.omit(colors, 'default'), (value, modifier) => {
                let color = value;
                if (value != 'currentColor') {
                    color = Color(value).alpha(alphaConf).rgb().string()
                }
                return [
                    `.${e(`shadow-outline-${modifier}`)}`,
                    {
                        'box-shadow': `${shadowConf} ${color}`,
                    },
                ]
            })
        )

        addUtilities(utilities, variants('shadowOutline'))
    }
}