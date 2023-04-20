const curDate = new Date();

const votes = [
  {
    storeId: '26571895',
    email: 'bin000527@naver.com',
    categoryCode: 'KO01',
    votedAt: curDate,
  },
  {
    storeId: '27514796',
    email: 'bin000527@naver.com',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '589846825',
    email: 'bin000527@naver.com',
    categoryCode: 'JP03',
    votedAt: curDate,
  },
  {
    storeId: '20328809',
    email: 'sqssung@gmail.com',
    categoryCode: 'GB09',
    votedAt: curDate,
  },
  {
    storeId: '24275104727514796',
    email: 'sqssung@gmail.com',
    categoryCode: 'WE04',
    votedAt: curDate,
  },
  {
    storeId: '589846825',
    email: 'sqssung@gmail.com',
    categoryCode: 'BS05',
    votedAt: curDate,
  },
  {
    storeId: '19037502',
    email: 'alswl99710@naver.com',
    categoryCode: 'DS10',
    votedAt: curDate,
  },
  {
    storeId: '682483214',
    email: 'alswl99710@naver.com',
    categoryCode: 'WE04',
    votedAt: curDate,
  },
  {
    storeId: '589846825',
    email: 'alswl99710@naver.com',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '19037502',
    email: 'fearofgit@gmail.com',
    categoryCode: 'KO01',
    votedAt: curDate,
  },
  {
    storeId: '682483214',
    email: 'fearofgit@gmail.com',
    categoryCode: 'WE04',
    votedAt: curDate,
  },
  {
    storeId: '26356307',
    email: 'fearofgit@gmail.com',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '1855041852',
    email: 'battenborrow3@de.vu',
    categoryCode: 'KO01',
    votedAt: curDate,
  },
  {
    storeId: '11162155',
    email: 'battenborrow3@de.vu',
    categoryCode: 'PZ08',
    votedAt: curDate,
  },
  {
    storeId: '1349950333',
    email: 'battenborrow3@de.vu',
    categoryCode: 'JP03',
    votedAt: curDate,
  },
  {
    storeId: '1386103378',
    email: 'abolam4@homestead.com',
    categoryCode: 'VG11',
    votedAt: curDate,
  },
  {
    storeId: '971062870',
    email: 'abolam4@homestead.com',
    categoryCode: 'CK07',
    votedAt: curDate,
  },
  {
    storeId: '1798961498',
    email: 'abolam4@homestead.com',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '1386103378',
    email: 'ggatherer5@walmart.com',
    categoryCode: 'VG11',
    votedAt: curDate,
  },
  {
    storeId: '14513092',
    email: 'ggatherer5@walmart.com',
    categoryCode: 'BG06',
    votedAt: curDate,
  },
  {
    storeId: '1798961498',
    email: 'ggatherer5@walmart.com',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '19499643',
    email: 'dboxall6@cdc.gov',
    categoryCode: 'VG11',
    votedAt: curDate,
  },
  {
    storeId: '1490921549',
    email: 'dboxall6@cdc.gov',
    categoryCode: 'DS10',
    votedAt: curDate,
  },
  {
    storeId: '1855041852',
    email: 'dboxall6@cdc.gov',
    categoryCode: 'GB09',
    votedAt: curDate,
  },
  {
    storeId: '2092147534',
    email: 'gyo7@techcrunch.com',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '11162155',
    email: 'gyo7@techcrunch.com',
    categoryCode: 'BS05',
    votedAt: curDate,
  },
  {
    storeId: '1798961498',
    email: 'gyo7@techcrunch.com',
    categoryCode: 'PB12',
    votedAt: curDate,
  },
  {
    storeId: '2092147534',
    email: 'kbartali8@accuweather.com',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '589846825',
    email: 'kbartali8@accuweather.com',
    categoryCode: 'BS05',
    votedAt: curDate,
  },
  {
    storeId: '14513092',
    email: 'kbartali8@accuweather.com',
    categoryCode: 'BG06',
    votedAt: curDate,
  },
  {
    storeId: '26571895',
    email: 'dcosin9@dyndns.org',
    categoryCode: 'KO01',
    votedAt: curDate,
  },
  {
    storeId: '27514796',
    email: 'dcosin9@dyndns.org',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '589846825',
    email: 'dcosin9@dyndns.org',
    categoryCode: 'JP03',
    votedAt: curDate,
  },
  {
    storeId: '20328809',
    email: 'cyendlea@amazon.co.uk',
    categoryCode: 'GB09',
    votedAt: curDate,
  },
  {
    storeId: '24275104727514796',
    email: 'cyendlea@amazon.co.uk',
    categoryCode: 'WE04',
    votedAt: curDate,
  },
  {
    storeId: '589846825',
    email: 'cyendlea@amazon.co.uk',
    categoryCode: 'BS05',
    votedAt: curDate,
  },
  {
    storeId: '19037502',
    email: 'gdjokovicb@google.nl',
    categoryCode: 'DS10',
    votedAt: curDate,
  },
  {
    storeId: '682483214',
    email: 'gdjokovicb@google.nl',
    categoryCode: 'WE04',
    votedAt: curDate,
  },
  {
    storeId: '589846825',
    email: 'gdjokovicb@google.nl',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '19037502',
    email: 'kfontellesc@fc2.com',
    categoryCode: 'KO01',
    votedAt: curDate,
  },
  {
    storeId: '682483214',
    email: 'kfontellesc@fc2.com',
    categoryCode: 'WE04',
    votedAt: curDate,
  },
  {
    storeId: '26356307',
    email: 'kfontellesc@fc2.com',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '1855041852',
    email: 'bdodgshund@csmonitor.com',
    categoryCode: 'KO01',
    votedAt: curDate,
  },
  {
    storeId: '11162155',
    email: 'bdodgshund@csmonitor.com',
    categoryCode: 'PZ08',
    votedAt: curDate,
  },
  {
    storeId: '1349950333',
    email: 'bdodgshund@csmonitor.com',
    categoryCode: 'JP03',
    votedAt: curDate,
  },
  {
    storeId: '1386103378',
    email: 'pashleighe@hc360.com',
    categoryCode: 'VG11',
    votedAt: curDate,
  },
  {
    storeId: '971062870',
    email: 'pashleighe@hc360.com',
    categoryCode: 'CK07',
    votedAt: curDate,
  },
  {
    storeId: '1798961498',
    email: 'pashleighe@hc360.com',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '1386103378',
    email: 'jpuckringf@un.org',
    categoryCode: 'VG11',
    votedAt: curDate,
  },
  {
    storeId: '14513092',
    email: 'jpuckringf@un.org',
    categoryCode: 'BG06',
    votedAt: curDate,
  },
  {
    storeId: '1798961498',
    email: 'jpuckringf@un.org',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '19499643',
    email: 'mgilsthorpeg@newyorker.com',
    categoryCode: 'VG11',
    votedAt: curDate,
  },
  {
    storeId: '1490921549',
    email: 'mgilsthorpeg@newyorker.com',
    categoryCode: 'DS10',
    votedAt: curDate,
  },
  {
    storeId: '1855041852',
    email: 'mgilsthorpeg@newyorker.com',
    categoryCode: 'GB09',
    votedAt: curDate,
  },
  {
    storeId: '2092147534',
    email: 'amcbratneyh@youtu.be',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '11162155',
    email: 'amcbratneyh@youtu.be',
    categoryCode: 'BS05',
    votedAt: curDate,
  },
  {
    storeId: '1798961498',
    email: 'amcbratneyh@youtu.be',
    categoryCode: 'PB12',
    votedAt: curDate,
  },
  {
    storeId: '2092147534',
    email: 'pheildi@newyorker.com',
    categoryCode: 'CH02',
    votedAt: curDate,
  },
  {
    storeId: '589846825',
    email: 'pheildi@newyorker.com',
    categoryCode: 'BS05',
    votedAt: curDate,
  },
  {
    storeId: '14513092',
    email: 'pheildi@newyorker.com',
    categoryCode: 'BG06',
    votedAt: curDate,
  },
];
