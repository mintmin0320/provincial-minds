import { create } from "zustand"

interface GachaState {
  gachaMessage: string | null
  setGachaMessage: (message: string) => void
}

export const useGachaStore = create<GachaState>((set) => ({
  gachaMessage: null,
  setGachaMessage: (message) => set({ gachaMessage: message }),
}))
