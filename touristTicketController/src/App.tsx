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
  Button,
} from "@tremor/react";
import { CardTouristTicketController } from "./components";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

enum Action {
  "Add" = "add",
  "Decrease" = "decrease",
}

enum AgeStagePerson {
  Child = "Niño",
  Teen = "Adolocente",
  Adult = "Adulto",
  Foreign = "Extranjero",
  Diversity = "Diversidad",
  OlderAdult = "Adulto Mayor",
}

enum GenderPerson {
  Male = "Masculino",
  Female = "Femenino",
}

type PersonType = {
  gender: GenderPerson;
  ageStage: AgeStagePerson;
};

interface Tour {
  id: number;
  createAt?: Date;
  persons: { info: PersonType; acount: number }[];
}

interface TouristState {
  tours: Tour[];
  newTour: Tour;
  changeCount: (position: number, type: Action) => void;
  processTour: () => void;
}

const initialState = {
  id: 1,
  persons: [
    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.Child,
        gender: GenderPerson.Male,
      },
    },
    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.Child,
        gender: GenderPerson.Female,
      },
    },
    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.Teen,
        gender: GenderPerson.Male,
      },
    },
    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.Teen,
        gender: GenderPerson.Female,
      },
    },

    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.Adult,
        gender: GenderPerson.Male,
      },
    },
    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.Adult,
        gender: GenderPerson.Female,
      },
    },

    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.OlderAdult,
        gender: GenderPerson.Male,
      },
    },
    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.OlderAdult,
        gender: GenderPerson.Female,
      },
    },
    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.Foreign,
        gender: GenderPerson.Male,
      },
    },
    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.Foreign,
        gender: GenderPerson.Female,
      },
    },

    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.Diversity,
        gender: GenderPerson.Male,
      },
    },
    {
      acount: 0,
      info: {
        ageStage: AgeStagePerson.Diversity,
        gender: GenderPerson.Female,
      },
    },
  ],
};

const useTouristStore = create<TouristState>()(
  persist(
    (set, get) => ({
      tours: [],
      newTour: initialState,
      changeCount: (position: number, type: Action) => {
        const newTour = get().newTour;

        const persons = newTour.persons.map((item, index) => {
          if (index === position && type === Action.Add) {
            item.acount = item.acount + 1;
          } else if (index === position && type === Action.Decrease) {
            item.acount =
              item.acount === 0 ? (item.acount = 0) : item.acount - 1;
          }
          return item;
        });

        set({
          newTour: {
            ...newTour,
            persons,
          },
        });
      },
      processTour: () => {
        const newTour = get().newTour;

        newTour.createAt = new Date();

        get().tours.push(newTour);

        set(() => ({
          newTour: { id: newTour.id + 1, persons: initialState.persons },
        }));
      },
    }),
    {
      name: "Prueba-7",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

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
    observacion: "inclusion",
  },
  {
    state: "Pendiente",
    id: 2,
    tipo: "adolescente",
    generos: ["m", "f"],
    observacion: "inclusion",
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
    observacion: "inclusion",
  },
  {
    state: "Pendiente",
    id: 5,
    tipo: "visitante internacionales",
    generos: ["m", "f"],
    observacion: "inclusion",
  },
];

function App() {
  const tours = useTouristStore((state: TouristState) => state.tours);
  const newTour = useTouristStore((state: TouristState) => state.newTour);
  const changeCount = useTouristStore(
    (state: TouristState) => state.changeCount
  );

  const process = useTouristStore((state: TouristState) => state.processTour);

  return (
    <main className="p-6 bg-custom-secondary-500 dark:bg-custom-primary-500 h-screen">
      <Title>Control de entradas</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>APP</Tab>
          <Tab>ESTADÍSTICAS</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid
              numItems={2}
              numItemsMd={3}
              numItemsLg={4}
              className="gap-2 mt-6"
            >
              {newTour.persons.map((item, index) => (
                <CardTouristTicketController
                  key={item.info.ageStage + item.info.gender}
                  title={item.info.ageStage}
                  gender={item.info.gender}
                  account={item.acount}
                  handleAddButton={() => changeCount(index, Action.Add)}
                  handleDecreaseButton={() =>
                    changeCount(index, Action.Decrease)
                  }
                />
              ))}
            </Grid>
            <Flex className="mt-2">
              <Button size="xl" onClick={process}>
                Procesar Recorrido
              </Button>
            </Flex>
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
