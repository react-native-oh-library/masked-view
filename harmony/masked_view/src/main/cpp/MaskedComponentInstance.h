#ifndef HARMONY_MASKEDCOMPONENTINSTANCE_H
#define HARMONY_MASKEDCOMPONENTINSTANCE_H

#include "RNOH/CppComponentInstance.h"
#include "RNOH/arkui/StackNode.h"

namespace rnoh {
    class MaskedComponentInstance : public CppComponentInstance {
    private:
        StackNode m_stackNode;

    public:
        MaskedComponentInstance(Context context);

        void insertChild(ComponentInstance::Shared childComponentInstance, std::size_t index) override;

        void removeChild(ComponentInstance::Shared childComponentInstance) override;
    
        StackNode &getLocalRootArkUINode() override;
    };
} // namespace rnoh

#endif // HARMONY_MASKEDCOMPONENTINSTANCE_H
