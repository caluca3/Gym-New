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
} from "@tremor/react";
import { useState } from "react";
import { CardTuriscController } from "./components";


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
