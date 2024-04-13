import {useState} from "react";
import { useNavigate } from 'react-router-dom';


export default function Home(){
    const [githubUsername, setGithubUsername] = useState('');
    const navigate = useNavigate();

    const updateGithubUsername = (e) => {
        e.preventDefault();
        setGithubUsername(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        navigate(`/github_stats/${githubUsername}`, { replace: true });
    }

    return(
        <>
            <div className='flex justify-center'>
                <div className='flex items-center flex-col p-72'>
                    <h1 className='text-4xl text-purple-700 font-semibold'>
                        Github Statistics
                    </h1>
                    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Enter your github username'
                            className='w-96  border-2 rounded-3xl px-4 py-2 pr-4 mx-auto mt-5 text-xl
                            placeholder:text-center hover:border-gray-400 font-normal focus:outline-none focus:border- focus:border-gray-800'
                            onChange={updateGithubUsername}
                        />
                        <button className='rounded-lg w-32 text-lg mt-5 bg-green-200 text-purple-700
                        font-medium p-1 hover:border-2 hover:border-gray-400 hover:bg-green-300 duration-300 shadow-lg shadow-purple-300 hover:shadow-sm'
                        type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}