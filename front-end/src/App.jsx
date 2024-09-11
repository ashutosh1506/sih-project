import { Signin, BloodBank, Navbar } from "./Components";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { action as loginAction } from "./Components/Login";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    // errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Navbar />,
      // },
      {
        path: "signup",
        element: <Signin />,
        // action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction(queryClient),
      },
      {
        path: "bloodbank",
        element: <BloodBank />,
        // action: loginAction(queryClient),
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default App;
