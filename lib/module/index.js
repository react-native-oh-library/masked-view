function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
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
import { View, StyleSheet } from 'react-native';
import { forwardRef, memo } from 'react';
import React from 'react';
import RNCMaskedView from './RNCMaskedViewNativeComponent';
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
  if (! /*#__PURE__*/React.isValidElement(maskElement)) {
    if (!_hasWarnedInvalidRenderMask) {
      console.warn('MaskedView: Invalid `maskElement` prop was passed to MaskedView. ' + 'Expected a React Element. No mask will render.');
      _hasWarnedInvalidRenderMask = true;
    }
    return /*#__PURE__*/React.createElement(View, _extends({}, otherViewProps, {
      ref: forwardedRef
    }), children);
  }
  return /*#__PURE__*/React.createElement(RNCMaskedView, otherViewProps, /*#__PURE__*/React.createElement(View, {
    pointerEvents: "none",
    style: StyleSheet.absoluteFill,
    ref: forwardedRef
  }, maskElement), children);
}
const MaskedViewMemo = /*#__PURE__*/memo(MaskedViewBase);
const MaskedViewComponent = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(MaskedViewMemo, _extends({
  forwardedRef: ref
}, props)));
MaskedViewComponent.displayName = 'MaskedView';
const MaskedView = MaskedViewComponent;
export default MaskedView;
//# sourceMappingURL=index.js.map