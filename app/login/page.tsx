import { SubmitHandler } from 'react-hook-form';
import { LoginFormInputsType } from './types';
import { createClient } from '@/utils/supabase/server';
import LoginForm from './form';

const Login = () => {
    const onSubmit: SubmitHandler<LoginFormInputsType> = async (data) => {
        'use server';
        const supabase = createClient();

        const neewData = JSON.parse(
            JSON.stringify({ nickname: data.nickname, password: data.password })
        );

        const { data: response } = await supabase.from('countries').insert(neewData);

        console.log('Добавлен пользователь:', response);
    };

    return <LoginForm create={onSubmit} />;
};

export default Login;
