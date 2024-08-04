import type { Meta, StoryObj } from "@storybook/react"

import Capsule from "@/shared/@common/ui/Capsule"

const meta = {
  title: "common/Capsule",
  component: Capsule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "375px",
          display: "flex",
          justifyContent: "center",
          position: "static",
          height: "320px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: "select",
      options: ["mint", "yellow", "orange"],
      description: "캡슐 색상",
    },
    positionStyle: {
      control: "text",
      description: "캡슐 위치",
    },
    iconsSize: {
      control: "number",
      description: "캡슐 아이콘 크기",
    },
    isCreateGacha: {
      control: "boolean",
      description: "가챠 생성/뽑기 여부",
    },
    capsuleText: {
      control: "text",
      description: "가챠 뽑기 시 커스텀(mint) 캡슐 텍스트",
    },
  },
} satisfies Meta<typeof Capsule>

export default meta

type Story = StoryObj<typeof meta>

export const YellowCapsule: Story = {
  args: {
    color: "yellow",
    positionStyle: "absolute left-[22%] top-[6.5%] mo:left-[-3%] mo:top-[6%]",
    iconsSize: 255,
    isCreateGacha: false,
    capsuleText: "",
  },
}

export const OrangeCapsule: Story = {
  args: {
    color: "orange",
    positionStyle: "absolute left-[48.5%] top-[14%] mo:left-[44%] mo:top-[15%]",
    iconsSize: 214,
    isCreateGacha: false,
    capsuleText: "",
  },
}

export const CreateMintCapsule: Story = {
  args: {
    color: "mint",
    positionStyle:
      "absolute left-[28%] top-[33.5%] mo:left-[4%] mo:top-[33.3%]",
    iconsSize: 288,
    isCreateGacha: true,
    capsuleText: "",
  },
}

export const DrawMintCapsule: Story = {
  args: {
    color: "mint",
    positionStyle:
      "absolute left-[28%] top-[33.5%] mo:left-[4%] mo:top-[33.3%]",
    iconsSize: 288,
    isCreateGacha: false,
    capsuleText: "탕후루 사줘",
  },
}
