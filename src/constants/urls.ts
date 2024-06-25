const base: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => base + urlBuilder.userBaseUrl,
    singleUsers: (id: string | number): string => base + urlBuilder.userBaseUrl + '/' + id,
}
export {
    urlBuilder
}