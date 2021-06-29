import React, {createContext, useState} from "react";

export const UserContext = createContext(true);
export const UserProvider = props => {
	const [data, setData] = useState([]);
	return (
		<UserContext.Provider value={{userData: [data, setData]}}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;