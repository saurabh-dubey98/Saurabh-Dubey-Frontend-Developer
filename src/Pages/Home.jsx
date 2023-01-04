import Header from '../components/Header'
import Banner from '../components/Banner'
import Search from '../components/Search'
import DataGrid from '../components/DataGrid'
// Context
import { CapsulesProvider } from '../context/capsulesContext'

const Home = () => {
    return (
        <div className='max-w-5xl m-auto'>
            <Header />
            <Banner />
            <CapsulesProvider>
                <Search />
                <DataGrid />
            </CapsulesProvider>
        </div>
    )
}

export default Home
