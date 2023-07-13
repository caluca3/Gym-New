import { Badge, Card, Flex, Icon, Text, Title } from "@tremor/react";
import { UsersIcon } from "./icons/UsersIcon";

export function CardTuriscController({
    title,
    gender,
    acount,
  }: {
    title: string;
    gender: string;
    acount: number;
  }) {
    return (
      <Card className="min-h-28">
        <Flex>
          <Title>
            {title} {gender} <Badge>{acount}</Badge>
          </Title>
          <Icon icon={UsersIcon} />
        </Flex>
        <div>
          <Flex>
            <button>
              <Text className="hidden md:block">Sumar</Text>            
            </button>
            <button>
              <Text className="hidden md:block">Quitar</Text>            
            </button>
          </Flex>
        </div>
      </Card>
    );
  }
  