import TransitRouteCard from "@/features/transit-route-choice/ui/TransitRouteCard"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "provincial/TransitRouteCard",
  component: TransitRouteCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "375px", listStyleType: "none" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isSelected: {
      control: "boolean",
      description: "교통 수단 선택 여부",
    },

    bestRoute: {
      control: "boolean",
      description: "최적 경로 여부",
    },
    pathType: {
      control: "select",
      options: [1, 2, 3, 11, 12, 13, 20, 21],
      description: "교통 수단 목록",
    },
    totalTime: {
      control: "number",
      description: "이동 시간",
    },
    payment: {
      action: "number",
      description: "교통 수단 이용 비용",
    },
    transitCount: {
      action: "number",
      description: "도시간 환승 횟수",
    },
  },
} satisfies Meta<typeof TransitRouteCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 1,
    bestRoute: false,
    pathType: 1,
    transitCount: 5,
    payment: 53200,
    totalTime: 60,
    isSelected: false,
  },
}

export const BestRoute: Story = {
  args: {
    id: 1,
    bestRoute: true,
    pathType: 2,
    transitCount: 1,
    payment: 13200,
    totalTime: 90,
    isSelected: false,
  },
}

export const SelectRoute: Story = {
  args: {
    id: 1,
    bestRoute: true,
    pathType: 2,
    transitCount: 4,
    payment: 13200,
    totalTime: 90,
    isSelected: true,
  },
}

export const AllRoute: Story = {
  args: {
    id: 1,
    bestRoute: true,
    pathType: 3,
    transitCount: 3,
    payment: 13200,
    totalTime: 90,
    isSelected: false,
  },
}

export const BetweenCitiesRoute: Story = {
  args: {
    id: 1,
    bestRoute: false,
    pathType: 13,
    transitCount: 1,
    payment: 132000,
    totalTime: 40,
    isSelected: false,
  },
}
