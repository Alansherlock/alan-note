const mod1 = require('./02_cusmod')
const mod2 = require('./02_cusmod')
// 连续调用验证require规则，加载一次后进行缓存，不会重复加载，因此只输出一次打印