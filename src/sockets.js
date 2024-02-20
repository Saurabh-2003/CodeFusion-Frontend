import io from "socket.io-client";
const backend = process.env.BACKEND

const skt = ()=>{
        return io(backend);
}

export default skt;