import { memo, useEffect } from 'react'

export default memo(function Counter({ printCount }) {
    useEffect(() => {
        console.log("Counter rerendered")
    })

    useEffect(() => {
        printCount()
    }, [printCount])

    return (
        <div>Counter</div>
    )
})
