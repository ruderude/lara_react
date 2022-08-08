import React from "react";
import { createRoot } from 'react-dom/client';
import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";

import "../js/bootstrap";
import "../css/app.css";
import "../css/test.scss";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      },
      mutations: {
        retry: false
      }
    }
  })
  return (<>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </>);
};

const container = document.getElementById('app') as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);