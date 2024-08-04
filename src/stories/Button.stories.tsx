import type { Meta, StoryObj } from "@storybook/react"

import Button from "@/shared/ui/Button"

const meta = {
  title: "common/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "375px",
          position: "static",
          height: "120px",
          display: "flex",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      control: "select",
      options: ["blue", "mint", "gradient"],
      description: "버튼 색상",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: false,
    },
    children: {
      control: "text",
      description: "버튼 내용",
      defaultValue: "Button",
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Disable: Story = {
  args: {
    theme: "blue",
    disabled: true,
    children: "Button",
  },
}

export const Blue: Story = {
  args: {
    theme: "blue",
    disabled: false,
    children: "Button",
  },
}

export const Mint: Story = {
  args: {
    theme: "mint",
    disabled: false,
    children: "Button",
  },
}

export const Gradient: Story = {
  args: {
    theme: "gradient",
    disabled: false,
    children: "Button",
  },
}
