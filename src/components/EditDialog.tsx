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
import { EditIcon, Sprout } from "lucide-react";
import { Combobox } from "./ui/combo-box";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";
import ImageUpload from "./ImageUpload";
import { editPlant, getPlantById } from "@/actions/plant.aciton";

type Plant = NonNullable<Awaited<ReturnType<typeof getPlantById>>>;

interface EditDialogProps {
  plant: Plant;
}

export default function EditDialog({ plant }: EditDialogProps) {
  const [formData, setFormData] = useState(() => ({
    name: plant.name.trim(),
    description: (plant.description || "").trim(),
    stock: plant.stock,
    price: plant.price,
    category: plant.category.trim(),
    userId: plant.userId.trim(),
    imageUrl: plant.imageUrl || "",
  }));

  const handleChange = (field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newPlant = await editPlant(plant.id, formData);
      console.log("plant edited: ", newPlant);
      toast.success("Planta editada com sucesso");
    } catch (error) {
      console.error("erro ao editar planta", error);
      toast.error("Falha ao editar planta");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="secondary"
          className="ml-auto flex items-center gap-2"
          asChild
        >
          <span>
            <EditIcon className="w-4 h-4" />
            Editar Planta
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Editar Planta</AlertDialogTitle>
          <AlertDialogDescription>
            Preencha o formulário abaixo para editar os dados da planta.
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
