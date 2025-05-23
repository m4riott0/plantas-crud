"use client";

import { deletePlant } from "@/actions/plant.aciton";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

interface DeleteDialogProps {
  plant: {
    id: string;
  };
}

export default function DeleteDialog({ plant }: DeleteDialogProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await deletePlant(plant.id);

      toast.success("Planta excluída com sucesso");
    } catch (error) {
      console.error("Erro ao excluir planta:", error);
      toast.error("Falha ao excluir planta");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          className="ml-auto flex items-center gap-2"
          asChild
        >
          <span>
            <Trash2 className="w-4 h-4" />
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza absoluta?</AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            Esta ação não pode ser desfeita. Isso irá excluir permanentemente a
            planta dos nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit}>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction type="submit">
              Confirmar Exclusão
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
