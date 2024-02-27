import { base } from "$app/paths";

export const getNavigationMap = () => {
  return [
    { key: 'Intro', value: `${base}/cards/intro` },
    { key: 'Shinjuku', value: `${base}/cards/shinjuku` },
    { key: 'Fuji St. Hotel', value: `${base}/cards/fujiHotel` },
    { key: 'Ride to Subaru', value: `${base}/cards/rideToSubaru` },
    { key: 'Subaru Station', value: `${base}/cards/subaruStation` },
    { key: 'Station 6', value: `${base}/cards/station6` },
    { key: 'Station 7', value: `${base}/cards/station7` },
    { key: 'From 7 to 8', value: `${base}/cards/7to8` },
    { key: 'Taishikan', value: `${base}/cards/taishikan` },
    { key: 'To Tomoekan', value: `${base}/cards/trekToTomoekan` },
    { key: 'Tomoekan', value: `${base}/cards/tomoekan` },
    { key: 'To Station 9', value: `${base}/cards/toStation9` },
    { key: 'Station 9', value: `${base}/cards/station9` },
    { key: 'Summit', value: `${base}/cards/summit` },
    { key: 'Descent', value: `${base}/cards/descent` },
    { key: 'Finish', value: `${base}/cards/finish` },
    { key: 'Retrospect', value: `${base}/cards/backToTokyo` },
  ];
};