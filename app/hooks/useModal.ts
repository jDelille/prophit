import { create } from "zustand";

type ModalStore = {
  modals: Record<string, boolean>; 
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  toggleModal: (id: string) => void;
};

const useModal = create<ModalStore>((set) => ({
  modals: {},
  openModal: (id: string) => set((state) => ({ modals: { ...state.modals, [id]: true } })),
  closeModal: (id: string) => set((state) => ({ modals: { ...state.modals, [id]: false } })),
  toggleModal: (id: string) => set((state) => ({
    modals: {
      ...state.modals,
      [id]: !state.modals[id], 
    },
  })),
}));

export default useModal;