import type { Meta, StoryObj } from "@storybook/react"

import SelectedTransitRoute from "@/features/provincial-route-result/ui/SelectedTransitRoute"

const meta = {
  title: "transitRouteResult/SelectedTransitRoute",
  component: SelectedTransitRoute,
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
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    destination: {
      control: "text",
      description: "목적지",
    },
    transitRoute: {
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
} satisfies Meta<typeof SelectedTransitRoute>

export default meta

type Story = StoryObj<typeof meta>

export const Subway: Story = {
  args: {
    transitRoute: {
      isBest: false,
      transportationList: ["지하철"],
      transferCount: 2,
      travelCost: 53200,
      travelHours: "3",
      travelMinutes: "40",
    },
    destination: "부산광역시",
  },
}

export const CityBus: Story = {
  args: {
    transitRoute: {
      isBest: true,
      transportationList: ["시내버스"],
      transferCount: 2,
      travelCost: 53200,
      travelHours: "3",
      travelMinutes: "40",
    },
    destination: "부산광역시",
  },
}

export const IntercityBus: Story = {
  args: {
    transitRoute: {
      isBest: false,
      transportationList: ["시외버스"],
      transferCount: 2,
      travelCost: 53200,
      travelHours: "3",
      travelMinutes: "40",
    },
    destination: "부산광역시",
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
    destination: "부산광역시",
  },
}
