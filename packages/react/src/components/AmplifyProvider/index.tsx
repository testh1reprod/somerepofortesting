import * as React from "react";
import { AmplifyContext } from "./AmplifyContext";

export function AmplifyProvider({
  children,
  components = undefined,
  theme = undefined,
}) {
  return (
    <AmplifyContext.Provider value={{ components, theme }}>
      <div data-amplify-theme="">{children}</div>
    </AmplifyContext.Provider>
  );
}