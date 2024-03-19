import { io } from 'socket.io-client'
import { createContext, useContext, useState } from 'react'

export function useGameConnection() {
  return useContext(GameConnectionContext);
}

export const GameConnectionContext = createContext({ energy: 0n, tap: (userId: string) => {} })
