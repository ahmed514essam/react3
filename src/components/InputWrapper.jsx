import { memo } from 'react'

export default memo(function InputWrapper({ updateQuery }) {
    // useEffect(() => {
    //     console.log("Input rerendered")
    // })

    return (
        <input
            type='text'
            placeholder='Enter search query here'
            onInput={(e) => updateQuery(e.target.value)}
        />
    )
})
