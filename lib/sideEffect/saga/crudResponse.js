'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = _callee;

var _effects = require('redux-saga/effects');

var _reactRouterRedux = require('react-router-redux');

var _dataActions = require('../../actions/dataActions');

var _notificationActions = require('../../actions/notificationActions');

var _linkToRecord = require('../../util/linkToRecord');

var _linkToRecord2 = _interopRequireDefault(_linkToRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [handleResponse, _callee].map(_regenerator2.default.mark);

/**
 * Side effects for fetch responses
 *
 * Mostly redirects and notifications
 */
function handleResponse(_ref) {
    var type = _ref.type,
        requestPayload = _ref.requestPayload,
        error = _ref.error,
        payload = _ref.payload;
    return _regenerator2.default.wrap(function handleResponse$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.t0 = type;
                    _context.next = _context.t0 === _dataActions.CRUD_UPDATE_SUCCESS ? 3 : _context.t0 === _dataActions.CRUD_CREATE_SUCCESS ? 6 : _context.t0 === _dataActions.CRUD_DELETE_SUCCESS ? 9 : _context.t0 === _dataActions.CRUD_GET_ONE_FAILURE ? 12 : _context.t0 === _dataActions.CRUD_GET_LIST_FAILURE ? 22 : _context.t0 === _dataActions.CRUD_GET_MANY_FAILURE ? 22 : _context.t0 === _dataActions.CRUD_GET_MANY_REFERENCE_FAILURE ? 22 : _context.t0 === _dataActions.CRUD_CREATE_FAILURE ? 22 : _context.t0 === _dataActions.CRUD_UPDATE_FAILURE ? 22 : _context.t0 === _dataActions.CRUD_DELETE_FAILURE ? 22 : 26;
                    break;

                case 3:
                    _context.next = 5;
                    return [(0, _effects.put)((0, _notificationActions.showNotification)('aor.notification.updated')), (0, _effects.put)((0, _reactRouterRedux.push)(requestPayload.basePath))];

                case 5:
                    return _context.abrupt('return', _context.sent);

                case 6:
                    _context.next = 8;
                    return [(0, _effects.put)((0, _notificationActions.showNotification)('aor.notification.created')), (0, _effects.put)((0, _reactRouterRedux.push)((0, _linkToRecord2.default)(requestPayload.basePath, payload.id)))];

                case 8:
                    return _context.abrupt('return', _context.sent);

                case 9:
                    _context.next = 11;
                    return [(0, _effects.put)((0, _notificationActions.showNotification)('aor.notification.deleted')), (0, _effects.put)((0, _reactRouterRedux.push)(requestPayload.basePath))];

                case 11:
                    return _context.abrupt('return', _context.sent);

                case 12:
                    if (!requestPayload.basePath) {
                        _context.next = 18;
                        break;
                    }

                    _context.next = 15;
                    return [(0, _effects.put)((0, _notificationActions.showNotification)('aor.notification.item_doesnt_exist', 'warning')), (0, _effects.put)((0, _reactRouterRedux.push)(requestPayload.basePath))];

                case 15:
                    _context.t1 = _context.sent;
                    _context.next = 21;
                    break;

                case 18:
                    _context.next = 20;
                    return [];

                case 20:
                    _context.t1 = _context.sent;

                case 21:
                    return _context.abrupt('return', _context.t1);

                case 22:
                    console.error(error);
                    _context.next = 25;
                    return [(0, _effects.put)((0, _notificationActions.showNotification)(error.message, 'warning'))];

                case 25:
                    return _context.abrupt('return', _context.sent);

                case 26:
                    _context.next = 28;
                    return [];

                case 28:
                    return _context.abrupt('return', _context.sent);

                case 29:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeEvery)(function (action) {
                        return action.meta && action.meta.fetchResponse;
                    }, handleResponse);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}
module.exports = exports['default'];