import {
  Badge,
  Card,
  Flex,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
  Color,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Icon,
} from "@tremor/react";
import { useState } from "react";

import { SVGAttributes } from "react";

export function MinusCircleIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}


function UsersIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
}

const colors: { [key: string]: Color } = {
  Completado: "gray",
  Pendiente: "rose",
  Proceso: "emerald",
};

const tasks = [
  {
    state: "Pendiente",
    id: 1,
    tipo: "adulto",
    generos: ["m", "f"],
    observacion: "inclucion",
  },
  {
    state: "Pendiente",
    id: 2,
    tipo: "adolecente",
    generos: ["m", "f"],
    observacion: "inclucion",
  },
  {
    state: "Pendiente",
    id: 3,
    tipo: "adulto mayor",
    generos: ["m", "f"],
    observacion: "inclucion",
  },
  {
    state: "Pendiente",
    id: 4,
    tipo: "diversidad funcionar",
    generos: ["m", "f"],
    observacion: "inclucion",
  },
  {
    state: "Pendiente",
    id: 5,
    tipo: "visitante internacionales",
    generos: ["m", "f"],
    observacion: "inclucion",
  },
];

function CardTuriscController({
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
        </Title>{" "}
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

function App() {
  const [data, setData] = useState([
    { tipo: "Adulto", genero: "Femenino", id: 1, account: 0 },
  ]);

  return (
    <main className="p-6">
      <Title>Control de entradas</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>APP</Tab>
          <Tab>ESTADISTICAS</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              {data.map((item) => (
                <CardTuriscController
                  key={item.id}
                  title={item.tipo}
                  gender={item.genero}
                  acount={item.account}
                />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <Flex justifyContent="start" className="space-x-2">
                  <Title>Pendientes</Title>
                  <Badge color="gray">
                    {tasks.filter((task) => task.state === "Pendiente").length}
                  </Badge>
                </Flex>
                <Text className="mt-2">Tareas por terminar</Text>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Estado</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>{task.id}</TableCell>
                        <TableCell>{task.tipo}</TableCell>
                        <TableCell>{task.observacion}</TableCell>
                        <TableCell>
                          <Badge color={colors[task.state]} size="xs">
                            {task.state}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}

export default App;
