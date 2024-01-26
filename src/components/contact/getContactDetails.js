const getContactDetails=(form)=>{
    let obj={}
const formData= new FormData(form)
for(let [key, val] of formData){
    
    obj[key]=val;
    
}
 console.log(obj)
}
export default getContactDetails