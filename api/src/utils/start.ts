export const start = (port: number) => {
    console.clear()
    console.log(`API IS RUNNING IN PORT ${port}`)
    console.log(`API ENDPOINT: http://localhost:${port}`)
    console.log(`Playground: http://localhost:${port}/graphql`)
}