const BASEURL = `https://ummahapi.com`

export const FetchData = async () =>{

try {
    const res:any = await fetch(`${BASEURL}/api/duas?apikey=umh_ad0bf092e57e925e0737579668cda6ee6a71b4d2`);
    const data = await res.json()
    if(res.ok){
        console.log("cannot fetch")
    }
    console.log(data)
} catch (error) {
    console.log(error)
}
}

FetchData()





