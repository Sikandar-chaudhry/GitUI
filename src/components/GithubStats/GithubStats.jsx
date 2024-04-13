import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function GithubStats(){

    const {github_username} = useParams();
    const [data, setData] = useState({});
    const [reposURLs,  setReposURLs] = useState([]);

    const [githubUsername, setGithubUsername] = useState('');
    const navigate = useNavigate();

    const updateGithubUsername = (e) => {
        e.preventDefault();
        setGithubUsername(e.target.value);
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        navigate(`/github_stats/${githubUsername}`, { replace: true });
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch (`https://api.github.com/users/${github_username}`)
                const data = await response.json()
                setData(data);
                const reposDataResponse = await fetch (`https://api.github.com/users/${github_username}/repos`)
                const reposData = await reposDataResponse.json()
                setReposURLs(reposData)
            } catch (error){
                console.error('Error fetching data : ', error);
            }
        }
        fetchData();
    }, [github_username]);
    if (github_username){

        return(
            <>
                <div className=''>
                    {console.log(data)}
                    <div className='flex flex-row max-w-full py-4 lg:px-72 mx-4 px-2  lg:mx-6 md:px-20 justify-between items-center'>
                        <h1 className='text-2xl border-2 rounded-md p-2 font-medium'>{data.name}</h1>
                        <div className=' border-2 rounded-md p-1'>
                            <img src={data.avatar_url}
                                 className='rounded-full w-20'
                            />
                        </div>
                    </div>
                    <hr></hr>
                    <div className='flex flex-col max-w-full py-4  px-2 mx-4 lg:mx-6 md:px-20'>
                        <h1 className='text-2xl text-purple-700 font-semibold mt-4'> Repositories </h1>
                        <div className='flex flex-wrap gap-x-2 gap-y-2' >
                            {reposURLs.map(repo => (
                                <div className='relative flex flex-col shadow-md mt-6 w-96 bg-clip-border rounded-xl border-2' key={repo.id}>
                                    <div className='p-6'>
                                        <h3 className='block font-sans text-xl mb-2 font-semibold tracking-normal text-purple-700
                                    leading-snug  antialiased'>{repo.name ? repo.name : 'No Name'}</h3>
                                        <p className='block font-sans text-base antialiased font-light leading-relaxed text-inherit'>
                                            {repo.description ? repo.description : 'No description available.'}
                                        </p>
                                    </div>

                                    <div className='p-6 pt-0'>
                                        <button className='align-middle select-none font-sans font-bold text-center
                                    uppercase transition-all text-xs py-3 px-6 rounded-lg text-white bg-purple-700
                                    shadow-purple-800/10 hover:shadow-lg hover:shadow-purple-800/20
                                    focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
                                                type='button'>
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else {
        return(
            <>
                <div className='flex justify-center'>
                    <div className='flex items-center flex-col py-72 px-4'>
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

}