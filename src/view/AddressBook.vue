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
    <el-radio v-model="radio" label="1" @click="filterData('')">所有联系人</el-radio>
    <el-radio v-model="radio" label="2" @click="filterData('亲人')">亲人</el-radio>
    <el-radio v-model="radio" label="3" @click="filterData('朋友')">朋友</el-radio>
    <el-radio v-model="radio" label="4" @click="filterData('同学')">同学</el-radio>
    <el-row>
      <el-col v-for="(card, index) in currentPageData" :key="index" :span="8">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <div style="display: flex; align-items: center; padding: 14px;">
            <i class="el-icon-user-solid" style="font-size: 20px; padding: 10px;"></i>
            <div style="font-size: 16px;">{{ card.name }}{{ card.tel }}</div>
            <div style="float: right;">
              <el-button type="text" size="mini" class="el-icon-edit-outline"></el-button>
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
      radio: '1',
      cardData: [
        {
          name: '郑一',
          tel: 18751310510,
          category: '同学'
        },
        {
          name: '季二',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '张三',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '李四',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '王五',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '赵六',
          tel: 18751310510,
          category: '家人'
        },
        {
          name: '钱七',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '孙八',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '杨九',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '顾十',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '徐十一',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '冯十二',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '陈十三',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '楚十四',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '魏十五',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '秦十六',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '唐十七',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '宋十八',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '元十九',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '明二十',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '清二十一',
          tel: 18751310510,
          category: '朋友'
        },
      ],
      initialCardData: []
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
          category: '朋友'
        },
        {
          name: '张三',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '李四',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '王五',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '赵六',
          tel: 18751310510,
          category: '家人'
        },
        {
          name: '钱七',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '孙八',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '杨九',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '顾十',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '徐十一',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '冯十二',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '陈十三',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '楚十四',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '魏十五',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '秦十六',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '唐十七',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '宋十八',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '元十九',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '明二十',
          tel: 18751310510,
          category: '朋友'
        },
        {
          name: '清二十一',
          tel: 18751310510,
          category: '朋友'
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
    filterData() {
      const radioText = this.radioText.toLowerCase()
      if (radioText) {
        // 第一次筛选时保存初始数据
        if (this.initialCardData.length === 0) {
          this.initialCardData = [...this.cardData]
        }
        const filteredData = this.initialCardData.filter(card => {
          const name = card.name.toLowerCase()
          return name.includes(radioText)
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
      console.log('1')
    }
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

