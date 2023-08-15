import Login from './components/login';
import Profile from './components/profile';

export default function Home() {
  return (
    <div className='bg-zinc-800 h-screen text-white flex flex-col items-center pt-40 gap-3'>
      <Login />
      <Profile />
    </div>
  );
}
