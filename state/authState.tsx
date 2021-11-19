import * as React from "react";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from "../firebase";

export interface authState {
    userToken: string;
    isLoading: boolean;
    isSignout: boolean;
}

interface SignUp {
    email: string;
    nick: string;
    zipcode: string;
    password: string;
}

export interface actionType {
    type: string;
    token?: any;
}

export const AuthState = React.createContext<any | null>(null);
export const AuthData = React.createContext<any | null>({isLoading: false, userToken: null, isSignout: true});

export const AuthContextProvider = ({ children }: { children: any }) => {
    
    const [theState, setTheState] = React.useState({});

    const [state, dispatch] = React.useReducer(
        // global state about auth state
        (prevState: any, action: { type: any; token?: any }) => {
            switch (action.type) {
                case "RESTORE_TOKEN":
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case "SIGN_IN":
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case "SIGN_OUT":
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
                case "GUEST":
                    return {
                     
                        ...prevState,
                        isSignout: false,
                        userToken: null,
                        isLoading: false
                    };
                case "SIGN_UP":
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: true,
            userToken: null,
        }
    );

    React.useEffect(() => {
        console.log("chaingin")
        setTheState(state);
    },[state])

    const authContext = React.useMemo(
        // usecontext goes back to this
        () => ({
            signIn: async ({
                username,
                password,
            }: {
                username: string;
                password: string;
            }) => {
                try {
                    const auth = getAuth(app);
                    const userCredential = await signInWithEmailAndPassword(
                        auth,
                        username,
                        password
                    );
                    dispatch({
                        type: "SIGN_IN",
                        token: userCredential.user.uid,
                    });
                } catch (e: any) {
                    console.log(e.message);
                }
            },

            signOut: () => dispatch({ type: "SIGN_OUT" }),

            signUp: async (
                email: string,
                password: string,
                nick: string,
                zipcode: string
            ) => {
                try {
                    const auth = getAuth(app);
                    const userCredential = await createUserWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );

                    await setDoc(doc(db, "users", userCredential.user.uid), {
                        uid: userCredential.user.uid,
                        email: email,
                        nick: nick,
                        zipcode: zipcode,
                    });
                    dispatch({
                        type: "SIGN_UP",
                        token: userCredential.user.uid,
                    });
                } catch (e: any) {
                    console.log(e.message);
                }
            },

            asGuest: () => {
                dispatch({ type: "GUEST", token: null });
            },
        }),
        []
    );


    return(
        <AuthState.Provider value= {authContext} >
            <AuthData.Provider value = {theState}>
            {children}
            </AuthData.Provider>
        </AuthState.Provider>
    )


};
