import './loja.css'
import './general.css'
import './nav.css'
import { useState } from 'react'
import Shop from './Shop'


function Nav({children}){
    return (
    <nav className="nav-bar">
        {children}
    </nav>
    )
}

function Logo(){
    return (
        <div className="logo">
            <img src="/logo4.png" alt="logo"/>
        </div>
    )
}

function Navbar({children,search}){
    return ( 
    <div className="nav">
        <div className='menu'> {children} </div> 
        <div className='search'>{search}</div>
    </div>
    )
}

function Search(){
    return(
        <div>
            <input type="text" placeholder='pesquisar...' className='inputSearch'/>
            <button >Pesquisar</button>
        </div>
    )
}

function Button({onClick=undefined,children}){
    return (  <button onClick={onClick} >{children}</button>)
}


function Footer(){
    return (
    <div className="footer">
        <p>Copyright © 2022 Petido Inc. All rights reserved.</p>
    </div>
    )
}

function Homebox({children}){
    return (
    <div className="home-box">
        {children}
    </div>
    )
}

function Introbox(){
    return (
        <div className="animal-box">
        <div className="content">
            <h2>
                Aqueles que resgatamos nos resgatam
            </h2>
            <p>
                "Eu sei que jamais estarei sozinho de verdade enquanto você viver.
                E eu espero, de verdade, que você viva para sempre ao meu lado! 
                Você é muito mais do que apenas um pet para mim!"</p>
            <p>
                Descubra as vantagens de ter um animal de estimação e <span>adote já o seu!</span> 
            </p>
        </div>
        <div className="animal-image">
            <img src="/2.jpg" alt="animal"/>
        </div>
    </div>
    )
}

export default function Index(){
    const [atshop,setAtshop] = useState(false)
    function handleShop(){
        setAtshop(true)
    }

    function handleHome(){
        setAtshop(false)
    }
    
  return(
    <>
        <Homebox >
            <Nav>
                <Logo></Logo>
                <Navbar className="nav" search={<Search></Search>}>
                    <Button onClick={handleHome}>Home</Button>
                    <Button >Galeria</Button>
                    <Button onClick={handleShop} >Shop</Button>
                    <Button >Contatos</Button>
                </Navbar>
            </Nav>

            {!atshop ? <Introbox></Introbox> : <Shop></Shop>}
            
            <Footer></Footer>
        </Homebox>
    </> 
    
    )
}