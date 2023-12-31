import "./Blog.scss";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import { PokeLook } from '../../components/api-caller/PokeLook'



function Blog() {
  const pokeApiPrefix = "https://pokeapi.co/api/v2/";
  const apiPokemon = `${pokeApiPrefix}pokemon`;
  const apiMoves = `${pokeApiPrefix}move`;
  const apiSpecies = `${pokeApiPrefix}pokemon-species`;
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokeData, setPokeData] = useState(null);
  const [speciesData, setSpeciesData] = useState(null);
  const [moveData, setMoveData] = useState(null);
  const [pokeArr, setPokeArr] = useState([]);

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());

    // setData(null)
  };
  const fetchPokeList = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1017`)
      .then((response) => response.json())
      .then((all) => {
        const names = all.results.map((pokemon) => pokemon.name);
        setPokeArr(names); // Update the state with the Pokémon names
      })
      .catch((error) => {
        console.error("Error fetching Pokémon list:", error);
      });
  };

  useEffect(() => {
    fetchPokeList();
  }, []);

  function getResults(pokemon) {
    fetch(`${apiPokemon}/${pokemon}`)
      .then((dataP) => dataP.json())
      .then((dataP) => {
        console.log(`pokemon data:`, dataP);
        setPokeData(dataP);
        //    displayPokemonName(data);
        const moveName = dataP.moves[0].move.name;
        return fetch(`${apiMoves}/${moveName}`);
      })
      .then((dataM) => {
        return dataM.json();
      })
      .then((dataM) => {
        //    displayMovePower(data);
        console.log(`move data:`, dataM);
        setMoveData(dataM);

        return fetch(`${apiSpecies}/${pokemon}`);
      })
      .then((dataS) => dataS.json())
      .then((dataS) => {
        setSpeciesData(dataS);
        console.log(`species data:`, dataS);
      });
    return;
  }

  return (
    <>
      <div className="blog-container page">
        <div className="in">
          <form className="search-form">
            <input
              type="text"
              id="inputText"
              placeholder="name or #"
              value={pokemon}
              onChange={handleChange}
            />
            {pokeArr.length >= 0 ? (
              <div>
                {" "}
                <label>pokedex</label>
                <select id="poke" onChange={handleChange} size="10">
                  {pokeArr.map((name, i) => (
                    <option key={i} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              ""
            )}
            {/* <p>Input: {pokemon}</p> */}
            <button
              id="lookupBtn"
              type="submit"
              onClick={() => getResults(pokemon)}
            >
              lookup
            </button>
          </form>
        </div>

        <div className="out">
          <p>{pokeData ? pokeData.name : ""}</p>
          <img
            src={
              pokeData ? `${pokeData.sprites.other.showdown.front_default}` : ""
            }
          />
          <p>{speciesData && speciesData.flavor_text_entries[0] ? `${speciesData.flavor_text_entries[0].flavor_text}` :''}</p>

          <div>{pokeData ? <Row className="stats">
            <Col>
              <p>HP :  {pokeData.stats[0].base_stat}</p>
            </Col>

            <Col>
              <p>Attack : { pokeData ? pokeData.stats[1].base_stat : '' }</p>
            </Col>

            <Col>
              <p>Defense : { pokeData ? pokeData.stats[2].base_stat : '' }</p>
            </Col>

            <Col>
              <p>Special Attack : { pokeData ? pokeData.stats[3].base_stat : '' }</p>
            </Col>

            <Col>
              <p>Special defense : { pokeData ? pokeData.stats[4].base_stat : '' }</p>
            </Col>

            <Col>
              
              <p>Speed : { pokeData ? pokeData.stats[5].base_stat : '' }</p>
            </Col>
            <Col>
              <p>
                
                Total :
                {pokeData ? `${pokeData.stats[0].base_stat +
                  pokeData.stats[1].base_stat +
                  pokeData.stats[2].base_stat +
                  pokeData.stats[3].base_stat +
                  pokeData.stats[4].base_stat +
                  pokeData.stats[5].base_stat}` : ''}
              </p>
            </Col>

           
          </Row> : '' }</div>
          <p>{moveData ? `${moveData.name} : ${moveData.power}` : ""}</p>
        </div>
      </div>
    </>
  );
}

export default Blog;
