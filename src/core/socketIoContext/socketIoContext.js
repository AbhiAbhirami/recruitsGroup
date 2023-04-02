import { io } from 'socket.io-client';
import { createContext } from 'react';

const SOCKET_IO_URL= 'https://crm.therecruitsgroup.com/'
export const socket = io.connect(SOCKET_IO_URL);
export const SocketContext = createContext();
