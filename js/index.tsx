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
import type { NativeProps } from './RNCMaskedViewNativeComponent';
import RNCMaskedView from './RNCMaskedViewNativeComponent';
import type { ReactNode, ReactElement } from 'react';
interface MaskedViewProps extends NativeProps {
  children?: ReactNode;
  androidRenderingMode?: 'software' | 'hardware';
  maskElement?: ReactElement<any>;
}

function MaskedViewBase({
  forwardedRef,
  ...props
}: MaskedViewProps & { forwardedRef: React.Ref<any> }) {
  const { maskElement, children, ...otherViewProps } = props;
  let _hasWarnedInvalidRenderMask = false;

  if (!React.isValidElement(maskElement)) {
    if (!_hasWarnedInvalidRenderMask) {
      console.warn(
        'MaskedView: Invalid `maskElement` prop was passed to MaskedView. ' +
          'Expected a React Element. No mask will render.'
      );
      _hasWarnedInvalidRenderMask = true;
    }
    return (
      <View {...otherViewProps} ref={forwardedRef}>
        {children}
      </View>
    );
  }
  return (
    <RNCMaskedView {...otherViewProps}>
      <View
        pointerEvents="none"
        style={StyleSheet.absoluteFill}
        ref={forwardedRef}
      >
        {maskElement}
      </View>
      {children}
    </RNCMaskedView>
  );
}

const MaskedViewMemo = memo(MaskedViewBase);
const MaskedViewComponent: React.ComponentType<MaskedViewProps> = forwardRef(
  (props: MaskedViewProps, ref: React.Ref<any>) => (
    <MaskedViewMemo forwardedRef={ref} {...props} />
  )
);

MaskedViewComponent.displayName = 'MaskedView';

export interface MaskedViewStaticProperties {}

const MaskedView: React.ComponentType<MaskedViewProps> =
  MaskedViewComponent as any;

export default MaskedView;
