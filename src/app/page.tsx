import { ArrowRight, Copy } from "lucide-react";

import { Button } from "./components/button";
import { ButtonIcon } from "./components/button-icon";
import { Input } from "./components/input";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>
      <ButtonIcon>
        <Copy />
      </ButtonIcon>

      <div>
        <Input type="email" placeholder="Digite seu email válido" />
        <Input type="email" placeholder="Digite seu email válido" error />
      </div>
    </main>
  );
}
