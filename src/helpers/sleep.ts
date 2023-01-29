export const sleep = (seconds = 1): Promise<boolean> => {
	const timeout = seconds * 1000
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(true)
		}, timeout)
	})
}
