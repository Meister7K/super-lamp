import { useState, useRef, useEffect } from "react";
import { Loading } from '../loading/Loading';
import './PokeLook.scss';
import { MyModal } from "../modal/MyModal";

export const PokeLook = () => {
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setInput(e.target.value);
        // setData(null)
    }

    const handleLookup = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${input}/`);

        xhr.onload = () => {
            if (xhr.status === 200) {
                setData(JSON.parse(xhr.responseText));
                setIsLoading(false)
            } else {
                setShowModal(true); // Show the modal on API failure
                setIsLoading(false)
                // throw Error('no data found for this input')
                
            }
        }
        xhr.send();
    }

    const closeModal = () => {
        setShowModal(false);
    }

    // useEffect(()=>{
        


    // })

    return (
        <>
            <h1>Search a Pokemon</h1>
            <MyModal textP="Data not found for this input" textS="Try using the name or #" show={showModal} onHide={closeModal} />
           
            <form>
                <input type='text' id='inputText' placeholder="name or #" value={input} onChange={handleChange} />
                <p>Input: {input}</p>
                <button id='lookupBtn' type="submit" onClick={handleLookup}>lookup</button>

            </form>
            <div className="output-container">
                {isLoading ? <Loading/>: ''}
                {data ?
                    <div>
                        <img className="sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${JSON.stringify(data.id)}.png`} />
                        <h3>#{JSON.stringify(data.id)}</h3>
                        <h3>{JSON.stringify(data.name)}</h3>
                        <div className="stats">
                            <h3>Base Stats</h3>
                            <p>HP: {JSON.stringify(data.stats[0].base_stat)}</p>
                            <p>
                                Attack: {JSON.stringify(data.stats[1].base_stat)}
                            </p>
                            <p>
                                Defense: {JSON.stringify(data.stats[2].base_stat)}
                            </p>
                            <p>
                                Special Attack: {JSON.stringify(data.stats[3].base_stat)}
                            </p>
                            <p>
                                Special defense: {JSON.stringify(data.stats[4].base_stat)}
                            </p>
                            <p>
                                Speed: {JSON.stringify(data.stats[5].base_stat)}
                            </p>
                        </div>


                        {/* {JSON.stringify(data.stats).map((stat, i)=>
                        <>
                        <h4 key={i}>{stat.name}: {stat.base_stat}</h4>
                        </>
    )} */}

                        {/* <button className="statBtn" onClick={handleStats}>stats</button>
                {stats ? 
                <div className="stats-container">
                    <h4>{JSON.stringify(stats.attack)}</h4>
                    </div>:''} */}




                    </div>


                    : ''}

            </div>
        </>
    )
}