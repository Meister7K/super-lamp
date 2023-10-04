import { useState, useEffect } from "react";
import { Loading } from '../loading/Loading';
import './PokeLook.scss';
import { MyModal } from "../modal/MyModal";
import { Row, Col, Container } from 'react-bootstrap'



export const PokeLook = () => {
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
const [pokeArr, setPokeArr] = useState([]);
    const handleChange = (e) => {
        
        setInput(e.target.value.toLowerCase());
        // setData(null)
    }

    const handleLookup = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // setData(null)
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

    const fetchPokeList = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=1017`)
            .then(response => response.json())
            .then((all) => {
                const names = all.results.map((pokemon) => pokemon.name);
                setPokeArr(names); // Update the state with the Pokémon names
            })
            .catch(error => {
                console.error("Error fetching Pokémon list:", error);
            });
    }

    useEffect(() => {
        fetchPokeList();
    }, []);


    console.log(data)

    let moveArr = [];

    if (data) {
        // moveArr.push(data.moves)
        for (let i = 0; i < data.moves.length; i++) {
            moveArr.push(data.moves[i])
        }
        // console.log(moveArr)
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <h1>The Pokedex</h1>
                    <MyModal textP="Data not found for this input" textS="Try using the name or #" show={showModal} onHide={closeModal} />

                    <form className="search-form">
                        <input type='text' id='inputText' placeholder="name or #" value={input} onChange={handleChange} />
                        {pokeArr.length >= 0 ?(<div> <label>pokedex</label><select id='poke' onChange={handleChange} size='10'>
                            {pokeArr.map((name, i)=>(
                                <option key={i} value={name} >{name}</option>
                            ))}
                        </select></div>):''}
                        {/* <p>Input: {input}</p> */}
                        <button id='lookupBtn' type="submit" onClick={handleLookup}>lookup</button>

                    </form>
                </Row>
                <Row>
                    <div className="output-container">
                        {isLoading ? <Loading /> : ''}
                        {data ?
                            <div>
                                <h3>#{data.id}</h3>
                                <h3 className="pokeName"><a href={`https://www.serebii.net/pokemon/${data.name}/`} target={'_blank'} rel="noreferrer" >{data.name}</a></h3>


                                <img className="sprite" src={data.sprites.other["official-artwork"].front_default} />
                                <img className="sprite" src={data.sprites.other["official-artwork"].front_shiny} />


                                <h4>Type:  
                                    <img src={`https://www.serebii.net/pokedex-bw/type/${data.types[0].type.name}.gif`}/>
                                    
                                    
                                    {data.types[1] ?  <img src={`https://www.serebii.net/pokedex-bw/type/${data.types[1].type.name}.gif`}/> : ''}</h4>
                                <h3>Base Stats</h3>
                                <Row className="stats">

                                    <Col>
                                        <p>HP : {JSON.stringify(data.stats[0].base_stat)}</p>
                                    </Col>

                                    <Col>
                                        <p>
                                            Attack : {JSON.stringify(data.stats[1].base_stat)}
                                        </p>
                                    </Col>

                                    <Col><p>
                                        Defense : {JSON.stringify(data.stats[2].base_stat)}
                                    </p>
                                    </Col>

                                    <Col><p>
                                        Special Attack : {JSON.stringify(data.stats[3].base_stat)}
                                    </p>
                                    </Col>

                                    <Col><p>
                                        Special defense : {JSON.stringify(data.stats[4].base_stat)}
                                    </p>
                                    </Col>

                                    <Col> <p>
                                        Speed : {JSON.stringify(data.stats[5].base_stat)}
                                    </p>
                                    </Col>
                                    <Col>
                                    <p> Total :
                                        {data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat}
                                    </p>
                                    </Col>


                                    {/* <h2>{JSON.stringify(data)}</h2> */}
                                </Row>




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

                        {moveArr.length > 0 ? 

                            // <li>{moveArr.move[0]}</li>
                            <details >
                                <summary>Moves</summary>
                                <ul className="move-ul">
                                    {moveArr.sort((a,b)=> a.move.name.localeCompare( b.move.name)).map((move, i) => (
                                        <li key={i}>{move.move.name}:  {move.version_group_details[0].move_learn_method.name !== 'machine' ? `Level ${move.version_group_details[0].level_learned_at}` : 'TM'}</li>
                                    ))}
                                </ul>
                            </details>

                         : ''}

                    </div>
                </Row>

            </Container>
        </>
    )
}