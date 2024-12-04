// chatStore.js
import { create } from "zustand";

const useChatStore = create((set) => ({
  messages: [], // 대화 메시지 배열
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setMessages: (messages) => set({ messages }),
}));

export default useChatStore;
