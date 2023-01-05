import { Oval } from 'react-loader-spinner'

const Loading = () => {
    return <div className='flex w-full justify-center mt-8'>
        <Oval
            height={50}
            width={50}
            color="#2e69c0"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#82b9a7"
            strokeWidth={4}
            strokeWidthSecondary={4}

        />
    </div>
}

const RenderIf = ({ children, isLoading }) => {
    if (isLoading) return <Loading />
    return children
}

export default RenderIf
