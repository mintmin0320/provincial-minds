import type { Meta, StoryObj } from "@storybook/react"

import GachaModal from "@/shared/@common/ui/GachaModal"

const meta = {
  title: "common/GachaModal",
  component: GachaModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "375px",
          height: "400px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      control: "select",
      options: ["mint", "yellow", "orange"],
      description: "랜덤 캡슐 색상",
    },
    isSendMessage: {
      control: "boolean",
      description: "지방러 친구의 한마디/가챠(캡슐) 메시지 여부",
    },
    customMessage: {
      control: "text",
      description: "지방러가 등록한 한마디 메시지",
    },
    gachaMessage: {
      control: "text",
      description: "지방러가 등록한 가챠(캡슐) 메시지",
    },
  },
} satisfies Meta<typeof GachaModal>

export default meta

type Story = StoryObj<typeof meta>

export const SendMessage: Story = {
  args: {
    theme: "",
    isSendMessage: true,
    customMessage: "내가 서울까지 올라가는데 얼마나 힘든지 알아줘.",
    gachaMessage: "",
  },
}

export const YellowGachaMessage: Story = {
  args: {
    theme: "yellow",
    isSendMessage: false,
    customMessage: "",
    gachaMessage: "카페 음료 사주기",
  },
}

export const OrangeGachaMessage: Story = {
  args: {
    theme: "orange",
    isSendMessage: false,
    customMessage: "",
    gachaMessage: "영화 티켓 반띵",
  },
}

export const MintGachaMessage: Story = {
  args: {
    theme: "mint",
    isSendMessage: false,
    customMessage: "",
    gachaMessage: "탕후루 사주기",
  },
}
