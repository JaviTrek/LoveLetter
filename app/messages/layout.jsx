async function callMongoDB()  {

    const isServer = process.env.IS_SERVER_FLAG ? 'RUN ON SERVER' : 'RUN_ON_CLIENT'

    console.log("trying to connect")
    const res = await fetch("http://localhost:3000/api/database")
    const data = await res.json()
    console.log(isServer)
    console.log(data)
   // console.log(Response.json({ data }))
    return data;
}


// children = will be a page or nested layout
export default async function Page({children,  }) {

    const mongoData =  await callMongoDB();
    console.log("mongoData")
    console.log(mongoData)

    return (<>
            <h1>Layout</h1>
            {children}
        </>)
}