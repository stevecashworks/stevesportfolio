const handleIntersection=(entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible")
            
            
        }
        else{
            entry.target.classList.remove("visible");
            

        }
    })
}
export default handleIntersection