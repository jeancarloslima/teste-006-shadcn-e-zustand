import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Tela03() {
  return (
    <Card className="w-[350px] m-4">
      <CardHeader>
        <CardTitle>Criar Projeto</CardTitle>
        <CardDescription>
          Implante seu novo projeto em um clique.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p>Aquie dentro poderia ir um formulário enorme, uma imagem, etc</p>
      </CardContent>

      <CardFooter className="flex justify-between">
        <button className="text-red-500">Cancelar</button>
        <button className="bg-black text-white px-4 py-2 rounded">
          Implantar
        </button>
      </CardFooter>
    </Card>
  );
}
