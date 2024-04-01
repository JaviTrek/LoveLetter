

export default async function callMongoDB()  {


    const isServer = process.env.IS_SERVER_FLAG ? 'RUN ON SERVER' : 'RUN_ON_CLIENT'

    console.log("trying to connect")
    const res = await fetch("http://localhost:3000/api/database")
    const data = await res.json()
    console.log(isServer)
    console.log(data)
    console.log(Response.json({ data }))
    return Response.json({ data })
}