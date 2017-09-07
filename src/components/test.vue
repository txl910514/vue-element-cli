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
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <el-button :plain="true" :disabled="true">主要按钮</el-button>
        <el-button type="primary" :disabled="true">主要按钮</el-button>
        <el-button type="text" :disabled="true">文字按钮</el-button>
        <div class="block">
            <span class="demonstration">默认显示颜色</span>
            <span class="wrapper">
                <el-button type="success">成功按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="info">信息按钮</el-button>
            </span>
        </div>
        <div class="block">
            <span class="demonstration">hover 显示颜色</span>
            <span class="wrapper">
                <el-button :plain="true" type="success">成功按钮</el-button>
                <el-button :plain="true" type="warning">警告按钮</el-button>
                <el-button :plain="true" type="danger">危险按钮</el-button>
                <el-button :plain="true" type="info">信息按钮</el-button>
            </span>
        </div>
        <el-button  :plain="true" type="primary" icon="edit"></el-button>
        <el-button type="primary" icon="share"></el-button>
        <el-button type="primary" icon="delete"></el-button>
        <el-button type="primary" icon="search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-button-group>
            <el-button type="primary" icon="arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
            <el-button type="primary" icon="edit"></el-button>
            <el-button type="primary" icon="share"></el-button>
            <el-button type="primary" icon="delete"></el-button>
        </el-button-group>
        <el-button type="primary" :loading="true">加载中</el-button>
        <el-button type="primary" size="large">大型按钮</el-button>
        <el-button type="primary">正常按钮</el-button>
        <el-button type="primary" size="small">小型按钮</el-button>
        <el-button type="primary" size="mini">超小按钮</el-button>
        <el-radio class="radio" v-model="radio" label="1">备选项1</el-radio>
        <el-radio class="radio" v-model="radio" label="2">备选项2</el-radio>
        <el-radio disabled v-model="radio1" label="label1">备选项</el-radio>
        <el-radio disabled v-model="radio1" label="label2">备选项</el-radio>
        <el-radio-group v-model="radio2">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
        <el-radio-group v-model="radio3">
            <el-radio :label="3">备选1</el-radio>
            <el-radio :label="6">备选2项</el-radio>
            <el-radio :label="9">备选3项</el-radio>
        </el-radio-group>
        <div style="margin: 15px 0;"></div>
        <el-radio-group v-model="radio4">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
        <div style="margin: 15px 0;"></div>
        <el-radio-group v-model="radio5">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京" :disabled="true"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
        <div style="margin: 15px 0;"></div>
        <el-radio-group v-model="radio6" :disabled="true">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            <el-checkbox v-model="checked">备选项</el-checkbox>
        </el-radio-group>
    </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        user: {
          gender: ''
        },
        radio: '',
        radio1: 'label1',
        radio2: 3,
        radio3: 9,
        radio4: '上海',
        radio5: '北京',
        radio6: '深圳',
        checked: true
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
