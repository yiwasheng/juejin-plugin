/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  iconUrl: "static/img/icon.png"
});

/***/ }),

/***/ "./src/pages/background/api/content.js":
/*!*********************************************!*\
  !*** ./src/pages/background/api/content.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getShortMsgList": () => (/* binding */ getShortMsgList),
/* harmony export */   "publishShortMsg": () => (/* binding */ publishShortMsg),
/* harmony export */   "removeShortMsg": () => (/* binding */ removeShortMsg)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/pages/background/api/index.js");
// 内容相关


/*
* 删除沸点
* */
const removeShortMsg = msgId => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/content_api/v1/short_msg/delete`,
  method: 'POST',
  data: {
    msg_id: msgId
  },
  isInclude: true
});

/*
* 获取用户沸点列表
* */
const getShortMsgList = ({
  userId,
  cursor = 0,
  sortType = 4,
  limit = 999
}) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/content_api/v1/short_msg/query_list`,
  method: 'POST',
  data: {
    user_id: userId,
    cursor: cursor.toString(),
    sort_type: sortType,
    limit: limit
  }
});

/*
* 发布沸点
* @param content 内容
* @param topicId 圈子id
* */
const publishShortMsg = (content, topicId = null) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/content_api/v1/short_msg/publish`,
  method: "POST",
  data: {
    content,
    topicId,
    sync_to_org: false
  },
  isInclude: true
});

/***/ }),

/***/ "./src/pages/background/api/index.js":
/*!*******************************************!*\
  !*** ./src/pages/background/api/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajax": () => (/* binding */ ajax),
/* harmony export */   "handleApiResult": () => (/* binding */ handleApiResult)
/* harmony export */ });
const ajax = async ({
  url,
  method = 'GET',
  data,
  isInclude = false,
  headers = {
    "Content-Type": "application/json"
  }
}) => {
  let credentials = isInclude ? 'include' : 'omit';
  let res = await fetch(url, {
    method,
    credentials,
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json()).catch(e => ({
    err_no: 1,
    err_msg: '接口出错'
  }));
  return handleApiResult(res);
};
const handleApiResult = apiRes => {
  return Object.assign({}, apiRes, {
    success: apiRes.err_no === 0
  });
};

/***/ }),

/***/ "./src/pages/background/api/interact.js":
/*!**********************************************!*\
  !*** ./src/pages/background/api/interact.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancelDigg": () => (/* binding */ cancelDigg),
/* harmony export */   "diggQueryPage": () => (/* binding */ diggQueryPage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/pages/background/api/index.js");


/*
* 获取点赞列表
* @param item_type 4：沸点
* @param sort_type 2：时间倒序
* */
const diggQueryPage = ({
  cursor = 0,
  item_type = 4,
  sort_type = 2,
  user_id
}) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/interact_api/v1/digg/query_page`,
  method: 'POST',
  data: {
    cursor: cursor.toString(),
    item_type,
    sort_type,
    user_id
  }
});

/*
* 取消点赞
* @param itemId id
* @param itemType 4：沸点
* */
const cancelDigg = (itemId, itemType) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/interact_api/v1/digg/cancel`,
  method: 'POST',
  data: {
    item_id: itemId,
    item_type: itemType
  },
  isInclude: true
});

/***/ }),

/***/ "./src/pages/background/api/message.js":
/*!*********************************************!*\
  !*** ./src/pages/background/api/message.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNotReadMessageCount": () => (/* binding */ getNotReadMessageCount)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/pages/background/api/index.js");
// 消息相关

const getNotReadMessageCount = () => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/interact_api/v1/message/count`,
  isInclude: true
});

/***/ }),

/***/ "./src/pages/background/api/recommend.js":
/*!***********************************************!*\
  !*** ./src/pages/background/api/recommend.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTopicShortMsgList": () => (/* binding */ getTopicShortMsgList)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/pages/background/api/index.js");

const getTopicShortMsgList = ({
  topic_id,
  cursor = 0,
  id_type = 4,
  limit = 10,
  sort_type = 500
}) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/recommend_api/v1/short_msg/topic`,
  method: "POST",
  data: {
    topic_id,
    cursor: cursor.toString(),
    id_type,
    limit,
    sort_type
  }
});

/***/ }),

/***/ "./src/pages/background/api/tag.js":
/*!*****************************************!*\
  !*** ./src/pages/background/api/tag.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryTopicDetail": () => (/* binding */ queryTopicDetail)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/pages/background/api/index.js");


/*
* 获取沸点圈子详情
* */

const queryTopicDetail = topicId => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/tag_api/v1/query_topic_detail`,
  method: 'POST',
  data: {
    topic_id: topicId
  }
});

/***/ }),

