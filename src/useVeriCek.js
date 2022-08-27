import React from "react";



const useVeriCek = (url) =>{
    const [veri, veriGuncelle] = React.useState(null);

React.useEffect(() =>{
    fetch(url)
    .then((res) => res.json())
    .then((data) => veriGuncelle(data));
}, [url]);

function uyariGoster(message){
    alert(message)
}




    return [veri, veriGuncelle];
};  


export default useVeriCek;


/*
const useVeriCek =(url) =>{
    const [yapilacaklar] = useVeriCek("https://jsonplaceholder.typicode.com/todos");
    const [fotograflar] = useVeriCek ("https://jsonplaceholder.typicode.com/photos");
return(
    <>

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
)*/