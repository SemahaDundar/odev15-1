
import React from "react";
import useVeriCek from "./useVeriCek";

function App() {



    const [yapilacaklar] = useVeriCek("https://jsonplaceholder.typicode.com/todos");
    const [fotograflar] = useVeriCek ("https://jsonplaceholder.typicode.com/photos");
   


    return(
        <>
        <button onClick={ ()=> { uyariGoster("hello");}}>TEST ET</button>
    
        <h2>YAPILACAKLAR</h2>
        {
            yapilacaklar &&
            yapilacaklar.map((item) =>{
                return <p key={item.id}>{item.title}</p>
            })
        }
    
    
    
    
    <h2>FOTOĞRAFLAR</h2>
        {
            fotograflar &&
            fotograflar.map((item) =>{
                return <p key={item.id}>
                    <img src={item.thumbnailUrl} alt={item.title}/>
                    </p>;
            })
        }
        </>
);


}

export default App;