/***/ "./src/pages/background/api/user.js":
/*!******************************************!*\
  !*** ./src/pages/background/api/user.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIn": () => (/* binding */ checkIn),
/* harmony export */   "collectBug": () => (/* binding */ collectBug),
/* harmony export */   "drawLottery": () => (/* binding */ drawLottery),
/* harmony export */   "getDynamic": () => (/* binding */ getDynamic),
/* harmony export */   "getLotteryConfig": () => (/* binding */ getLotteryConfig),
/* harmony export */   "getNotCollectBug": () => (/* binding */ getNotCollectBug),
/* harmony export */   "getSelfInfo": () => (/* binding */ getSelfInfo),
/* harmony export */   "getUserInfo": () => (/* binding */ getUserInfo),
/* harmony export */   "logout": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/pages/background/api/index.js");
// 用户相关


/*
* 用户登出
* */
const logout = () => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: 'https://juejin.cn/passport/web/logout/',
  isInclude: true
});

/*
* 登录人获取自己的信息
* */
const getSelfInfo = () => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/user_api/v1/user/get_info_pack`,
  method: 'POST',
  data: {
    pack_req: {
      user_counter: true,
      user_growth_info: true,
      user: true
    }
  },
  isInclude: true
});

/*
* 获取用户信息
* @param userId 用户id
* */
const getUserInfo = userId => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/user_api/v1/user/get?user_id=${userId}`
});

/*
* 用户签到
* */
const checkIn = () => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: 'https://api.juejin.cn/growth_api/v1/check_in',
  method: 'POST',
  isInclude: true
});

/*
* 获取未收集的bug
* */
const getNotCollectBug = () => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/user_api/v1/bugfix/not_collect`,
  method: 'POST',
  headers: {},
  isInclude: true
});

/*
* 收集bug
* @param bug bug对象
* */
const collectBug = bug => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/user_api/v1/bugfix/collect`,
  method: 'POST',
  data: bug,
  isInclude: true
});

/*
* 获取今日免费抽奖次数
* */
const getLotteryConfig = () => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/growth_api/v1/lottery_config/get`,
  isInclude: true
});

/*
* 抽奖
* */
const drawLottery = () => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/growth_api/v1/lottery/draw`,
  method: 'POST',
  isInclude: true
});

/*
* 获取用户动态
* @param userId 用户id
* @param cursor 偏移数
* */
const getDynamic = (userId, cursor) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.ajax)({
  url: `https://api.juejin.cn/user_api/v1/user/dynamic?user_id=${userId}&cursor=${cursor}`
});

/***/ }),

/***/ "./src/pages/background/chrome.js":
/*!****************************************!*\
  !*** ./src/pages/background/chrome.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContextMenu": () => (/* binding */ createContextMenu),
/* harmony export */   "createTab": () => (/* binding */ createTab),
/* harmony export */   "getStorage": () => (/* binding */ getStorage),
/* harmony export */   "queryTabs": () => (/* binding */ queryTabs),
/* harmony export */   "removeAllContextMenus": () => (/* binding */ removeAllContextMenus),
/* harmony export */   "sendBasicNotifications": () => (/* binding */ sendBasicNotifications),
/* harmony export */   "sendMessageToTab": () => (/* binding */ sendMessageToTab),
/* harmony export */   "setStorage": () => (/* binding */ setStorage),
/* harmony export */   "updateTab": () => (/* binding */ updateTab)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.ts");
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tool */ "./src/tool/index.js");




/*
* 设置缓存
* @param key 名称
* @param value 数据
* @param minute 缓存多少分钟，如果没有则永久缓存
* */
const setStorage = async (key, value, minute) => {
  let setTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD HH:mm:ss');
  let overdueTime = minute !== undefined ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(setTime).add(minute, 'minute').format('YYYY-MM-DD HH:mm:ss') : null;
  let storage = {
    [key]: {
      value,
      setTime,
      overdueTime
    }
  };
  await chrome.storage.local.set(storage);
};

/*
* 获取缓存
* @param key 名称
* */
const getStorage = async key => {
  let storage = (await chrome.storage.local.get())[key];
  if (!storage) return null;
  // 如果结束时间存在 && 当前时间不在结束之间之前
  if (storage.overdueTime && !dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isBefore(storage.overdueTime)) return null;
  return storage.value;
};

/*
* 发送桌面通知
* @param title 标题
* @param message 内容
* */
const sendBasicNotifications = (title, message) => {
  chrome.notifications.getPermissionLevel(level => {
    if (level === 'granted') {
      chrome.notifications.create((0,_tool__WEBPACK_IMPORTED_MODULE_2__.uuid)(), {
        type: 'basic',
        title,
        message,
        iconUrl: _config__WEBPACK_IMPORTED_MODULE_1__["default"].iconUrl
      });
    }
  });
};

