import { create } from "zustand"

type TCounterStore = {
    count: number,
    setCount: (value: number) => void,
}

const useCounterStore = create<TCounterStore>((set) => ({
    count: 0,
    setCount: (count) => set({ count })
}))

export default useCounterStore;