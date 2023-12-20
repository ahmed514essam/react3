import { useEffect } from 'react'

export default function Results({ query }) {
    useEffect(() => {
        console.log("Results rerendered")
    })

    return (
        <h1>{query}</h1>
    )
}
