import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LogInPage from "@/pages/LoginPage";

import "../styles/app.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LogInPage />
    </QueryClientProvider>
  );
}
