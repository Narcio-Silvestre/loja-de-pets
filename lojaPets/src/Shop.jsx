import './shop.css';
import { useState } from 'react';

const animals = [
    {
        id:1,
        name:'Felpudo',
        age: 12, 
        price:22.50, 
        history: 'nothing at moment',
        img: "./1.jpg"
    },
    {
        id:2,
        name:'Bolinhas',
        age: 2, 
        price:2.50, 
        history: 'nothing at moment',
        img: "./2.jpg"

    },
    {
        id:3,
        name:'Bobbby',
        age: 5, 
        price:25, 
        history: 'nothing at moment',
        img: "./3.jpg"
    }
]

function AnimalDesc({animal, className}){
    return (
        <div className={className}>
            <p><span>Nome:</span> "{animal.name}"</p>
            <p><span>Idade:</span>{animal.age}</p>
            <button className='btgallery'>mais...</button>
            
        </div>
    )
}

export default function Shop(){
    const [animalList,setAnimalList] = useState(animals)
    function handleDelete(id) {
        console.log(id)
        console.log(animalList)

        const newList = animalList.filter((animal)=>animal.id !== id)
        console.log(newList)

        setAnimalList(newList)
    }
return(
    <div className="shop-box">
        <div className="shop-title">
            <h1>Shopping</h1>
        </div>
        <div className="shop-gallery">{
                animalList.map((animal) =>
                    <Animal key={animal.id} animal={animal} click={handleDelete} ></Animal>)
            } 
        </div>
    </div>
)}


function Animal ({animal,click}){
    return <>
        <div className="animal-window">
            <div className="animal-im-box">
                <img src={animal.img} alt=""/>
                <button className={`bt`} onClick={()=>click(animal.id)}>x</button>
            </div>
            <AnimalDesc className="animal-desc" animal={animal}>  </AnimalDesc>
        </div>
    </>
}