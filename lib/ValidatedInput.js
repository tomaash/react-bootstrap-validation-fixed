'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidatedInput = function (_React$Component) {
    _inherits(ValidatedInput, _React$Component);

    function ValidatedInput(props) {
        _classCallCheck(this, ValidatedInput);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ValidatedInput).call(this, props));

        var validationEvent = props.validationEvent;
        var validate = props.validate;
        var errorHelp = props.errorHelp;
        var _registerInput = props._registerInput;
        var _unregisterInput = props._unregisterInput;

        var inputProps = _objectWithoutProperties(props, ['validationEvent', 'validate', 'errorHelp', '_registerInput', '_unregisterInput']);

        _this._registerInput = _registerInput;
        _this._unregisterInput = _unregisterInput;
        _this.inputProps = inputProps;
        if (!_this._registerInput || !_this._unregisterInput) {
            throw new Error('Input must be placed inside the Form component');
        }
        return _this;
    }

    _createClass(ValidatedInput, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this._registerInput(this);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unregisterInput(this);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.FormControl,
                _extends({ ref: 'control' }, this.inputProps),
                this.props.children
            );
        }
    }]);

    return ValidatedInput;
}(_react2.default.Component);

exports.default = ValidatedInput;


ValidatedInput.propTypes = {
    name: _react2.default.PropTypes.string.isRequired,
    validationEvent: _react2.default.PropTypes.oneOf(['', 'onChange', 'onBlur', 'onFocus']),
    validate: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
    errorHelp: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])
};

ValidatedInput.defaultProps = {
    validationEvent: ''
};