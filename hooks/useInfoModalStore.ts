import { create } from 'zustand';

export interface ModalStoreInterface {
    projectId?: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

const useInfoModalStore = create<ModalStoreInterface>((set) => ({
    projectId: undefined,
    isOpen: false,
    openModal: (projectId: string) => set({ isOpen: true, projectId }),
    closeModal: () => set({ isOpen: false, projectId: undefined }),
}));

export default useInfoModalStore;