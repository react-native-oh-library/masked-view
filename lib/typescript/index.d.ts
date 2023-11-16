import React from 'react';
import type { NativeProps } from './RNCMaskedViewNativeComponent';
import type { ReactNode, ReactElement } from 'react';
interface MaskedViewProps extends NativeProps {
    children?: ReactNode;
    androidRenderingMode?: 'software' | 'hardware';
    maskElement?: ReactElement<any>;
}
export interface MaskedViewStaticProperties {
}
declare const MaskedView: React.ComponentType<MaskedViewProps>;
export default MaskedView;
//# sourceMappingURL=index.d.ts.map