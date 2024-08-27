import MessageChoiceSection from "@/features/provincial-message-choice/ui/MessageChoiceSection"
import FlowTitle from "@/shared/@common/ui/FlowTitle"
import Layout from "@/shared/@common/ui/Layout"

const MessageChoicePage = () => {
  return (
    <Layout className="h-dvh px-[16px] pt-[28px]">
      <FlowTitle>
        서울러 친구에게 전달하기 전, <br />
        <span className="text-blue01">지방러 한마디</span>를 남겨볼까요?
      </FlowTitle>
      <MessageChoiceSection />
    </Layout>
  )
}

export default MessageChoicePage
