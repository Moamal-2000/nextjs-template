"use client";

import { AxeReporter } from "@/components/Shared/Logic/AxeReporter";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
      <AxeReporter />
    </Provider>
  );
};

export default Providers;
