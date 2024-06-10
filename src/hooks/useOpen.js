import { useState } from 'react'
export const useOpen = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(!open)
	}

	return {
		open,
		handleOpen,
	}
}
