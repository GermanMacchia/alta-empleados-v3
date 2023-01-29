export const debounce = (callback: any, timeout = 700) => {
	let timer: NodeJS.Timeout
	return () => {
		clearTimeout(timer)
		timer = setTimeout(() => callback(), timeout)
	}
}
