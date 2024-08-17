export interface IUserProps {
  id: number
  origin: string
  destination: string
  created_at: string | null
  gachaMessage?: string | null
  userMessage?: string| null
}