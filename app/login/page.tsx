import { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
    title: 'mleko/login',
    description: 'страница авторизации/регистрации'
};

const Login = () => {
    return <LoginForm />;
};

export default Login;
