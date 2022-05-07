import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedBackType, feedbackTypes } from "../WidgetForm";
import { ScreenShotButton } from "../WidgetForm/ScreenShotButton";

interface FeedBackStepProps {
    feedBackType: FeedBackType;
    onFeedbackRestart: () => void;
}

function FeedbackContentSteps({
    feedBackType,
    onFeedbackRestart,
}: FeedBackStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedBackType];
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');


    function handleSubmitFeedBack(event: FormEvent) {
        event.preventDefault()

        console.log({
            screenshot,
            comment
        });


    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestart}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center mb-5 gap-2">
                    <img
                        src={feedbackTypeInfo.image.source}
                        alt={feedbackTypeInfo.image.alt}
                        className="w-6 h-6 "
                    />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form action=" my-4 w-full" onSubmit={handleSubmitFeedBack}>
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100  border-zinc-600 bg-transparent focus:outline-none rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar-thumb-zinc-400 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                ></textarea>

                <footer className="flex mt-2  gap-2">
                    <ScreenShotButton
                        onScreenshotTook={setScreenshot}
                        screenshot={screenshot}
                    />

                    <button
                        type="submit"
                        disabled={comment.length === 0}
                        className=" disabled:opacity-50 disabled:hover:bg-brand-500 transition-colors  p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
                    >
                        <p>Enviar FeedBack</p>
                    </button>
                </footer>
            </form>
        </>
    );
}

export { FeedbackContentSteps };
