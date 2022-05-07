import { useState } from "react";

import { CloseButton } from "../CloseButton";
import thought from "../../assets/thought.svg";
import idea from "../../assets/idea.svg";
import bug from "../../assets/bug.svg";
import { FeedbackTypeSteps } from "../Steps/FeedbackTypeSteps";
import { FeedbackContentSteps } from "../Steps/FeedbackContentSteps";

export const feedbackTypes = {
  BUG: {
    title: "Problem",
    image: {
      source: bug,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: idea,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thought,
      alt: "Imagem de balão de pensamento",
    },
  },
};

/*
  keyof =  Pega apenas a chave de um objeto
  typeof = Retorna chave e valor de um objeto inteiro quando esta criando uma tipagem
  keyof typeof <OBJETO> Declara um "TIPAGEM" contento apenas as chaves do objeto

  ex:
    old:
      type FeedBackType = ["chave-01"| "chave-02" | chave-03] // ["chave-01"| "chave-02" | chave-03]
    new:
      type FeedBackType = keyof typeof <Objeto> // ["chave-01"| "chave-02" | chave-03]
*/
export type FeedBackType = keyof typeof feedbackTypes;

function WidgetForm() {
  const [feedbackType, setfeedbackType] = useState<FeedBackType | null>(null);

  function handleRestartFeedBack() {
    setfeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeSteps onFeedBackTypeChanged={setfeedbackType} />
      ) : (
        <FeedbackContentSteps
          feedBackType={feedbackType}
          onFeedbackRestart={handleRestartFeedBack}
        />
      )}
      <footer className="text-xs text-neutral-400 mt-4">
        Feito com amor por{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/Jeh212"
        >
          Jean Carlos
        </a>
      </footer>
    </div>
  );
}

export { WidgetForm };
