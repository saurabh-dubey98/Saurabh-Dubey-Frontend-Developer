import React, { createContext, useState, useContext, useCallback } from "react"
const CapsulesContext = createContext()

const initialData = {
    capsuleType: null
}

export const CapsulesProvider = ({ children }) => {
	const [capsuleTypes, setCapsuleTypes] = useState(initialData.capsuleType)
    

	return (
		<CapsulesContext.Provider
			value={{ capsuleTypes, setCapsuleTypes }}
		>
			{children}
		</CapsulesContext.Provider>
	)
}

export const useCapsulesContext = () => {
	const { capsuleTypes, setCapsuleTypes } =
		useContext(CapsulesContext)
	return { capsuleTypes, setCapsuleTypes }
}