/*
* 创建tab
* @param tab 标签信息
* */
const createTab = tab => {
  return chrome.tabs.create(tab);
};

/*
* 查询tabs
* @param search 需要查询的条件
* */
const queryTabs = (search = {}) => {
  return chrome.tabs.query(search);
};

/*
* 修改tab
* @param tabId 标签id
* @param tab 标签信息
* */
const updateTab = (tabId, tab) => {
  return chrome.tabs.update(tabId, tab);
};

/*
* 给标签页发信息
* */
const sendMessageToTab = (tabId, info) => {
  return chrome.tabs.sendMessage(tabId, Object.assign(info, {
    from: 'background'
  }));
};

/*
* 创建菜单
* @param menu 按钮信息
* */
const createContextMenu = menu => {
  return chrome.contextMenus.create(menu);
};

/*
* 删除全部菜单
* */
const removeAllContextMenus = () => {
  return chrome.contextMenus.removeAll();
};

/***/ }),

/***/ "./src/pages/background/controller/contextMenus.js":
/*!*********************************************************!*\
  !*** ./src/pages/background/controller/contextMenus.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contextMenusOnClick": () => (/* binding */ contextMenusOnClick),
/* harmony export */   "resetContextMenus": () => (/* binding */ resetContextMenus)
/* harmony export */ });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/pages/background/controller/user.js");
/* harmony import */ var _chrome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chrome */ "./src/pages/background/chrome.js");


let resetContextMenusIng = false;

/*
* 重置所有右键菜单
* */
const resetContextMenus = async () => {
  if (resetContextMenusIng) return;
  resetContextMenusIng = true;
  // 移除所有菜单
  await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.removeAllContextMenus)();
  // 获取用户信息
  let user = await (0,_user__WEBPACK_IMPORTED_MODULE_0__.getSelfStorage)();
  // 已登录
  if (user) {
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)({
      id: "MENU_PARENT",
      title: `${user.user_basic.user_name}的掘金`,
      contexts: ["all"]
    });
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)({
      id: "SELF_HOME",
      title: "我的主页",
      parentId: "MENU_PARENT",
      contexts: ["all"]
    });
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)({
      id: "SELF_NOTIFICATION",
      title: "我的消息",
      parentId: "MENU_PARENT",
      contexts: ["all"]
    });
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)({
      id: "separator1",
      type: "separator",
      parentId: "MENU_PARENT",
      contexts: ["all"]
    });
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)({
      id: "SIGN_IN",
      title: "快速签到",
      parentId: "MENU_PARENT",
      contexts: ["all"]
    });
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)({
      id: "BUG_FIX",
      title: "收集BUG",
      parentId: "MENU_PARENT",
      contexts: ["all"]
    });
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)({
      id: 'FREE_LUCKY_DRAW',
      title: "免费抽奖",
      parentId: "MENU_PARENT",
      contexts: ["all"]
    });
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)({
      id: "separator2",
      type: "separator",
      parentId: "MENU_PARENT",
      contexts: ["all"]
    });
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)({
      id: "LOGOUT",
      title: "登出",
      parentId: "MENU_PARENT",
      contexts: ["all"]
    });
  } else {
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)({
      id: "OPEN_JUEJIN",
      type: "normal",
      title: `掘金首页`,
      contexts: ["all"]
    });
  }
  resetContextMenusIng = false;
};

/*
*  菜单被点击
* */
const contextMenusOnClick = async (info, tab) => {
  let user = await (0,_user__WEBPACK_IMPORTED_MODULE_0__.getSelfStorage)();
  let {
    menuItemId
  } = info;
  let {
    windowId
  } = tab;
  if (menuItemId === "OPEN_JUEJIN") {
    // 打开掘金
    (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createTab)({
      url: `https://juejin.cn/`,
      selected: true,
      windowId
    });
  }
  if (menuItemId === "SELF_HOME") {
    // 我的主页
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createTab)({
      url: `https://juejin.cn/user/${user.user_basic.user_id}`,
      selected: true,
      windowId
    });
  }
  if (menuItemId === "SELF_NOTIFICATION") {
    // 我的消息
    await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.createTab)({
      url: `https://juejin.cn/notification`,
      selected: true,
      windowId
    });
  }
  if (menuItemId === "LOGOUT") {
    // 登出
    await (0,_user__WEBPACK_IMPORTED_MODULE_0__.logout)();
  }
  if (menuItemId === "SIGN_IN") {
    // 签到
    await (0,_user__WEBPACK_IMPORTED_MODULE_0__.signin)();
  }
  if (menuItemId === "BUG_FIX") {
    // fixbug
    await (0,_user__WEBPACK_IMPORTED_MODULE_0__.bugfix)();
  }
  if (menuItemId === 'FREE_LUCKY_DRAW') {
    // 免费抽奖
    await (0,_user__WEBPACK_IMPORTED_MODULE_0__.freeLucky)();
  }
};

