import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile} from "firebase/auth";
// initializeAuthentication();
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to database 
                userSave(email, name,'POST');
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                }).catch((error) => {
                    
                });
                history.replace('/');
               
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(()=> setIsLoading(false));
    }
    const loginUser = (email, password, location,history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination);
                // const user = userCredential.user;
                setError('');

                
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
        
    }
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                userSave(user.email,user.displayName,'PUT');
                setError('');
                const destination = location?.state?.from || '/'
                history.replace(destination);
            }).catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    // 
    useEffect(() => {
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
               
           }
           setIsLoading(false);
        });
        return () => unsubscribe;
        
    }, [auth])
    

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
           
        }).catch((error) => {
            
        })
            .finally(() => setIsLoading(false));
        
    }
    // send data to server
    const userSave = (email, displayName,method) => {
        const user = { email, displayName };
        fetch('https://pacific-harbor-22675.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type' : 'application/json'
                
            },
            body: JSON.stringify(user)
            
        })
    }
    useEffect(() => {
        fetch(`https://pacific-harbor-22675.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));

    }, [user.email])

    return {
        user,
        admin,
        registerUser,
        logOut,
        loginUser,
        error,
        signInWithGoogle,
        isLoading,
    }

    
}
export default useFirebase;