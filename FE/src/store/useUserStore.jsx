import { create } from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'
export const useUserStore = create(persist(
    (set ,get) => ({
        token: null,
        current: null,
        login: '1231322'
        
    }),
    {
        name: 'key',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter((el) => el[0] === 'token' || el[0] === 'login'),
        ),
    }
))