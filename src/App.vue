<template>
  <div id="app" :class="{isPreview:isPreview}">
    <Topbar class="topbar" v-on:preview="preview" v-on:exitPreview="exitPreview"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" v-bind:value="resume.skillHistory.length" class="preview"/>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
    data() {
      return {
        isPreview: false,
        resume: {
          profile: {
            photoLink: 'https://s1.ax1x.com/2018/04/07/CPKfxO.jpg',
            name: '大汪',
            job: '前端开发工程师',
            age: 22,
            edubg: '本科',
            college: '华夏大学',
            phone: '188xxxx6666',
            email: 'bluesbonewong@gmail.com',
            wechat: 'xxxxXXxx',
            qq: '123456',
            blog: 'https://segmentfault.com/blog/fontendbbw',
            github: 'https://github.com/bluesbonewong'
          },
          skillHistory: [
            {type: '英语', content: 'CET-6(436)\n' +
              '参与《原子设计方法论》（英文名：Atomic Design）书籍翻译 独立翻译第二章\n' +
              '非科班设计翻译组成员【公众号：非科班设计】\n' +
              '流畅阅读英文专业书籍、文档及其它资料'}
          ],
          skillLabels: ['技能类别', '技能描述'],
          skillInputType: ['text', 'textarea'],
          projectHistory: [
            {name: 'toDoList', previewLink: '', sourceLink: '', content: '使用了*Vue.js*框架编写项目\n' +
              '使用了*leancloud*及其提供的API完成服务器端数据交互，实现登录、注册以及存储数据的功能\n' +
              '使用了*vue-cli*完成项目构建'}
          ],
          projectLabels: ['项目名称', '预览链接', '源码链接', '内容描述'],
          projectInputType: ['text', 'text', 'text', 'textarea'],
          workHistory: [
            {company: '南京三宝科技集团有限公司', position: 'Web前端开发实习生', time: '2017.07 - 2017.10', content: '学习HTML、CSS、原生JavaScript\n' +
              '进行静态页面开发\n' +
              '辅助前端工程师完成页面交互的实现'}
          ],
          workLabels: ['公司', '职位', '在职时间', '工作内容'],
          workInputType: ['text', 'text', 'text', 'textarea'],
          eduHistory: [
            {school: '华夏大学', time: '2014.09.01 – 2018.07.01', job: '大一担任辅导员助理\n' +
              '大一、大二任班长\n' +
              '大三协助校团委筹办首届校文化音乐节', honor: '2014年，获安徽工业大学文体优秀个人（校级）\n' +
              '2014年，获安徽工业大学《读名著，观名片》比赛 三等奖（校级）\n' +
              '2015年，获安徽省创业模拟实训合格认定（省级）', societyExperience: '*2015年 - 今*\n' +
              '在校筹办漫路乐队，任乐队召集人，并以个人或乐队身份接受政府单位及企业邀请，参加马鞍山红围巾公益协会《公益吧，伙伴们》大型公益演出（2015）、马鞍山“乐库2015跨年摇滚之夜”跨年演出（2015）、芜湖方特梦幻王国跨年演出（2016）\n' +
              '*2016年3月 - 2016年6月*\n' +
              '与友人合作成立“K艺宝音乐”公众号并联合运营。负责吉他弹唱视频录制及后期音频缩混处理  \n' +
              '*2016年7月 - 2017年7月*\n' +
              '马鞍山东升音乐工作室吉他教师  '}
          ],
          eduLabels: ['学校', '在校时间', '学生干部', '获得荣誉', '社会实践'],
          eduInputType: ['text', 'text', 'textarea', 'textarea', 'textarea']
        }
      }
    },
    methods: {
      preview() {
        this.isPreview = true
      },
      exitPreview() {
        this.isPreview = false
      }
    },
    components: {
      Topbar,
      Editor,
      Preview
    }
  }
</script>

<style lang="scss">
  .icon {
    width: 30px;
    height: 40px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  #app {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }

  .isPreview {
    > #topbar {
      /*display: none;*/
    }
    main > #editor {
      display: none;
    }
    main > #preview {
      border: none;
      max-width: 960px;
      margin: 30px auto;
      box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
    }
  }

  main {
    display: flex;
    flex: 1;

    > .editor {
      width: 35em;
    }
    > .preview {
      flex: 1;
    }
  }


</style>
