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
    <div class="header">
      <span class="total">共 {{ cardData.length }} 个联系人</span>
    </div>
    <el-radio-group v-model="radio" >
      <el-radio :label="'all'">所有联系人</el-radio>
      <el-radio :label="'family'">亲人</el-radio>
      <el-radio :label="'friend'">friend</el-radio>
      <el-radio :label="'schoolmate'">同学</el-radio>
    </el-radio-group>
    <el-row>
      <el-col v-for="(card, index) in currentPageData" :key="index" :span="8">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <div style="display: flex; align-items: center; padding: 14px;">
            <i class="el-icon-user-solid" style="font-size: 20px; padding: 10px;"></i>
            <div style="font-size: 16px;">
              <span v-if="editingIndex === index">
              <el-input v-model="card.name"></el-input>
              <el-input v-model="card.tel"></el-input>
              </span>
              <span v-else>{{ card.name }}{{ card.tel }}</span>
            </div>
            <div style="float: right;">
              <el-button type="text" size="mini" v-if="editingIndex === index" @click="editingIndex = -1"
                         class="el-icon-check">
              </el-button>
              <el-button type="text" size="mini" class="el-icon-edit-outline" @click="editingIndex = index"></el-button>
              <el-button type="text" size="mini" @click="deleteCard(index)" class="el-icon-delete"></el-button>
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
        :total="cardData.length"
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
      radio: 1,
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
          category: 'friend'
        },
      ],
      initialCardData: [],
      editingIndex: -1,
      cardList: ''
    }
  },
  watch: {
    // 每当 question 改变时，这个函数就会执行
    radio(newQuestion) {
      // newQuestion 改变之后的radio值
      this.filterCards(newQuestion)
    }
  },
  computed: {
    currentPageData() {
      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = startIndex + this.pageSize
      return this.cardData.slice(startIndex, endIndex)
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
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

    filterData(category) {
      console.log('category:', category);
      if (category === 'all') {
        console.log('all:', this.cardData);
        return this.cardData;
      } else {
        const filteredData = this.cardData.filter(card => card.category.toLowerCase() === category.toLowerCase());
        console.log(category + ':', filteredData);
        return filteredData;
      }
    },
    filterCards(category) {
      this.cardData = this.filterData(category);
    },
  }
}
</script>

<style lang="less" scoped>
.contacts {
  padding: 20px;
}

.el-card__body {
  display: flex;
  align-items: center;
}

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

