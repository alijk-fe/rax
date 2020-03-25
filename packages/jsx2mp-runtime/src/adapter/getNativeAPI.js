// eslint-disable-next-line import/no-extraneous-dependencies
import { isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';

let apiCore;

if (isMiniApp) {
  apiCore = my;
} else if (isWeChatMiniProgram) {
  apiCore = wx;
} else if (isByteDanceMicroApp) {
  apiCore = tt;
}

export default apiCore;