/***/ }),

/***/ "./src/pages/background/controller/message.js":
/*!****************************************************!*\
  !*** ./src/pages/background/controller/message.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runtimeOnMessage": () => (/* binding */ runtimeOnMessage)
/* harmony export */ });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/pages/background/controller/user.js");
/* harmony import */ var _pin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pin */ "./src/pages/background/controller/pin.js");
// 消息相关




// 事件处理map
const eventHandleMap = {
  'get-self-info': () => (0,_user__WEBPACK_IMPORTED_MODULE_0__.getSelfStorage)(),
  // 获取个人信息
  'get-user-pins': data => (0,_pin__WEBPACK_IMPORTED_MODULE_1__.getUserPins)(data),
  // 获取用户沸点列表
  'remove-pin': data => (0,_pin__WEBPACK_IMPORTED_MODULE_1__.removePin)(data),
  // 删除沸点
  'get-pin-club-info': data => (0,_pin__WEBPACK_IMPORTED_MODULE_1__.getPinClubInfo)(data),
  // 获取沸点圈子详情
  'get-pin-club-week-user-rank': data => (0,_pin__WEBPACK_IMPORTED_MODULE_1__.getPinClubWeekUserRank)(data),
  //获取圈子一周废物榜
  'get-user-zan-pins': data => (0,_pin__WEBPACK_IMPORTED_MODULE_1__.getUserZanPins)(data),
  // 获取用户点赞列表
  'cancel-zan-pin': data => (0,_pin__WEBPACK_IMPORTED_MODULE_1__.cancelZanPin)(data),
  // 取消沸点点赞
  'get-year-dynamic': data => (0,_user__WEBPACK_IMPORTED_MODULE_0__.getYearDynamic)(data),
  // 获取年度动态
  'get-random-text': () => (0,_pin__WEBPACK_IMPORTED_MODULE_1__.getRandomText)()
};
const handleOnMessage = async (event, data, callback) => {
  callback(await eventHandleMap[event](data));
};

/*
* 当页面发来了消息
* */
const runtimeOnMessage = (request, sender, sendResponse) => {
  let {
    to,
    event,
    data
  } = request;
  if (to !== 'background') return;
  handleOnMessage(event, data, sendResponse);
  return true;
};

/***/ }),

/***/ "./src/pages/background/controller/pin.js":
/*!************************************************!*\
  !*** ./src/pages/background/controller/pin.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancelZanPin": () => (/* binding */ cancelZanPin),
/* harmony export */   "getPinClubInfo": () => (/* binding */ getPinClubInfo),
/* harmony export */   "getPinClubWeekUserRank": () => (/* binding */ getPinClubWeekUserRank),
/* harmony export */   "getRandomText": () => (/* binding */ getRandomText),
/* harmony export */   "getUserPins": () => (/* binding */ getUserPins),
/* harmony export */   "getUserZanPins": () => (/* binding */ getUserZanPins),
/* harmony export */   "removePin": () => (/* binding */ removePin)
/* harmony export */ });
/* harmony import */ var _api_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/content */ "./src/pages/background/api/content.js");
/* harmony import */ var _api_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/tag */ "./src/pages/background/api/tag.js");
/* harmony import */ var _api_recommend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/recommend */ "./src/pages/background/api/recommend.js");
/* harmony import */ var _chrome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chrome */ "./src/pages/background/chrome.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/pages/background/controller/user.js");
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tool */ "./src/tool/index.js");
/* harmony import */ var _api_interact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/interact */ "./src/pages/background/api/interact.js");
// 沸点相关








/*
* 获取用户沸点列表
* */
const getUserPins = async userId => {
  // 先获取数量
  let res = await (0,_api_content__WEBPACK_IMPORTED_MODULE_0__.getShortMsgList)({
    userId,
    limit: 1
  });
  if (!res.success) return [];
  res = await (0,_api_content__WEBPACK_IMPORTED_MODULE_0__.getShortMsgList)({
    userId,
    limit: res.count
  });
  return res.success ? res.data : [];
};

/*
* 删除沸点
* */
const removePin = async pin => {
  let {
    success
  } = await (0,_api_content__WEBPACK_IMPORTED_MODULE_0__.removeShortMsg)(pin.msg_id);
  return success;
};

/*
* 获取用户点赞列表
* */
const getUserZanPins = async userId => {
  let {
    success,
    data,
    count
  } = await (0,_api_interact__WEBPACK_IMPORTED_MODULE_6__.diggQueryPage)({
    user_id: userId,
    item_type: 4
  });
  return success ? {
    pins: data,
    count: count
  } : {
    pins: [],
    count: 0
  };
};

