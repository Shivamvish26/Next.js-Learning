"use client"

export default function Product({id}){

    function handleclick(){
        alert(`ID is ${id}`)
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={handleclick}>Check ID</button>
        </div>
    )
}