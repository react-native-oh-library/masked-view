"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _RNCMaskedViewNativeComponent = _interopRequireDefault(require("./RNCMaskedViewNativeComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /**
 * MIT License
 *
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANT KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function MaskedViewBase(_ref) {
  let {
    forwardedRef,
    ...props
  } = _ref;
  const {
    maskElement,
    children,
    ...otherViewProps
  } = props;
  let _hasWarnedInvalidRenderMask = false;
  if (! /*#__PURE__*/_react.default.isValidElement(maskElement)) {
    if (!_hasWarnedInvalidRenderMask) {
      console.warn('MaskedView: Invalid `maskElement` prop was passed to MaskedView. ' + 'Expected a React Element. No mask will render.');
      _hasWarnedInvalidRenderMask = true;
    }
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, otherViewProps, {
      ref: forwardedRef
    }), children);
  }
  return /*#__PURE__*/_react.default.createElement(_RNCMaskedViewNativeComponent.default, otherViewProps, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    pointerEvents: "none",
    style: _reactNative.StyleSheet.absoluteFill,
    ref: forwardedRef
  }, maskElement), children);
}
const MaskedViewMemo = /*#__PURE__*/(0, _react.memo)(MaskedViewBase);
const MaskedViewComponent = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => /*#__PURE__*/_react.default.createElement(MaskedViewMemo, _extends({
  forwardedRef: ref
}, props)));
MaskedViewComponent.displayName = 'MaskedView';
const MaskedView = MaskedViewComponent;
var _default = exports.default = MaskedView;
//# sourceMappingURL=index.js.map