/*
* 取消点赞
* */
const cancelZanPin = async pin => {
  let {
    success
  } = await (0,_api_interact__WEBPACK_IMPORTED_MODULE_6__.cancelDigg)(pin.msg_id, 4);
  return success;
};

/*
* 获取圈子详情
* 缓存7天
* */
const getPinClubInfo = async clubId => {
  let storageKey = `pin-club-info-${clubId}`;
  let storage = await (0,_chrome__WEBPACK_IMPORTED_MODULE_3__.getStorage)(storageKey);
  if (storage) return storage;
  let {
    success,
    data
  } = await (0,_api_tag__WEBPACK_IMPORTED_MODULE_1__.queryTopicDetail)(clubId);
  if (!success) return null;
  await (0,_chrome__WEBPACK_IMPORTED_MODULE_3__.setStorage)(storageKey, data, 60 * 24 * 7);
  return data;
};

/*
* 获取圈子一周废物榜
* @param clubId 圈子id
* @param isRefresh 是否需要更新缓存
* */
const getPinClubWeekUserRank = async ({
  clubId,
  isRefresh
}) => {
  let storageKey = `pin-club-week-user-rank-${clubId}`;
  let storage = await (0,_chrome__WEBPACK_IMPORTED_MODULE_3__.getStorage)(storageKey);
  if (storage && !isRefresh) return storage;
  storage = {
    time: (0,_tool__WEBPACK_IMPORTED_MODULE_5__.dayjs)().format('YYYY-MM-DD HH:mm:ss'),
    rank: []
  };
  let {
    success,
    data
  } = await (0,_api_recommend__WEBPACK_IMPORTED_MODULE_2__.getTopicShortMsgList)({
    topic_id: clubId,
    limit: 1000
  });
  if (!success) return storage;
  let userMap = {};
  let targetTime = (0,_tool__WEBPACK_IMPORTED_MODULE_5__.dayjs)().startOf('week').valueOf();
  for (let msg of data) {
    if (msg.msg_Info.ctime * 1000 < targetTime) break;
    let {
      user_id
    } = msg.msg_Info;
    userMap[user_id] ? userMap[user_id].push(msg) : userMap[user_id] = [msg];
  }
  let users = [];
  for (let userId in userMap) {
    users.push({
      userId,
      msgs: userMap[userId]
    });
  }
  users.sort((a, b) => b.msgs.length - a.msgs.length);
  let rank = [];
  let userIds = [];
  for (let user of users) {
    if (!rank.length) {
      userIds.push(user.userId);
      rank.push({
        msgCount: user.msgs.length,
        users: [user]
      });
    } else {
      let {
        msgCount,
        users
      } = rank[rank.length - 1];
      if (user.msgs.length === msgCount) {
        // 最多10个
        if (users.length >= 10) continue;
        userIds.push(user.userId);
        users.push(user);
      } else {
        if (rank.length < 3) {
          userIds.push(user.userId);
          rank.push({
            msgCount: user.msgs.length,
            users: [user]
          });
        } else {
          break;
        }
      }
    }
  }
  let userList = await Promise.all(userIds.map(userId => (0,_user__WEBPACK_IMPORTED_MODULE_4__.getUserInfo)(userId))).catch(e => []);
  userMap = {};
  for (let user of userList) {
    if (user) userMap[user.user_id] = user;
  }
  rank.forEach(r => {
    r.users.forEach(user => {
      user.userInfo = userMap[user.userId];
    });
  });
  storage.rank = rank;
  await (0,_chrome__WEBPACK_IMPORTED_MODULE_3__.setStorage)(storageKey, storage);
  return storage;
};

/*
* 获取随机文本
* */
const getRandomText = async () => {
  let res = await fetch(`https://www.mxnzp.com/api/holiday/single/${(0,_tool__WEBPACK_IMPORTED_MODULE_5__.dayjs)().format('YYYYMMDD')}?ignoreHoliday=false&app_id=nhhhdemgpmhixsnv&app_secret=Y296dDlVdVVhRnhucmJmUnhvRVY2UT09`, {
    credentials: "include",
    method: "GET",
    crossorigin: true
  }).then(res => res.json());
  if (res.code !== 1) return {
    success: false,
    data: '',
    err_msg: res.msg
  };
  let weekdayTranslateMap = {
    1: "周一",
    2: "周二",
    3: "周三",
    4: "周四",
    5: "周五",
    6: "周六",
    7: "周日"
  };
  let todayInfo = res.data;
  let todayStr = `${todayInfo.date}｜${weekdayTranslateMap[todayInfo.weekDay]}｜${todayInfo.typeDes}｜阴历: ${todayInfo.lunarCalendar}\n宜: ${todayInfo.suit}\n忌: ${todayInfo.avoid}`;
  await (0,_tool__WEBPACK_IMPORTED_MODULE_5__.sleep)(1);
  res = await fetch('https://www.mxnzp.com/api/daily_word/recommend?count=1&app_id=nhhhdemgpmhixsnv&app_secret=Y296dDlVdVVhRnhucmJmUnhvRVY2UT09', {
    credentials: "include",
    method: "GET",
    crossorigin: true
  }).then(res => res.json());
  if (res.code !== 1) return {
    success: false,
    data: '',
    err_msg: res.msg
  };
  let textStr = res.data?.[0].content || "就不给你看~~";
  let resStr = textStr + '\n\n' + todayStr;
  return {
    success: true,
    data: resStr,
    err_msg: ''
  };
};

