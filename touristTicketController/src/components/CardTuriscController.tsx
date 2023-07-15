import {
  Badge,
  Bold,
  Card,
  Flex,
  Icon,
  Subtitle,
  Text,
  Title,
} from "@tremor/react";
import { MinusCircleIcon } from "./icons/MinusCircleIcon";
import { PlusCircleIcon } from "./icons/PlusCircle";

export function CardTuriscController({
  title,
  gender,
  acount,
  handleAddButton,
  handleDecreaseButton,
}: {
  title: string;
  gender: string;
  acount: number;
  handleAddButton: () => void;
  handleDecreaseButton: () => void;
}) {
  return (
    <Card className="min-h-28 divide-y p-0 flex flex-col justify-between">
      <Flex className="p-3 md:p-6 flex-col md:flex-row">
        <Title className="inline-block">
          {title}
        </Title>
        <Subtitle>{gender}</Subtitle>
        <Badge className="inline-block ml-1">Cantidad {acount}</Badge>
      </Flex>
      <div>
        <Flex className="divide-x">
          <div className="flex-1 w-0 flex ">
            <button
              onClick={handleAddButton}
              className="p-1 flex-1 rounded-bl-lg border border-transparent text-center inline-flex justify-center items-center w-0"
            >
              <Icon icon={PlusCircleIcon} />
              <Text>
                <Bold className="hidden md:block">Agregar</Bold>
              </Text>
            </button>
          </div>
          <div className="flex-1 w-0 flex">
            <button
              onClick={handleDecreaseButton}
              className="p-1 md:p-2 flex-1 rounded-br-lg border border-transparent text-center inline-flex justify-center items-center w-0"
            >
              <Icon icon={MinusCircleIcon} />
              <Text>
                <Bold className="hidden md:block">Quitar</Bold>
              </Text>
            </button>
          </div>
        </Flex>
      </div>
    </Card>
  );
}
