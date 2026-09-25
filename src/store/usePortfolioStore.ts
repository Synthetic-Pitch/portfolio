import { create } from 'zustand'

type ThemeMode = 'light' | 'dark'

interface PortfolioState {
  name: string
  title: string
  theme: ThemeMode
  toggleTheme: () => void
  setName: (name: string) => void
  setTitle: (title: string) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  name: 'Reymark',
  title: 'Frontend Developer',
  theme: 'dark',
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark',
    })),
  setName: (name) => set({ name }),
  setTitle: (title) => set({ title }),
}))
