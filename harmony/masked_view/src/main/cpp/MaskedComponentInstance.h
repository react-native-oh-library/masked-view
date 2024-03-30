#ifndef HARMONY_MASKEDCOMPONENTINSTANCE_H
#define HARMONY_MASKEDCOMPONENTINSTANCE_H

#include "RNOH/CppComponentInstance.h"
#include "ShadowNodes.h"
#include "MaskedViewStackNode.h"

namespace rnoh {
    class MaskedComponentInstance : public CppComponentInstance<facebook::react::MaskedViewShadowNode> {
    private:
        MaskedViewStackNode m_stackNode;

    public:
        MaskedComponentInstance(Context context);

        void onChildInserted(ComponentInstance::Shared const &childComponentInstance, std::size_t index) override;

        void onChildRemoved(ComponentInstance::Shared const &childComponentInstance) override;

        MaskedViewStackNode &getLocalRootArkUINode() override;
    };
} // namespace rnoh

#endif // HARMONY_MASKEDCOMPONENTINSTANCE_H
