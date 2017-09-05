<template>
    <div id="test">
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row :gutter="50">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="search">搜索</el-button>
        <i class="el-icon-iconfont-naozhong"></i>
        <el-button type="primary" icon="iconfont-bianji">搜索</el-button>
        <i class="el-icon-fontAwesome-camera-retro"></i>
        <el-button type="primary" icon="fontAwesome-car">搜索</el-button>
        <form @submit.prevent="submit">
            <div class="field">
                姓名：<input type="text" v-model="user.name">
            </div>

            <div class="field">
                性別：
                <label>
                    <input type="radio" value="男" v-model="user.gender"> 男
                </label>
                <label>
                    <input type="radio" value="女" v-model="user.gender"> 女
                </label>
            </div>

            <input type="submit" value="提交">
        </form>
    </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        user: {
          gender: ''
        }
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      submit () {
        const formData = JSON.stringify(this.user)
        console.log(formData)
      }
    },
    components: {}
  }
</script>

<style lang="scss">
    #test {
        .el-row {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .el-col {
            border-radius: 4px;
        }
        .bg-purple-dark {
            background: #99a9bf;
        }
        .bg-purple {
            background: #d3dce6;
        }
        .bg-purple-light {
            background: #e5e9f2;
        }
        .grid-content {
            border-radius: 4px;
            min-height: 36px;
        }
        .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
        }
    }
</style>
