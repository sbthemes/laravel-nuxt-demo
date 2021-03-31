export default function ({ $axios, $toast }) {
    $axios.onError(error => {

        if (error.response.data.errors) {
            var obj = error.response.data.errors;
            $toast.error(obj[Object.keys(obj)[0]][0]);
        }
        if (error.response.data.error)
            $toast.error(error.response.data.error);

    })

    $axios.onResponse(response => {

        if (response.data && response.data.data && response.data.data.success)
            $toast.success(response.data.data.success);
        if (response.data && response.data.success)
            $toast.success(response.data.success);
        if (response.error)
            $toast.error(response.error);

    })
}
