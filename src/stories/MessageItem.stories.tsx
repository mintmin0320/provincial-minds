import type { Meta, StoryObj } from "@storybook/react"

import MessageItem from "@/features/provincial-message-choice/ui/MessageItem"
import { fn } from "@storybook/test"

const meta = {
  title: "provincial/MessageItem",
  component: MessageItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "375px",
          listStyleType: "none",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    message: {
      control: "text",
      description: "한마디 메시지",
    },
    isSelected: {
      control: "boolean",
      description: "한마디 메시지 선택 여부",
    },
    onClick: {
      action: "changed",
      description: "한마디 메시지 선택 변경 이벤트",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof MessageItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: "먼 길 올라가는데, 교통비 n빵 어떰?",
    isSelected: false,
  },
}

export const SelectedMessageItem: Story = {
  args: {
    message: "먼 길 올라가는데, 교통비 n빵 어떰?",
    isSelected: true,
  },
}
