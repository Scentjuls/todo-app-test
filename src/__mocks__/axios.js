const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Chi",
                    last: "Scenti"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/17.jpg"
                },
                login: {
                    username: "Cognoscenti"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}