/***/ }),

/***/ "./src/pages/background/controller/tabs.js":
/*!*************************************************!*\
  !*** ./src/pages/background/controller/tabs.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabOnUpdate": () => (/* binding */ tabOnUpdate)
/* harmony export */ });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/pages/background/controller/user.js");
/* harmony import */ var _contextMenus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contextMenus */ "./src/pages/background/controller/contextMenus.js");
/* harmony import */ var _chrome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chrome */ "./src/pages/background/chrome.js");



/*
* 当标签页发生变化
* */

const tabOnUpdate = async (tabId, changeInfo, tab) => {
  // 是否完毕
  if (changeInfo.status !== "complete") return;
  // 是否是掘金的标签页
  let isJueJin = tab.url.includes('juejin.cn');
  if (isJueJin) await (0,_user__WEBPACK_IMPORTED_MODULE_0__.resetSelf)();
  await (0,_contextMenus__WEBPACK_IMPORTED_MODULE_1__.resetContextMenus)();
  if (isJueJin) (0,_chrome__WEBPACK_IMPORTED_MODULE_2__.sendMessageToTab)(tabId, {
    event: "page-change-complete"
  });
};

/***/ }),

/***/ "./src/pages/background/controller/user.js":
/*!*************************************************!*\
  !*** ./src/pages/background/controller/user.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bugfix": () => (/* binding */ bugfix),
/* harmony export */   "freeLucky": () => (/* binding */ freeLucky),
/* harmony export */   "getSelfStorage": () => (/* binding */ getSelfStorage),
/* harmony export */   "getUserInfo": () => (/* binding */ getUserInfo),
/* harmony export */   "getYearDynamic": () => (/* binding */ getYearDynamic),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "loopNotReadMessageCount": () => (/* binding */ loopNotReadMessageCount),
/* harmony export */   "resetSelf": () => (/* binding */ resetSelf),
/* harmony export */   "setSelfStorage": () => (/* binding */ setSelfStorage),
/* harmony export */   "signin": () => (/* binding */ signin)
/* harmony export */ });
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/user */ "./src/pages/background/api/user.js");
/* harmony import */ var _chrome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chrome */ "./src/pages/background/chrome.js");
/* harmony import */ var _contextMenus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contextMenus */ "./src/pages/background/controller/contextMenus.js");
/* harmony import */ var _api_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/message */ "./src/pages/background/api/message.js");
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tool */ "./src/tool/index.js");
// 用户相关






/*
* 获取登录用户缓存
* */
const getSelfStorage = async () => {
  return await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.getStorage)('self-info');
};

/*
* 设置登录用户缓存
* */
const setSelfStorage = async storage => {
  await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.setStorage)('self-info', storage);
};

/*重置用户信息*/
const resetSelf = async () => {
  let {
    success,
    data
  } = await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.getSelfInfo)();
  if (!success) return setSelfStorage(null);
  await setSelfStorage(data);
  return data;
};

/*
* 获取用户信息
* 缓存7天
* */
const getUserInfo = async userId => {
  let storageKey = `user-info-${userId}`;
  let storage = await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.getStorage)(storageKey);
  if (storage) return storage;
  let {
    success,
    data
  } = await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.getUserInfo)(userId);
  if (!success) return null;
  await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.setStorage)(storageKey, data, 60 * 24 * 7);
  return data;
};

