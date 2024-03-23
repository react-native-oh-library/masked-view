#ifndef HARMONY_MASKEDCOMPONENTINSTANCE_H
#define HARMONY_MASKEDCOMPONENTINSTANCE_H

#include "RNOH/CppComponentInstance.h"
#include "RNOH/arkui/StackNode.h"
#include "ShadowNodes.h"

namespace rnoh {
    class MaskedComponentInstance : public CppComponentInstance<facebook::react::MaskedViewShadowNode> {
    private:
        StackNode m_stackNode;

    public:
        MaskedComponentInstance(Context context);

        void onChildInserted(ComponentInstance::Shared const &childComponentInstance, std::size_t index) override;

        void onChildRemoved(ComponentInstance::Shared const &childComponentInstance) override;
    
        StackNode &getLocalRootArkUINode() override;
    };
} // namespace rnoh

#endif // HARMONY_MASKEDCOMPONENTINSTANCE_H
