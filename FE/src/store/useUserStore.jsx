import { create } from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'
import { apiDetailUser } from '~/apis/user'
export const useUserStore = create(persist(
    (set ,get) => ({
        token: null,
        current: null,
        setToken: (token) => set((state) => ({token})),
        getDetail: async() => {
            const response = await apiDetailUser() 
            if(response.success) return set(() => ({
                current: response.data
            }))
        }
    }),
    {
        name: 'token',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter((el) => el[0] === 'token' || el[0] === 'login'),
        ),
    }
))