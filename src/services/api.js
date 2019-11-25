const URL = "http://api.blog.testing.singree.com/"

const callApi = async ({ query='', identificator='', data={} }) => {
    let result
    try {
        result = await fetch(`${ URL }${ query }${ identificator }`, data)
        result = await result.json()
    } catch(err) {
        throw new Error(err)
    }

    return result
}

export default callApi
