// 用户相关
import {ajax} from "./index";
import {sleep} from "../../../tool";

/*
* 用户登出
* */
export const logout = () => ajax({
    url: 'https://juejin.cn/passport/web/logout/',
    isInclude: true
})

/*
* 登录人获取自己的信息
* */
export const getSelfInfo = () => ajax({
    url: `https://api.juejin.cn/user_api/v1/user/get_info_pack`,
    method: 'POST',
    data: {pack_req: {user_counter: true, user_growth_info: true, user: true}},
    isInclude: true
})

/*
* 获取用户信息
* @param userId 用户id
* */
export const getUserInfo = (userId) => ajax({
    url: `https://api.juejin.cn/user_api/v1/user/get?user_id=${userId}`
})

/*
* 用户签到
* */
export const checkIn = () => ajax({
    url: 'https://api.juejin.cn/growth_api/v1/check_in',
    method: 'POST',
    isInclude: true
})

/*
* 获取未收集的bug
* */
export const getNotCollectBug = () => ajax({
    url: `https://api.juejin.cn/user_api/v1/bugfix/not_collect`,
    method: 'POST',
    headers: {},
    isInclude: true,
})

/*
* 收集bug
* @param bug bug对象
* */
export const collectBug = (bug) => ajax({
    url: `https://api.juejin.cn/user_api/v1/bugfix/collect`,
    method: 'POST',
    data: bug,
    isInclude: true,
})

/*
* 获取今日免费抽奖次数
* */
export const getLotteryConfig = () => ajax({
    url: `https://api.juejin.cn/growth_api/v1/lottery_config/get`,
    isInclude: true,
})

/*
* 抽奖
* */
export const drawLottery = () => ajax({
    url: `https://api.juejin.cn/growth_api/v1/lottery/draw`,
    method: 'POST',
    isInclude: true,
})


/*
* 获取用户动态
* @param userId 用户id
* @param cursor 偏移数
* */
export const getDynamic = (userId, cursor) => ajax({
    url: `https://api.juejin.cn/user_api/v1/user/dynamic?user_id=${userId}&cursor=${cursor}`
})

/*
* 获取任务列表
* @param userId 用户id
* @param growthType 类型
* */
export const getTaskList = (userId, growthType = 1) => ajax({
    url: `https://api.juejin.cn/growth_api/v1/user_growth/task_list?uuid=${userId}`,
    method: 'POST',
    data: {growth_type: growthType},
    isInclude: true,
})

/*
* 获取当前成长进度
* @param userId 用户id
* @param growthType 类型
* */
export const getProgress = (userId, growthType = 1) => ajax({
    url: `https://api.juejin.cn/growth_api/v1/user_growth/progress?uuid=${userId}`,
    method: 'POST',
    data: {growth_type: growthType},
    isInclude: true,
})

/*
* 获取我关注的用户
* @param userId 用户id
* @param growthType 类型
* */
export const getAllFollowees = async(userId) => {
    let currentCursor = 0;
    let loaded = false
    const result = []
    do {
        const a = await ajax({
            url: `https://api.juejin.cn/user_api/v1/follow/followees?user_id=${userId}&limit=20&cursor=${currentCursor}`,
            method: 'GET',
            isInclude: true,
        })
        const { data: { count, cursor, data }} = a
        currentCursor = +cursor
        if (currentCursor >= +count) loaded = true
        else await sleep(0.5)
        result.push(...data)
    } while (!loaded)
    return result
}

/*
* 获取关注我的用户
* @param userId 用户id
* @param growthType 类型
* */
export const getAllFollowers = async(userId) => {
    let currentCursor = 0;
    let loaded = false
    const result = []
    do {
        const a = await ajax({
            url: `https://api.juejin.cn/user_api/v1/follow/followers?user_id=${userId}&limit=20&cursor=${currentCursor}`,
            method: 'GET',
            isInclude: true,
        })
        const { data: { count, cursor, data }} = a
        currentCursor = +cursor
        if (currentCursor >= +count) loaded = true
        else await sleep(0.5)
        result.push(...data)
    } while (!loaded)
    return result
}

/*
* 取消关注用户
* @param user 用户对象，包含user_id
* */
export const unFollow = (user) => ajax({
    url: `https://api.juejin.cn/interact_api/v1/follow/undo`,
    method: 'POST',
    data: {id: user.user_id, type: 1},
    isInclude: true,
})
