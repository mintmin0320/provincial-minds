import LocationSearchField from "@/shared/@common/ui/LocationSearchField"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

const meta = {
  title: "field/LocationSearchField",
  component: LocationSearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "375px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: "select",
      options: ["view", "change"],
      description: "지역 선택 타입 (view or change)",
    },
    routeAddresses: {
      control: "text",
      description: "지역 선택 필드",
      defaultValue: null,
    },
    onLocationSearch: {
      action: "changed",
      description: "지역 필드의 값 변경 이벤트",
    },
    children: {
      control: "text",
      description: "지역 선택자 (지방러, 서울러)",
    },
  },
  args: {
    onLocationSearch: fn(),
  },
} satisfies Meta<typeof LocationSearchField>

export default meta

type Story = StoryObj<typeof meta>

export const ChangeAreaField: Story = {
  args: {
    type: "change",
    routeAddresses: null,
    children: "지방러는 여기서 출발해요",
  },
}

export const InputChangeAreaField: Story = {
  args: {
    type: "change",
    routeAddresses: "부산광역시 금정구 부산대학로 63번길 2",
    children: "지방러는 여기서 출발해요",
  },
}

export const InputViewAreaField: Story = {
  args: {
    type: "view",
    routeAddresses: "부산광역시 금정구 부산대학로 63번길 2",
    children: "지방러는 여기서 출발해요",
  },
}
