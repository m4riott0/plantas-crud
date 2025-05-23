import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";
import { Combobox } from "./ui/combo-box";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import ImageUpload from "./ImageUpload";
import { toast } from "react-hot-toast";
import { createPlant } from "@/actions/plant.aciton";

export default function CreateDialog() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stock: 1,
    price: 1,
    category: "",
    userId: "",
    imageUrl: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newPlant = await createPlant(formData);
      console.log("plant created: ", newPlant);
      toast.success("Plant created successfully");
    } catch (error) {
      console.error("error creating plant", error);
      toast.error("Failed to create plant");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="default"
          className="ml-auto font-bold flex items-center gap-2"
          asChild
        >
          <span>
            <Sprout className="w-4 h-4" />
            Adicionar
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Adicionar Planta</AlertDialogTitle>
          <AlertDialogDescription>
            Preencha o formulário abaixo para adicionar uma nova planta ao seu
            inventário.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite o nome"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="category">Categoria</Label>
              <Combobox
                value={formData.category}
                onChange={(val) => handleChange("category", val)}
              />
            </div>
          </div>
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            placeholder="Digite a descrição aqui."
            rows={5}
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="stock">Estoque</Label>
              <Input
                id="stock"
                type="number"
                placeholder="Quantidade em estoque"
                value={formData.stock}
                onChange={(e) => handleChange("stock", Number(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                type="number"
                placeholder="Digite o preço"
                value={formData.price}
                onChange={(e) => handleChange("price", Number(e.target.value))}
              />
            </div>
          </div>

          {/*Upload de Imagem*/}
          <div className="py-5">
            <ImageUpload
              endpoint="postImage"
              value={formData.imageUrl}
              onChange={(url) => {
                handleChange("imageUrl", url);
              }}
            />
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction type="submit">Salvar</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
