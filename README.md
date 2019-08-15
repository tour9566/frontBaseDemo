# frontBaseDemo
这是一个vue基本前端架构架构

## 技术栈

该项目脚手架使用 vue-cli3 搭建而成，查看[cli 官网](https://cli.vuejs.org).

## 小技巧

### vscode 自动生成.vue 文件三组标签结构的用法

1. 选择 `文件 -> 首选项 -> 用户代码片段`，在弹出的搜索框中输入 vue，选择 vue 后，编辑会自动打开一个名为 vue.json 的文件

2. 输入一下内容到这个文件中，保存关闭文件：

```json
{
  "Print to console": {
    "prefix": "vue",
    "body": [
     "<template>",
      "  <div></div>",
      "</template>",
      "",
      "<script>",
      "import CSSModules from 'vue-css-modules'",
      "export default {",
      "  name: $0,",
      "  mixins: [CSSModules()],",
      "  components: {",
      "  },",
      "  props: {",
      "  },",
      "  data () {",
      "    return {",
      "    }",
      "  },",
      "  mounted () {",
        "  },",
      "  methods: {",
        "  }",
      "}",
      "",
      "</script>",
      "",
      "<style module lang='scss'>",
      "</style>"
    ],
    "description": "回车自动生成代码模板"
  }
}
```

3. 新建.vue文件，输入vue，按回车，页面结构自动生成
