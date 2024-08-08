import type { Meta, StoryObj } from "@storybook/react"

import TransitRouteItem from "@/features/provincial-route-result/ui/TransitRouteItem"

const meta = {
  title: "provincial/TransitRouteItem",
  component: TransitRouteItem,
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
    transportationList: {
      control: "select",
      options: [
        "지하철",
        "시내버스",
        "시외버스",
        "항공",
        "기타",
        "열차",
        "고속버스",
      ],
      description: "교통 수단 목록",
    },
    totalTime: {
      action: "number",
      description: "이동 시간",
    },
    payment: {
      action: "number",
      description: "교통 수단 이용 비용",
    },
  },
} satisfies Meta<typeof TransitRouteItem>

export default meta

type Story = StoryObj<typeof meta>

export const Subway: Story = {
  args: {
    transportationList: ["지하철"],
    payment: 53200,
    totalTime: 90,
    destination: "신도림역",
  },
}

export const CityBus: Story = {
  args: {
    transportationList: ["시내버스"],
    payment: 13200,
    totalTime: 190,
    destination: "구로역",
  },
}

export const IntercityBus: Story = {
  args: {
    transportationList: ["시외버스"],
    payment: 3200,
    totalTime: 30,
    destination: "영등포역",
  },
}

export const AllRoute: Story = {
  args: {
    transportationList: ["지하철", "시내버스", "시외버스"],
    payment: 3200,
    totalTime: 190,
    destination: "여의도역",
  },
}
