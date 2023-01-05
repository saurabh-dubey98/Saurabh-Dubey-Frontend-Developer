import Header from '../components/Header'
import Banner from '../components/Banner'
import Search from '../components/Search'
import DataGrid from '../components/DataGrid'

const Home = () => {
    return (
        <div className='max-w-5xl m-auto pb-10'>
            <Header />
            <Banner />
            <Search />
            <DataGrid />
        </div>
    )
}

export default Home
