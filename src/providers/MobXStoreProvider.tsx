import React, { useState } from 'react';
import { MobXStoreContext, CurrencyMobxStore } from '../stores/mobx/store';

const MobXStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [store] = useState(() => new CurrencyMobxStore());

  return (
    <MobXStoreContext.Provider value={store}>
      {children}
    </MobXStoreContext.Provider>
  );
};

export default MobXStoreProvider;
