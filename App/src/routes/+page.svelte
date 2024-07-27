<script>
  import Icon from '@iconify/svelte';
  const surveyList = [
    {
      'question': '为什么搭建个人网站？',
      'answer': '我希望能有一个稳定的在线平台，可以用来发表自己的知识积累，以及一些想法。此外，能在互联网中有自己的一片区域，并且可以在这个区域上发散自己的创造力，这本身就是一件很棒的事情。'
    },
    {
      'question': '为什么要搞做一个网络虚拟形象呢？',
      'answer': '有趣，而且，在互联网中，部分人们确实需要有一个面具来维持稳定。'
    },
    {
      'question': '为什么学习 Web 开发和 Web 安全技术？',
      'answer': '创造新事物是一件很酷的事情，这是有效向别人传递想法的手段；而能够触及到别人本不想让你接触到的领域，则是一件有趣的事情 :)'
    },
    {
      'question': '原昵称为 ma5hr00m，为什么后来更改为 kinoko？',
      'answer': '原昵称不方便记忆，kinoko 更加朗朗上口。'
    }
  ]
  const notice = {
    'title': '公告',
    'content': '本站仍处于开发阶段，新功能不断添加中 :)'
  }
</script>

<div class="container">
  <div class="content">
    <div class="notice">
      <p class="text">
        <span class="icon">
          <Icon icon="hugeicons:notification-01" />
        </span>
        {notice.title}：{notice.content}
      </p>
    </div>
    <div class="welcome">
      <div class="descriptionContainer">
        <hgroup>
          <p class="pretext">欢迎来到</p>
          <h1>蘑菇の物语</h1>
          <p class="posttext">
            当 AI 接管生活中的琐事，人们将会抬头仰望最初的那片星空
          </p>
        </hgroup>
        <div class="controller">
          <a class="siteLink" href="#">
            <Icon icon="hugeicons:github" />
          </a>
          <a class="siteLink" href="#">
            <Icon icon="hugeicons:new-twitter" />
          </a>
          <a class="siteLink" href="#">
            <Icon icon="hugeicons:paint-brush-04" />
          </a>
          <a class="siteLink" href="#">
            <Icon icon="hugeicons:tv-01" />
          </a>
        </div>
      </div>
      <div class="illustrationContainer">
        <div class="illustrationContent">
          <img class="illustration" alt="illustration" src="/src/lib/assets/occc.png" />
        </div>
      </div>
    </div>
    <div class="survey">
      <h2>常见 Q&A</h2>
      <div class="surveyContent">
        {#each surveyList as survey}
          <details class="surveyItem">
            <summary class="question">Q：{survey.question}</summary>
            <p class="answer">A：{survey.answer}</p>
          </details>
        {/each}
      </div>
    </div>
    <footer class="footer">
      <div>
        <p>© 2024 Kinoko, all rights reserved.</p>
      </div>
    </footer>
  </div>
</div>

<!--
<svg width="100" height="100">
    <line x1="0" y1="0" x2="0" y2="0" style="stroke:rgb(255,0,0);stroke-width:2">
        <animate attributeName="x2" from="0" to="100" dur="2s" fill="freeze" keySplines="0.94 0 0.71 0.96" keyTimes="0;1" calcMode="spline" />
        <animate attributeName="y2" from="0" to="100" dur="2s" fill="freeze" keySplines="0.94 0 0.71 0.96" keyTimes="0;1" calcMode="spline" />
    </line>
  </svg>
-->

<style lang="scss">
  .container {
		width: 70rem;
		padding: 1rem 2rem;
    color: #4f4a4a;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }
  .welcome {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 20rem;
    padding: 3rem;
    background: #fff;
    border-radius: .5rem;
    border: solid 1px #ddd;

    .descriptionContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      
      hgroup {
        font-weight: 600;

        .pretext {
          font-size: 2rem;
          color: #95d146;
        }
        h1 {
          font-size: 3rem;
          color: #3f3a3a;
        }
        .posttext {
          margin: .25rem 0 0 0;
          font-size: 1.5rem;
          max-width: 24rem;
          font-weight: 400;
          color: #8f8a8a;
        }
      }

      .controller {
        margin: 3rem 0 0 0;
        display: flex;
        column-gap: 1rem;

        a {
          z-index: 30;
          position: relative;
          padding: 1rem;
          border-radius: 50%;
          background: #95d146;
          color: #fff;
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all .3s;

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 0 solid #d2f0ab;
            background: transparent;
            transition: all .3s;
          }

          &:hover {
            background: #6e943d;
          }

          &:hover::before {
            border: .5rem solid #d2f0ab;
          }
        }
      }
    }

    .illustrationContainer {
      display: flex;
      justify-content: center;
      align-items: center;

      .illustrationContent {
        position: relative;
        height: 18rem;
        width: 18rem;
        border-radius: 50% 50% 50% 0%;
        background: #95d146;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        
        .illustration {
          width: 14rem;
          height: auto;
        }
      }
    }
  }
  .notice {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    background: #fff;
    border-radius: .5rem;
    border: solid 1px #ddd;

    p {
      display: flex;
      font-size: .8rem;
      column-gap: .5rem;
      
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #95d146;
      }
    }
  }
  .survey {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 3rem;
    background: #fff;
    border-radius: .5rem;
    border: solid 1px #ddd;

    .surveyContent {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      margin: 2rem 0 0 0;

      .surveyItem {
        width: 100%;
        padding: 1rem;
        background: #f9f9f9;
        border-radius: .5rem;
        border: solid 1px #ddd;

        .question {
          font-weight: 600;
          cursor: pointer;
          outline: none;
          font-size: 1rem;

          &::marker {
            color: #95d146;
          }
        }

        .answer {
          margin: 1rem 0 0 0;
          padding: 0 0 0 1.25rem;
          font-size: 1rem;
          color: #8f8a8a;
        }
      }
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background: #fff;
    border-radius: .5rem;
    border: solid 1px #ddd;
  }
</style>