/**
 * based on https://github.com/bem/bem-components/blob/v2/common.blocks/popup/_target/popup_target.js
 */

const VIEWPORT_ACCURACY_FACTOR = 0.99;

const DEFAULT_DIRECTIONS = [
    'bottom-left', 'bottom-center', 'bottom-right',
    'top-left', 'top-center', 'top-right',
    'right-top', 'right-center', 'right-bottom',
    'left-top', 'left-center', 'left-bottom',
];

/**
 * @typedef {Object} DrawingParams
 * @params {String} direction
 * @params {Number} left
 * @params {Number} top
 */

/**
 * @typedef {Object} PopupDimension
 * @param {Number} width
 * @param {Number} height
 * @param {Number} area
 */

/**
 * @typedef {Object} Rect
 * @param {Number} top
 * @param {Number} left
 * @param {Number} [bottom]
 * @param {Number} [right]
 * @param {Number} [width]
 * @param {Number} [height]
 */

/**
 * @param {PopupHash} popup
 * @returns {DrawingParams}
 */
function calcBestDrawingParams(popup) {
    if (!popup.isTargetAnchor && popup.targetPosition) {
        return {
            left: popup.targetPosition.left,
            top: popup.targetPosition.top,
            direction: null,
        };
    }

    let popupDimensions = calcPopupDimensions(popup);
    let targetDimensions = calcTargetDimensions(popup);
    let viewportDimensions = calcViewportDimensions();
    let directions = !!popup.directions
        ? popup.directions
        : DEFAULT_DIRECTIONS;
    let i = 0;
    let direction;
    let position;
    let viewportFactor;
    let bestDirection;
    let bestPosition;
    let bestViewportFactor;

    while (directions[i]) {
        direction = directions[i++];
        position = calcPos(direction, targetDimensions, popupDimensions, popup);
        viewportFactor = calcViewportFactor(position, viewportDimensions, popupDimensions, popup);

        if (i === 1 ||
            viewportFactor > bestViewportFactor ||
            !bestViewportFactor
            && popup.bestDirection
        ) {
            bestDirection = direction;
            bestViewportFactor = viewportFactor;
            bestPosition = position;
        }

        if (bestViewportFactor > VIEWPORT_ACCURACY_FACTOR) {
            break;
        }
    }

    return {
        direction: bestDirection,
        left: bestPosition.left,
        top: bestPosition.top,
    };
}

module.exports = {
    calcBestDrawingParams,
    DEFAULT_DIRECTIONS,
};

/**
 * @param {PopupHash} popup
 * @returns {PopupDimension}
 */
function calcPopupDimensions(popup) {
    let display = popup.domElementPopup.style.display;

    // to get the sizes
    if (!display || display === 'none') {
        popup.domElementPopup.style.display = 'block';
    }

    let popupWidth = popup.domElementPopup.offsetWidth;
    let popupHeight = popup.domElementPopup.offsetHeight;

    popup.domElementPopup.style.display = display;

    return {
        width: popupWidth,
        height: popupHeight,
        area: popupWidth * popupHeight,
    };
}

/**
 * @param {PopupHash} popup
 * @returns {Rect}
 */
function calcTargetDimensions(popup) {
    let anchor = popup.targetAnchor;
    let anchorRect = popup.targetAnchor.getBoundingClientRect();
    let body = document.body;

    return {
        left: anchorRect.left + body.scrollLeft,
        top: anchorRect.top + body.scrollTop,
        width: anchorRect.width,
        height: anchorRect.height,
    };
}

/**
 * @returns {Rect}
 */
function calcViewportDimensions() {
    let winTop = window.pageYOffset;
    let winLeft = window.pageXOffset;
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    return {
        top: winTop,
        left: winLeft,
        bottom: winTop + winHeight,
        right: winLeft + winWidth,
    };
}

/**
 * @param {Point} position
 * @param {Rect} viewportDimensions
 * @param {PopupDimension} popupDimensions
 * @param {PopupHash} popup
 * @returns {Number}
 */
function calcViewportFactor(position, viewportDimensions, popupDimensions, popup) {
    var viewportOffset = popup.offset.viewport;
    var intersectionLeft = Math.max(position.left, viewportDimensions.left + viewportOffset);
    var intersectionRight = Math.min(position.left
            + popupDimensions.width, viewportDimensions.right
            - viewportOffset);
    var intersectionTop = Math.max(position.top, viewportDimensions.top + viewportOffset);
    var intersectionBottom = Math.min(position.top + popupDimensions.height,
            viewportDimensions.bottom - viewportOffset);

    return ((intersectionLeft < intersectionRight) && (intersectionTop < intersectionBottom))
        ? ((intersectionRight - intersectionLeft) * (intersectionBottom - intersectionTop)
    / popupDimensions.area)
        : 0;
}

/**
 * @param {String} direction
 * @param {Rect} targetDimensions
 * @param {PopupDimension} popupDimensions
 * @param {PopupHash} popup
 * @returns {Point}
 */
function calcPos(direction, targetDimensions, popupDimensions, popup) {
    let result = {};
    let mainOffset = popup.offset.main || 0;
    let secondaryOffset = popup.offset.second || 0;

    let mainDirection = getMainDirection(direction);
    let secondaryDirection = getSecondaryDirection(direction);

    switch (mainDirection) {
        case 'bottom':
            result.top = targetDimensions.top + targetDimensions.height + mainOffset;
            break;
        case 'top':
            result.top = targetDimensions.top - popupDimensions.height - mainOffset;
            break;
        case 'left':
            result.left = targetDimensions.left - popupDimensions.width - mainOffset;
            break;
        case 'right':
            result.left = targetDimensions.left + targetDimensions.width + mainOffset;
            break;
        default:
            break;
    }

    switch (secondaryDirection) {
        case 'right':
            result.left = targetDimensions.left
                + targetDimensions.width
                - popupDimensions.width
                - secondaryOffset;
            break;
        case 'left':
            result.left = targetDimensions.left + secondaryOffset;
            break;
        case 'bottom':
            result.top = targetDimensions.top
                + targetDimensions.height
                - popupDimensions.height
                - secondaryOffset;
            break;
        case 'top':
            result.top = targetDimensions.top + secondaryOffset;
            break;
        case 'center':
            switch (mainDirection) {
                case 'top':
                case 'bottom':
                    result.left = targetDimensions.left
                        + targetDimensions.width / 2
                        - popupDimensions.width / 2;
                    break;
                case 'left':
                case 'right':
                    result.top = targetDimensions.top
                        + targetDimensions.height / 2
                        - popupDimensions.height / 2;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    return result;
}

/**
 * @param {String} direction
 * @return {String|Boolean}
 */
function getMainDirection(direction) {
    let deliveryPosition = direction.indexOf('-');
    return (deliveryPosition !== -1) && direction.substr(0, deliveryPosition);
}

/**
 * @param {String} direction
 * @return {String|Boolean}
 */
function getSecondaryDirection(direction) {
    let deliveryPosition = direction.indexOf('-');
    return (deliveryPosition !== -1) && direction.substr(deliveryPosition + 1);
}
