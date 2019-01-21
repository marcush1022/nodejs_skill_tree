#RPC, REMOTE PRCEDURE CALL, 远程过程调用
主要功能是使构建分布式计算更加容易，client像调用本地方法一样调用server的方法;

#gRPC, google的RPC framework
`client application can directly call method on a server on a different server as if it was a local object;`
=> on server side: server `implements the interfaces` and run a rpc server to handle rpc calling;
=> on client side: client has stub that `provides the same methods` as the server;

#FOUR KINDS OF RPC
1. `UNARY RPC`: 
A simple rpc, client send a `single request` to server and server returns a `single response`;
2. `SERVER STREAMING RPC`:
A server side rpc, client send a `single request` to server, and server returns `a streaming of response`;
3. `CLIENT STREAMING RPC`:
A client side rpc, client send `a streaming of request` to server, and server returns with a `single response`;
4. `BIDIRECTIOINAl RPC`:
A `both side` rpc, server and client can `read and write in any time`(send request or return response in any order), dont need to wait for another side to finish;

#PROTOCOL BUFFERS(.proto)
gRPC uses the protocal buffers(a way of serializing structed data for use in communication protocols or data storage), gRPC recommend to use proto3;





