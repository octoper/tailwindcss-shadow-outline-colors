const _ = require('lodash');
const color = require('color');
const flattenColorPalette = require('./utils/flattenColorPalette')


module.exports = function () {
    return function ({ addUtilities, e, theme, variants }) {
        const colors = flattenColorPalette(theme('shadowOutlineColors'))
        const utilities = _.fromPairs(
            _.map(_.omit(colors, 'default'), (value, modifier) => {
                return [
                    `.${e(`shadow-outline-${modifier}`)}`,
                    {
                        'box-shadow': `0 0 0 3px ${color(value).alpha(0.5).rgb().string()}`,
                    },
                ]
            })
        )

        addUtilities(utilities, variants('shadowOutlineColors'))
    }
}
