import { useEffect, useState } from "react";
import { useTelegram } from "./useTelegram.ts";

export function useTelegramUserId() {
  const [userId, setUserId] = useState<number | undefined>();

  const telegram = useTelegram();

  useEffect(() => {
    if (telegram) {
      const telegramUserId = telegram.initDataUnsafe.user?.id;

      setUserId(telegramUserId);
    }
  }, [telegram]);

  return userId;
}
