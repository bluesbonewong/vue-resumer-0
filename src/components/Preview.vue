<template>
  <div id="preview">
    <link rel="stylesheet" href="../assets/font/iconfont.css">
    <header>
      <ul>
        <li class="name">
          <img :src="resume.profile.photoLink" alt="头像">
          <div>
            <h1>{{resume.profile.name}}</h1>
            <p>{{resume.profile.job}}</p>
          </div>
        </li>
        <li class="information">
          <ul>
            <li>
              <h3>联系我</h3>
            </li>
            <li><span class="iconfont icon-circularmobile"></span>{{resume.profile.phone}}</li>
            <li><span class="iconfont icon-qq"></span>{{resume.profile.qq}}</li>
            <li><span class="iconfont icon-weixin-copy"></span>{{resume.profile.wechat}}</li>
            <li><span class="iconfont icon-mail"></span>{{resume.profile.email}}</li>
            <li><span class="iconfont icon-blog"></span><a :href="resume.profile.blog"
                                                           target="_blank">个人技术博客</a></li>
            <li><span class="iconfont icon-github"></span><a :href="resume.profile.github" target="_blank">{{resume.profile.github}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
    <main>
      <ul>
        <li id="private" class="editor-item">
          <h3>个人资料</h3>
          <ul class="item-block">
            <span class="iconfont icon-fangkuai"></span>
            <li class="item-title">基本资料</li>
            <li>
              <h4>应聘职位</h4>
              <ul>
                <li>{{resume.profile.job}}</li>
              </ul>
              <h4>年龄</h4>
              <ul>
                <li>{{resume.profile.age}}</li>
              </ul>
              <h4>学历</h4>
              <ul>
                <li>{{resume.profile.edubg}}</li>
              </ul>
              <h4>毕业院校</h4>
              <ul>
                <li>{{resume.profile.college}}</li>
              </ul>
            </li>
          </ul>
        </li>
        <li id="skills" class="editor-item" v-if="filter(resume.skillHistory).length > 0">
          <h3>个人技能</h3>
          <ul class="item-block" v-for="(item,index) in filter(resume.skillHistory)">
            <span class="iconfont icon-fangkuai"></span>
            <li class="item-title">{{item.type}}</li>
            <li><p>{{item.content}}</p></li>
          </ul>
        </li>
        <li id="project" class="editor-item" v-if="filter(resume.projectHistory).length > 0">
          <h3>个人项目</h3>
          <ul class="item-block" v-for="(item,index) in filter(resume.projectHistory)">
            <span class="iconfont icon-fangkuai"></span>
            <li class="item-title">{{item.name}}</li>
            <li><p>{{item.content}}</p></li>
            <li><a :href="item.previewLink">预览链接</a></li>
            <li><a :href="item.sourceLink">源码链接</a></li>
          </ul>
        </li>
        <li id="work" class="editor-item" v-if="filter(resume.workHistory).length > 0">
          <h3>工作经验</h3>
          <ul class="item-block" v-for="(item,index) in filter(resume.workHistory)">
            <span class="iconfont icon-fangkuai"></span>
            <li class="item-title">{{item.company}}<span> / {{item.time}}</span></li>
            <li>
              <h4>职位</h4>
              <p>{{item.position}}</p>
            </li>
            <li>
              <h4>工作职责</h4>
              <p>{{item.content}}</p>
            </li>
          </ul>
        </li>
        <li id="education" class="editor-item" v-if="filter(resume.eduHistory).length > 0">
          <div v-for="(item,index) in filter(resume.eduHistory)">
            <h3>{{item.school}}<span> / {{item.time}}</span></h3>
            <ul class="item-block">
              <span class="iconfont icon-fangkuai"></span>
              <li class="item-title">学生干部</li>
              <li><p>{{item.job}}</p></li>
            </ul>
            <ul class="item-block">
              <span class="iconfont icon-fangkuai"></span>
              <li class="item-title">获得荣誉</li>
              <li><p>{{item.honor}}</p></li>
            </ul>
            <ul class="item-block">
              <span class="iconfont icon-fangkuai"></span>
              <li class="item-title">社会实践</li>
              <li><p>{{item.societyExperience}}</p></li>
            </ul>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [50]
      }
    },
    props: ['resume'],
    methods: {
      filter(array) {
        return array.filter(item => {
          return this.isEmpty(item)
        })
      },
      isEmpty(object) {
        // 判断用户是否填写，若未填写，则不渲染
        let empty = false
        for (let key in object) {
          // 只要有一个key的value不是空字符串，那就说明用户填写了这一个大项
          if (object[key] !== '') {
            empty = true
            break
          }
        }
        return empty
      }
    }
  }
</script>

<style lang="scss">
  $mainColor: #ff6f00;

  #skillBar .el-slider__bar {
    background: $mainColor;
  }

  #preview {
    border-top: 1px solid black;
    padding: 30px 0 30px 50px;
    min-height: 100px;
    overflow: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif, onsolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;

    p {
      white-space: pre-wrap;
    }

    h4 {
      margin: 6px 0 0 0;
    }

    a {
      text-decoration: none;
      transition: all .3s;
      cursor: pointer;
      color: #ff6f00;
    }

    a:hover {
      box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
      text-decoration: underline;
    }

    header,
    main,
    footer {
      width: 100%;
      margin-right: 30px;
    }

    main,
    footer {
      width: 95%;
    }

    header > ul {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .name {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;

        div {
          margin-left: 20px;
        }

        h1 {
          margin: 0;
          font-size: 34px;
          font-weight: normal;
        }

        p {
          margin: 4px 0 0 0;
          font-size: 18px;
        }

        img {
          width: 150px;
          height: 150px;
          border-radius: 150px;
        }
      }

      .information {
        width: 400px;

        li:first-child {
          border-bottom: 4px solid black;

          > h3 {
            margin: 0 0 4px 0;
          }
        }

        li {
          margin-bottom: 4px;

          > span {
            margin-right: 10px;
          }
        }
      }
    }

    .editor-item {
      h3 {
        border-bottom: 1px solid rgba(128, 128, 128, 0.21);
        padding-bottom: 8px;
        width: 200px;
        margin: 40px 0 20px 0;
        font-size: 24px;
      }

      .item-title {
        font-size: 18px;
        margin: 15px 0;

        > span {
          font-size: 14px;
          color: grey;
        }

        ~ li {
          padding-left: 15px;

          span {
            font-weight: 500;
          }
        }
      }

      .item-block {
        padding-left: 70px;
        border-left: 1px solid black;
        margin-left: 10px;
        position: relative;

        > .iconfont {
          position: absolute;
          font-size: 20px;
          left: 0;
          top: 0;
          transform: translateX(-50%) translateY(-20%);
        }
      }
    }

    #education h3 {
      white-space: pre;

      > span {
        font-size: 14px;
        color: grey;
        font-weight: normal;
      }
    }
  }

  // 从这里开始

</style>
