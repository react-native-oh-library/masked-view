#pragma once

#include "RNOH/arkui/ArkUINode.h"
#include "RNOH/arkui/StackNode.h"

namespace rnoh {

    class MaskedViewStackNode : public ArkUINode {
    public:
        MaskedViewStackNode();

        void insertChild(ArkUINode &child, std::size_t index);
        void removeChild(ArkUINode &child);
        void setBlendMode(int32_t blendMode, ArkUI_NodeHandle node);
    };
} // namespace rnoh