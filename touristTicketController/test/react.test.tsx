import { describe, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

import { CardTuriscController } from "../src/components";

describe("CardTest", (): void => {
  afterEach(cleanup);

  it("renderizar el elemento", (): void => {
    render(
      <CardTuriscController title="titulo" acount={0} gender="masculino" />
    );
  });

  
});
