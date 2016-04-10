'use strict';

import GlobalTree from '../trees/global.tree';

let globaActions = {
  setPage(page) {
    let title = 'ReactNews | '.concat(page.title || 'Not Found');
    document.title = title;
    GlobalTree.set('page', page);
  }
};

export default globaActions;
