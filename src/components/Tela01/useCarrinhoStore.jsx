import { create } from "zustand";

export const useCarrihoStore = create((set) => ({
  quantidade: 0,
  produtos: [],

  adicionarProduto: (nomeDoProduto) =>
    set((estadoAtual) => ({
      quantidade: estadoAtual.quantidade + 1,
      produtos: [...estadoAtual.produtos, nomeDoProduto],
    })),

  limparCarrinho: () => set({ quantidade: 0, produtos: [] }),
}));
