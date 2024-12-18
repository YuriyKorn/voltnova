'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type NotificationContextType = {
  isNotificationOpen: boolean;
  closeNotification: () => void;
};

const NotificationContext = createContext<NotificationContextType>({
  isNotificationOpen: true,
  closeNotification: () => {}
});

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);

  const closeNotification = useCallback(() => {
    setIsNotificationOpen(false);
  }, []);

  const context = useMemo(() => {
    return { isNotificationOpen, closeNotification };
  }, [closeNotification, isNotificationOpen]);

  return <NotificationContext.Provider value={context}>{children}</NotificationContext.Provider>;
};

export const useNotificationContext = () => useContext(NotificationContext);
