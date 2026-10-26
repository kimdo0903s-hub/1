// 이메일 형식 검사 (예: abc@test.com)
function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// 안내 메시지 표시 (type: "error" 또는 "ok")
function showMsg(el, text, type) {
  el.textContent = text;
  el.className = "msg " + type;
}

// ----- 메인 페이지: 시작하기 버튼 -----
const startBtn = document.getElementById("startBtn");
if (startBtn) {
  startBtn.addEventListener("click", function () {
    const email = document.getElementById("startEmail").value.trim();
    const msg = document.getElementById("startMsg");
    if (!isEmail(email)) {
      showMsg(msg, "올바른 이메일 주소를 입력해 주세요.", "error");
      return;
    }
    window.location.href = "signup.html"; // 회원가입 페이지로 이동
  });
}

// ----- 회원가입 페이지 -----
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 새로고침 막기
    const email = document.getElementById("email").value.trim();
    const pw = document.getElementById("password").value;
    const pw2 = document.getElementById("password2").value;
    const msg = document.getElementById("formMsg");

    if (!email || !pw || !pw2) return showMsg(msg, "모든 항목을 입력해 주세요.", "error");
    if (!isEmail(email)) return showMsg(msg, "이메일 형식이 올바르지 않아요.", "error");
    if (pw.length < 6) return showMsg(msg, "비밀번호는 6자 이상이어야 해요.", "error");
    if (pw !== pw2) return showMsg(msg, "비밀번호가 서로 달라요.", "error");

    showMsg(msg, "입력이 올바릅니다! (교육용이라 실제 가입은 되지 않아요)", "ok");
  });
}

// ----- 로그인 페이지 -----
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const pw = document.getElementById("password").value;
    const msg = document.getElementById("formMsg");

    if (!email || !pw) return showMsg(msg, "이메일과 비밀번호를 입력해 주세요.", "error");
    if (!isEmail(email)) return showMsg(msg, "이메일 형식이 올바르지 않아요.", "error");

    // 서버가 없으므로 실제 로그인은 되지 않아요
    showMsg(msg, "연습용 사이트라 실제 로그인은 지원하지 않아요.", "ok");
  });
}
