interface IConstants {
    port: number,
    origin: string,
    tokenKey: string
}

const constants: IConstants = {
    port: 26000,
    origin: "http://localhost:3000",
    tokenKey: "Some private key"
}

module.exports = constants