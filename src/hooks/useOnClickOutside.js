import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = initial => {
	const [isShow, setIsShow] = useState(initial)
	const ref = useRef(null)

	const handleClickOutside = e => {
		if (ref.current && !ref.current.contains(e.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [])
	return { ref, isShow, setIsShow }
}
