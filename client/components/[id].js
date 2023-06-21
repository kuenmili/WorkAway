import detail from "./components/detail"

export default function DetailPage(props) {

  
    return (
      <>
        <detail {...props} />
        <style jsx>{``}</style>
      </>
    )
  }

export async function getServerSideProps (context) {
    const {params, res} = context;
    const {id} = params

    const dbResponse = await fetch(`http://localhost:3000/${id}`)
    if(dbResponse.ok) { 
        const props = await dbResponse.json()
        return {props}    
    }
    if (res) {
        res.writeHead(404).end()
    }
}
