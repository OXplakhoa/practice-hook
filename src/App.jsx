import './App.css';
import { useAxios } from './utils/useAxios';


function App() {
    const { loading, data, error } = useAxios({ url: 'https://yts.am/api/v2/list_movies.json' });
    console.log(`Loading: ${loading} - Error: ${error} - Data: ${JSON.stringify(data)}`);

    return (
        <div>
            <h1>Hello</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>} 
        </div>
    );
}

export default App;
