import React, {useEffect, useState} from 'react';



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
            {anecdotes.id}
            {anecdotes.value}

        </>
    );
};

export default Jokes;