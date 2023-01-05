const Chips = ({ text, Icon, green, red, yellow, blue }) => {
    return (
        <div className={`px-3 py-1 rounded-full shadow-sm flex items-center font-medium text-white w-fit capitalize 
            ${green ? 'bg-green-800/80' : ''}
            ${red ? 'bg-red-800/80' : ''}
            ${yellow ? 'bg-yellow-800/80' : ''}
            ${blue ? 'bg-blue-800/80' : ''}
        `}>
            <Icon className='w-4 h-4 mr-2' />{text}
        </div>
    )
}

export default Chips
