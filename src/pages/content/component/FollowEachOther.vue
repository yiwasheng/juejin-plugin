<template>
  <el-button class="follfow-each-other" type="primary" @click="openListVisible">
    查看互相关注
  </el-button>
  <el-dialog v-model="listVisible" :title="`我的关注 (${followees.length})`" width="50%" class="plugin-dialog"
             :close-on-press-escape="false" :close-on-click-modal="false" :show-close="false">
    <el-table :data="tableData" border style="width: 100%" size="small" height="50vh" v-loading="loading" @selection-change="selectionChange">
      <el-table-column type="selection" width="55" align="center" v-if="!removing"/>
      <el-table-column width="55" align="center" v-if="removing">
        <template #default="scope">
          <el-icon v-if="scope.row.removeStatus===1" size="16">
            <Loading/>
          </el-icon>
          <el-icon v-if="scope.row.removeStatus===2" size="16" color="blue">
            <CircleCheck/>
          </el-icon>
          <el-icon v-if="scope.row.removeStatus===3" size="16" color="red">
            <CircleClose/>
          </el-icon>
        </template>
      </el-table-column>
      <el-table-column label="用户名" prop="user_name" width="auto" align="center" sortable>
        <template #default="scope">
          <a :href="`https://juejin.cn/user/${scope.row.user_id}`" target="_blank">{{ scope.row.user_name }}</a>
        </template>
      </el-table-column>
      <el-table-column label="是否互关" prop="is_followeo" width="110" align="center" sortable :filters="[
          { text: '是', value: true },
          { text: '否', value: false },
      ]" :filter-method="(value, row) => value === row.is_followeo">
        <template #default="{ row }">
          <el-tag :type="row.is_followeo ? 'success' : 'danger'">{{ row.is_followeo ? '是' : '否' }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <el-button :disabled="removing" type="primary" v-if="selected.length" @click="unfollow">取消关注</el-button>
      <el-button :disabled="removing" @click="listVisible=false">关闭</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import {ajax, EVENT_MAP} from "@/pages/content/api";
import {getCurrentInstance, ref} from "vue";
import {sleep} from "@/tool";

let {proxy} = getCurrentInstance();

const openListVisible = () => {
  load()
}

const type = ref('followees')
const setTableData = () => {
  const idList = followers.value.map(item => item.user_id)
  followees.value.forEach(item => {
    item.is_followeo = idList.includes(item.user_id)
  })
  tableData.value = followees.value
}

const selected = ref([])
const selectionChange = (rows) => {
  selected.value = rows
}

const removing = ref(false)
const unfollow = async() => {
  removing.value = true;
  for (let user of selected.value) {
    user.removeStatus = 1
    let {success} = await ajax(EVENT_MAP.UN_FOLLOW, user);
    await sleep(1)
    if (success) {
      user.removeStatus = 2
    } else {
      user.removeStatus = 3
    }
  }
  removing.value = false;
  selected.value = [];
  await load()
}

const tableData = ref([])
const listVisible = ref(false)
const loading = ref(false)
const followees = ref([])
const followers = ref([])
const load = async () => {
  listVisible.value = true
  let userId = proxy.$self.user_basic.user_id;
  loading.value = true;
  followees.value = await ajax(EVENT_MAP.GET_ALL_FOLLOWEES, userId);
  followers.value = await ajax(EVENT_MAP.GET_ALL_FOLLOWERS, userId);
  loading.value = false;
  setTableData()
}

</script>

<style scoped lang="less">
.follfow-each-other {
  width: 100%;
  margin-bottom: 10px;
}
</style>
