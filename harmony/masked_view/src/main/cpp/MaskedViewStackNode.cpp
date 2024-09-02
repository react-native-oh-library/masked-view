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
 
#include "MaskedViewStackNode.h"
#include "RNOH/arkui/NativeNodeApi.h"
#include <memory>
#include "glog/logging.h"

namespace rnoh {
    MaskedViewStackNode::MaskedViewStackNode()
        : ArkUINode(NativeNodeApi::getInstance()->createNode(ArkUI_NodeType::ARKUI_NODE_STACK)) {}

    void MaskedViewStackNode::insertChild(ArkUINode &child, std::size_t index) {
        maybeThrow(NativeNodeApi::getInstance()->insertChildAt(m_nodeHandle, child.getArkUINodeHandle(), index));
        if (index == 0) {
            setBlendMode(ARKUI_BLEND_MODE_SRC_OVER, getArkUINodeHandle());
        } else if (index == 1){
            setBlendMode(ARKUI_BLEND_MODE_SRC_IN, child.getArkUINodeHandle());
        }
    }

    void MaskedViewStackNode::removeChild(ArkUINode &child) {
        maybeThrow(NativeNodeApi::getInstance()->removeChild(m_nodeHandle, child.getArkUINodeHandle()));
        // setBlendMode(ARKUI_BLEND_MODE_NONE, getArkUINodeHandle());
        // setBlendMode(ARKUI_BLEND_MODE_NONE, child.getArkUINodeHandle());
    }

    void MaskedViewStackNode::setBlendMode(int32_t blendMode, ArkUI_NodeHandle node) {
        ArkUI_NumberValue value[] = {{.i32 = blendMode}, {.i32 = 1}};
        ArkUI_AttributeItem item = {.value = value, .size = sizeof(value) / sizeof(ArkUI_NumberValue)};
        maybeThrow(NativeNodeApi::getInstance()->setAttribute(node, NODE_BLEND_MODE, &item));
    }
} // namespace rnoh