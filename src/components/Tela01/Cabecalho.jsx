import { useCarrihoStore } from "./useCarrinhoStore";

export default function Cabecalho() {
  const quantidade = useCarrihoStore((state) => state.quantidade);
  
  return (
    <>
      <header>
        <h1>Minha Loja</h1>
        <span>{quantidade} itens</span>
      </header>
    </>
  );
}