/*
* 获取年度用户动态列表
* @param userId 用户id
* @param isRefresh 是否获取最新，如果为否永远获取缓存
* */
const getYearDynamic = async ({
  userId,
  isRefresh
}) => {
  let storageKey = `year-dynamic-${userId}`;
  // 获取缓存
  let storage = await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.getStorage)(storageKey);
  if (storage && !isRefresh) return storage;
  storage = {
    count: 0,
    time: (0,_tool__WEBPACK_IMPORTED_MODULE_4__.dayjs)().format('YYYY-MM-DD HH:mm:ss'),
    info: {}
  };
  // 先获取总数
  let {
    success,
    data
  } = await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.getDynamic)(userId, 0);
  if (!success) return storage;
  // count是动态总数
  let {
    count,
    list
  } = data;
  storage.count = count;
  let dynamics = [...list];
  // 每份20个
  let cursors = new Array(Math.ceil(count / 20)).fill(null).map((item, index) => 20 * index);
  // 第一个已经获取过，移除
  cursors.shift();
  // 取出前30个
  cursors = cursors.splice(0, 20);
  // 开始并发请求
  let dynamicsRes = await Promise.all(cursors.map(cursor => (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.getDynamic)(userId, cursor)));
  dynamicsRes.forEach(dynamicRes => {
    if (dynamicRes.success) {
      dynamics.push(...dynamicRes.data.list);
    }
  });
  // 开始处理数据
  for (let dynamic of dynamics) {
    let year = (0,_tool__WEBPACK_IMPORTED_MODULE_4__.dayjs)(dynamic.time * 1000).format('YYYY');
    let date = (0,_tool__WEBPACK_IMPORTED_MODULE_4__.dayjs)(dynamic.time * 1000).format('MM-DD');
    if (storage.info[year]) {
      if (storage.info[year][date]) {
        storage.info[year][date].push(dynamic.action);
      } else {
        storage.info[year][date] = [dynamic.action];
      }
    } else {
      storage.info[year] = {
        [date]: [dynamic.action]
      };
    }
  }
  await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.setStorage)(storageKey, storage);
  return storage;
};

/*
* 开始循环获取未读消息数
* */
const loopNotReadMessageCount = () => {
  setInterval(async () => {
    if (await getSelfStorage()) {
      let {
        success,
        data
      } = await (0,_api_message__WEBPACK_IMPORTED_MODULE_3__.getNotReadMessageCount)();
      if (!success) return;
      // count[1]：点赞和收藏  count[3]：评论
      let {
        count,
        total
      } = data;
      let items = [];
      if (count[1]) items.push(`点赞和收藏：${count[1]}条`);
      if (count[3]) items.push(`评论：${count[3]}条`);
      let notReadStrStorage = await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.getStorage)("message-not-read");
      // 有未读且详情文字不相同
      if (total && notReadStrStorage !== JSON.stringify(items)) {
        (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.sendBasicNotifications)(`您有${total}条掘金未读消息，以下为详细内容`, `${items.join('\n')}`);
      }
      await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.setStorage)("message-not-read", JSON.stringify(items));
    }
  }, 1000 * 10);
};

/*
* 用户登出
* 登出后刷新所有相关页面
* */
const logout = async () => {
  (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.logout)();
  // 获取所有掘金相关页面
  let tabs = await (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.queryTabs)({
    url: 'https://juejin.cn/*'
  });
  // 将登录用户缓存清空
  await setSelfStorage(null);
  // 重置菜单
  await (0,_contextMenus__WEBPACK_IMPORTED_MODULE_2__.resetContextMenus)();
  // 刷新页面
  for (let tab of tabs) {
    (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.updateTab)(tab.id, {
      url: tab.url
    });
  }
};

/*
* 用户签到
* */
const signin = async () => {
  let {
    success,
    data,
    err_msg
  } = await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.checkIn)();
  (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.sendBasicNotifications)("掘金签到：" + (success ? "成功" : "失败"), success ? `本次新增矿石：${data.incr_point}，当前矿石：${data.sum_point}` : err_msg);
};

/*
* 修复bug
* */
const bugfix = async () => {
  // 获取未修复bug
  let {
    success,
    data,
    err_msg
  } = await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.getNotCollectBug)();
  (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.sendBasicNotifications)("掘金BugFix：" + (success ? "成功" : "失败"), success ? `今日掘金bugfix：${data.length}` : err_msg);
  if (!success) return;
  // 开始修复bug
  data.forEach(bug => (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.collectBug)(bug));
};

/*
* 抽奖
* */
const freeLucky = async () => {
  // 获取今日免费抽奖次数
  let res = await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.getLotteryConfig)();
  if (!res.success) return (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.sendBasicNotifications)('今日免费抽奖失败', res.err_msg);
  if (!res.data.free_count) return (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.sendBasicNotifications)('今日免费抽奖失败', '今日免费抽奖次数已经用完');
  // 开始抽奖
  res = await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.drawLottery)();
  if (!res.success) return (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.sendBasicNotifications)('今日免费抽奖失败', res.err_msg);
  (0,_chrome__WEBPACK_IMPORTED_MODULE_1__.sendBasicNotifications)('今日免费抽奖成功', `恭喜抽到：${res.data.lottery_name}`);
};

/***/ }),

/***/ "./src/tool/index.js":
/*!***************************!*\
  !*** ./src/tool/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dayjs": () => (/* binding */ dayjs),
