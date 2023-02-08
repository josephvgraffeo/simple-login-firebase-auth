import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Input } from "antd";

const firebaseConfig = {
    apiKey: "AIzaSyACOm5pA3Kg01qNGpQsADTCxhyJskO1hS8",
    authDomain: "simple-login-jg.firebaseapp.com",
    projectId: "simple-login-jg",
    storageBucket: "simple-login-jg.appspot.com",
    messagingSenderId: "611340230380",
    appId: "1:611340230380:web:30710b1faa004b51fd0fc9"
};

export default function Signup({setUser, setIsUser}) {
    const handleSubmit = async ({email, password}) => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const _user = await createUserWithEmailAndPassword(auth, email, password)
            .catch(alert)
        console.log(_user);
        setUser(_user.user);
    };

    return (
        <section>
            <h1>Sign Up</h1>
            <Form onFinish={handleSubmit} labelCol={{span:8}} wrapperCol={{span:16}}>
                <Form.Item label="Email:" name="email">
                    <Input type="email" placeholder="Email"/>
                </Form.Item>
                <Form.Item label="Password:" name="password">
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Sign Up</Button>
                </Form.Item>
            </Form>
            <p>Already have an account?<Button onClick={() => setIsUser(true)}>Log In</Button></p>
        </section>
    )
};