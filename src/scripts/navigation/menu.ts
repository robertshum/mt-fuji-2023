import { base } from "$app/paths";

export const getNavigationMap = () => {
  return [
    { key: 'Intro', value: `${base}/cards/intro`, eventName: 'intro' },
    { key: 'Shinjuku', value: `${base}/cards/shinjuku`, eventName: 'shinjuku' },
    { key: 'Fuji St. Hotel', value: `${base}/cards/fujiHotel`, eventName: 'fujiHotel' },
    { key: 'Ride to Subaru', value: `${base}/cards/rideToSubaru`, eventName: 'rideToSubaru' },
    { key: 'Subaru Station', value: `${base}/cards/subaruStation`, eventName: 'subaruStation' },
    { key: 'Station 6', value: `${base}/cards/station6`, eventName: 'station6' },
    { key: 'Station 7', value: `${base}/cards/station7`, eventName: 'station7' },
    { key: 'From 7 to 8', value: `${base}/cards/7to8`, eventName: '7to8' },
    { key: 'Taishikan', value: `${base}/cards/taishikan`, eventName: 'taishikan' },
    { key: 'To Tomoekan', value: `${base}/cards/trekToTomoekan`, eventName: 'trekToTomoekan' },
    { key: 'Tomoekan', value: `${base}/cards/tomoekan`, eventName: 'tomoekan' },
    { key: 'To Station 9', value: `${base}/cards/toStation9`, eventName: 'toStation9' },
    { key: 'Station 9', value: `${base}/cards/station9`, eventName: 'station9' },
    { key: 'Summit', value: `${base}/cards/summit`, eventName: 'summit' },
    { key: 'Descent', value: `${base}/cards/descent`, eventName: 'descent' },
    { key: 'Finish', value: `${base}/cards/finish`, eventName: 'finish' },
    { key: 'Retrospect', value: `${base}/cards/backToTokyo`, eventName: 'backToTokyo' },
  ];
};