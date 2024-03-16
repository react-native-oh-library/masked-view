#include "MaskedComponentInstance.h"

namespace rnoh {
    MaskedComponentInstance::MaskedComponentInstance(Context context)
        : CppComponentInstance(std::move(context)) {}

    void MaskedComponentInstance::insertChild(ComponentInstance::Shared childComponentInstance, std::size_t index) {
        m_stackNode.insertChild(childComponentInstance->getLocalRootArkUINode(), index);
    }

    void MaskedComponentInstance::removeChild(ComponentInstance::Shared childComponentInstance) {
        m_stackNode.removeChild(childComponentInstance->getLocalRootArkUINode());
    };

    StackNode &MaskedComponentInstance::getLocalRootArkUINode() { return m_stackNode; }
} // namespace rnoh