export class WebSocketService {

    private readonly connection: WebSocket

    constructor(connection: WebSocket) {
        this.connection = connection

        this.connection.onmessage = function (event) {
            console.log("Received WSS event", JSON.stringify(event))
        }

        this.connection.onopen = function (event) {
            console.log(event)
            console.log("Successfully connected to the echo websocket server...")
        }
    }


    sendMessage(message: string) {
        console.log("Sending message to WebSocket", message)
        this.connection.send(message)
    }
}