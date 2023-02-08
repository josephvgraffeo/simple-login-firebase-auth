import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Form, Button, Input } from "antd";

const firebaseConfig = {
    apiKey: "AIzaSyACOm5pA3Kg01qNGpQsADTCxhyJskO1hS8",
    authDomain: "simple-login-jg.firebaseapp.com",
    projectId: "simple-login-jg",
    storageBucket: "simple-login-jg.appspot.com",
    messagingSenderId: "611340230380",
    appId: "1:611340230380:web:30710b1faa004b51fd0fc9"
};

export default function Login({setUser, setIsUser}) {
    const loginWithGoogle = async () => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        const _user = await signInWithPopup(auth, provider)
            .catch(alert)
        console.log(_user);
        setUser(_user.user);
    };

    const handleSubmit = async ({email, password}) => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const _user = await signInWithEmailAndPassword(auth, email, password)
            .catch(alert)
        console.log(_user);
        setUser(_user.user);
    };

    return (
        <section>
            <h1>Login</h1>
            <Form onFinish={handleSubmit} labelCol={{span:8}} wrapperCol={{span:16}}>
                <Form.Item label="Email:" name="email">
                    <Input type="email" placeholder="Email"/>
                </Form.Item>
                <Form.Item label="Password:" name="password">
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
            <Button onClick={loginWithGoogle}>Login with Google Account</Button>
            <p>Not a user? <Button onClick={() => setIsUser(false)}>Sign Up!</Button></p>
        </section>
    )
};