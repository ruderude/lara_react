import React from "react";
import { createRoot } from 'react-dom/client';
import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";


import "../js/bootstrap";
import "../css/app.css";
import "../css/test.scss";

function App() {
  const queryClient = new QueryClient();
  return (<>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </>);
}

const container = document.getElementById('app') as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);