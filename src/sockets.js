import io from "socket.io-client";

const skt = ()=>{
        return io(process.env.REACT_APP_BACKEND);
}

export default skt;