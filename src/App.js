
import Home from "./Pages/Home";
// React query providers
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

// Create a client for react query
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// It stops the refetch when switching tabs
			refetchOnWindowFocus: false,
		},
	},
})
function App() {
  return (
    <main className='bg-gray-300 min-h-screen'>
      <QueryClientProvider client={queryClient}>
        <Home />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
}

export default App;
