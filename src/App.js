import { useEffect, useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import data from './data.json';

function App() {
	const [cards, setCards] = useState(data);
	const [filters, setFilters] = useState([]);

	const addFilter = (item) => {
		setFilters([...new Set([...filters, item])]);
		//console.log(filters)
	};

  const removeFilter = (item)=>{
    setFilters(prevFilter => (filters.filter(filter=> filter!==item)));
    setCards(data);

  }
  const clearFilter = ()=>{
    setFilters([]);
    setCards(data);
  }

  const updateCards = ()=>{
    let dataAct = [];
	
		data.forEach((dat) => {
      let categorias = [dat.role, dat.level, ...dat.languages, ...dat.tools];
      //console.log(categorias);
      let booleanoCat = false;
      filters.forEach((filter)=>{
         if(categorias.indexOf(filter)>=0) {
           
           booleanoCat=true;
           return;
         }else {
           booleanoCat = false;
          return;
          }
      })
      if(booleanoCat){
        dataAct.push(dat);
				return;
      }

		});

		if (dataAct.length > 0) setCards(dataAct);
  }
	useEffect(() => {
		updateCards();

	}, [filters]);

	return (
		<>
			<div className="w-full h-full bg-green-50">
				<Header filters={filters} removeFilter={removeFilter} clearFilter={clearFilter}/>
				<Body cards={cards} addFilter={addFilter} />
			</div>
		</>
	);
}

export default App;
