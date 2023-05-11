/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=25247804&pid=b399e4d8043cd2e8f81669136578c8a0&tid=4d2425572528cb6e83fe8cccee00db25",
    "https://www.maimemo.com/share/page?uid=25247804&pid=2a9485a342bf3b644f43af4b9c834c2e&tid=288dab66d7320414e7f74eca0c911751",
    "https://www.maimemo.com/share/page?uid=25247804&pid=c8b114187c415edf1f7a8d5441fc10b4&tid=43bd5c440d34efc62d244f924e06b815",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
