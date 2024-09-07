import { create } from 'zustand'

interface TransitState {
  selectedIndex: number | null
  setSelectedIndex: (index: number | null) => void
}

export const useTransitStore = create<TransitState>((set) => ({
  selectedIndex: null,
  setSelectedIndex: (index) => set({ selectedIndex: index }),
}))
