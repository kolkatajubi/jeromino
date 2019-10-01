function requestServer(url, data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: (resp) => {
                // console.log("SUCCESS")
                // console.log(resp)
                return resolve({ status: "success", data: resp })
            },
            error: (err) => {
                // console.log("Error")
                // console.log(err)
                return resolve({ status: "error", data: err })
            }
        });
    })
}

var errorapi = {
    getError: () => {
        return new Promise(async (resolve, reject) => {
            return resolve({
                status: "success",
                data: {
                    '001': [
                        {
                            query_id: '001',
                            answer: "answer"
                        },
                        {
                            query_id: '001',
                            answer: "answer2"
                        },
                        {
                            query_id: '001',
                            answer: "answer"
                        }
                    ],
                    '002': [
                        {
                            query_id: '002',
                            answer: "answer"
                        },
                        {
                            query_id: '002',
                            answer: "answer2"
                        },
                        {
                            query_id: '002',
                            answer: "answer"
                        }
                    ]
                }
            });
        })

    },
    getSolutions: (error) => {
        return new Promise(async (resolve, reject) => {
            let req = { search: error }
            let resp = await requestServer('http://127.0.0.1:3125/createUser', req)
            if (resp.status == "success") {
                return resolve(resp)
            }
        })
    }
}