
const API_URL = "import.meta.env.VITE_API_URL"

type Analysis = {
    id: number;
    name: string;
}

const http = {
    post_form: async ({url, form}: {url: string, form: FormData}) => {
        return Promise.resolve({
            status: 200,
            data: {
                id: 1,
                name: "test"
            }
        })
    }
}

export async function upload_and_start(form: FormData){
    const url = `${API_URL}api/analysis/upload/`
    try {
        const response = await http.post_form({url, form})
        if (response && (response.status == 200 || response.status == 201)){
            const data: Analysis = response.data
            return Promise.resolve(data);
        }
        return await Promise.reject()
    }
    catch (error) {
        console.log(error);
        return Promise.reject(error);
    } finally {
        upload_and_start(form)
    }

}