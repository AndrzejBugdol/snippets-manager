import { createContext, ReactNode, useContext, useState } from 'react';

import { Routes } from './ROUTES';

type RouterType = {
  selectedTab: Routes;
  onChangeTab: (tab: Routes) => void;
};

const RouterContext = createContext<RouterType>({
  selectedTab: 'snippets',
  onChangeTab: () => {},
});

export const useRouterContext = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouterContext is out of provider scope');
  }

  return context;
};

type RouterProviderProps = {
  children: ReactNode;
};

export const RouterProvider = ({ children }: RouterProviderProps) => {
  const [selectedTab, setSelectedTab] = useState<Routes>('snippets');
  const onChangeTab = (tab: Routes) => {
    setSelectedTab(tab);
  };

  return (
    <RouterContext.Provider value={{ selectedTab, onChangeTab }}>
      {children}
    </RouterContext.Provider>
  );
};
