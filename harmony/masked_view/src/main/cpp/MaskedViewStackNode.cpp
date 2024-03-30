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
        } else {
            setBlendMode(ARKUI_BLEND_MODE_SRC_IN, child.getArkUINodeHandle());
        }
    }

    void MaskedViewStackNode::removeChild(ArkUINode &child) {
        maybeThrow(NativeNodeApi::getInstance()->removeChild(m_nodeHandle, child.getArkUINodeHandle()));
        setBlendMode(ARKUI_BLEND_MODE_NONE, getArkUINodeHandle());
        setBlendMode(ARKUI_BLEND_MODE_NONE, child.getArkUINodeHandle());
    }

    void MaskedViewStackNode::setBlendMode(int32_t blendMode, ArkUI_NodeHandle node) {
        ArkUI_NumberValue value[] = {{.i32 = blendMode}, {.i32 = 1}};
        ArkUI_AttributeItem item = {.value = value, .size = sizeof(value) / sizeof(ArkUI_NumberValue)};
        maybeThrow(NativeNodeApi::getInstance()->setAttribute(node, NODE_BLEND_MODE, &item));
    }
} // namespace rnoh