import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {

    }, []);

    const signInwithGoogle = () => {
        console.log('signing in coming soon');
    }

    // return [user, setUser];
    return { user, signInwithGoogle }
}

export default useFirebase;