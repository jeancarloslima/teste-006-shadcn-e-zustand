import { useCarrihoStore } from "./useCarrinhoStore";

export default function Vitrine() {
    const adicionarProduto = useCarrihoStore((state) => state.adicionarProduto);

    return (
        <div>
            <h2>Tênis React Pro</h2>
            <button onClick={() => adicionarProduto("Tênis React Pro")}>
                Comprar
            </button>
        </div>
    )
}