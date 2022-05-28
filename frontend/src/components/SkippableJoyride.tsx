import { useState } from "react";
import type { Props, StoreHelpers, StoreState, CallBackProps } from "react-joyride";
import Joyride from "react-joyride";

type SkippableJoyrideStep = 

export const SkippableJoyride = (props: Props & StoreState) => {
  const [customHelpers, setCustomHelpers] = useState<StoreHelpers | null>(null);
  const getHelpers = (helpers: StoreHelpers) => {
    setCustomHelpers(helpers);
  };
  const callback = (callbackProps: CallBackProps) => {
    console.log(callbackProps)
    if(callbackProps.action == "next" && callbackProps.step.c)
  }
  return <Joyride getHelpers={getHelpers} callback={callback} {...props} />;
};
