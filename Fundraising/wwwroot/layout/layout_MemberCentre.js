let header =
  `<nav class="navbar navbar-expand-lg navbar-light border-bottom" id="header" style="background-color: #e1d7c6;">

<div class="container-fluid" id="header-container">
    <!--LOGO -->
    <a class="navbar-brand fs-2" id="header-brand" href="#">咱的募資平台</a>

    <!-- Bar -->

    <div class="collapse navbar-collapse ms-5" id="linkbar">
        <!-- LEFT -->
        <ul class="navbar-nav me-auto fs-5">
            <li class="nav-item">
                <a class="nav-link" href="#" id="header-home">首頁</a>
            </li>
            <li class="nav-item" id="header-items">
                <a class="nav-link" href="#">提案</a>
            </li>
            <li class="nav-item" id="header-items">
                <a class="nav-link" href="#">探索</a>
            </li>

        </ul>

    </div>

    <div>
        <ul class="navbar-nav me-5">
            <li style="padding-right: 30px;">
                <div class="search">
                    <div class="icon"></div>
                    <div class="input">
                        <input type="text" placeholder="搜尋" id="mysearch">
                    </div>
                    <span class="clear" onclick="document.getElementById('mysearch').value=''"></span>
                </div>
            </li>
            <li>

                <div>
                    <button class="btn btn-success">登入</button>
                </div>

            </li>
        </ul>
    </div>

</div>
</nav>` +
  `<div id="MemberCentre" class="row py-3 mx-auto">
  <a
    href="./UserInfo.html"
    class="memberlink col-4 col-lg-1 col-md-3 offset-0 offset-lg-3 btn btn-default"
    >個人頁面</a
  >
  <a
    href="./UserFollowing.html"
    class="memberlink col-4 col-lg-1 col-md-3 btn btn-default"
    >追蹤專案</a
  >
  <a
    href="./UserOrder.html"
    class="memberlink col-4 col-lg-1 col-md-3 btn btn-default"
    >贊助紀錄</a
  >
  <a
    href="./UserProject.html"
    class="memberlink col-4 col-lg-1 col-md-3 btn btn-default"
    >提案紀錄</a
  >
  <a
    href="./UserMessage.html"
    class="memberlink col-4 col-lg-1 col-md-3 btn btn-default"
    >聯絡訊息</a
  >
  <a
    href="./UserSetting.html"
    class="memberlink col-4 col-lg-1 col-md-3 btn btn-default"
    >帳戶設定</a
  >
</div>`;

let footer = `<footer class="bg-dark text-white pt-5 pb-4">

<div class="container text-center text-md-left" id="footer-container">

    <div class="row text-center text-md-left" id="footer-text">

        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h4 class="text-uppercase mb-4 font-weight-bold">關於</h4>
            <p>關於我們</p>
            <p>人才招募</p>
            <p>商標使用規範</p>

        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h4 class="text-uppercase mb-4 font-weight-bold">條款</h4>
            <p>網站使用條款</p>
            <p>提案者合約</p>

        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h4 class="text-uppercase mb-4 font-weight-bold">協助</h4>
            <p>常見問題</p>
            <p>使用手冊</p>
            <p>提案百科</p>
        </div>

        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h4 class="text-uppercase mb-4 font-weight-bold">更多</h4>
            <p>品牌資源</p>
            <p>群眾觀點</p>

        </div>

    </div>

    <hr class="mb-4">

    <div class="row align-items-center">

        <div class="col-md-6 col-lg-8 justify-content-center">
            <h6 class="copyright">Copyright ©2022 Backer-Founder All rights reserved.</h6>
        </div>

        <div class="col-md-6 col-lg-4">
            <div class="text-center text-md-right">

                <ul class="list-unstyled list-inline" id="connect-list">
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i
                                class="fab fa-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i
                                class="fab fa-youtube"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i
                                class="fab fa-instagram"></i></a>
                    </li>
                </ul>

            </div>

        </div>

    </div>

</div>

</footer>`;
let querybody = document.querySelector("body");
let queryheader = document.querySelector("body");
querybody.innerHTML = header + querybody.innerHTML;
querybody.innerHTML += footer;
queryheader.innerHTML += `<link rel="stylesheet" href="../layout/layout_MemberCentre.css" />`;
