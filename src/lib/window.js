'use strict';
/**
 * Check that mouse was outside `e`
 * @param {Object} e - MouseEvent
 * @param {React.Element} element - Element to check bounds
 * @returns {Boolean}
 */
module.exports.isEventOusideBounds = function(e, element) {
    let rect = element.getBoundingClientRect();
    return ((e.pageX < rect.left || e.pageX > rect.right) ||
            (e.pageY < rect.top || e.pageY > rect.bottom));
}

/**
 * Check that mouse was outside `e`
 * @param {Object} e - MouseEvent
 * @param {React.Element} element - Element to check bounds
 * @returns {Boolean}
 */
module.exports.isEventOutsideClientBounds = function(e, element) {
    let rect = element.getBoundingClientRect();
    return e.clientX < rect.left || e.clientX > rect.right
        || e.clientY < rect.top  || e.clientY > rect.bottom;
}
