import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "../../../components/ui/badge";
import { getPlantById } from "@/actions/plant.aciton";


type Plant = Awaited<ReturnType<typeof getPlantById>>;

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {

    
  if (!plant) {
    return <div>Dados da planta não disponíveis.</div>;
  }


  return (
    <Card className="max-w">
      <div className="flex flex-row">
        <div className="basis-2/4">
          <CardHeader>
          {plant.imageUrl && (
            <div className="rounded-lg overflow-hidden">
              <img
                src={plant.imageUrl}
                alt="Imagem da planta"
                className="w-full h-auto object-cover"
              />
            </div>
          )}

           
          </CardHeader>
        </div>
        <div className="basis-2/4 flex flex-col justify-between">
          <CardContent className="mt-8 space-y-3">
            <CardTitle className="text-5xl font-bold">{plant.name}</CardTitle>
            <CardTitle className="text-3xl font-bold">R$ {plant.price}</CardTitle>
            <Badge>{plant.category}</Badge>
            <CardDescription>Estoque: {plant.stock}</CardDescription>
            <CardDescription className="text-white">
              {plant.description}
            </CardDescription>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}