/* harmony export */   "getDynamicActionsCount": () => (/* binding */ getDynamicActionsCount),
/* harmony export */   "getDynamicScoreByActions": () => (/* binding */ getDynamicScoreByActions),
/* harmony export */   "sleep": () => (/* binding */ sleep),
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/weekday */ "./node_modules/dayjs/plugin/weekday.js");
/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/locale/zh-cn */ "./node_modules/dayjs/locale/zh-cn.js");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_3__);




dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_1___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().locale('zh-cn');
const dayjs = (dayjs__WEBPACK_IMPORTED_MODULE_0___default());

/*
* 获取uuid
* */
const uuid = () => {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";
  var uuid = s.join("");
  return uuid;
};

/*
* 睡眠函数
* */
const sleep = x => {
  return new Promise(res => {
    setTimeout(() => {
      res();
    }, x * 1000);
  });
};

/*
* 获取掘金动态分数计算
* 0：发布文章
* 1：点赞文章
* 2：发布沸点
* 3：点赞沸点
* 4、关注用户
* 5、关注标签
* */
const getDynamicScoreByActions = actions => {
  if (!actions.length) return 0;
  let score = 0;
  actions.forEach(action => {
    if (action === 0) score += 70;
    if (action === 1) score += 20;
    if (action === 2) score += 10;
    if (action === 3) score += 5;
    if (action === 4) score += 10;
  });
  // 活跃度等级
  // Lv0 —— 活跃度 0
  // Lv1 —— 活跃度 [1, 20)
  // Lv2 —— 活跃度 [20, 60)
  // Lv3 —— 活跃度 [60, 80)
  // Lv4 —— 活跃度 [80, 100)
  return Math.min(score, 100);
};
const getDynamicActionsCount = actions => {
  if (!actions.length) return {};
  let count = {};
  actions.forEach(action => {
    count[action] ? count[action]++ : count[action] = 1;
  });
  return count;
};

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/locale/zh-cn.js":
/*!********************************************!*\
  !*** ./node_modules/dayjs/locale/zh-cn.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,_){ true?module.exports=_(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js")):0}(this,(function(e){"use strict";function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,_){return"W"===_?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,_){var t=100*e+_;return t<600?"凌晨":t<900?"早上":t<1100?"上午":t<1300?"中午":t<1800?"下午":"晚上"}};return t.default.locale(d,null,!0),d}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/***/ (function(module) {

!function(r,e){ true?module.exports=e():0}(this,(function(){"use strict";return function(r,e,t){r=r||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,e,t,o){return n.fromToBase(r,e,t,o)}t.en.relativeTime=o,n.fromToBase=function(e,n,i,d,u){for(var f,a,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(f=d?t(e).diff(i,y.d,!0):i.diff(e,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(f));if(s=f>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),a="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return a;var M=s?l.future:l.past;return"function"==typeof M?M(a):M.replace("%s",a)},n.to=function(r,e){return i(r,e,this,!0)},n.from=function(r,e){return i(r,e,this)};var d=function(r){return r.$u?t.utc():t()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/weekday.js":
/*!**********************************************!*\
  !*** ./node_modules/dayjs/plugin/weekday.js ***!
  \**********************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t){t.prototype.weekday=function(e){var t=this.$locale().weekStart||0,i=this.$W,n=(i<t?i+7:i)-t;return this.$utils().u(e)?n:this.subtract(n,"day").add(e,"day")}}}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./src/pages/background/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/user */ "./src/pages/background/controller/user.js");
/* harmony import */ var _controller_contextMenus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/contextMenus */ "./src/pages/background/controller/contextMenus.js");
/* harmony import */ var _controller_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/tabs */ "./src/pages/background/controller/tabs.js");
/* harmony import */ var _controller_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/message */ "./src/pages/background/controller/message.js");





// chrome.storage.local.clear();
chrome.contextMenus.onClicked.addListener(_controller_contextMenus__WEBPACK_IMPORTED_MODULE_1__.contextMenusOnClick);
chrome.tabs.onUpdated.addListener(_controller_tabs__WEBPACK_IMPORTED_MODULE_2__.tabOnUpdate);
chrome.runtime.onMessage.addListener(_controller_message__WEBPACK_IMPORTED_MODULE_3__.runtimeOnMessage);
const init = async () => {
  // 重新获取用户信息
  await (0,_controller_user__WEBPACK_IMPORTED_MODULE_0__.resetSelf)();
  // 重置按钮组
  await (0,_controller_contextMenus__WEBPACK_IMPORTED_MODULE_1__.resetContextMenus)();
  // 开始循环获取未读消息数量
  (0,_controller_user__WEBPACK_IMPORTED_MODULE_0__.loopNotReadMessageCount)();
};
init();
})();

/******/ })()
;
//# sourceMappingURL=background.main.js.map