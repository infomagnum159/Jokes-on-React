import React, {useEffect, useState} from 'react';
import Joke from "../../Components/Joke/Joke";


const url = 'https://api.chucknorris.io/jokes/random';
const Jokes = () => {
    const [anecdotes, setAnecdotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            if(response.ok) {
                const joke = await response.json();
                setAnecdotes(joke);
            }
        };

        fetchData().catch(e => console.error(e))
    }, []);

    return (
        <>
            <Joke
            key={anecdotes.id}
            text={anecdotes.value}
            />

        </>
    );
};

export default Jokes;