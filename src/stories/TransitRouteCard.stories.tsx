import TransitRouteCard from "@/features/provincial-route-search/ui/TransitRouteCard"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "card/TransitRouteCard",
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
    transitRoute: {
      isBest: {
        control: "boolean",
        description: "최적 경로 여부",
      },
      transportationList: {
        control: "select",
        options: ["지하철", "시내버스", "시외버스"],
        description: "교통 수단 목록",
      },

      transferCount: {
        action: "number",
        description: "교통 수단 환승 횟수",
      },
      travelCost: {
        action: "number",
        description: "교통 수단 이용 비용",
      },
      travelHours: {
        action: "text",
        description: "교통 수단 이용 시간 (시)",
      },
      travelMinutes: {
        action: "text",
        description: "교통 수단 이용 시간 (분)",
      },
    },
  },
} satisfies Meta<typeof TransitRouteCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    transitRoute: {
      isBest: false,
      transportationList: ["지하철"],
      transferCount: 2,
      travelCost: 53200,
      travelHours: "3",
      travelMinutes: "40",
    },
    isSelected: false,
  },
}

export const BestRoute: Story = {
  args: {
    transitRoute: {
      isBest: true,
      transportationList: ["지하철"],
      transferCount: 2,
      travelCost: 53200,
      travelHours: "3",
      travelMinutes: "40",
    },
    isSelected: false,
  },
}

export const SelectRoute: Story = {
  args: {
    transitRoute: {
      isBest: false,
      transportationList: ["지하철"],
      transferCount: 2,
      travelCost: 53200,
      travelHours: "3",
      travelMinutes: "40",
    },
    isSelected: true,
  },
}

export const AllRoute: Story = {
  args: {
    transitRoute: {
      isBest: false,
      transportationList: ["지하철", "시내버스", "시외버스"],
      transferCount: 2,
      travelCost: 53200,
      travelHours: "3",
      travelMinutes: "40",
    },
    isSelected: false,
  },
}
