import io from "socket.io-client";

const skt = ()=>{
        return io(process.env.BACKEND);
}

export default skt;