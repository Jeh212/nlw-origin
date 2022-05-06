import { CloseButton } from "../CloseButton";
import { FeedBackType, feedbackTypes } from "../WidgetForm";

interface FeedBackTypeStepProps {
  onFeedBackTypeChanged: (type: FeedBackType) => void;
}

function FeedbackTypeSteps({ onFeedBackTypeChanged }: FeedBackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixa seu feedback!</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, { image, title }]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-r-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500    focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedBackTypeChanged(key as FeedBackType)}
            >
              <img src={image.source} alt={image.alt} />
              <span>{title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

export { FeedbackTypeSteps };

