'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default  function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className={'flex items-center gap-4'}>
                {session.user?.image && <img src={session.user?.image} alt="photo" className={'w-15 h-15 rounded-full'}/>}
                <div className={'flex flex-col text-white font-semibold items-start gap-2'}>

                <p>{session.user?.name}</p>
                <button className={'cursor-pointer p-2 px-4 bg-blue-600 rounded-xl'} onClick={() => signOut()}>Sign out</button>
                </div>
            </div>
        );
    }

    return (
        <button className={'cursor-pointer p-2 px-4 bg-blue-600 rounded-xl text-white'} onClick={() => signIn('google')}>Sign in</button>
    );
}
