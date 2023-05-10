<template>
  <div class="addressBook">
    <el-input
        placeholder="请输入搜索联系人"
        v-model="searchText"
        prefix-icon="el-icon-search"
        clearable
        @click="search"
        @keyup.enter.native="search"
        @clear="resetData"
    ></el-input>
    <div class="header text-left">
      <span class="total">共 {{ filteredCards.length }} 个联系人</span>
    </div>
    <el-radio-group v-model="radio">
      <el-radio :label="'all'">所有联系人</el-radio>
      <el-radio :label="'family'">亲人</el-radio>
      <el-radio :label="'friend'">朋友</el-radio>
      <el-radio :label="'schoolmate'">同学</el-radio>
    </el-radio-group>
    <el-row>
      <el-col v-for="(card, index) in currentPageData" :key="index" :span="8">
        <el-card :body-style="{ padding: '0px',height:'100px' }" shadow="hover">
          <div style="display: flex; align-items: center; padding: 14px;">
            <i class="el-icon-user-solid" style="font-size: 20px; padding: 10px;"></i>
            <div style="font-size: 16px;">
              <span v-if="editingIndex === index">
                <el-input v-model="card.name"></el-input>
                <el-input v-model="card.tel"></el-input>
              </span>
              <span v-else>{{ card.name }}<br>{{ card.tel }}</span>
              <!--              <span>{{ card.tel }}</span>-->
            </div>
            <div style="float: right;">
              <el-button
                  type="text" size="mini"
                  v-if="editingIndex === index"
                  @click="handleCheck(index)"
                  class="el-icon-check">
              </el-button>
              <el-button
                type="text" size="mini"
                v-if="editingIndex === index"
                @click="editingIndex = -1"
                class="el-icon-close">
            </el-button>
              <el-button
                  type="text"
                  size="mini"
                  v-if="editingIndex !== index"
                  class="el-icon-edit-outline"
                  @click="editingIndex = index">
              </el-button>
              <el-button type="text"
                         size="mini"
                         v-if="editingIndex !== index"
                         @click="deleteCard(index)"
                         class="el-icon-delete">
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
        class="pagination"
        background
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="filteredCards.length"
        @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchText: '',
      pageSize: 15,
      currentPage: 1,
      radio: 'all',
      cardData: [
        {
          name: '郑一',
          tel: 18751310510,
          category: 'schoolmate'
        },
        {
          name: '季二',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '张三',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '李四',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '王五',
          tel: 18751310510,
          category: 'family'
        },
        {
          name: '赵六',
          tel: 18751310510,
          category: 'family'
        },
        {
          name: '钱七',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '孙八',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '杨九',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '顾十',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '徐十一',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '冯十二',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '陈十三',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '楚十四',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '魏十五',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '秦十六',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '唐十七',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '宋十八',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '元十九',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '明二十',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '清二十一',
          tel: 18751310510,
          category: 'schoolmate'
        },
      ],

      initialCardData: [],
      editingIndex: -1,
      cardList: ''
    }
  },
  computed: {
    filteredCards() {
      const r = this.radio;
      if (r !== "all") {
        return this.cardData.filter(function (item) {
          return item.category === r;
        });
      } else {
        return this.cardData;
      }
    },
    currentPageData() {
      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = startIndex + this.pageSize
      return this.filteredCards.slice(startIndex, endIndex)
    },
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
    },
    handleCheck(index) {
      // 获取当前卡片的数据
      const card = this.filteredCards[(this.currentPage - 1) * this.pageSize + index]
      // 保存修改后的数据到本地存储中
      localStorage.setItem(`card-${index}`, JSON.stringify(card))
      // 重置编辑状态
      this.editingIndex = -1
    },
    search() {
      const searchText = this.searchText.toLowerCase()
      if (searchText) {
        // 第一次搜索时保存初始数据
        if (this.initialCardData.length === 0) {
          this.initialCardData = [...this.cardData]
        }
        const filteredData = this.initialCardData.filter(card => {
          const name = card.name.toLowerCase()
          return name.includes(searchText)
        })
        this.cardData = filteredData
        this.total = filteredData.length
        this.currentPage = 1
      } else {
        // 如果搜索框为空，则使用初始数据
        this.cardData = [...this.initialCardData]
        this.total = this.cardData.length
        this.currentPage = 1
      }
    },
    resetData() {
      this.searchText = ''
      this.cardData = [
        {
          name: '郑一',
          tel: 18751310510,
          category: '同学'
        },
        {
          name: '季二',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '张三',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '李四',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '王五',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '赵六',
          tel: 18751310510,
          category: 'family'
        },
        {
          name: '钱七',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '孙八',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '杨九',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '顾十',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '徐十一',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '冯十二',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '陈十三',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '楚十四',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '魏十五',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '秦十六',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '唐十七',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '宋十八',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '元十九',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '明二十',
          tel: 18751310510,
          category: 'friend'
        },
        {
          name: '清二十一',
          tel: 18751310510,
          category: 'friend'
        },
      ]
      // 重置初始数据
      this.initialCardData = [...this.cardData]
      this.total = this.cardData.length
      this.currentPage = 1
    },
    deleteCard(index) {
      this.cardData.splice((this.currentPage - 1) * this.pageSize + index, 1)
    },
  }
}
</script>

<style lang="less" scoped>

.total {
  font-size: 12px;
  height: 20px;
}

.header {
  display: flex;
  align-items: center;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}
</style>

