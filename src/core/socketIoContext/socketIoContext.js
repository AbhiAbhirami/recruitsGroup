import { io } from "socket.io-client";
import { createContext } from "react";

// const SOCKET_IO_URL_LOCAL= 'http://localhost:3001/'
const SOCKET_IO_URL_TEST = "https://crmtest.therecruitsgroup.com/";
// const SOCKET_IO_URL_UAT= 'https://crm.therecruitsgroup.com/'

export const socket = io.connect(SOCKET_IO_URL_TEST);
export const SocketContext = createContext();
