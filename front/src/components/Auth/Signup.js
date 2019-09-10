import React from "react";

const Signup = () => {
  return (
    <form method="post">
      <div className="form-group">
        <label htmlFor="user[name]">ユーザー名</label>
        <input type="text" id="user[name]" placeholder="ユーザー名" />
      </div>

      <div className="form-group">
        <label htmlFor="user[email]">メールアドレス</label>
        <input type="email" id="user[email]" placeholder="メールアドレス" />
      </div>

      <div className="form-group">
        <label htmlFor="user[password]">パスワード</label>
        <input type="password" id="user[password]" placeholder="パスワード" />
      </div>

      <input type="submit" value="送信" />
    </form>
  );
};

export default Signup;
