/**
 * MIT License
 *
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
 
import {
  Descriptor,
  ComponentBuilderContext,
  RNComponentFactory,
  RNOHContext,
  RNViewBase,
  ViewBaseProps,
  ViewDynamicProps
} from 'rnoh'
import Logger from './Logger'

export const MASKED_VIEW_TYPE: string = "RNCMaskedView"
const TAG: string = "[RNOH] RNCMaskedView"

export type MaskedViewDescriptor = Descriptor<"RNCMaskedView", ViewBaseProps>

@Component
export struct MaskedView {
  ctx!: RNOHContext
  tag: number = 0
  @BuilderParam buildCustomComponent: (componentBuilderContext: ComponentBuilderContext) => void
  @State descriptor: MaskedViewDescriptor = {} as MaskedViewDescriptor
  private unregisterDescriptorChangesListener?: () => void = undefined
  aboutToAppear() {
    this.descriptor = this.ctx.descriptorRegistry.getDescriptor<MaskedViewDescriptor>(this.tag)
    this.unregisterDescriptorChangesListener = this.ctx.descriptorRegistry.subscribeToDescriptorChanges(this.tag,
      (newDescriptor) => {
        this.descriptor = (newDescriptor as MaskedViewDescriptor)
      }
    )
    Logger.debug(TAG, `props ${JSON.stringify(this.descriptor.props)}`)
  }

  aboutToDisappear() {
    this.unregisterDescriptorChangesListener?.()
  }

  build() {
    RNViewBase({ ctx: this.ctx, tag: this.tag }) {
      ForEach(this.descriptor.childrenTags, (childrenTag: number,index:number) => {
        if (index != 0) {
          RNComponentFactory({ ctx: this.ctx, tag: childrenTag, buildCustomComponent: this.buildCustomComponent })
        }
      }, (childrenTag: number) => childrenTag.toString())
      RNComponentFactory({ ctx: this.ctx, tag: this.descriptor.childrenTags[0], buildCustomComponent: this.buildCustomComponent })
    }
  }
}
